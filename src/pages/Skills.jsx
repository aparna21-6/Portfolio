import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiJavascript, SiReact, 
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, 
  SiGit, SiBootstrap
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaCode } from 'react-icons/fa';

const Skills = () => {
  // Array of skill objects containing the name, specific icon, and brand color
  const skillList = [
    { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "SQL", icon: FaDatabase, color: "text-slate-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { name: "Git & GitHub", icon: SiGit, color: "text-orange-500" },
    { name: "Machine Learning", icon: FaBrain, color: "text-pink-400" },
    { name: "DSA", icon: FaCode, color: "text-emerald-400" }
  ];

  return (
    <div className="max-w-5xl mx-auto p-10 space-y-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold text-white text-center"
      >
        Technical Skills
      </motion.h1>
      
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillList.map((skill, i) => (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: i * 0.1, duration: 0.3 }} 
            key={skill.name} 
            className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all shadow-lg"
          >
            <skill.icon className={`text-2xl ${skill.color}`} />
            <span className="font-semibold text-slate-200 tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;