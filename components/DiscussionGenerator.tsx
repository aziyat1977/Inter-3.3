import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';

const QUESTIONS = [
  "Do you work better under pressure or when you are relaxed?",
  "What is your biggest stress trigger?",
  "Is stress ever good for you?",
  "How do you relax after a hard day?",
  "Have you ever had a panic attack?",
  "Do exams measure intelligence or just memory?",
  "What is 'burnout'? Have you felt it?",
  "Is being a teenager more stressful than being an adult?",
  "Does social media cause stress?",
  "How does lack of sleep affect your mood?",
  "What is the most stressful thing about school?",
  "Are you a 'perfectionist'? Is that stressful?",
  "Do you think teachers understand student stress?",
  "What is a 'five-minute' habit that helps you?",
  "Who is the most easy-going person you know?",
  "Is it better to have a well-paid job or a low-stress job?",
  "Do you get stressed when you are late?",
  "How do you handle 'social stress' (meeting new people)?",
  "What music helps you relax?",
  "Is competition good or bad for mental health?",
  "What makes you angry?",
  "Do you worry about the future?",
  "Does eating junk food help with stress?",
  "Is crying a good way to release stress?",
  "What is your 'happy place'?",
  "Do you think life was less stressful 100 years ago?",
  "How does exercise affect stress?",
  "Do you procrastinate? Does it make you stressed?",
  "What is the best advice for a stressed friend?",
  "Can stress make you sick?",
  "Do you prefer working alone or in a group?",
  "What is the most 'stress-producing' noise?",
  "Do parents put too much pressure on kids?",
  "Would you like to live a 'slow life' in a village?",
  "What makes you feel confident?"
];

const DiscussionGenerator: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState("Click below to generate a question!");
  const [animating, setAnimating] = useState(false);

  const generate = () => {
    setAnimating(true);
    setTimeout(() => {
        const random = Math.floor(Math.random() * QUESTIONS.length);
        setCurrentQuestion(QUESTIONS[random]);
        setAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-4xl text-center">
      <h2 className="text-4xl md:text-5xl font-display font-black mb-12">
        7. DISCUSSION 🗣️
      </h2>

      <div className="max-w-3xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
        
        <div className={`relative min-h-[250px] flex items-center justify-center p-12 mb-12 rounded-[2rem] text-center text-white text-3xl md:text-4xl font-bold shadow-2xl transition-all duration-300 transform bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] dark:from-[#0575E6] dark:to-[#021B79] border-4 border-white/20 overflow-hidden ${animating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Friends talking" />
           <span className="relative z-10">{currentQuestion}</span>
        </div>

        <div className="flex justify-center relative z-20">
            <button
                onClick={generate}
                className="group relative px-12 py-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-black text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center gap-4 overflow-hidden"
            >
                <Shuffle size={32} className="group-hover:rotate-180 transition-transform duration-500" />
                <span className="relative z-10">New Question</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionGenerator;