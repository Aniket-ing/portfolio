import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'A website that generates websites.',
      description: 'A website based on llm that geneartes an website by user prompts.',
      image: './src/Landing.png',
      github: 'https://github.com/Aniket-ing/websSteGenerator',
      live: 'https://product-dev-kriti-25-front-end.onrender.com'
    },{
      title: 'Job hunt Website',
      description: 'A full-featured job website where user can find and apply for jobs of there choice and admin can create jobs.',
      image: './src/job.png',
      github: 'https://github.com/Aniket-ing/jobportal',
      live: 'https://example.com'
    },
    {
      title: 'Personal portfolio',
      description: '"A dynamic personal portfolio showcasing my skills, projects, and experience. Designed for a seamless and engaging user experience." ',
      image: './src/portfolio.png',
      github: 'https://github.com/Aniket-ing/portfolio',
      live: 'https://aniket-ing.github.io/portfolio/'
    },
    {
      title: 'Tic-tac-toe Game',
      description: 'A responsive game page of a famous game tic-tac-toe',
      image: './src/tic-tak-toe.png',
      github: 'https://github.com/Aniket-ing/Tic-tac-toe',
      live: ' https://aniket-ing.github.io/Tic-tac-toe/'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;