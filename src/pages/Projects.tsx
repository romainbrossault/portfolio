import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

/* Images */
import p1 from '../images/portfolio.png';
import p2 from '../images/projet_restaurant.jpg';
import p3 from '../images/testAlcool.png';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Portfolio moderne avec des animations fluides, un thème sombre/clair, et une interface intuitive. Développé avec React et Tailwind CSS. Le thème sombre présente un système solaire interactif tandis que le thème clair offre une ambiance aquatique apaisante avec des bulles animées.",
      image: p1,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/romainbrossault/portfolio"
    },
    {
      title: "Application de Gestion de Restaurant",
      description: "Application web complète permettant la gestion des commandes, des réservations et du stock d'un restaurant. Interface administrateur intuitive et expérience client optimisée. Système de notifications en temps réel et tableau de bord analytique pour suivre les performances du restaurant.",
      image: p2,
      technologies: ["React", "Node.js", "MySQL", "Express"],
      github: "https://github.com/romainbrossault/restaurant_project"
    },
    {
      title: "Application de Test d'Alcoolémie",
      description: "Application de bureau développée en C# avec WPF pour tester son taux d'alcoolémie. Interface simple et intuitive pour saisir les informations nécessaires et obtenir un résultat précis. Possibilité de sauvegarder les résultats et de les consulter ultérieurement.",
      image: p3,
      technologies: ["C#", "WPF", "XAML"],
      github: "https://github.com/romainbrossault/AlcoolTest-WPF"
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
          Mes Projets
        </h1>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10"/>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-200 text-lg mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium border border-blue-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      className="inline-flex items-center px-6 py-3 bg-blue-600/90 hover:bg-blue-500/90 text-white rounded-full transition-colors duration-300 backdrop-blur-sm"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Voir le code
                    </a>
                  </motion.div>
                </div>
              </div>
              
              {/* Effet de brillance */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}