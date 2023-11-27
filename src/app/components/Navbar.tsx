import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-lime-600 flex justify-between items-center h-24  max-auto px-10" >
      <div className="flex ml-auto">
        <nav className="flex gap-x-2 text-xl font-extrabold ">
          <Link href="/about">
            </Link>
            <span>ABOUT</span>
          <Link href="/projects">
          </Link>
            <span>PROJECTS</span>
          <Link href="/contact">
          </Link>
            <span>CONTACTS</span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

