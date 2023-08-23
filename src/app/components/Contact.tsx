import React from 'react';
const Contact: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-700">
          Feel free to get in touch with me through the following channels:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Email: your.email@example.com</li>
          <li>LinkedIn: linkedin.com/in/your-profile</li>
          <li>GitHub: github.com/your-username</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
