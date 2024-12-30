import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { expenceUpdate, getExpenceById } from '../middleware/apicontroller'; // Assuming `getExpenceById` is available
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateExpence() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    description: '',
  });

  // Fetch data by ID when component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('Fetc',id);
        const res = await getExpenceById(id); 
        // console.log( "Single data",res)
        if (res) {
          const formattedDate = new Date(res.date);
          formattedDate.setMinutes(formattedDate.getMinutes() - formattedDate.getTimezoneOffset());
          const localDate = formattedDate.toISOString().split('T')[0];
                    
        setFormData({ ...res, date: localDate });
        }
      } catch (err) {
        console.error('Error fetching expense:', err);
        toast.error('Failed to fetch expense data.');
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await expenceUpdate(id, formData);
      toast.success('Expense updated successfully!');
      navigate('/expenceList')
    } catch (err) {
      console.error(err);
      toast.error('Expense update failed!');
    }
  };

  return (
    <div className='container'>
      <h1 className='text-center mt-4 mb-3'>Update Expense</h1>
      <Link to='/expenceList'>{'<< Back'}</Link>
      
      <Form className='w-50 m-auto bg-white border border-1 p-4 rounded-2' onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            required
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <Button className='mt-3 mb-2' type="submit">Submit</Button>
      </Form>
    </div>
  );
}
