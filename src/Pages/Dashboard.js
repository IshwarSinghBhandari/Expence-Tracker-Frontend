import React from 'react';
import { useAuth } from '../customeHooks/auth';
import { Link } from 'react-router-dom';



export default function Dashboard() {

useAuth();
  return (
    <div className='container bg-white p-4'>
       <div className='mt-4'>
        <h1 className='text-center'> Welcome to Expense Traker</h1>
        <div className='d-flex justify-content-around align-center my-3'>
        <div className=' w-50 d-flex justify-content-around align-center dashnav'>
        <Link className='link text-success'  to="/expenceadd" >Add Expenses</Link >
          <Link className='link text-success'  to="/expenceList" >Expense list</Link >
        </div>
       
        </div>
        <div className='mt-3'>
          <p className='mt-5'> Cupiditate esse eveniet, sapiente explicabo dolore quas earum nesciunt ipsum ea fugit.</p>
        </div>
       </div>
    </div>
  )
}
