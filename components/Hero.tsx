import React from 'react';
import { ArrowDown, Info } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Hero: React.FC = () => {
  const scrollToStart = () => {
    document.getElementById('hook')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <FadeInSection id="hero" className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="font-display font-black text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] dark:from-[#0575E6] dark:to-[#021B79] bg-clip-text text-transparent leading-tight pb-2">
        STRESS & SUCCESS
      </h1>
      <p className="text-xl md:text-2xl mb-12 font-light opacity-90">
        Unit 3.3: Is stress actually good for you?
      </p>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl max-w-2xl w-full text-left mb-12 transform hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
          <Info size={24} /> Lesson Goals
        </h3>
        <ul className="space-y-3 font-medium">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-current mt-2.5 shrink-0" />
            <span>Understand <strong className="text-primary">Complex Noun Phrases</strong> (Heavy Subjects)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-current mt-2.5 shrink-0" />
            <span>Master <strong className="text-primary">Compound Adjectives</strong> (Word Lego)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-current mt-2.5 shrink-0" />
            <span>Discuss health, pressure, and exams.</span>
          </li>
        </ul>
      </div>

      <button
        onClick={scrollToStart}
        className="group relative px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-black text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden"
      >
        <span className="relative z-10">Start Lesson</span>
        <ArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </button>
    </FadeInSection>
  );
};

export default Hero;