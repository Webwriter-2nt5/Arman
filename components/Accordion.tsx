'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 bg-navy-light mb-2 rounded-lg overflow-hidden">
      <button
        className="w-full text-left px-4 py-4 flex justify-between items-center bg-navy-light focus:outline-none focus:ring-2 focus:ring-safety-orange border-l-4 border-safety-orange"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-white text-base pr-4">{question}</span>
        <ChevronRight 
          className={`text-safety-orange transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-90' : ''}`} 
          size={20}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-4 text-gray-light text-sm bg-navy-light border-l-4 border-transparent">
          {answer}
        </div>
      )}
    </div>
  );
}
