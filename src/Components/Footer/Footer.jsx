import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import logo from "../../assets/logo/logo.png";
import { IconButton } from "@mui/material";

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
                <li className="text-sm">Quick links</li>
                <li className="text-sm">Quick links</li>
              </ul>
              <ul className="flex flex-col items-center space-y-1">
                <li className="font-bold mb-1">Terms of Service</li>
                <li className="text-sm">Quick links</li>
                <li className="text-sm">Quick links</li>
              </ul>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <IconButton color="secondary">
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton color="secondary">
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton color="secondary">
                <GitHub fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
