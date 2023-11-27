import Image from 'next/image';
import React from 'react';

const About  = () => {
  return (
    <section className="flex text-lime-600 ">
      <div className="w-full ml-2">
          <Image className='rounded-full ' width={400} height={400} src="/jb.jpeg" alt="jb" />
          </div>
      <div className="">
          <div className="mt-20 ml-14 mr-14">
            <h2 className="text-3xl font-extrabold">About Me</h2>
            <p className="text-white text-xl mt-4 italic ">
              I am a Fool Stack engineer dedicated to creating interactive web applications and solving everyday problems. 
              With a strong foundation in web development, I thrive on tackling new challenges and delivering innovative solutions.
              My role, in day-to-day tasks include:Designing and maintaining software systems,Evaluating and testing new software programs, 
              Optimizing software for speed and scalability, Writing and testing code, Consulting with clients, engineers, security specialists,
               and other stakeholders, Presenting new features to stakeholders and internal customers
            </p>
          </div>
          
        </div>
      </section>




  );
};

export default About;
