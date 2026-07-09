import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      name: "Cinematch",
      img: "/cinematch.jpg",
      desc: "Interactive Streamlit app with typo-tolerant movie search. Integrated TMDB API to fetch up-to-date metadata and implemented a session-based watchlist. Built using natural language processing and cosine similarity."
    },
    {
      name: "Construction Site Tracker",
      img: "/tracker.jpg",
      desc: "Full-stack application with JWT authentication, role-based access control, and an admin dashboard featuring user management and platform statistics. Implemented a secure file upload system using Multer."
    },
    {
      name: "Personal Portfolio",
      img: "/portfolio.jpg",
      desc: "Responsive personal showcase built with React, Tailwind, and Framer Motion with virtual entrance animations and responsive routing."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20 space-y-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold text-white mb-8 tracking-tighter"
      >
        Technical Projects
      </motion.h1>

      {projectList.map((project) => (
        <motion.div 
          key={project.name}
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all shadow-xl"
        >
          <img 
            src={project.img} 
            alt={project.name} 
            // object-contain prevents cropping, max-h-72 keeps the image from getting too huge
            className="w-full h-auto max-h-72 object-contain rounded-lg mb-4 bg-black/20" 
          />
          <h2 className="text-2xl font-bold text-blue-400 mb-2">{project.name}</h2>
          <p className="text-base text-slate-300 leading-relaxed">{project.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;