import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-gold text-2xl font-bold cursor-pointer">Jacob Were</span>
        </Link>
        <nav className="flex space-x-4">
          <Link href="/about">
            <span className="text-black hover:text-gold cursor-pointer ml-4">About</span>
          </Link>
          <Link href="/portfolio">
            <span className="text-black hover:text-gold cursor-pointer ml-4">Portfolio</span>
          </Link>
          <Link href="/contact">
            <span className="text-black hover:text-gold cursor-pointer mr-44">Contact</span>
          </Link>
          {/* Additional details in the navbar
          <span className="text-gray-100 text-sm bg-black p-2 rounded ml-4 hidden md:inline">
            Email: jacob@example.com
          </span>
          <span className="text-gray-100 text-sm bg-black p-2 rounded ml-4 hidden md:inline">
            Phone: +123-456-7890
          </span> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

