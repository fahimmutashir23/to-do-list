import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/signUp",
                element: <SignUp/>
            },
            {
                path: "/signIn",
                element: <SignIn/>
            },
            {
                path: "/dashboard",
                element: <PrivetRoute><Dashboard/></PrivetRoute>
            },
        ]
    }
])

export default Router;