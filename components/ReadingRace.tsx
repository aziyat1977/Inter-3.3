import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import FadeInSection from './FadeInSection';

const QA_ITEMS = [
  {
    q: '1. What happens if you Google "reduce stress"?',
    a: 'Answer: You get 34 million hits.'
  },
  {
    q: '2. What did the instructors shout?',
    a: 'Answer: "Faster!" and "Not very good!"'
  },
  {
    q: '3. Why did one group NOT get sick?',
    a: 'Answer: Because they believed stress was good for them.'
  }
];

const ReadingRace: React.FC = () => {
  return (
    <FadeInSection id="reading">
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 border-l-8 border-primary pl-6">
        2. READING RACE 📖
      </h2>
      
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Scan (60 Seconds)</h3>
            <p className="opacity-70 text-sm">Look at text 12b000 and answer:</p>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-6" />

        <div className="space-y-4">
          {QA_ITEMS.map((item, index) => (
            <details key={index} className="group bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold select-none">
                <span>{item.q}</span>
                <ChevronDown className="group-open:rotate-180 transition-transform duration-300 text-primary" />
              </summary>
              <div className="px-5 pb-5 pt-0 text-primary font-medium animate-fadeIn">
                <p className="pl-4 border-l-2 border-primary/30">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default ReadingRace;