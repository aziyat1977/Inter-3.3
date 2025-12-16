import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}

const menuItems = [
  { id: 'hero', label: 'Start' },
  { id: 'hook', label: 'The Stress Test' },
  { id: 'reading', label: 'Reading Race' },
  { id: 'grammar', label: 'Grammar (Heavy Subject)' },
  { id: 'vocab', label: 'Vocab (Word Lego)' },
  { id: 'roleplay', label: 'Roleplay' },
  { id: 'questions', label: '35 Questions' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, close }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      close();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl z-50 pt-24 shadow-2xl border-r border-white/10"
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-8 py-4 text-left font-semibold text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 border-l-4 border-transparent hover:border-primary transition-all duration-200 hover:pl-10"
                >
                  {item.label}
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