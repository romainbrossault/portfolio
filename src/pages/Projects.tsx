import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import restaurantImage from '../images/projet_restaurant.jpg';
import portfolioImage from '../images/portfolio.png';
import alcoolImage from '../images/testAlcool.png'

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Portfolio moderne avec des animations fluides, un thème sombre/clair, et une interface intuitive. Développé avec React et Tailwind CSS.",
      image: portfolioImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        github: ""
      }
    },
    {
      title: "Application de Gestion de Restaurant",
      description: "Application web permettant la gestion des commandes, des réservations et du stock d'un restaurant. Interface administrateur et client.",
      image: restaurantImage,
      technologies: ["React", "Node.js", "MySQL", "Express"],
      links: {
        github: "https://github.com/romainbrossault/restaurant_project"
      }
    },
    {
      title: "Application de test d'alcoolémie",
      description: "Application permettant de tester son taux d'alcoolémie en fonction de la quantité d'alcool consommée. Développée avec Visual Studio 2022.",
      image: alcoolImage,
      technologies: ["XAML","C#"],
      links: {
        github: "https://github.com/romainbrossault/AlcoolTest-WPF"
      }
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

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-blue-900/50 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}