import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
  jumpTo: (index: number) => void;
}

const menuItems = [
  { index: 0, label: 'Start & Intro' },
  { index: 3, label: '1. Stress Games' },
  { index: 9, label: '2. Relaxation Tech' },
  { index: 11, label: '3. Reading Race' },
  { index: 16, label: '4. Grammar' },
  { index: 21, label: '5. Vocab Lego' },
  { index: 27, label: '6. Roleplay' },
  { index: 29, label: '7. Discussion' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, close, jumpTo }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl z-50 pt-24 shadow-2xl border-r border-white/10"
          >
            <div className="px-8 mb-8">
                <h2 className="text-2xl font-black font-display text-primary">Table of Contents</h2>
                <p className="text-sm opacity-60">Jump to section</p>
            </div>
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.index}
                  onClick={() => jumpTo(item.index)}
                  className="px-8 py-3 text-left font-semibold text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 border-l-4 border-transparent hover:border-primary transition-all duration-200 hover:pl-10 flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-primary transition-opacity">→</span>
                </button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;