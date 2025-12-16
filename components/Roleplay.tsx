import React from 'react';
import { User, Stethoscope } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Roleplay: React.FC = () => {
  return (
    <FadeInSection id="roleplay">
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 border-l-8 border-primary pl-6">
        5. THE STRESS CLINIC 🏥
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Student A */}
        <div className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full text-orange-600 dark:text-orange-300">
                <User size={32} />
            </div>
            <h3 className="text-2xl font-bold">Student A: The Patient 😷</h3>
          </div>
          <p className="mb-4">Tell the doctor your problems using <strong>Heavy Subjects</strong>.</p>
          <ul className="space-y-3 bg-gray-50 dark:bg-black/20 p-4 rounded-xl">
            <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"/>
                "Preparing for IELTS is..."
            </li>
            <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"/>
                "Waiting for results is..."
            </li>
          </ul>
        </div>

        {/* Student B */}
        <div className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                <Stethoscope size={32} />
            </div>
            <h3 className="text-2xl font-bold">Student B: The Doctor 👨‍⚕️</h3>
          </div>
          <p className="mb-4">Give advice using <strong>Word Lego</strong>.</p>
          <ul className="space-y-3 bg-gray-50 dark:bg-black/20 p-4 rounded-xl">
            <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"/>
                "Take a ten-minute break."
            </li>
            <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"/>
                "Watch a well-known movie."
            </li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Roleplay;