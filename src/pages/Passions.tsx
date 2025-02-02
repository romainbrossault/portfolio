import React from 'react';
import { motion } from 'framer-motion';

import CR7 from '../images/cr7.jpg';
import HBCNANTES from '../images/HBCnantes.png';
import DEVWEB from '../images/devWEB.jpg';

export default function Passions() {
  const passions = [
    {
      title: "Football",
      image: CR7,
      description: "Passionné de football depuis l'âge de 5 ans, je suis un fervent supporter de Manchester United et un grand admirateur de Cristiano Ronaldo. Je suis activement la Ligue 1, la Premier League et la Liga, ce qui me permet de rester connecté aux différents styles de jeu à travers l'Europe."
    },
    {
      title: "Handball",
      image: HBCNANTES,
      description: "J'ai pratiqué le handball pendant 13 ans, dont 4 saisons au centre de formation du HBC Nantes. Cette expérience m'a appris l'importance du travail d'équipe, de la discipline et de la persévérance."
    },
    {
      title: "Développement Web",
      image: DEVWEB,
      description: "Le développement web est plus qu'un métier pour moi, c'est une véritable passion. J'aime particulièrement explorer de nouvelles technologies et créer des solutions innovantes. Cette passion me pousse à continuellement améliorer mes compétences à travers divers projets personnels."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-12 text-center">
          Mes Passions
        </h1>

        <div className="space-y-12">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-blue-900/50 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <motion.img
                    src={passion.image}
                    alt={passion.title}
                    className="w-full h-64 md:h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4">
                    {passion.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {passion.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}