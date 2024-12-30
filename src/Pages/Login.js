import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axiosInstance from '../middleware/Axiousinstance';
import { loginUser } from '../middleware/apicontroller';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }
  
    setError('');
  
    try {
      let res= await loginUser({ email, password });
      console.log('Response:', res);
      const {token} = res;
  
        console.log(token);
      // Save token in localStorage
      localStorage.setItem('authToken', token);
  
      toast.success('Login successful!');
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Error:', err.response?.data?.message || err.message);
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };
  

  return (
    <div className='container'>
      <h1 className='text-center mt-4 mb-3'>LOGIN</h1>
      <Form className='w-50 bg-white m-auto border border-1 p-4 rounded-2' onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <p className='m-0 d-inline'>If New Here then </p> 
        <Link className='link' to='/register'>Register</Link>
        <br />
        <Button className='mt-3' type="submit">Submit</Button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </Form>
    </div>
  );
}
