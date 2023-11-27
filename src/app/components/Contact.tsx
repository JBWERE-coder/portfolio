import React from 'react';


const Contact = () => {
  return (
    <section className="py-8 w-full ml-20 mx-auto text-lime-600 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-white">
          Feel free to get in touch with me through the following channels:
        </p>
        <ul className="list-disc list-inside text-white mt-4">
       <li>
            Email: <a href="mailto:lutherwere@gmail.com">lutherwere@gmail.com</a>
      </li>
      <li>
            LinkedIn: <a href="https://www.linkedin.com/in/jacob-were-b56510240" 
            target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jacob-were-b56510240</a>
      </li>
      <li>
             GitHub: <a href="https://github.com/JBWERE-coder" 
             target="_blank" rel="noopener noreferrer">https://github.com/JBWERE-coder</a>
     </li>
    </ul>

      </div>
    </section>
  );
};

export default Contact;
