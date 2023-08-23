// pages/contact.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
