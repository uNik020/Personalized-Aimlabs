import React, { useState } from "react";
import { motion } from "framer-motion";

const hitSound = new Audio("/hit.mp3"); // Ensure hit.mp3 is in public folder

const Target = ({ position, onHit }) => {
  const [isHit, setIsHit] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleClick = () => {
    setIsHit(true);
    hitSound.currentTime = 0; // Reset sound for quick repeated hits
    hitSound.play();
    generateParticles();
    onHit();
    setTimeout(() => setIsHit(false), 200); // Reset after animation
  };

  // Generate small dots for explosion effect
  const generateParticles = () => {
    const newParticles = Array.from({ length: 10 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 20 - 10, // Random offset
      y: Math.random() * 20 - 10,
    }));
    setParticles(newParticles);

    setTimeout(() => setParticles([]), 300); // Remove particles after animation
  };

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={isHit ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className="w-10 h-10 bg-red-600 rounded-full absolute"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Particle Effects */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, x: 0, y: 0 }}
          animate={{ opacity: 0, x: particle.x, y: particle.y }}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 bg-yellow-400 rounded-full absolute"
        />
      ))}
    </motion.div>
  );
};

export default Target;
