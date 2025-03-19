import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/src/components/CV_BrossaultRomain.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Romain_Brossault_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="text-red-600 font-bold text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            RB
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: '/', label: 'Accueil' },
              { to: '/formations', label: 'Formations' },
              { to: '/competences', label: 'Compétences' },
              { to: '/projets', label: 'Projets' },
              { to: '/passions', label: 'Passions' },
              { to: '/contact', label: 'Contact' }
            ].map(({ to, label }) => (
              <NavLink 
                key={to}
                to={to} 
                className={({ isActive }) => `
                  text-sm font-medium transition-colors
                  ${isActive 
                    ? 'text-red-600' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500'}
                `}
              >
                {label}
              </NavLink>
            ))}

            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"
            >
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                CV
              </span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 dark:bg-dark/80 backdrop-blur-sm"
          >
            <div className="px-4 py-2 space-y-1">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/formations', label: 'Formations' },
                { to: '/competences', label: 'Compétences' },
                { to: '/projets', label: 'Projets' },
                { to: '/passions', label: 'Passions' },
                { to: '/contact', label: 'Contact' }
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `
                    block py-2 text-base font-medium
                    ${isActive 
                      ? 'text-red-600' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500'}
                  `}
                >
                  {label}
                </NavLink>
              ))}
              
              <button
                onClick={handleDownloadCV}
                className="w-full mt-2 px-4 py-2 text-base font-medium text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"
              >
                <span className="flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}