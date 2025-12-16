import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import StressTest from './components/StressTest';
import ReadingRace from './components/ReadingRace';
import GrammarBuilder from './components/GrammarBuilder';
import VocabLego from './components/VocabLego';
import Roleplay from './components/Roleplay';
import DiscussionGenerator from './components/DiscussionGenerator';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 w-full h-full -z-10 opacity-10 animate-gradient-bg bg-[length:400%_400%] bg-gradient-to-br from-[#ee7752] via-[#e73c7e] via-[#23a6d5] to-[#23d5ab]" />
      <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${darkMode ? 'bg-[#121212]' : 'bg-[#f0f2f5]'}`} />

      {/* Navigation Controls */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-5 left-5 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-md hover:scale-110 transition-transform duration-300"
        aria-label="Toggle Menu"
      >
        {sidebarOpen ? <X size={24} className="text-gray-800 dark:text-white" /> : <Menu size={24} className="text-gray-800 dark:text-white" />}
      </button>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 px-5 py-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-md flex items-center gap-2 hover:scale-105 transition-transform duration-300 font-bold text-sm sm:text-base text-gray-800 dark:text-white"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-24 max-w-4xl space-y-24">
        <Hero />
        <StressTest />
        <ReadingRace />
        <GrammarBuilder />
        <VocabLego />
        <Roleplay />
        <DiscussionGenerator />
      </main>

    </div>
  );
}