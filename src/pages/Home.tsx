import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, GraduationCap, Briefcase, Heart, Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const speed = 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="fixed inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0 min-h-[150vh]">
          {/* Bulles animées */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="bubble-svg"
              style={{
                top: `${Math.random() * 150}vh`,
                left: `${Math.random() * 100}vw`,
              }}
              animate={{ 
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Poissons SVG */}
          {[...Array(8)].map((_, i) => (
            <motion.svg
              key={`fish-${i}`}
              viewBox="0 0 100 40"
              className="fish-svg"
              style={{
                top: `${Math.random() * 150}vh`,
              }}
              initial={{ x: -100 }}
              animate={{ 
                x: [window.innerWidth + 100, -100],
                y: [0, Math.random() * 100 - 50, 0]
              }}
              transition={{
                duration: Math.random() * 20 + 30,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            >
              <path
                d="M 10,20 C 30,10 40,10 50,20 C 60,30 70,30 90,20 L 90,25 C 70,35 60,35 50,25 C 40,15 30,15 10,25 Z"
                className={theme === 'light' ? 'fill-blue-400' : 'fill-blue-600'}
                opacity="0.6"
              />
            </motion.svg>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-gray-900/80 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 pt-20">
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
              <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <Code className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Développement</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionné par la création d'applications innovantes et performantes
                </p>
              </div>
              <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <Palette className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Créativité</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Un esprit créatif qui aime repousser les limites du possible
                </p>
              </div>
              <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <Rocket className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Toujours à la recherche de nouvelles technologies et possibilités
                </p>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-12">
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

            <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                {/* Premier étage */}
                <Link to="/formations" className="group p-6 hover:bg-blue-50 dark:hover:bg-blue-900/70 transition-colors">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <GraduationCap className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">Formations</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Découvrez mon parcours académique</p>
                  </motion.div>
                </Link>
                <Link to="/competences" className="group p-6 hover:bg-emerald-50 dark:hover:bg-emerald-900/70 transition-colors">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <BookOpen className="w-12 h-12 mx-auto text-emerald-500 mb-4" />
                    <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300 mb-2">Compétences</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Explorez mes compétences techniques</p>
                  </motion.div>
                </Link>
                <Link to="/projets" className="group p-6 hover:bg-purple-50 dark:hover:bg-purple-900/70 transition-colors">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <Briefcase className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                    <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300 mb-2">Projets</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Consultez mes réalisations</p>
                  </motion.div>
                </Link>
              </div>
              
              {/* Deuxième étage */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                <Link to="/passions" className="group p-6 hover:bg-red-50 dark:hover:bg-red-900/70 transition-colors">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <Heart className="w-12 h-12 mx-auto text-red-500 mb-4" />
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-300 mb-2">Passions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">En savoir plus sur mes centres d'intérêt</p>
                  </motion.div>
                </Link>
                <Link to="/contact" className="group p-6 hover:bg-amber-50 dark:hover:bg-amber-900/70 transition-colors">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <Mail className="w-12 h-12 mx-auto text-amber-500 mb-4" />
                    <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300 mb-2">Contact</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Prenez contact avec moi</p>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}