import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the worker for PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 pt-24 flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-3xl font-bold text-white mb-8"
      >
        My Resume
      </motion.h1>

      {/* Dedicated Download Button */}
      <a 
        href="/resume.pdf" 
        download 
        className="mb-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-all font-semibold"
      >
        <FaDownload /> Download CV
      </a>

      {/* Rendered PDF inside page */}
      <div className="border border-white/20 p-2 bg-white rounded-lg shadow-2xl">
        <Document file="/resume.pdf">
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;