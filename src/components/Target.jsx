import React from 'react';
import { motion } from 'framer-motion';

const Target = ({ onHit, position }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 0.9 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute z-50 w-12 h-12 bg-red-500 rounded-full shadow-lg hover:bg-red-400 transition-colors"
      style={{
        top: `${position.y}px`, // Use pixel values to ensure accurate positioning
        left: `${position.x}px`, // Use pixel values for positioning
        transform: 'translate(-50%, -50%)' // Center the target
      }}
      onClick={onHit}
    />
  );
};

export default Target;
