
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#10172A] shadow-lg">
            <div className="max-w-screen-l mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    <p className="text-white font-bold text-lg cursor-pointer">Sai Charan</p>
                </Link>
                <button
                    onClick={toggleNavbar}
                    type="button"
                    className="block md:hidden text-white focus:outline-none"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex items-center mt-4 md:mt-0">
                        <Link href="/">
                            <p className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer">Home</p>
                        </Link>
                        <Link href="#">
                            <p className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer">Projects</p>
                        </Link>
                        <Link href="#">
                            <p className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer">Experience</p>
                        </Link>
                        <Link href="/about">
                            <p className="block md:inline-block text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer">About</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
