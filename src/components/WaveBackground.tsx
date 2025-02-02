import React from 'react';
import { motion } from 'framer-motion';

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, #60A5FA 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, #93C5FD 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, #1E40AF 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}