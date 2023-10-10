import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-200 text-black py-5 px-4" >
      <div className="flex">
        <Link className="mr-auto text-4xl"   href="/">
          <span>Jacob Were</span>

        </Link>
        <nav className="flex gap-x-4 text-2xl">
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/projects">
            <span>Projects</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

