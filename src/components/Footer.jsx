import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-12 text-center border-t border-white/5 bg-slate-950/40 backdrop-blur-md mt-auto">
    <div className="flex justify-center space-x-8 mb-8">
      <a href="mailto:aparnasri2106@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors text-3xl">
        <FaEnvelope />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-3xl">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-3xl">
        <FaLinkedin />
      </a>
    </div>
    <p className="text-slate-500 font-mono">
      &copy; {new Date().getFullYear()} Aparna Srivastava.
    </p>
  </footer>
);

export default Footer;