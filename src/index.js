import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routers}/>
);

reportWebVitals();
