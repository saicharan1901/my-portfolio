// components/Footer.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10 text-center space-y-6">
      <h2 className="text-neutral-500 vt323-regular font-bold md:text-3xl text-xl mb-4">
        Contact Me
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2 text-[#39FF14] oswald font-semibold md:text-lg text-sm">
          <span className="mr-2">👤</span>
          <span>Sai Charan</span>
        </div>

        <div className="flex items-center space-x-2 text-neutral-400 vt323-regular md:text-lg text-sm">
          <FaEnvelope />
          <a
            href="mailto:papinenisaicharan@gmail.com"
            className="hover:text-[#CFFF04] transition duration-300"
          >
            papinenisaicharan@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-2 text-neutral-400 vt323-regular md:text-lg text-sm">
          <FaGithub />
          <a
            href="https://github.com/saicharan1901"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#CFFF04] transition duration-300"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center space-x-2 text-neutral-400 vt323-regular md:text-lg text-sm">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/saicharan1901/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#CFFF04] transition duration-300"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center space-x-2 text-neutral-400 vt323-regular md:text-lg text-sm">
          <FaPhone />
          <a
            href="tel:7338185853"
            className="hover:text-[#CFFF04] transition duration-300"
          >
            7338185853
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
