import React from 'react';

const Projects = () => {
  return (
    <section className="py-8 text-white bg-black mb-auto h-screen text-3xl w-full md:w-3/4 lg:w-1/2 mx-auto">
      <div className="container">
        <h2 className="font-bold mb-4">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {/* First Project Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <a href="https://app-bird-lab.onrender.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300">
                <img
                  src="birdsy.png"
                  alt="Project Image"
                  className="w-full h-auto rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">Bird App</h3>
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





// import React from 'react';

// const Projects = () => {
//   return (
//     <section className="py-8 text-white bg-black mb-auto h-screen text-3xl w-full md:w-3/4 lg:w-1/2 mx-auto">
//       <div className="container ">
//         <h2 className="font-bold mb-4">Projects</h2>
//         <div className="flex flex-wrap -mx-4">
//           {/* First Project Card */}
//           <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
//             <a href="YOUR_LINK_HERE" target="_blank" rel="noopener noreferrer">
//               <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300">
//                 <img
//                   src="YOUR_IMAGE_URL_HERE"
//                   alt="Project Image"
//                   className="w-full h-auto rounded-md"
//                 />
//                 <h3 className="text-lg font-semibold mt-2">Project Title</h3>
//                 <p className="text-gray-300 mt-2">Project Description</p>
//               </div>
//             </a>
//           </div>
//       </div>
//     </section>
//   );
// };
// };
// export default Projects;
