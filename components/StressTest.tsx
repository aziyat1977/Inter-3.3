import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';

const questions = [
  { q: "5 + 5 = ?", a: 10 },
  { q: "10 - 3 = ?", a: 7 },
  { q: "2 x 6 = ?", a: 12 },
  { q: "20 - 5 = ?", a: 15 },
  { q: "3 x 3 = ?", a: 9 }
];

const StressTest: React.FC = () => {
  const [gameRunning, setGameRunning] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#222]");
  const [completed, setCompleted] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when game starts or question changes
  useEffect(() => {
    if (gameRunning && inputRef.current && !completed) {
      inputRef.current.focus();
    }
  }, [gameRunning, currentQIndex, completed]);

  // Trigger stress effects
  useEffect(() => {
    if (gameRunning && !completed) {
      setBgColor("bg-[#222]");
      const timer = setTimeout(() => {
        setIsShaking(true);
        setBgColor("bg-red-900");
      }, 2000); // Stress kicks in after 2 seconds

      return () => {
        clearTimeout(timer);
        setIsShaking(false);
        setBgColor("bg-[#222]");
      };
    }
  }, [currentQIndex, gameRunning, completed]);

  const startGame = () => {
    setGameRunning(true);
    setCurrentQIndex(0);
    setCompleted(false);
    setMessage("");
    setInputValue("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const val = parseInt(e.target.value);
    
    if (val === questions[currentQIndex].a) {
      // Correct Answer
      if (currentQIndex < questions.length - 1) {
        setInputValue("");
        setCurrentQIndex(prev => prev + 1);
        // Reset shake temporarily
        setIsShaking(false);
      } else {
        // Win
        setCompleted(true);
        setGameRunning(false);
        setBgColor("bg-green-700");
        setMessage("SURVIVED! Stress didn't kill you!");
      }
    }
  };

  return (
    <FadeInSection id="hook">
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 border-l-8 border-primary pl-6">
        1. THE STRESS TEST 🧠
      </h2>
      <p className="mb-8 text-lg opacity-80">
        Can you calculate under pressure? Press Start. <strong>Don't panic.</strong>
      </p>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        <div className={`relative overflow-hidden rounded-2xl p-10 text-center text-white transition-colors duration-500 ${bgColor} ${isShaking ? 'animate-shake' : ''}`}>
          
          {/* Timer bar visualization (fake stress bar) */}
          <div className={`h-2.5 bg-red-500 absolute top-0 left-0 transition-all duration-[10000ms] ease-linear ${gameRunning && !completed ? 'w-full' : 'w-0'}`} />

          {!gameRunning && !completed ? (
             <div className="py-10">
               <h3 className="text-4xl font-bold mb-8">Ready?</h3>
               <button 
                 onClick={startGame}
                 className="px-8 py-4 bg-white text-black rounded-full font-black text-xl hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.5)]"
               >
                 START TEST
               </button>
             </div>
          ) : completed ? (
            <div className="py-10">
               <h3 className="text-3xl md:text-5xl font-bold mb-4 animate-bounce text-green-200">
                 {message}
               </h3>
               <button onClick={startGame} className="mt-4 underline opacity-70 hover:opacity-100">Try Again</button>
            </div>
          ) : (
            <div className="py-8">
              <h3 className="text-6xl font-black mb-8 font-mono tracking-wider">
                {questions[currentQIndex].q}
              </h3>
              <input 
                ref={inputRef}
                type="number" 
                value={inputValue}
                onChange={handleInput}
                placeholder="?" 
                className="w-32 h-20 text-center text-4xl bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/30 transition-all"
              />
            </div>
          )}
        </div>
      </div>
      <p className="mt-6 text-center italic opacity-70">
        In the reading text, experts shouted "FASTER!" at people. This causes physical stress. But one group stayed healthy... why?
      </p>
    </FadeInSection>
  );
};

export default StressTest;