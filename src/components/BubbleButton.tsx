import React from 'react';
import { motion } from 'framer-motion';

interface BubbleButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function BubbleButton({ onClick, children, className = '' }: BubbleButtonProps) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}  
    >
      {children}
      <motion.div
        initial={{ opacity: 0 }}
        whileTap={{
          opacity: 1,
          transition: { duration: 0.1 }
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            initial={{
              x: '50%',
              y: '50%',
              opacity: 0
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.02,
            }}
          />
        ))}
      </motion.div>
    </motion.button>
  );
}