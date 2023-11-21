import Image from 'next/image';
import React from 'react';

const About  = () => {
  return (
    <section className="h-sreen w-full mt-8 md:w-3/4 lg:w-1/2 mx-auto text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full">
          <Image width={400} height={400} src="/jb.jpeg" alt="jb" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-white mt-4">
              I am a passionate software engineer dedicated to creating interactive web applications and solving everyday problems. With a strong foundation in web development, I thrive on tackling new challenges and delivering innovative solutions.
              My role, in day-to-day tasks include:Designing and maintaining software systems,Evaluating and testing new software programs, Optimizing software for speed and scalability, Writing and testing code, Consulting with clients, engineers, security specialists, and other stakeholders, Presenting new features to stakeholders and internal customers
            </p>
          </div>
          
        </div>
      </section>
  );
};

export default About;
