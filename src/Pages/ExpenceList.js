import { Link } from "react-router-dom";
import { useAuth } from "../customeHooks/auth";
import { expenceList } from "../middleware/apicontroller";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear().toString().slice(-2); 

  return `${day}/${month}/${year}`; // Return in dd/mm/yy format
};


export default function  ExpenseList() {
  
  useAuth();

  // State to store expenses
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await expenceList(); 
      if (data) {
        setExpenses(data); 
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1 className="text-center">Expense List</h1>
      <hr/> 
      <Link to="/dashboard" className="ms-5 pb-3"> {'<- Back'} </Link>
      <ul>
      <Table striped bordered hover className="mt-3">
  <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Description</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
    {expenses.length === 0 ? (
      <tr><td colSpan="5">No expenses found.</td></tr>
    ) : (
      expenses.map((expense, index) => (
        
        <tr key={expense._id}>
          <td>{index + 1}</td>
          <td>{expense.name}</td>
          <td>{expense.amount}</td>
          <td>{formatDate(expense.date)}</td>
          <td>{expense.description}</td>
          <td>
             <Link to={`/expenceedit/${expense._id}`}>Edit</Link> 
          </td>
        </tr>
      ))
    )}
  </tbody>
</Table>

      </ul>
    </div>
  );
}
