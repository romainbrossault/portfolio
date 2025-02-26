import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Trophy, Code, Gamepad } from 'lucide-react';

/* Images */
import img1 from '../images/MartinTerrier.jpg';
import img2 from '../images/HBCnantes.png';
import img3 from '../images/devWEB.jpg'

export default function Passions() {
  const passions = [
    {
      title: "Football",
      icon: <Trophy className="w-12 h-12" />,
      image: img1,
      description: "Passionné de football depuis l'âge de 5 ans, je suis un fervent supporter du Stade Rennais. Mon joueur préféré est Martin Terrier, un attaquant talentueux dont j'admire la technique, la vision du jeu et la finesse dans ses finitions. Son style de jeu élégant et son engagement sur le terrain en font un joueur exemplaire qui incarne parfaitement les valeurs du club.",
      highlights: [
        "Supporter du Stade Rennais",
        "Fan de Martin Terrier",
        "Suivi assidu de la Ligue 1"
      ]
    },
    {
      title: "Handball",
      icon: <Trophy className="w-12 h-12" />,
      image: img2,
      description: "J'ai pratiqué le handball pendant 13 ans, dont 4 saisons au centre de formation du HBC Nantes. Cette expérience m'a appris l'importance du travail d'équipe, de la discipline et de la persévérance.",
      highlights: [
        "13 ans de pratique",
        "4 saisons en centre de formation",
        "Esprit d'équipe et leadership"
      ]
    },
    {
      title: "Développement Web",
      icon: <Code className="w-12 h-12" />,
      image: img3,
      description: "Le développement web est plus qu'un métier pour moi, c'est une véritable passion. J'aime particulièrement explorer de nouvelles technologies et créer des solutions innovantes. Cette passion me pousse à continuellement améliorer mes compétences à travers divers projets personnels.",
      highlights: [
        "Veille technologique constante",
        "Projets personnels innovants",
        "Apprentissage continu"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <Heart className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-300" />
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">
            Mes Passions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez ce qui m'anime au quotidien et façonne ma personnalité
          </p>
        </motion.div>

        <div className="space-y-16">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-blue-900/30 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-200/50 dark:border-blue-800/30 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <motion.img
                    src={passion.image}
                    alt={passion.title}
                    className="w-full h-64 md:h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-blue-300">
                      {passion.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4 flex items-center">
                    {passion.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {passion.description}
                  </p>
                  <div className="space-y-2">
                    {passion.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-300 rounded-full mr-3" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}