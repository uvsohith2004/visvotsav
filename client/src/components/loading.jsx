import React, { useState, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { home } from '@/constants';

const Particle = ({ id, initialX, initialY, mouseX, mouseY }) => {
  const props = useSpring({
    to: { x: initialX + (mouseX - initialX) / 10, y: initialY + (mouseY - initialY) / 10 },
    config: { mass: 1, tension: 120, friction: 14 }
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        width: 2 + Math.random() * 4,
        height: 2 + Math.random() * 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '50%',
        ...props
      }}
    />
  );
};

const ParticleField = ({ count = 100 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })),
    [count]
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          id={particle.id}
          initialX={particle.x}
          initialY={particle.y}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      ))}
    </div>
  );
};

const LoadingScreen = () => {
  const centralElementControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const animateCentralElement = async () => {
      await centralElementControls.start({
        scale: [1, 1.2, 1],
        rotate: [0, 360],
        transition: { duration: 1, ease: "easeInOut", repeat: Infinity }
      });
    };

    const animateText = async () => {
      await textControls.start({
        opacity: [0, 1, 0],
        y: [20, 0, -20],
        transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
      });
    };

    animateCentralElement();
    animateText();
  }, [centralElementControls, textControls]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        .floating-badge {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: #ff0066;
          color: #fff;
          padding: 5px 10px;
          border-radius: 5px;
          animation: float 2s infinite ease-in-out;
          cursor: pointer;
          z-index: 9999;
          text-decoration: none;
          font-size: 16px;
        }
      `}</style>
      <ParticleField />
      <div className="text-center z-10">
        <motion.div
          className="w-40 h-40 mb-8 mx-auto relative"
          animate={centralElementControls}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="15" fill="white" />
          </svg>
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
              ],
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          animate={textControls}
        >
         {`${home.event} ${home.eventYear}`}
        </motion.h2>
      </div>
      <a
        className="floating-badge"
        href="https://example.com/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by UV.Sohith
      </a>
    </div>
  );
};

export default LoadingScreen;
