import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-300 mb-4">
            Romain Brossault
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Développeur Passionné & Créatif
          </p>
        </motion.div>

        <motion.div 
          className="prose dark:prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-blue-900/50 p-6 rounded-lg shadow-lg">
              <Code className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Développement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionné par la création d'applications innovantes et performantes
              </p>
            </div>
            <div className="bg-white dark:bg-blue-900/50 p-6 rounded-lg shadow-lg">
              <Palette className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Créativité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Un esprit créatif qui aime repousser les limites du possible
              </p>
            </div>
            <div className="bg-white dark:bg-blue-900/50 p-6 rounded-lg shadow-lg">
              <Rocket className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Toujours à la recherche de nouvelles technologies et possibilités
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-blue-900/50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
              À propos de moi
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Je suis un développeur passionné par la création d'applications web innovantes. 
              Mon parcours est guidé par une soif constante d'apprentissage et une volonté 
              de repousser les limites de ce qui est possible dans le développement web.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Ma créativité s'exprime particulièrement à travers des designs fluides et 
              organiques, inspirés par les mouvements de l'eau. Cette approche unique me 
              permet de créer des interfaces utilisateur à la fois esthétiques et intuitives.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}