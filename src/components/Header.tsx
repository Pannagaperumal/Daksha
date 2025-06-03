import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-gold-500" />
            <span className="ml-2 text-2xl font-semibold text-white">Daksha</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Solutions', 'Audience', 'Vision'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-gold-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a 
              href="#demo" 
              className="px-4 py-2 text-navy-900 bg-gold-400 hover:bg-gold-500 transition-colors rounded-md font-medium"
            >
              Try Free
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            {['Features', 'Solutions', 'Audience', 'Vision'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block text-white/90 hover:text-gold-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#demo" 
              className="block px-4 py-2 text-navy-900 bg-gold-400 hover:bg-gold-500 transition-colors rounded-md font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Try Free
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;