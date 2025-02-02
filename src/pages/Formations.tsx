import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Formations() {
  const formations = [
    {
      title: "BTS CIEL (Cybersécurité, Informatique et réseaux, Électronique)",
      period: "2023 - 2025",
      location: "Lycée Saint-Félix-La-Salle, Nantes",
      description: "Formation approfondie en cybersécurité, développement informatique et systèmes électroniques. Le BTS CIEL option B (ancien BTS SN-IR) forme des techniciens supérieurs capables de proposer une infrastructure réseau sécurisée et de développer des applications connectées.",
      details: [
        "Développement d'applications et programmation orientée objet",
        "Administration et sécurisation des réseaux",
        "Conception de systèmes embarqués",
        "Gestion de projets informatiques",
        "Cybersécurité et protection des données"
      ]
    },
    {
      title: "BAC STI2D (Sciences et Technologies de l'Industrie et du Développement Durable)",
      period: "2021 - 2023",
      location: "Lycée Monge la Chauvinière, Nantes",
      description: "Formation technologique axée sur l'innovation technologique et la préservation de l'environnement. Le BAC STI2D permet d'acquérir des compétences technologiques transversales à tous les domaines industriels.",
      details: [
        "Étude des systèmes techniques et de leur impact environnemental",
        "Innovation technologique et éco-conception",
        "Projets collaboratifs et démarche de développement durable",
        "Initiation aux langages de programmation",
        "Analyse et conception de solutions techniques"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <GraduationCap className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-300" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Formations
          </h1>
        </div>

        <div className="space-y-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-blue-900/50 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-2">
                {formation.title}
              </h2>
              <div className="text-gray-600 dark:text-gray-300 mb-4">
                <p className="font-medium">{formation.period}</p>
                <p>{formation.location}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                {formation.description}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                {formation.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}