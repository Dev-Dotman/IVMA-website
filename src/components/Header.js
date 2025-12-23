"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ onWaitlistClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" onClick={handleNavClick}>
              <img 
                src="/ivma2.png" 
                alt="IVMA Logo" 
                className="h-12 sm:h-8 w-auto object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="/features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </a>
            {/* <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About Us
            </a> */}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={onWaitlistClick}
              className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Join the Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 md:hidden">
          <nav className="flex flex-col px-6 py-8 space-y-6">
            <a 
              href="/" 
              onClick={handleNavClick}
              className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a 
              href="/features" 
              onClick={handleNavClick}
              className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
            >
              Features
            </a>
            {/* <a 
              href="/about" 
              onClick={handleNavClick}
              className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
            >
              About Us
            </a> */}
            
            {/* Mobile CTA Button */}
            <button 
              onClick={() => {
                handleNavClick();
                onWaitlistClick();
              }}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-center mt-4"
            >
              Join the Waitlist
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
