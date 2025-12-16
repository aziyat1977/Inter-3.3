import React from 'react';
import { Info, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
    step: 'title' | 'fact' | 'goals';
}

const Hero: React.FC<HeroProps> = ({ step }) => {
  
  if (step === 'fact') {
    return (
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
            <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Brain Synapses" 
                className="w-full md:w-1/2 rounded-3xl shadow-2xl object-cover h-64 md:h-96"
            />
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl shadow-xl flex-1 text-left border-l-8 border-yellow-400">
                <div className="flex items-center gap-3 mb-4 text-yellow-500">
                    <Zap size={32} fill="currentColor" />
                    <span className="font-bold tracking-widest uppercase">Did you know?</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                    Short-term stress can actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">boost your memory</span>.
                </h3>
                <p className="text-xl opacity-80">
                    When you're stressed, your brain releases cortisol. In small bursts, this helps you focus and remember details vividly (like where you were during an emergency).
                </p>
            </div>
        </div>
    );
  }

  if (step === 'goals') {
      return (
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-xl flex-1 text-left h-full">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary">
                <Info size={32} /> Lesson Goals
                </h3>
                <ul className="space-y-6 font-medium text-lg md:text-xl">
                <motion.li 
                    initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                    className="flex items-start gap-4"
                >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600"><Brain size={20} /></div>
                    <span>Understand <strong className="text-primary block">Complex Noun Phrases</strong> (Heavy Subjects)</span>
                </motion.li>
                <motion.li 
                     initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                >
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg text-green-600"><span className="text-xl">🧱</span></div>
                    <span>Master <strong className="text-primary block">Compound Adjectives</strong> (Word Lego)</span>
                </motion.li>
                <motion.li 
                     initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                    className="flex items-start gap-4"
                >
                    <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg text-red-600"><span className="text-xl">🗣️</span></div>
                    <span>Discuss health, pressure, and exams.</span>
                </motion.li>
                </ul>
            </div>
             <motion.img 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Students studying" 
                className="w-full md:w-1/3 rounded-3xl shadow-2xl object-cover h-64 md:h-full hidden md:block"
            />
        </div>
      );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center relative z-10">
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ duration: 5, repeat: Infinity }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 rounded-full" />
        <img 
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop" 
            alt="Open Book and Flowers" 
            className="w-64 h-64 object-cover rounded-full border-8 border-white/20 shadow-2xl relative z-10"
        />
      </motion.div>

      <h1 className="font-display font-black text-6xl md:text-8xl mb-6 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] dark:from-[#0575E6] dark:to-[#021B79] bg-clip-text text-transparent leading-tight pb-2 drop-shadow-sm">
        STRESS &<br/>SUCCESS
      </h1>
      <p className="text-2xl md:text-3xl font-light opacity-90 max-w-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full">
        Unit 3.3: Is stress actually good for you?
      </p>
    </div>
  );
};

export default Hero;