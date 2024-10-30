// components/Footer.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <span className="mr-2">👤</span>
          <span>Sai Charan</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2" />
          <a href="mailto:papinenisaicharan@gmail.com" className="text-[#CFFF04]">
            papinenisaicharan@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://github.com/saicharan1901" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src="/github-icon.png" alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="mr-2" />
          <a href="https://www.linkedin.com/in/saicharan1901/" target="_blank" rel="noopener noreferrer" className="text-[#CFFF04]">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-2" />
          <span>7338185853</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
