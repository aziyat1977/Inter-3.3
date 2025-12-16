import React from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;