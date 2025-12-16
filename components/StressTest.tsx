import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Timer, AlertTriangle, Brain } from 'lucide-react';

interface StressTestProps {
    step: 'intro' | 'fact-cortisol' | 'game-math' | 'fact-stroop' | 'game-stroop' | 'conclusion';
}

const mathQuestions = [
  { q: "5 + 5 = ?", a: 10 },
  { q: "10 - 3 = ?", a: 7 },
  { q: "2 x 6 = ?", a: 12 },
  { q: "20 - 5 = ?", a: 15 },
  { q: "3 x 3 = ?", a: 9 }
];

const stroopQuestions = [
    { text: "RED", color: "text-blue-500", answer: "Blue" },
    { text: "GREEN", color: "text-red-500", answer: "Red" },
    { text: "BLUE", color: "text-green-500", answer: "Green" },
    { text: "YELLOW", color: "text-purple-500", answer: "Purple" },
    { text: "PURPLE", color: "text-yellow-500", answer: "Yellow" },
];

const StressTest: React.FC<StressTestProps> = ({ step }) => {
  // Math Game State
  const [mathRunning, setMathRunning] = useState(false);
  const [mathQIndex, setMathQIndex] = useState(0);
  const [mathInput, setMathInput] = useState("");
  const [mathCompleted, setMathCompleted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#222]");
  const inputRef = useRef<HTMLInputElement>(null);

  // Stroop Game State
  const [stroopRunning, setStroopRunning] = useState(false);
  const [stroopIndex, setStroopIndex] = useState(0);
  const [stroopScore, setStroopScore] = useState(0);
  const [stroopFinished, setStroopFinished] = useState(false);

  // Math Logic
  useEffect(() => {
    if (mathRunning && inputRef.current && !mathCompleted) {
      inputRef.current.focus();
    }
  }, [mathRunning, mathQIndex, mathCompleted]);

  useEffect(() => {
    if (mathRunning && !mathCompleted) {
      setBgColor("bg-[#222]");
      const timer = setTimeout(() => {
        setIsShaking(true);
        setBgColor("bg-red-900");
      }, 2000); 
      return () => { clearTimeout(timer); setIsShaking(false); setBgColor("bg-[#222]"); };
    }
  }, [mathQIndex, mathRunning, mathCompleted]);

  const startMath = () => {
    setMathRunning(true);
    setMathQIndex(0);
    setMathCompleted(false);
    setMathInput("");
  };

  const handleMathInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMathInput(e.target.value);
    const val = parseInt(e.target.value);
    if (val === mathQuestions[mathQIndex].a) {
      if (mathQIndex < mathQuestions.length - 1) {
        setMathInput("");
        setMathQIndex(prev => prev + 1);
        setIsShaking(false);
      } else {
        setMathCompleted(true);
        setMathRunning(false);
        setBgColor("bg-green-700");
      }
    }
  };

  // Stroop Logic
  const handleStroopChoice = (choice: string) => {
      if (choice === stroopQuestions[stroopIndex].answer) {
          setStroopScore(s => s + 1);
      }
      if (stroopIndex < stroopQuestions.length - 1) {
          setStroopIndex(i => i + 1);
      } else {
          setStroopFinished(true);
          setStroopRunning(false);
      }
  };

  const resetStroop = () => {
      setStroopIndex(0);
      setStroopScore(0);
      setStroopFinished(false);
      setStroopRunning(true);
  };

  // Renders
  if (step === 'intro') {
      return (
        <div className="flex flex-col items-center max-w-4xl">
            <h2 className="text-5xl font-display font-black mb-8">1. THE STRESS TEST 🧠</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop" 
                    alt="Stressed Clock" 
                    className="w-full md:w-1/2 rounded-3xl shadow-2xl h-80 object-cover"
                />
                <div className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-3xl shadow-xl flex-1">
                    <p className="text-3xl font-medium mb-4">Can you calculate under pressure?</p>
                    <p className="text-xl opacity-70">We are going to test your brain's reaction to stress.</p>
                    <div className="mt-6 flex gap-2 justify-center">
                        <AlertTriangle className="text-red-500" size={32} />
                        <span className="font-bold text-red-500 text-xl">Warning: Mild Stress Ahead</span>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  if (step === 'fact-cortisol') {
      return (
         <div className="max-w-4xl w-full flex flex-col items-center">
             <div className="bg-red-50 dark:bg-red-900/30 border-l-8 border-red-500 p-8 rounded-r-3xl shadow-xl w-full mb-8">
                 <h3 className="text-3xl font-black text-red-600 dark:text-red-400 mb-4">FACT: Fight or Flight</h3>
                 <p className="text-2xl leading-relaxed">
                     When stressed, your body dumps <strong>Adrenaline</strong> and <strong>Cortisol</strong> into your blood. 
                     Your heart beats faster to send oxygen to your muscles. 
                     <br/><br/>
                     <span className="opacity-70 text-lg">Logic and detailed thinking actually shut down to save energy for running away!</span>
                 </p>
             </div>
             <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop" alt="Running" className="h-64 w-full object-cover rounded-3xl shadow-lg opacity-80" />
         </div>
      );
  }

  if (step === 'game-math') {
    return (
        <div className="w-full max-w-3xl">
          <div className={`relative overflow-hidden rounded-3xl p-12 text-center text-white transition-colors duration-500 shadow-2xl ${bgColor} ${isShaking ? 'animate-shake' : ''}`}>
            <div className={`h-4 bg-red-500 absolute top-0 left-0 transition-all duration-[10000ms] ease-linear ${mathRunning && !mathCompleted ? 'w-full' : 'w-0'}`} />
  
            {!mathRunning && !mathCompleted ? (
               <div className="py-12">
                 <Brain size={64} className="mx-auto mb-6 opacity-80" />
                 <h3 className="text-5xl font-bold mb-12">Math vs Pressure</h3>
                 <button 
                   onClick={startMath}
                   className="px-12 py-6 bg-white text-black rounded-full font-black text-2xl hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                 >
                   START TEST
                 </button>
               </div>
            ) : mathCompleted ? (
              <div className="py-12">
                 <h3 className="text-5xl md:text-7xl font-bold mb-8 animate-bounce text-green-200">
                   SURVIVED!
                 </h3>
                 <p className="text-xl">Stress didn't kill you!</p>
                 <button onClick={startMath} className="mt-8 px-6 py-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">Try Again</button>
              </div>
            ) : (
              <div className="py-12">
                <h3 className="text-8xl font-black mb-12 font-mono tracking-wider">
                  {mathQuestions[mathQIndex].q}
                </h3>
                <input 
                  ref={inputRef}
                  type="number" 
                  value={mathInput}
                  onChange={handleMathInput}
                  placeholder="?" 
                  className="w-48 h-24 text-center text-6xl bg-white/20 border-4 border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/30 transition-all"
                />
              </div>
            )}
          </div>
        </div>
    );
  }

  if (step === 'fact-stroop') {
      return (
         <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1 text-left">
                 <h3 className="text-4xl font-black mb-6">The Stroop Effect</h3>
                 <p className="text-xl mb-4">
                     Your brain reads words faster than it identifies colors.
                 </p>
                 <p className="text-xl mb-4">
                     When the word <strong className="text-blue-500">RED</strong> is colored blue, your brain has a conflict. This causes <strong>cognitive stress</strong>.
                 </p>
                 <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-xl border border-yellow-300">
                     <strong>Mission:</strong> Click the COLOR of the text, not the word you read.
                 </div>
             </div>
             <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" alt="Confusing Colors" className="w-full md:w-1/2 rounded-3xl shadow-xl h-80 object-cover" />
         </div>
      );
  }

  if (step === 'game-stroop') {
      const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
      
      return (
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
             <div className="bg-gray-100 dark:bg-gray-900 p-4 flex justify-between items-center">
                 <span className="font-bold opacity-50">FOCUS TEST</span>
                 <span className="font-mono">{stroopIndex + 1} / 5</span>
             </div>
             
             <div className="flex-1 p-12 flex flex-col items-center justify-center min-h-[400px]">
                 {!stroopRunning && !stroopFinished ? (
                     <button onClick={resetStroop} className="px-12 py-6 bg-primary text-white rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-xl">
                         START STROOP
                     </button>
                 ) : stroopFinished ? (
                     <div className="text-center">
                         <h3 className="text-5xl font-black mb-4">Score: {stroopScore}/5</h3>
                         <p className="text-xl mb-8">{stroopScore === 5 ? "Laser Focus!" : "Your brain got tricked!"}</p>
                         <button onClick={resetStroop} className="px-8 py-3 bg-gray-200 dark:bg-gray-700 rounded-full font-bold">Retry</button>
                     </div>
                 ) : (
                     <>
                        <h2 className={`text-8xl font-black mb-16 ${stroopQuestions[stroopIndex].color}`}>
                            {stroopQuestions[stroopIndex].text}
                        </h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {colors.map(c => (
                                <button 
                                    key={c}
                                    onClick={() => handleStroopChoice(c)}
                                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-lg min-w-[100px]"
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                     </>
                 )}
             </div>
          </div>
      );
  }

  if (step === 'conclusion') {
    return (
        <div className="text-center max-w-4xl flex flex-col items-center">
            <h2 className="text-4xl font-display font-black mb-8">What just happened?</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-3xl shadow-xl space-y-6 text-lg text-left flex-1">
                    <p>In the reading text, experts shouted <strong className="text-red-500 text-2xl">"FASTER!"</strong> at people.</p>
                    <p>This causes physical stress. But one group stayed healthy...</p>
                    <p className="font-bold text-primary text-2xl bg-primary/10 p-4 rounded-xl">
                        Because they BELIEVED stress was good for them.
                    </p>
                </div>
                <img src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=600&auto=format&fit=crop" alt="Positive Mindset" className="w-full md:w-1/3 rounded-3xl shadow-2xl object-cover h-64" />
            </div>
        </div>
    );
  }

  return null;
};

export default StressTest;