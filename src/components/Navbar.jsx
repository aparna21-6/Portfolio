import React from 'react';
import { FaHome, FaGraduationCap, FaProjectDiagram, FaTools, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex justify-center space-x-8 text-sm font-bold text-white">
    <Link to="/" className="flex items-center gap-2 hover:text-blue-400"><FaHome /> HOME</Link>
    <Link to="/education" className="flex items-center gap-2 hover:text-blue-400"><FaGraduationCap /> EDUCATION</Link>
    <Link to="/projects" className="flex items-center gap-2 hover:text-blue-400"><FaProjectDiagram /> PROJECTS</Link>
    <Link to="/skills" className="flex items-center gap-2 hover:text-blue-400"><FaTools /> SKILLS</Link>
    {/* New Resume Link */}
    <Link to="/resume" className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors"><FaFileAlt /> RESUME</Link>
  </nav>
);

export default Navbar;