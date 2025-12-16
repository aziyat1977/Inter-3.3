import React, { useState, useEffect } from 'react';
import { RotateCcw, Check, Star } from 'lucide-react';

const LEVELS = [
    {
        id: 'level1',
        label: 'Level 1: Basic',
        words: ["Taking", "an", "exam", "IS", "stressful"],
        correct: ["Taking", "an", "exam", "IS", "stressful"]
    },
    {
        id: 'level2',
        label: 'Level 2: The Big Mac',
        words: ["Putting", "reduce", "stress", "into", "Google", "WORKS"],
        correct: ["Putting", "reduce", "stress", "into", "Google", "WORKS"]
    },
    {
        id: 'level3',
        label: 'Level 3: Expert',
        words: ["Believing", "stress", "is", "good", "HELPS", "you"],
        correct: ["Believing", "stress", "is", "good", "HELPS", "you"]
    }
];

interface GrammarBuilderProps {
    step: 'intro' | 'builder' | 'rule' | 'level1' | 'level2' | 'level3';
}

const GrammarBuilder: React.FC<GrammarBuilderProps> = ({ step }) => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState<string[]>([]);
  const [wordStates, setWordStates] = useState<boolean[]>([]);

  // Map step to level index
  useEffect(() => {
      if (step === 'level1') setLevelIndex(0);
      if (step === 'level2') setLevelIndex(1);
      if (step === 'level3') setLevelIndex(2);
      reset();
  }, [step]);

  const currentLevel = LEVELS[levelIndex];

  const reset = () => {
      setCurrentSentence([]);
      setWordStates(new Array(currentLevel ? currentLevel.words.length : 0).fill(false));
  };

  const addWord = (word: string, index: number) => {
    if (wordStates[index]) return; 

    const newSentence = [...currentSentence, word];
    setCurrentSentence(newSentence);
    
    const newWordStates = [...wordStates];
    newWordStates[index] = true;
    setWordStates(newWordStates);
  };

  const isCorrect = JSON.stringify(currentSentence) === JSON.stringify(currentLevel?.correct);
  const isFull = currentSentence.length === (currentLevel?.correct.length || 0);

  if (step === 'intro') {
      return (
        <div className="text-center max-w-4xl flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8">4. THE HEAVY SUBJECT 🏋️‍♂️</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop" alt="Burger" className="w-full md:w-1/2 rounded-3xl shadow-xl h-80 object-cover" />
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-10 shadow-xl border border-white/20 flex-1">
                    <p className="text-2xl font-bold leading-relaxed">
                        English sentences are like burgers. 
                        <br/><br/>
                        Sometimes the subject is a <span className="text-primary text-3xl font-black">Big Mac</span>.
                    </p>
                </div>
            </div>
        </div>
      );
  }

  if (step === 'rule') {
      return (
        <div className="text-center max-w-2xl">
             <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Star size={120} fill="currentColor" />
                </div>
                <h4 className="text-3xl font-black text-blue-700 dark:text-blue-300 mb-6">The Rule</h4>
                <div className="text-left space-y-6 text-xl relative z-10">
                    <p>Subject = <strong className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">[Gerund (-ing) Phrase]</strong> + Verb.</p>
                    <hr className="border-blue-200 dark:border-blue-800" />
                    <p className="italic opacity-80">Example:</p>
                    <p className="font-medium">
                        <span className="border-b-4 border-primary">[Putting 'reduce stress' into Google]</span> gets you results.
                    </p>
                </div>
            </div>
        </div>
      );
  }

  if (!currentLevel) return null;

  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold opacity-80">{currentLevel.label}</h3>
        <div className="flex gap-1">
            {[0, 1, 2].map(i => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= levelIndex ? 'bg-primary' : 'bg-gray-300'}`} />
            ))}
        </div>
      </div>

      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        
        {/* Drop Zone */}
        <div className={`min-h-[120px] w-full border-4 border-dashed rounded-2xl flex flex-wrap items-center justify-center gap-4 p-6 mb-12 transition-colors duration-300 ${isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : isFull ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-black/20'}`}>
          {currentSentence.length === 0 && (
            <span className="text-gray-400 italic pointer-events-none text-xl">Tap words below...</span>
          )}
          {currentSentence.map((word, i) => (
            <span key={i} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-bold text-xl animate-[pop_0.3s_ease-out]">
              {word}
            </span>
          ))}
        </div>

        {/* Word Bank */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {currentLevel.words.map((word, index) => (
            <button
              key={index}
              onClick={() => addWord(word, index)}
              disabled={wordStates[index]}
              className={`px-8 py-4 rounded-full font-bold text-lg text-white shadow-md transition-all duration-200 transform hover:-translate-y-1 active:scale-95 disabled:opacity-30 disabled:hover:translate-y-0 disabled:cursor-not-allowed ${
                word === "IS" || word === "stressful" || word === "WORKS" || word === "HELPS" ? "bg-gray-700 dark:bg-gray-600" : "bg-secondary"
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 h-24 justify-end">
            {isCorrect ? (
                <div className="flex items-center gap-2 text-green-500 font-black text-2xl animate-bounce">
                    <Check size={32} />
                    <span>PERFECT!</span>
                </div>
            ) : isFull ? (
                <div className="flex flex-col items-center">
                    <p className="text-red-500 font-bold text-xl mb-2">Oops! Try again.</p>
                    <button onClick={reset} className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 transition-colors">
                        <RotateCcw size={18} /> Reset
                    </button>
                </div>
            ) : (
                <button 
                    onClick={reset}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold transition-colors ${currentSentence.length === 0 ? 'opacity-0' : 'opacity-100'}`}
                >
                    <RotateCcw size={18} /> Reset
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default GrammarBuilder;