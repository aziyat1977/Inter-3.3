import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import FadeInSection from './FadeInSection';

const CORRECT_ORDER = ["Taking", "an", "important", "exam", "IS", "stressful"];

const GrammarBuilder: React.FC = () => {
  const [currentSentence, setCurrentSentence] = useState<string[]>([]);
  const [wordStates, setWordStates] = useState(CORRECT_ORDER.map(() => false)); // false = available, true = used

  const addWord = (word: string, index: number) => {
    if (wordStates[index]) return; // Already used

    const newSentence = [...currentSentence, word];
    setCurrentSentence(newSentence);
    
    const newWordStates = [...wordStates];
    newWordStates[index] = true;
    setWordStates(newWordStates);
  };

  const reset = () => {
    setCurrentSentence([]);
    setWordStates(CORRECT_ORDER.map(() => false));
  };

  const isCorrect = JSON.stringify(currentSentence) === JSON.stringify(CORRECT_ORDER);
  const isFull = currentSentence.length === CORRECT_ORDER.length;

  return (
    <FadeInSection id="grammar">
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 border-l-8 border-primary pl-6">
        3. THE HEAVY SUBJECT 🏋️‍♂️
      </h2>
      <p className="mb-8 text-lg opacity-80">
        English sentences are like burgers. Sometimes the subject is a <strong>Big Mac</strong>.
      </p>

      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        <h3 className="text-xl font-bold mb-6">Interactive Builder</h3>
        <p className="mb-4 text-sm opacity-70">Click the words in the correct order to form a sentence:</p>

        {/* Drop Zone */}
        <div className={`min-h-[80px] w-full border-4 border-dashed rounded-2xl flex flex-wrap items-center justify-center gap-3 p-4 mb-8 transition-colors duration-300 ${isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : isFull ? 'border-red-400 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-black/20'}`}>
          {currentSentence.length === 0 && (
            <span className="text-gray-400 italic pointer-events-none">Sentence will appear here...</span>
          )}
          {currentSentence.map((word, i) => (
            <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg font-bold animate-[pop_0.3s_ease-out]">
              {word}
            </span>
          ))}
        </div>

        {/* Word Bank */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CORRECT_ORDER.map((word, index) => (
            <button
              key={index}
              onClick={() => addWord(word, index)}
              disabled={wordStates[index]}
              className={`px-6 py-3 rounded-full font-bold text-white shadow-md transition-all duration-200 transform hover:-translate-y-1 active:scale-95 disabled:opacity-30 disabled:hover:translate-y-0 disabled:cursor-not-allowed ${
                word === "IS" || word === "stressful" ? "bg-gray-700 dark:bg-gray-600" : "bg-secondary"
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
            <button 
                onClick={reset}
                className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold transition-colors"
            >
                <RotateCcw size={18} /> Reset
            </button>
            
            <div className="h-8">
                {isCorrect && <p className="text-green-500 font-black text-xl animate-bounce">PERFECT! That is a heavy subject!</p>}
                {isFull && !isCorrect && <p className="text-red-500 font-bold text-xl animate-pulse">Oops! Try again.</p>}
            </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">The Rule</h4>
        <p>Subject = <strong>[Gerund (-ing) Phrase]</strong> + Verb.</p>
        <p className="italic mt-2 opacity-80">Example: [Putting 'reduce stress' into Google] gets you results.</p>
      </div>
    </FadeInSection>
  );
};

export default GrammarBuilder;