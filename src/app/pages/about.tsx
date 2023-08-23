import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/AboutMe';
const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <About />
      </main>
    </div>
  );
};

export default AboutPage;
