import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wind } from 'lucide-react';

interface BreathingGameProps {
    step: 'intro' | 'game';
}

const BreathingGame: React.FC<BreathingGameProps> = ({ step }) => {
    const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');

    useEffect(() => {
        if (step !== 'game') return;

        const cycle = async () => {
            while(true) {
                setPhase('Inhale');
                await new Promise(r => setTimeout(r, 4000));
                setPhase('Hold');
                await new Promise(r => setTimeout(r, 4000));
                setPhase('Exhale');
                await new Promise(r => setTimeout(r, 4000));
            }
        };
        cycle();
    }, [step]);

    if (step === 'intro') {
        return (
            <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-display font-black mb-8 text-blue-500">2. THE ANTIDOTE 🌬️</h2>
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-10 shadow-xl border border-white/20">
                    <Wind size={64} className="mx-auto text-blue-400 mb-6" />
                    <p className="text-2xl font-medium leading-relaxed mb-6">
                        Stress hijacks your breath. You can hijack it back.
                    </p>
                    <p className="text-xl opacity-70">
                        Let's try "Box Breathing". It tells your nervous system to calm down immediately.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h3 className="text-3xl font-bold mb-12 opacity-80">Follow the circle</h3>
            
            <div className="relative flex items-center justify-center w-80 h-80">
                {/* Expanding Circle */}
                <motion.div 
                    animate={{
                        scale: phase === 'Inhale' ? 2 : phase === 'Exhale' ? 1 : 2,
                        opacity: phase === 'Hold' ? 0.8 : 1,
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className={`w-32 h-32 rounded-full blur-xl absolute ${
                        phase === 'Inhale' ? 'bg-blue-400' : phase === 'Hold' ? 'bg-purple-400' : 'bg-green-400'
                    }`}
                />
                 <motion.div 
                    animate={{
                        scale: phase === 'Inhale' ? 2 : phase === 'Exhale' ? 1 : 2,
                        borderColor: phase === 'Inhale' ? '#60A5FA' : phase === 'Hold' ? '#C084FC' : '#4ADE80',
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full border-4 absolute flex items-center justify-center bg-white/10 backdrop-blur-sm"
                >
                    <span className="text-xl font-black uppercase tracking-widest">{phase}</span>
                </motion.div>
            </div>

            <div className="mt-12 flex gap-8 text-lg font-medium opacity-50">
                <span className={phase === 'Inhale' ? 'text-blue-500 opacity-100 scale-110 font-bold' : ''}>Inhale (4s)</span>
                <span className={phase === 'Hold' ? 'text-purple-500 opacity-100 scale-110 font-bold' : ''}>Hold (4s)</span>
                <span className={phase === 'Exhale' ? 'text-green-500 opacity-100 scale-110 font-bold' : ''}>Exhale (4s)</span>
            </div>
        </div>
    );
};

export default BreathingGame;