import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleButton from './BubbleButton';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scanline, setScanline] = useState(0);

  // Scanline effect animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanline(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/path-to-your-cv.pdf';
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
      className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-blue-500/30 dark:border-blue-400/20 overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(180deg, rgba(10, 11, 30, 0.8) 0%, rgba(10, 11, 30, 0.7) 100%)' 
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.7) 100%)'
      }}
    >
      {/* Holographic scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30 z-0"
        style={{
          background: `linear-gradient(transparent, transparent, rgba(99, 102, 241, 0.3), transparent, transparent)`,
          backgroundSize: '100% 100px',
          backgroundPosition: `0 ${scanline}%`,
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Holographic grid effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Glowing border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md group-hover:bg-blue-500/30 dark:group-hover:bg-blue-400/30"
              />
              <div className="relative flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl tracking-wider">RB</span>
              </div>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1">
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
                    relative group px-3 py-2 mx-1
                    ${isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {/* Holographic background for active items */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeNavBackground"
                          className="absolute inset-0 -z-10 rounded bg-blue-500/10 dark:bg-blue-400/10 backdrop-blur-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      
                      {/* Hover effect */}
                      <motion.span 
                        className="absolute inset-0 -z-10 rounded bg-blue-500/0 dark:bg-blue-400/0"
                        whileHover={{ backgroundColor: theme === 'dark' ? 'rgba(96, 165, 250, 0.1)' : 'rgba(96, 165, 250, 0.05)' }}
                      />
                      
                      {/* Bottom border animation */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500 dark:bg-blue-400"
                          initial={{ width: isActive ? '100%' : '0%' }}
                          animate={{ width: isActive ? '100%' : '0%' }}
                          exit={{ width: '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {/* Text with subtle glow for active items */}
                      <span className={`relative ${isActive ? 'font-medium' : ''}`}>
                        {label}
                        {isActive && (
                          <span className="absolute inset-0 blur-sm opacity-50 text-blue-500 dark:text-blue-400">
                            {label}
                          </span>
                        )}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
            {/* CV Button with futuristic design */}
            <motion.button
              onClick={handleDownloadCV}
              className="relative group ml-2 px-4 py-2 rounded overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-400/80 dark:from-blue-500/80 dark:to-blue-300/80 rounded"
                animate={{
                  background: [
                    'linear-gradient(90deg, rgba(37, 99, 235, 0.8) 0%, rgba(96, 165, 250, 0.8) 100%)',
                    'linear-gradient(90deg, rgba(96, 165, 250, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)',
                    'linear-gradient(90deg, rgba(37, 99, 235, 0.8) 0%, rgba(96, 165, 250, 0.8) 100%)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Glowing border */}
              <div className="absolute inset-0 rounded border border-blue-400/30 dark:border-blue-300/30" />
              
              {/* Scanline effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: `linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.5), transparent, transparent)`,
                  backgroundSize: '100% 10px',
                  backgroundPosition: `0 ${scanline}%`,
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              <div className="relative flex items-center text-white">
                <Download className="w-4 h-4 mr-2" />
                <span className="font-medium tracking-wide">CV</span>
              </div>
            </motion.button>
            
            {/* Theme toggle with futuristic design */}
            <motion.button
              onClick={toggleTheme}
              className="relative group p-2 rounded-full ml-2 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/20 rounded-full"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.5 }}
              />
              
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-full border border-blue-400/30 dark:border-blue-300/30" />
              
              <div className="relative">
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                )}
              </div>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleTheme}
              className="relative group p-2 rounded-full mr-2 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/20 rounded-full"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.5 }}
              />
              
              <div className="relative">
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                )}
              </div>
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-2 rounded-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/20 rounded-md"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.5 }}
              />
              
              <div className="relative text-gray-600 dark:text-gray-300">
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-sm border-t border-blue-500/30 dark:border-blue-400/20 relative z-10"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(180deg, rgba(10, 11, 30, 0.9) 0%, rgba(10, 11, 30, 0.8) 100%)' 
                : 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.8) 100%)'
            }}
          >
            {/* Mobile menu holographic grid */}
            <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="px-2 pt-2 pb-3 space-y-1 relative">
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
                    block px-3 py-2 rounded-md text-base font-medium relative overflow-hidden
                    ${isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {/* Background for active items */}
                      {isActive && (
                        <motion.div 
                          className="absolute inset-0 -z-10 bg-blue-500/10 dark:bg-blue-400/10 rounded-md"
                          layoutId="activeMobileNavBackground"
                        />
                      )}
                      
                      {/* Left border for active items */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px]">
                        <motion.div 
                          className="h-full bg-blue-500 dark:bg-blue-400"
                          initial={{ height: isActive ? '100%' : '0%' }}
                          animate={{ height: isActive ? '100%' : '0%' }}
                          exit={{ height: '0%' }}
                        />
                      </div>
                      
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Mobile CV button */}
              <motion.button
                onClick={handleDownloadCV}
                className="w-full mt-2 px-3 py-2 rounded-md text-base font-medium relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-400/80 dark:from-blue-500/80 dark:to-blue-300/80 rounded-md"
                  animate={{
                    background: [
                      'linear-gradient(90deg, rgba(37, 99, 235, 0.8) 0%, rgba(96, 165, 250, 0.8) 100%)',
                      'linear-gradient(90deg, rgba(96, 165, 250, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)',
                      'linear-gradient(90deg, rgba(37, 99, 235, 0.8) 0%, rgba(96, 165, 250, 0.8) 100%)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Scanline effect */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background: `linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.5), transparent, transparent)`,
                    backgroundSize: '100% 10px',
                    backgroundPosition: `0 ${scanline}%`,
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                
                <div className="relative flex items-center justify-center text-white">
                  <Download className="w-4 h-4 mr-2" />
                  <span>CV</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}