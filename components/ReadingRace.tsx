import React, { useState, useEffect } from 'react';
import { BookOpen, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReadingRaceProps {
    step: 'intro' | 'challenge' | 'q1' | 'q2' | 'q3';
}

const ReadingRace: React.FC<ReadingRaceProps> = ({ step }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
        const t = setTimeout(() => setTimeLeft(l => l - 1), 1000);
        return () => clearTimeout(t);
    }
  }, [timerRunning, timeLeft]);

  if (step === 'intro') {
      return (
        <div className="text-center max-w-4xl flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 border-b-8 border-primary inline-block pb-2">
                3. READING RACE 📖
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center w-full">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop" alt="Library" className="w-full md:w-1/2 rounded-3xl shadow-xl h-64 object-cover" />
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20 flex-1">
                    <div className="flex flex-col items-center gap-6 mb-6">
                        <div className="p-6 bg-blue-100 dark:bg-blue-900 rounded-2xl text-blue-600 dark:text-blue-300">
                            <BookOpen size={48} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2">Quick Scan</h3>
                            <p className="opacity-70 text-xl">You have 60 seconds to scan text 12b000.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  if (step === 'challenge') {
      return (
        <div className="bg-white/90 dark:bg-gray-800/90 p-12 rounded-full shadow-2xl w-80 h-80 flex flex-col items-center justify-center border-8 border-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary opacity-5 group-hover:opacity-10 transition-opacity" />
            
            {!timerRunning && timeLeft === 60 ? (
                <button onClick={() => setTimerRunning(true)} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                    <Timer size={48} />
                    <span className="text-2xl font-black">START</span>
                    <span className="text-sm">60 Seconds</span>
                </button>
            ) : timeLeft === 0 ? (
                <div className="animate-bounce text-center">
                    <span className="text-4xl font-black">TIME'S UP!</span>
                </div>
            ) : (
                <div className="text-center">
                    <span className="text-8xl font-black font-mono">{timeLeft}</span>
                    <p className="text-primary font-bold mt-2">SCAN NOW!</p>
                </div>
            )}
        </div>
      );
  }

  const QuestionCard = ({ q, a, num, img }: { q: string, a: string, num: string, img: string }) => (
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center">
           <img src={img} alt="Question Context" className="w-full md:w-1/3 rounded-3xl shadow-xl h-64 object-cover" />
           <div className="flex-1 w-full">
                <div className="text-center md:text-left mb-4">
                    <span className="text-primary font-bold tracking-widest uppercase">Question {num}</span>
                </div>
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-10 shadow-xl border border-white/20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">{q}</h3>
                    <details className="group">
                        <summary className="list-none flex">
                            <div className="px-8 py-4 bg-gray-100 dark:bg-gray-700 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 font-bold transition-colors">
                                Reveal Answer
                            </div>
                        </summary>
                        <div className="mt-8 animate-[fadeIn_0.5s_ease-out]">
                            <p className="text-2xl text-primary font-bold pl-6 border-l-4 border-primary">{a}</p>
                        </div>
                    </details>
                </div>
          </div>
      </div>
  );

  if (step === 'q1') return <QuestionCard num="1/3" q='What happens if you Google "reduce stress"?' a="You get 34 million hits." img="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=600&auto=format&fit=crop" />;
  if (step === 'q2') return <QuestionCard num="2/3" q='What did the instructors shout?' a='"Faster!" and "Not very good!"' img="https://images.unsplash.com/photo-1551853635-43ea23a2468e?q=80&w=600&auto=format&fit=crop" />;
  if (step === 'q3') return <QuestionCard num="3/3" q='Why did one group NOT get sick?' a='Because they believed stress was good for them.' img="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop" />;
  
  return null;
};

export default ReadingRace;