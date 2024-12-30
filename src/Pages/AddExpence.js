import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { expenceAdd } from '../middleware/apicontroller';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



export default function AddExpence() {

  const handleSubmit =async (event) => {
    event.preventDefault();
  
    const name = event.target.elements.name.value;
    const amount = event.target.elements.amount.value;
    const date = event.target.elements.date.value;
    const description = event.target.elements.description.value;
  
    const data = {
      name,
      amount,
      date,
      description,
    };
  
    try{
      let res=await expenceAdd(data);
      console.log(res);
      toast.success('Expence Added successful!');
    }
    catch(err){
      console.error(err);
      toast.error('Expence Assing failed!');
    }
  
    console.log(data);
  };

  return (
    <div className='container '>
      <h1 className='text-center mt-4 mb-3'>Add Expence</h1>
      <Link to='/dashboard'>{'<<Back'}</Link>
      <Form className='w-50 m-auto bg-white border border-1 p-4 rounded-2' onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            placeholder="Title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="amount"
            type="number"
            placeholder="Amount"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="date"
            type="date"
            placeholder="Date"
            required
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            placeholder="description"
            name="description"
            style={{ height: '100px' }}
          />
        </FloatingLabel>


        <Button className='mt-3 mb-2' type="submit">Submit</Button>

      </Form>
    </div>
  )
}