import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto text-center font-extralight">
        <p className="text-lime-600">
          &copy; {new Date().getFullYear()} Jacob Were. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
