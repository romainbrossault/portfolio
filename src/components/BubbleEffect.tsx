import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
}

export default function BubbleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles: Bubble[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: Math.random() * 8 + 2,
      speedY: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }));

    function drawWaterBubbles() {
      bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${bubble.opacity})`; // Rouge pour correspondre au thème
        ctx.fill();

        bubble.y -= bubble.speedY;

        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (theme === 'light') {
        drawWaterBubbles();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}