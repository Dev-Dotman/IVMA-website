"use client";
import { Play, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function MarketplaceHero({ onWaitlistClick }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll('[data-animate]');
    
    gsap.set(elements, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });
    
    tl.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.15
    });
  }, []);

  return (
    <section ref={heroRef} className="relative px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/leaves.jpg')" }}
      ></div>
      
      {/* Dark Semi-transparent Blur Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Breadcrumb */}
        <div data-animate className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
          <span>Nigeria</span>
          <span>/</span>
          <span className="text-green-400 font-medium">#1 Marketplace</span>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 data-animate className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight px-2">
            <em className="font-light text-green-400">Sell</em> Anything to Anyone,
            <br />
            Anywhere in Nigeria
          </h1>
          <p data-animate className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Set up your online store in minutes and reach millions of customers across Nigeria. No fees to start, no technical skills needed.
          </p>
          <div data-animate className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={onWaitlistClick}
              className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group shadow-lg shadow-green-600/20"
            >
              <span className="text-sm sm:text-base">Get Started Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-gray-300 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm">
              <Play className="w-4 h-4" />
              <span className="text-sm sm:text-base">See How It Works</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div data-animate className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-0 sm:bg-transparent">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">100+</div>
            <div className="text-sm sm:text-base text-gray-300">Sellers Trust Us</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-0 sm:bg-transparent">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">5,000+</div>
            <div className="text-sm sm:text-base text-gray-300">Products Sold Daily</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-0 sm:bg-transparent">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">All 36</div>
            <div className="text-sm sm:text-base text-gray-300">States Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
