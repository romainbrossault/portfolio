import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 0.5,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-blue-50 dark:bg-gray-900 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-600 dark:text-blue-300 relative"
          >
            RB
          </motion.div>
          {bubbles.map(bubble => (
            <motion.div
              key={bubble.id}
              initial={{
                opacity: 0,
                scale: 0,
                x: bubble.x,
                y: bubble.y
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: bubble.x + (Math.random() - 0.5) * 200,
                y: bubble.y - 200
              }}
              transition={{
                duration: 1.5,
                delay: bubble.delay,
                ease: "easeOut"
              }}
              className="absolute rounded-full bg-blue-300/30 dark:bg-blue-500/30"
              style={{
                width: bubble.size,
                height: bubble.size
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}