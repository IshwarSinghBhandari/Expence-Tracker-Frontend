import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { addUser } from '../middleware/apicontroller';


export default function Signup() {


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullname: '',
    
  });
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      setError('Passwords Not Fonund');
    } else {
      setError('');
     
      try {
        let res= await addUser(formData);
          console.log("response",res);
        const { token } = res;

        localStorage.setItem('authToken', token);
        console.log('Token saved to localStorage:', token);
        toast.success('Signup successful!');
        navigate('/dashboard'); 
      } catch (error) {
        console.error('Error:', error);
        toast.error('Signup failed!');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='container '>
   <h1 className='text-center'>Expence Tracker</h1>
       <hr></hr>
       <h3 className='text-center mt-4 mb-3'>SIGNUP</h3>
      <Form className='w-50 m-auto bg-white border border-1 p-4 rounded-2' onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

  

        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="fullname"
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
          />
        </Form.Group>


        <p className='m-0 d-inline'>If already registered, </p>
        <Link className='link' to='/login'>Login</Link>
        <br />
        <Button className='mt-3 mb-2' type="submit">Submit</Button>

        {error && <p className="text-danger">{error}</p>}
      </Form>
    </div>
  );
}
