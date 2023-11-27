import React from 'react';


const Projects = () => {
  return (
    <section className="py-16 text-lime-600 bg-black mb-auto h-screen text-3xl w-full md:w-3/4 lg:w-1/2 mx-auto ml-20">
      <div className="container ">
        <h2 className="font-bold mb-4">Projects</h2>
        <div className="flex flex-wrap -mx-4 mr-auto">
          {/* First Project Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <a href="https://client-afcon-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300 ">
                <img
                  src="afcon.png"
                  alt="Project Image"
                  className="w-full h-auto rounded-md"
                />
                <h3 className="italic text-lg font-semibold mt-2">Afcon App</h3>
              </div>
            </a>
          </div>
          

          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
