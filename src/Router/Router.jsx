import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";


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
        ]
    }
])

export default Router;