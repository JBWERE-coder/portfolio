import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-bold cursor-pointer">Your Name</span>
        </Link>
        <nav>
          <Link href="/about">
            <span className="text-white mr-4 hover:text-gray-300 cursor-pointer">About</span>
          </Link>
          <Link href="/portfolio">
            <span className="text-white mr-4 hover:text-gray-300 cursor-pointer">Portfolio</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
  

};

export default Navbar;
