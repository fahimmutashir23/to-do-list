import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-[calc(100vh-272px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
