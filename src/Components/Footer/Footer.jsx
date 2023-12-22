import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import logo from "../../assets/logo/logo.png";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="px-4 py-8 max-w-6xl mx-auto">
        <div className="flex justify-evenly ">
          <div>
            <div className="flex items-center justify-center flex-shrink-0 w-20 h-w-20">
              <img src={logo} alt="" />
            </div>
            <div>
                
            </div>
            <div className="mt-4 text-sm">
              <span className="dark:text-gray-400">
                © Copyright 2023. All Rights Reserved.
              </span>
            </div>
          </div>
          <div>
            <div className="md:flex md:gap-16">
              <ul className="flex flex-col items-center space-y-1">
                <li className="font-bold mb-1">Quick links</li>
                <Link><li className="text-sm">About Us</li></Link>
                <Link><li className="text-sm">Contact Us</li></Link>
                <Link><li className="text-sm">Our Service</li></Link>
              </ul>
              <ul className="flex flex-col items-center space-y-1">
                <li className="font-bold mb-1">Terms of Service</li>
                <Link><li className="text-sm">Acceptance of Terms</li></Link>
                <Link><li className="text-sm">Use License</li></Link>
                <Link><li className="text-sm">Limitations</li></Link>
                <Link><li className="text-sm">Governing Law</li></Link>
              </ul>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <IconButton color="secondary">
                <a href="https://www.facebook.com/fahim.mmuntasir/"><Facebook fontSize="large" /></a>
              </IconButton>
              <IconButton color="secondary">
                <a href="https://www.linkedin.com/in/md-fahim-muntashir-22408b2a1/"><LinkedIn fontSize="large" /></a>
              </IconButton>
              <IconButton color="secondary">
                <a href="https://github.com/fahimmutashir23"><GitHub fontSize="large" /></a>
              </IconButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
