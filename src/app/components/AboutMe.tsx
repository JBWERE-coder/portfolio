import React from 'react';

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-700 mt-4">
              I am a passionate software engineer dedicated to creating interactive web applications and solving everyday problems. With a strong foundation in web development, I thrive on tackling new challenges and delivering innovative solutions.
            </p>
          </div>
          <div className="text-center">
          <img src="C:\Users\HP\Downloads\WhatsApp Image 2023-09-13 at 22.30.01.jpeg" alt="Your Name" />
          </div>
        </div>
      </section>
  );
};

export default About;
