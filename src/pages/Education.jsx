import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      school: "MNNIT Allahabad",
      year: "2023 - Present",
      deg: "B.Tech, Civil Engineering",
      score: "CPI: 7.22"
    },
    {
      school: "New Era School",
      year: "2022",
      deg: "CBSE (Class XII)",
      score: "Percentage: 86%"
    },
    {
      school: "St. Lawrence School",
      year: "2020",
      deg: "ICSE (Class X)",
      score: "Percentage: 95.6%"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-10 pt-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold text-white mb-1"
      >
        Education
      </motion.h1>
      
      <div className="space-y-6">
        {educationList.map((ed, i) => (
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: i * 0.2, duration: 0.5 }} 
            key={i} 
            className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <h2 className="text-2xl font-bold text-blue-400">{ed.school}</h2>
              <span className="mt-2 md:mt-0 text-sm font-semibold text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-max">
                {ed.year}
              </span>
            </div>
            
            <p className="text-lg text-slate-200 mb-4">{ed.deg}</p>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-md text-emerald-400 font-mono font-bold tracking-wide">
                {ed.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;