import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Monitor, Palette, Server, Terminal 
} from 'lucide-react';

const skillCategories = [
  {
    name: "Langages de programmation",
    icon: <Code className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JAVASCRIPT", "JAVA", "SQL", "PHP"]
  },
  {
    name: "Bases de données",
    icon: <Database className="w-6 h-6" />,
    skills: ["MYSQL", "MARIADB", "POSTRESQL", "PhpMyAdmin"]
  },
  {
    name: "Frameworks & Outils",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["SYMFONY", "PACK OFFICE 365", "Visual Studio code", "Visual studio", "Application WPF", "Notion", "NodeJS"]
  },
  {
    name: "Design",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Photoshop", "Paint.net", "Figma"]
  },
  {
    name: "Systèmes d'exploitation",
    icon: <Monitor className="w-6 h-6" />,
    skills: ["ubuntu", "client windows", "MacOS", "Debian"]
  },
  {
    name: "Administration Serveur",
    icon: <Server className="w-6 h-6" />,
    skills: ["Serveur windows 2016/2019", "Serveur apache2"]
  }
];

export default function Skills() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-12 text-center">
          Mes Compétences
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-blue-900/50 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4 text-blue-500">
                {category.icon}
                <h2 className="text-xl font-semibold ml-2">{category.name}</h2>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="bg-blue-50 dark:bg-blue-800/50 px-4 py-2 rounded-md text-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}