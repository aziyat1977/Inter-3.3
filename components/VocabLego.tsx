import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VocabWord {
  id: string;
  en: string;
  ru: string;
  uz: string;
  img: string;
}

const vocabList: VocabWord[] = [
  { id: 'v1', en: 'Left-handed', ru: 'Левша', uz: 'Chapaqay', img: 'https://images.unsplash.com/photo-1632053001869-c0953a35f795?q=80&w=600&auto=format&fit=crop' },
  { id: 'v2', en: 'Good-looking', ru: 'Красивый', uz: 'Kelishgan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
  { id: 'v3', en: 'Part-time', ru: 'Неполный день', uz: 'Yarim kunlik', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop' },
  { id: 'v4', en: 'Five-minute', ru: 'Пятиминутный', uz: 'Besh daqiqalik', img: 'https://images.unsplash.com/photo-1501139083538-0139583c61df?q=80&w=600&auto=format&fit=crop' },
  { id: 'v5', en: 'Well-known', ru: 'Известный', uz: 'Mashhur', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop' },
  { id: 'v6', en: 'Stress-producing', ru: 'Вызывающий стресс', uz: 'Stressli', img: 'https://images.unsplash.com/photo-1447452001602-7090c774637d?q=80&w=600&auto=format&fit=crop' },
];

interface VocabLegoProps {
    step: 'intro' | 'batch1' | 'batch2' | 'batch3' | 'rule' | 'quiz';
}

const VocabLego: React.FC<VocabLegoProps> = ({ step }) => {
  const [activeTrans, setActiveTrans] = useState<Record<string, 'ru' | 'uz' | null>>({});
  
  // Quiz State
  const [quizScore, setQuizScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const toggleTrans = (id: string, lang: 'ru' | 'uz') => {
    setActiveTrans(prev => ({
      ...prev,
      [id]: prev[id] === lang ? null : lang
    }));
  };

  const handleQuizAnswer = (correct: boolean) => {
      if (correct) setQuizScore(s => s + 1);
      if (quizIndex < 4) {
          setQuizIndex(i => i + 1);
      } else {
          setQuizFinished(true);
      }
  };

  const renderCards = (words: VocabWord[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {words.map((item) => (
          <div key={item.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-40 overflow-hidden">
                <img src={item.img} alt={item.en} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 flex flex-col items-center">
                <h3 className="text-3xl font-bold text-center mb-6">{item.en}</h3>
                
                <div className="w-full flex justify-center gap-4 mb-6">
                <button 
                    onClick={() => toggleTrans(item.id, 'ru')}
                    className={`px-4 py-2 rounded-lg text-lg font-bold transition-transform active:scale-95 ${activeTrans[item.id] === 'ru' ? 'bg-[#0033A0] text-white' : 'bg-[#0033A0]/10 text-[#0033A0] dark:text-blue-300'}`}
                >
                    Ru
                </button>
                <button 
                    onClick={() => toggleTrans(item.id, 'uz')}
                    className={`px-4 py-2 rounded-lg text-lg font-bold transition-transform active:scale-95 ${activeTrans[item.id] === 'uz' ? 'bg-[#0099B5] text-white' : 'bg-[#0099B5]/10 text-[#0099B5] dark:text-cyan-300'}`}
                >
                    Uz
                </button>
                </div>

                <div className="h-8 w-full flex items-center justify-center">
                {activeTrans[item.id] && (
                    <span className="text-primary text-xl font-bold text-center animate-[fadeIn_0.3s_ease-out]">
                    {activeTrans[item.id] === 'ru' ? item.ru : item.uz}
                    </span>
                )}
                </div>
            </div>
          </div>
        ))}
      </div>
  );

  if (step === 'intro') {
      return (
        <div className="text-center max-w-4xl flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8">5. WORD LEGO 🧱</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-10 shadow-xl border border-white/20 flex-1">
                    <p className="text-2xl font-medium leading-relaxed">
                        How do you make an adjective stronger?
                        <br/><br/>
                        Stick two words together with a hyphen (-).
                    </p>
                </div>
                <img src="https://images.unsplash.com/photo-1587654780291-39c940483713?q=80&w=600&auto=format&fit=crop" alt="Lego Bricks" className="w-full md:w-1/2 rounded-3xl shadow-xl h-64 object-cover" />
            </div>
        </div>
      );
  }

  if (step === 'batch1') return renderCards(vocabList.slice(0, 2));
  if (step === 'batch2') return renderCards(vocabList.slice(2, 4));
  if (step === 'batch3') return renderCards(vocabList.slice(4, 6));

  if (step === 'rule') {
      return (
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-12 border-4 border-dashed border-red-500 text-center max-w-2xl mx-auto shadow-2xl relative">
            <h3 className="text-2xl font-black text-primary mb-6 flex items-center justify-center gap-2">
                ⚠️ THE GOLDEN RULE
            </h3>
            <h1 className="text-5xl font-black text-red-500 mb-8">NO "S" ALLOWED!</h1>
            <div className="text-2xl space-y-4 text-left inline-block">
                <p className="line-through decoration-red-500 decoration-4 opacity-60">
                    A five-minute<strong className="text-red-500">s</strong> walk.
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                    A five-minute walk.
                </p>
            </div>
        </div>
      );
  }

  if (step === 'quiz') {
      // Simple True/False questions based on rules
      const questions = [
          { q: "Is 'Five-minutes break' correct?", a: false },
          { q: "Is 'Good-looking' a compound adjective?", a: true },
          { q: "Is 'Stress-producing' written with a hyphen?", a: true },
          { q: "Is 'Two-hour exam' correct?", a: true },
          { q: "Is 'Ten-years-old' correct as an adjective before a noun?", a: true }
      ];

      return (
        <div className="max-w-2xl w-full text-center">
            <h2 className="text-4xl font-black mb-8">Quick Quiz ⚡</h2>
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-10 shadow-2xl">
                {!quizFinished ? (
                    <>
                        <p className="text-2xl font-bold mb-12">{questions[quizIndex].q}</p>
                        <div className="flex justify-center gap-6">
                            <button onClick={() => handleQuizAnswer(questions[quizIndex].a === true)} className="px-10 py-4 bg-green-500 text-white rounded-xl font-black text-xl hover:scale-105 transition-transform">YES</button>
                            <button onClick={() => handleQuizAnswer(questions[quizIndex].a === false)} className="px-10 py-4 bg-red-500 text-white rounded-xl font-black text-xl hover:scale-105 transition-transform">NO</button>
                        </div>
                        <p className="mt-8 opacity-50">{quizIndex + 1} / 5</p>
                    </>
                ) : (
                    <div className="animate-bounce">
                        <h3 className="text-5xl font-black mb-4">Score: {quizScore} / 5</h3>
                        <p className="text-xl">
                            {quizScore === 5 ? "Perfect! You are a Word Lego Master!" : "Good try! Keep practicing."}
                        </p>
                    </div>
                )}
            </div>
        </div>
      );
  }

  return null;
};

export default VocabLego;