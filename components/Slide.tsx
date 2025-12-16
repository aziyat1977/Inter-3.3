import React from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, scale: 0.9, rotateY: -10 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5 
      }}
      className="w-full h-full flex flex-col justify-center items-center text-center backface-hidden"
    >
      {children}
    </motion.div>
  );
};

export default Slide;