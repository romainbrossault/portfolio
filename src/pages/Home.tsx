import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-red-600 mb-6"
          >
            Romain Brossault
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-300 mb-12"
          >
            Développeur Full Stack
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="/contact"
              className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Me Contacter
            </a>
            <a
              href="/projets"
              className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors"
            >
              Mes Projets
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}