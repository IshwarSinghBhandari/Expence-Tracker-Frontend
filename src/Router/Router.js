import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ExpenceList from "../Pages/ExpenceList";
import AddExpence from "../Pages/AddExpence";
import UpdateExpence from "../Pages/UpdateExpence";

const routers=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children: [
            {
                path:'',
                element:<Home/>,
            },
            {
                path:'login',
                element:<Login/>,
            },
            {
                path:'register',
                element:<Signup/>
            },
            {
                path:'dashboard',
                element:<Dashboard />
            },
            {
                path:'expenceadd',
                element:<AddExpence />
            },
            {
                path:'expenceList',
                element:<ExpenceList />
            },
            {
                path:'expenceedit/:id',
                element:<UpdateExpence />
            }
        ]
    }
])

export default routers;