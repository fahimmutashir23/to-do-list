import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();

  const navItem = (
    <>
      <li>
        <NavLink to="/" className={`hover:border-b-2`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={`hover:border-b-2`}>
          Dashboard
        </NavLink>
      </li>
      <li>
        {user ? (
          <button onClick={logOutUser} className={`hover:border-b-2`}>
            Log Out
          </button>
        ) : (
          <NavLink to="signUp" className={`hover:border-b-2`}>
            SignUp
          </NavLink>
        )}
      </li>
      <li>
        <NavLink to="bestForWhom" className={`hover:border-b-2`}>
          Best for whom
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-300">
      <div className="navbar max-w-6xl mx-auto justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="btn hidden md:flex btn-ghost text-xl">
            <img src={logo} alt="Logo" className="h-12 w-12" />
          </Link>
          {user? <p className="hidden text-blue-300 md:flex text-xl ml-3">
            Welcome to {user?.displayName} !
          </p> : " "}
        </div>
        <div className="navbar-center">
          {user ? <p className="text-xs md:text-xl md:hidden">
            Welcome to {user?.displayName} !
          </p> : " "}
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-6 px-1">{navItem}</ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl md:hidden">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
