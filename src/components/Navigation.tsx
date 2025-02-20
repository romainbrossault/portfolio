import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleButton from './BubbleButton';
import '../styles/navigation.css';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-blue-50/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="text-blue-600 dark:text-blue-300 font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              RB
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/formations', label: 'Formations' },
                { to: '/competences', label: 'Compétences' },
                { to: '/projets', label: 'Projets' },
                { to: '/passions', label: 'Passions' },
                { to: '/contact', label: 'Contact' }
              ].map(({ to, label }) => (
                <BubbleButton key={to}>
                  <NavLink 
                    to={to} 
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                    }
                  >
                    {label}
                  </NavLink>
                </BubbleButton>
              ))}
            </div>
            <BubbleButton
              onClick={handleDownloadCV}
              className="flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </BubbleButton>
            <BubbleButton
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              ) : (
                <Sun className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              )}
            </BubbleButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <BubbleButton
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              ) : (
                <Sun className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              )}
            </BubbleButton>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                  className={({ isActive }) =>
                    `mobile-menu-link ${
                      isActive
                        ? 'nav-link-active'
                        : 'nav-link-inactive'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <BubbleButton
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </BubbleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}