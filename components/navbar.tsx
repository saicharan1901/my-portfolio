// components/navbar.tsx

import { FC } from "react";

type NavbarProps = {
  onLinkClick: (section: string) => void;
};

const Navbar: FC<NavbarProps> = ({ onLinkClick }) => {
  return (
    <nav className="text-[#39FF14] md:block hidden vt323-regular py-4 px-6 justify-center items-center z-30">
      <div className="flex justify-center items-center space-x-8 relative">
        <span
          className="cursor-pointer text-3xl hover:text-neutral-500 transition"
          onClick={() => onLinkClick("Introduction")}
        >
          INTRODUCTION
        </span>
        <div className="border-l-2 border-neutral-500 h-6 mx-4"></div> {/* Separator Bar */}
        <span
          className="cursor-pointer text-3xl hover:text-neutral-500 transition"
          onClick={() => onLinkClick("Education")}
        >
          ABOUT ME
        </span>
        <div className="border-l-2 border-neutral-500 h-6 mx-4"></div> {/* Separator Bar */}
        <span
          className="cursor-pointer text-3xl hover:text-neutral-500 transition"
          onClick={() => onLinkClick("Projects")}
        >
          PROJECTS
        </span>
      </div>
      {/* Blinking Underline */}
      <div className="w-full h-1 bg-transparent opacity-50 relative mt-2">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-500 animate-pulse"></div>
      </div>
    </nav>
  );
};

export default Navbar;
