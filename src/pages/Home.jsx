import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const roles = ["Software Developer", "Data Science", "Machine Learning"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-20 flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text and Animations */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
            >
              Hello there! 👋
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3 }}
              className="text-3xl text-blue-400 font-semibold"
            >
              This is Aparna Srivastava
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 leading-relaxed max-w-lg"
            >
             I'm a senior Civil engineering student at Motilal Nehru National Institute of Technology, Prayagraj.
            </motion.p>

            {/* New Expertise Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-slate-300 leading-relaxed max-w-l"
            >
              <p>
                I have a strong foundation in object-oriented programming and I'm proficient in 
                <span className="text-blue-400"> C++, Python, and Javascript</span>. I'm also familiar with machine learning frameworks 
                such as <span className="text-blue-400">Tensorflow, Scikit-learn</span>, data tools such as 
                <span className="text-blue-400"> Numpy, Pandas</span>, and modern JavaScript libraries and frameworks, 
                such as <span className="text-blue-400">React.js and Next.js</span>.
              </p>
            </motion.div>

            <div className="space-y-3 pt-4">
              {roles.map((role, i) => (
                <motion.div 
                  key={role} 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 1.0 + (i * 0.4) }}
                  className="flex items-center gap-3"
                >
                  <span className="text-purple-500 text-xl">▹</span>
                  <span className="text-xl text-slate-200 font-medium">{role}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 2.2 }}
              className="flex space-x-4 pt-6"
            >
              <a href="#contact" className="bg-blue-600/90 hover:bg-blue-500 text-white px-8 py-3 rounded-lg backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] font-semibold border border-blue-400/50">
                Hire Me
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-lg backdrop-blur-md transition-all border border-white/10 flex items-center gap-2 font-semibold">
                <FaGithub /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <div className="relative p-2 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <img src="/profile.jpg" alt="Aparna Srivastava" className="w-72 h-72 md:w-80 md:h-80 rounded-xl object-cover border-4 border-slate-950" />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950/70 backdrop-blur-xl py-12 text-center border-t border-white/5 w-full mt-12">
        <h2 className="text-3xl font-bold text-white mb-6">Open to Opportunities</h2>
        <p className="mb-8 text-slate-300 max-w-md mx-auto">Actively seeking placements and internships in Software Engineering and Machine Learning.</p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="mailto:aparnasri2106@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors text-3xl"><FaEnvelope /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-3xl"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-3xl"><FaLinkedin /></a>
        </div>
        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Aparna Srivastava.</p>
      </footer>
    </div>
  );
};

export default Home;