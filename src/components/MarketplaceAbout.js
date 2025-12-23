"use client";
import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarketplaceAbout() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/leaves2.jpg')" }}
      ></div>
      
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-green-50/95 backdrop-blur-[2px]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div ref={titleRef}>
            <span className="inline-block text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Why Choose IVMA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Your Business, <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Simplified</span>
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 mb-12 sm:mb-20">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light px-2 sm:px-4">
            Whether you're selling from home, running a store, or growing an online business — IVMA helps you succeed.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-2 sm:px-4">
            Join thousands of Nigerian entrepreneurs who are already making money online. No hidden fees, no hassle, just results.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center px-4">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
            <span className="font-semibold text-sm sm:text-base md:text-lg">Start Selling Today — It's Free</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
