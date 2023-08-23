import Image from 'next/image'
import React from 'react';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-gray-700 mt-4">
          I am a web developer passionate about creating amazing web experiences.
        </p>
      </main>
    </div>
  );
};

export default Home;



