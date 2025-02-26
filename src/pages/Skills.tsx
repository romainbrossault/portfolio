import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Monitor, Palette, Server, Terminal, 
  Cpu, Globe, Shield, Cloud, GitBranch, Laptop
} from 'lucide-react';

const skillCategories = [
  {
    name: "Langages de programmation",
    icon: <Code className="w-8 h-8" />,
    skills: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 50 },
      { name: "SQL", level: 80 },
      { name: "PHP", level: 90 }
    ]
  },
  {
    name: "Bases de données",
    icon: <Database className="w-8 h-8" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MariaDB", level: 60 },
      { name: "PostgreSQL", level: 60 },
      { name: "phpMyAdmin", level: 100 }
    ]
  },
  {
    name: "Frameworks & Outils",
    icon: <Terminal className="w-8 h-8" />,
    skills: [
      { name: "Symfony", level: 80 },
      { name: "NodeJS", level: 90 },
      { name: "VS Code", level: 100 },
      { name: "Visual Studio", level: 50 },
      { name: "WPF", level: 50 },
      { name: "Notion", level: 60 }
    ]
  },
  {
    name: "Design",
    icon: <Palette className="w-8 h-8" />,
    skills: [
      { name: "Photoshop", level: 60 },
      { name: "Paint.net", level: 100 },
      { name: "Figma", level: 50 }
    ]
  },
  {
    name: "Systèmes d'exploitation",
    icon: <Monitor className="w-8 h-8" />,
    skills: [
      { name: "Ubuntu", level: 100 },
      { name: "Windows", level: 100 },
      { name: "MacOS", level: 85 },
      { name: "Debian", level: 100 }
    ]
  },
  {
    name: "Administration Serveur",
    icon: <Server className="w-8 h-8" />,
    skills: [
      { name: "Windows Server", level: 90 },
      { name: "Apache2", level: 100 }
    ]
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
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <Cpu className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-300" />
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">
            Mes Compétences
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Un aperçu détaillé de mes compétences techniques et de mon expertise dans différents domaines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-blue-900/30 p-6 rounded-xl shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-blue-800/30 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6 text-blue-600 dark:text-blue-300">
                {category.icon}
                <h2 className="text-xl font-bold ml-3">{category.name}</h2>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                      />
                    </div>
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