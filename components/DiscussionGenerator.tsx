import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';
import FadeInSection from './FadeInSection';

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
    <FadeInSection id="questions" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 border-l-8 border-primary pl-6">
        6. DISCUSSION GENERATOR 🗣️
      </h2>
      <p className="mb-8 text-lg opacity-80">
        35 Questions about Stress, Success, and Life.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className={`min-h-[200px] flex items-center justify-center p-8 mb-8 rounded-3xl text-center text-white text-2xl md:text-3xl font-bold shadow-2xl transition-all duration-300 transform bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] dark:from-[#0575E6] dark:to-[#021B79] ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
           {currentQuestion}
        </div>

        <div className="flex justify-center">
            <button
                onClick={generate}
                className="group relative px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-black text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
                <Shuffle className="group-hover:rotate-180 transition-transform duration-500" />
                <span className="relative z-10">New Question</span>
            </button>
        </div>
      </div>
    </FadeInSection>
  );
};

export default DiscussionGenerator;