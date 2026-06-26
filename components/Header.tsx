'use client';

import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="font-display font-bold text-2xl text-white">
              Arman Rahman
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-light hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-gray-light hover:text-white transition-colors">Services</Link>
            <Link href="/portfolio" className="text-gray-light hover:text-white transition-colors">Portfolio</Link>
            <Link href="/about" className="text-gray-light hover:text-white transition-colors">About</Link>
            <a 
              href="https://m.me/61590923174340" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-safety-orange hover:bg-orange-light text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-lg"
            >
              Message Me
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-light hover:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-light hover:text-white py-2 text-lg"
            >Home</Link>
            <Link 
              href="/services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-light hover:text-white py-2 text-lg"
            >Services</Link>
            <Link 
              href="/portfolio" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-light hover:text-white py-2 text-lg"
            >Portfolio</Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-light hover:text-white py-2 text-lg"
            >About</Link>
            <a 
              href="https://m.me/61590923174340" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-safety-orange text-center hover:bg-orange-light text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4 w-full"
            >
              Message Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
