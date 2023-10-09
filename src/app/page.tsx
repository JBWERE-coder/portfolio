import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export const Home = () => {
  return (
    <div className="bg-black text-gold">
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Footer /> 
    </div>
  );
};

export default Home;










// Hero Section
// <section className="bg-gold py-16 text-black">
//   <div className="container mx-auto text-center">
//     <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//     <p className="text-xl">I'm a Full-Stack Software Developer</p>
//     <button className="bg-black text-gold hover:bg-yellow-400 hover:text-blue-800 px-6 py-2 mt-8 rounded-full font-semibold transition duration-300 ease-in-out">
//       View My Work
//     </button>
//   </div>
// </section>

// {/* About Section */}
// <section className="container mx-auto py-16">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     <div className="text-center md:text-left">
//       <h2 className="text-3xl font-bold">About Me</h2>
//       <p className="text-gray-700 mt-4">
//         I am a passionate software engineer dedicated to creating interactive web applications and solving everyday problems. With a strong foundation in web development, I thrive on tackling new challenges and delivering innovative solutions.
//       </p>
//     </div>
//     <div className="text-center">
//       {/* You can add an image of yourself here */}
//     </div>
//   </div>
// </section>

// {/* Portfolio Section */}
// <section className="bg-black py-16">
//   <div className="container mx-auto text-center">
//     <h2 className="text-3xl font-bold">Portfolio</h2>
//     {/* Your portfolio items go here */}
//   </div>
// </section>

// {/* Contact Section */}
// <section className="container mx-auto py-16">
//   <div className="text-center">
//     <h2 className="text-3xl font-bold">Contact Me</h2>
//     <p className="text-gray-700 mt-4">
//       Feel free to get in touch with me through the following channels:
//     </p>
//     <ul className="list-disc list-inside text-gray-700 mt-4">
//       <li>Email: lutherwere@gmail.com</li>
//       <li>LinkedIn: linkedin.com/in/your-profile</li>
//       <li>GitHub: github.com/JBWERE_Coder</li>
//     </ul>
//   </div>
// </section>