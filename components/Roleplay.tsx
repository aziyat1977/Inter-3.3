import React from 'react';
import { User, Stethoscope } from 'lucide-react';

interface RoleplayProps {
    step: 'intro' | 'act';
}

const Roleplay: React.FC<RoleplayProps> = ({ step }) => {
  if (step === 'intro') {
      return (
        <div className="text-center max-w-4xl flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 border-l-8 border-primary pl-6 inline-block">
                6. THE STRESS CLINIC 🏥
            </h2>
             <div className="flex flex-col md:flex-row items-center gap-8 w-full mt-8">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" alt="Doctor Office" className="w-full md:w-1/2 rounded-3xl shadow-xl h-64 object-cover" />
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-10 shadow-xl border border-white/20 flex-1">
                    <p className="text-2xl opacity-80 mt-4">Time to practice your new skills in a real scenario.</p>
                </div>
            </div>
        </div>
      );
  }

  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Student A */}
        <div className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border-t-8 border-orange-500 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=200&auto=format&fit=crop" className="w-20 h-20 rounded-full object-cover border-4 border-orange-100" alt="Patient"/>
            <h3 className="text-2xl font-bold">Student A:<br/>The Patient 😷</h3>
          </div>
          <p className="mb-6 text-lg opacity-80">Tell the doctor your problems using <strong>Heavy Subjects</strong>.</p>
          <ul className="space-y-4 bg-gray-50 dark:bg-black/20 p-6 rounded-2xl text-lg font-medium flex-1">
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-orange-500 rounded-full"/>
                "Preparing for IELTS is..."
            </li>
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-orange-500 rounded-full"/>
                "Waiting for results is..."
            </li>
          </ul>
        </div>

        {/* Student B */}
        <div className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border-t-8 border-blue-500 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" className="w-20 h-20 rounded-full object-cover border-4 border-blue-100" alt="Doctor"/>
            <h3 className="text-2xl font-bold">Student B:<br/>The Doctor 👨‍⚕️</h3>
          </div>
          <p className="mb-6 text-lg opacity-80">Give advice using <strong>Word Lego</strong>.</p>
          <ul className="space-y-4 bg-gray-50 dark:bg-black/20 p-6 rounded-2xl text-lg font-medium flex-1">
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-500 rounded-full"/>
                "Take a ten-minute break."
            </li>
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-500 rounded-full"/>
                "Watch a well-known movie."
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Roleplay;