import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

interface VocabWord {
  id: string;
  en: string;
  ru: string;
  uz: string;
}

const vocabList: VocabWord[] = [
  { id: 'v1', en: 'Left-handed', ru: 'Левша', uz: 'Chapaqay' },
  { id: 'v2', en: 'Good-looking', ru: 'Красивый / Симпатичный', uz: 'Kelishgan / Chiroyli' },
  { id: 'v3', en: 'Part-time', ru: 'Неполный рабочий день', uz: 'Yarim kunlik (ish)' },
  { id: 'v4', en: 'Five-minute', ru: 'Пятиминутный', uz: 'Besh daqiqalik' },
  { id: 'v5', en: 'Well-known', ru: 'Известный', uz: 'Mashhur / Taniqli' },
  { id: 'v6', en: 'Stress-producing', ru: 'Вызывающий стресс', uz: 'Stress keltirib chiqaruvchi' },
];

const VocabLego: React.FC = () => {
  const [activeTrans, setActiveTrans] = useState<Record<string, 'ru' | 'uz' | null>>({});

  const toggleTrans = (id: string, lang: 'ru' | 'uz') => {
    setActiveTrans(prev => ({
      ...prev,
      [id]: prev[id] === lang ? null : lang
    }));
  };

  return (
    <FadeInSection id="vocab">
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 border-l-8 border-primary pl-6">
        4. WORD LEGO (Compound Adjectives) 🧱
      </h2>
      <p className="mb-8 text-lg opacity-80">
        Stick two words together with a hyphen (-). No 'S' allowed!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {vocabList.map((item) => (
          <div key={item.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-between min-h-[180px]">
            <h3 className="text-2xl font-bold text-center mb-4">{item.en}</h3>
            
            <div className="w-full flex justify-center gap-3 mb-4">
              <button 
                onClick={() => toggleTrans(item.id, 'ru')}
                className={`px-3 py-1 rounded text-sm font-bold transition-transform hover:scale-110 ${activeTrans[item.id] === 'ru' ? 'bg-[#0033A0] text-white ring-2 ring-offset-2 ring-[#0033A0] dark:ring-offset-gray-800' : 'bg-[#0033A0]/20 text-[#0033A0] dark:text-blue-300'}`}
              >
                Ru
              </button>
              <button 
                onClick={() => toggleTrans(item.id, 'uz')}
                className={`px-3 py-1 rounded text-sm font-bold transition-transform hover:scale-110 ${activeTrans[item.id] === 'uz' ? 'bg-[#0099B5] text-white ring-2 ring-offset-2 ring-[#0099B5] dark:ring-offset-gray-800' : 'bg-[#0099B5]/20 text-[#0099B5] dark:text-cyan-300'}`}
              >
                Uz
              </button>
            </div>

            <div className="h-12 w-full flex items-center justify-center">
              {activeTrans[item.id] && (
                <span className="text-primary font-bold text-center animate-[fadeIn_0.3s_ease-out]">
                  {activeTrans[item.id] === 'ru' ? item.ru : item.uz}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border-2 border-primary border-dashed text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-black text-primary mb-2 flex items-center justify-center gap-2">
            ⚠️ THE RULE
        </h3>
        <h1 className="text-3xl md:text-4xl font-black text-red-500 mb-4">NO "S" ALLOWED!</h1>
        <div className="text-lg space-y-2">
            <p className="line-through decoration-red-500 decoration-2 opacity-60">Wrong: A five-minute<strong>s</strong> walk.</p>
            <p className="font-bold text-green-600 dark:text-green-400">Correct: A five-minute walk.</p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default VocabLego;