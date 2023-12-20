import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "../Utils/Loader";
import toast from "react-hot-toast";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()

    if(loading){
        return <Loader h='40' w='40' color='white' align='center'></Loader>
    } 
    else if(user){
        return children
    }
    return toast('Please Sign In first') && <Navigate state={location.pathname} to="/signIn"></Navigate>
};


export default PrivetRoute;