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
            <span className="text-black hover:text-gold cursor-pointer">About</span>
          </Link>
          <Link href="/portfolio">
            <span className="text-black hover:text-gold cursor-pointer">Portfolio</span>
          </Link>
          <Link href="/contact">
            <span className="text-black hover:text-gold cursor-pointer">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
  
};

export default Navbar;
