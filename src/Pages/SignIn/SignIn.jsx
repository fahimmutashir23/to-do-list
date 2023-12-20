import { Google } from "@mui/icons-material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Loader from "../../Utils/Loader";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const {signInUser, googleSignIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = e => {
    e.preventDefault()
    setLoading(true)
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then(result => {
        if(result.user){
            toast("successfully Sign In");

            navigate(location?.state ? location.state : "/dashboard")
            setLoading(false)
            e.target.reset()
        }
    })
    .catch(err => {
        if(err){
            setError('This email or password is wrong')
            setLoading(false)
        }
    })
  }

  const handleGoogle = () => {
    setGoogleLoading(true)
    googleSignIn()
    .then(result => {
        if(result){
            navigate(location?.state ? location.state : "/dashboard")
        }
    })
    setGoogleLoading(false)
  }
  return (
    <div className="my-10">
      <form onSubmit={handleSignUp} className="max-w-md mx-auto">
        <h1 className="text-center font-bold mb-5 text-2xl md:text-4xl">
          Sign In
        </h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <p className="text-red-500 my-4">{error}</p>
        <div className="flex justify-between items-center">
          <Button type="submit" variant="contained" sx={{width: '100px'}}>
            {loading? <Loader h="25" w="25" color="white"></Loader> : "Sign In"}
          </Button>
          <h4>or</h4>
          <Button onClick={handleGoogle} variant="contained" endIcon={<Google />} sx={{width: '160px'}}>
            {googleLoading ? (
              <Loader h="25" w="25" color="white"></Loader>
            ) : (
              "Sign In with"
            )}
          </Button>
        </div>
        <p className="mt-2">Don't have an Account? <Link to="/signIn" className="text-blue-400">Please SignUp</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
