import React from 'react';
import Navbar from '../components/Navbar';
import projects from '../components/projects';

const ProjectPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <ProjectPage />
        {/* Add your portfolio items here */}
      </main>
    </div>
  );
};

export default ProjectPage;
