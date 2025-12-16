import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, ChevronRight, ChevronLeft } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Slide from './components/Slide';
import Hero from './components/Hero';
import StressTest from './components/StressTest';
import BreathingGame from './components/BreathingGame';
import ReadingRace from './components/ReadingRace';
import GrammarBuilder from './components/GrammarBuilder';
import VocabLego from './components/VocabLego';
import Roleplay from './components/Roleplay';
import DiscussionGenerator from './components/DiscussionGenerator';

// Expanded Slide Structure
const SLIDES = [
  // SECTION 1: INTRO
  { id: 'hero-title', component: <Hero step="title" /> },
  { id: 'hero-fact', component: <Hero step="fact" /> },
  { id: 'hero-goals', component: <Hero step="goals" /> },
  
  // SECTION 2: STRESS TEST & GAMES
  { id: 'stress-intro', component: <StressTest step="intro" /> },
  { id: 'stress-fact-1', component: <StressTest step="fact-cortisol" /> },
  { id: 'stress-game-math', component: <StressTest step="game-math" /> },
  { id: 'stress-fact-2', component: <StressTest step="fact-stroop" /> },
  { id: 'stress-game-stroop', component: <StressTest step="game-stroop" /> },
  { id: 'stress-conclusion', component: <StressTest step="conclusion" /> },
  
  // SECTION 3: RELAXATION (New)
  { id: 'breathing-intro', component: <BreathingGame step="intro" /> },
  { id: 'breathing-act', component: <BreathingGame step="game" /> },

  // SECTION 4: READING
  { id: 'reading-intro', component: <ReadingRace step="intro" /> },
  { id: 'reading-challenge', component: <ReadingRace step="challenge" /> },
  { id: 'reading-q1', component: <ReadingRace step="q1" /> },
  { id: 'reading-q2', component: <ReadingRace step="q2" /> },
  { id: 'reading-q3', component: <ReadingRace step="q3" /> },

  // SECTION 5: GRAMMAR
  { id: 'grammar-intro', component: <GrammarBuilder step="intro" /> },
  { id: 'grammar-rule', component: <GrammarBuilder step="rule" /> },
  { id: 'grammar-builder-1', component: <GrammarBuilder step="level1" /> },
  { id: 'grammar-builder-2', component: <GrammarBuilder step="level2" /> },
  { id: 'grammar-builder-3', component: <GrammarBuilder step="level3" /> },

  // SECTION 6: VOCAB
  { id: 'vocab-intro', component: <VocabLego step="intro" /> },
  { id: 'vocab-1', component: <VocabLego step="batch1" /> },
  { id: 'vocab-2', component: <VocabLego step="batch2" /> },
  { id: 'vocab-3', component: <VocabLego step="batch3" /> },
  { id: 'vocab-rule', component: <VocabLego step="rule" /> },
  { id: 'vocab-quiz', component: <VocabLego step="quiz" /> },

  // SECTION 7: PRACTICE
  { id: 'roleplay-intro', component: <Roleplay step="intro" /> },
  { id: 'roleplay-act', component: <Roleplay step="act" /> },
  { id: 'discussion', component: <DiscussionGenerator /> },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) setCurrentSlide(c => c + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(c => c - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className={`h-screen w-screen overflow-hidden flex flex-col transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 w-full h-full -z-10 opacity-10 animate-gradient-bg bg-[length:400%_400%] bg-gradient-to-br from-[#ee7752] via-[#e73c7e] via-[#23a6d5] to-[#23d5ab]" />
      <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${darkMode ? 'bg-[#121212]' : 'bg-[#f0f2f5]'}`} />

      {/* Header / Controls */}
      <div className="flex justify-between items-center p-4 z-50">
        <button 
          onClick={toggleSidebar}
          className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:scale-105 transition-all"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Progress Bar */}
        <div className="flex-1 mx-8 max-w-md h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out relative"
            style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
          >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse" />
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:scale-105 transition-all"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        close={() => setSidebarOpen(false)} 
        jumpTo={(index) => { setCurrentSlide(index); setSidebarOpen(false); }}
      />

      {/* Main Slide Content */}
      <main className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        <div className="w-full max-w-5xl h-full flex flex-col justify-center perspective-1000">
            <Slide key={currentSlide}>
              {SLIDES[currentSlide].component}
            </Slide>
        </div>
      </main>

      {/* Footer Navigation */}
      <div className="p-6 flex justify-between items-center z-40 max-w-5xl mx-auto w-full">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-1'}`}
        >
          <ChevronLeft size={20} /> Back
        </button>

        <span className="text-sm font-medium opacity-50 bg-white/50 dark:bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
          Page {currentSlide + 1} of {SLIDES.length}
        </span>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:scale-105 active:scale-95 ${currentSlide === SLIDES.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
}