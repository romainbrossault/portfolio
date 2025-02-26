import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Brain, Heart, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement",
      description: "Passionné par la création d'applications innovantes et performantes, je maîtrise plusieurs langages et frameworks modernes."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Apprentissage Continu",
      description: "Toujours à l'affût des nouvelles technologies et méthodologies pour rester à la pointe de l'innovation."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Le développement est plus qu'un métier pour moi, c'est une véritable passion qui me pousse à me surpasser."
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Star className="w-20 h-20 text-blue-600 dark:text-blue-300" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-600 dark:text-blue-300 mb-6">
            Romain Brossault
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Développeur Full Stack Passionné
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Me Contacter
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-300 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-colors"
            >
              Voir mes Projets
            </motion.a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-blue-900/30 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-blue-800/30 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-blue-900/30 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-blue-800/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-300">
            À propos de moi
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Passionné par le développement web et les nouvelles technologies, je suis constamment 
              en quête d'apprentissage et d'innovation. Mon parcours m'a permis d'acquérir une solide 
              expertise technique et une approche créative de la résolution de problèmes.
            </p>
            <p>
              Je m'épanouis particulièrement dans la création d'applications web modernes et performantes, 
              en utilisant les dernières technologies et les meilleures pratiques du secteur.
            </p>
            <p>
              Mon objectif est de contribuer à des projets innovants et de continuer à développer 
              mes compétences dans un environnement stimulant et collaboratif.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}