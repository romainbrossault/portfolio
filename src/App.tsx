import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import WaveBackground from './components/WaveBackground';
import BubbleEffect from './components/BubbleEffect';
import IntroAnimation from './components/IntroAnimation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Passions from './pages/Passions';
import Contact from './pages/Contact';
import Formations from './pages/Formations';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col cursor-bubble">
      <WaveBackground />
      <BubbleEffect />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/competences" element={<Skills />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/passions" element={<Passions />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <IntroAnimation />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;