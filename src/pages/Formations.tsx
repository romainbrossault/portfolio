import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export default function Formations() {
  const formations = [
    {
      title: "BTS CIEL (Cybersécurité, Informatique et réseaux, Électronique)",
      period: "2023 - 2025",
      location: "Lycée Saint-Félix-La-Salle, Nantes",
      description: "Formation approfondie en cybersécurité, développement informatique et systèmes électroniques.",
      details: [
        "Développement d'applications et programmation orientée objet",
        "Administration et sécurisation des réseaux",
        "Conception de systèmes embarqués",
        "Gestion de projets informatiques",
        "Cybersécurité et protection des données"
      ],
      achievements: [
        "Projets pratiques en conditions réelles",
        "Certifications professionnelles",
        "Stages en entreprise"
      ]
    },
    {
      title: "BAC STI2D (Sciences et Technologies de l'Industrie et du Développement Durable)",
      period: "2021 - 2023",
      location: "Lycée Monge la Chauvinière, Nantes",
      description: "Formation technologique axée sur l'innovation et le développement durable.",
      details: [
        "Étude des systèmes techniques et de leur impact environnemental",
        "Innovation technologique et éco-conception",
        "Projets collaboratifs et démarche de développement durable",
        "Initiation aux langages de programmation",
        "Analyse et conception de solutions techniques"
      ],
      achievements: [
        "Projets innovants",
        "Travail en équipe"
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
          <GraduationCap className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-300" />
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">
            Mon Parcours Académique
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Un parcours orienté vers l'innovation technologique et le développement durable
          </p>
        </motion.div>

        <div className="space-y-12">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-blue-900/30 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-200/50 dark:border-blue-800/30"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4">
                  {formation.title}
                </h2>
                
                <div className="flex flex-wrap gap-6 mb-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formation.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{formation.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {formation.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-300" />
                      Programme
                    </h3>
                    <ul className="space-y-2">
                      {formation.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2 text-blue-600 dark:text-blue-300">•</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      <Award className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-300" />
                      Réalisations
                    </h3>
                    <ul className="space-y-2">
                      {formation.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2 text-blue-600 dark:text-blue-300">★</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
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