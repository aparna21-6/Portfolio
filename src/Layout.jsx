import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the new footer

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 font-['JetBrains_Mono']">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40"><source src="/tech-bg.mp4" /></video>
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10 flex-grow pt-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </motion.div>
      </main>
      
      <Footer /> {/* Footer will now appear on all pages */}
    </div>
  );
}