import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-navy-light rounded-lg p-6 shadow-lg border border-white/5 ${hover ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-xl' : ''} ${className}`}>
      {children}
    </div>
  );
}
