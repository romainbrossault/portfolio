import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface CelestialObject {
  x: number;
  y: number;
  size: number;
  color: string;
  orbitRadius: number;
  speed: number;
  type: 'sun' | 'planet' | 'moon' | 'star';
  name?: string;
}

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

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Configuration pour le système solaire
    const celestialObjects: CelestialObject[] = [
      // Soleil
      {
        x: centerX,
        y: centerY,
        size: 40,
        color: '#fbbf24',
        orbitRadius: 0,
        speed: 0,
        type: 'sun',
        name: 'Sun'
      },
      // Mercure
      {
        x: centerX,
        y: centerY,
        size: 8,
        color: '#94a3b8',
        orbitRadius: 60,
        speed: 0.008,
        type: 'planet',
        name: 'Mercury'
      },
      // Venus
      {
        x: centerX,
        y: centerY,
        size: 12,
        color: '#fcd34d',
        orbitRadius: 90,
        speed: 0.006,
        type: 'planet',
        name: 'Venus'
      },
      // Terre
      {
        x: centerX,
        y: centerY,
        size: 14,
        color: '#60a5fa',
        orbitRadius: 120,
        speed: 0.004,
        type: 'planet',
        name: 'Earth'
      },
      // Mars
      {
        x: centerX,
        y: centerY,
        size: 10,
        color: '#ef4444',
        orbitRadius: 150,
        speed: 0.003,
        type: 'planet',
        name: 'Mars'
      },
      // Jupiter
      {
        x: centerX,
        y: centerY,
        size: 25,
        color: '#f97316',
        orbitRadius: 200,
        speed: 0.002,
        type: 'planet',
        name: 'Jupiter'
      },
      // Saturne
      {
        x: centerX,
        y: centerY,
        size: 22,
        color: '#eab308',
        orbitRadius: 250,
        speed: 0.001,
        type: 'planet',
        name: 'Saturn'
      }
    ];

    // Configuration pour les bulles d'eau
    const bubbles: Bubble[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: Math.random() * 8 + 2,
      speedY: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }));

    // Étoiles pour le mode sombre
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random()
    }));

    let time = 0;

    function drawSolarSystem() {
      // Dessiner les étoiles
      stars.forEach(star => {
        const twinkle = Math.abs(Math.sin(time * 0.001 + star.x));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      // Dessiner les orbites
      celestialObjects.forEach(obj => {
        if (obj.type === 'planet') {
          ctx.beginPath();
          ctx.arc(centerX, centerY, obj.orbitRadius, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.stroke();
        }
      });

      // Dessiner les objets célestes
      celestialObjects.forEach(obj => {
        // Calculer la position en orbite pour les planètes
        if (obj.type === 'planet') {
          obj.x = centerX + Math.cos(time * obj.speed) * obj.orbitRadius;
          obj.y = centerY + Math.sin(time * obj.speed) * obj.orbitRadius;
        }

        // Créer un gradient pour l'objet
        const gradient = ctx.createRadialGradient(
          obj.x, obj.y, 0,
          obj.x, obj.y, obj.size
        );

        if (obj.type === 'sun') {
          gradient.addColorStop(0, '#fef3c7');
          gradient.addColorStop(0.5, '#fbbf24');
          gradient.addColorStop(1, '#b45309');
          
          // Ajouter une lueur autour du soleil
          ctx.beginPath();
          ctx.arc(obj.x, obj.y, obj.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(251, 191, 36, 0.1)';
          ctx.fill();
        } else {
          gradient.addColorStop(0, obj.color);
          gradient.addColorStop(1, `${obj.color}00`);
        }

        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Ajouter des anneaux pour Saturne
        if (obj.name === 'Saturn') {
          ctx.beginPath();
          ctx.ellipse(obj.x, obj.y, obj.size * 1.8, obj.size * 0.3, 
            Math.PI / 4, 0, Math.PI * 2);
          ctx.strokeStyle = '#fcd34d44';
          ctx.stroke();
        }
      });
    }

    function drawWaterBubbles() {
      bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${bubble.opacity})`;
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

      if (theme === 'dark') {
        drawSolarSystem();
      } else {
        drawWaterBubbles();
      }

      time += 0.5;
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