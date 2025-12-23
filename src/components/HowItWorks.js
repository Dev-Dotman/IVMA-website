"use client";
import { useEffect, useRef } from 'react';
import { Sparkles, Package, Rocket, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('[data-card]');
    
    gsap.set(cards, { opacity: 0, y: 30, scale: 0.95 });
    
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true
        }
      });
    });
  }, []);

  const steps = [
    {
      icon: Sparkles,
      number: "01",
      title: "Create Your Account",
      description: "Sign up in seconds. No credit card needed, no technical skills required.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Package,
      number: "02",
      title: "Add Your Products",
      description: "Upload product photos, set prices, and write descriptions easily.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Start Selling",
      description: "Share your store link or use WhatsApp/Telegram. Process orders seamlessly.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Get Paid & Grow",
      description: "Receive payments instantly to your bank account. Scale your business.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-50 border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">How It Works</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-center text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            <em className="font-serif">Simple</em> Steps to
            <br />
            Start Your Business
          </h2>
          <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            From setup to your first sale in minutes. No complicated processes, just straightforward steps to success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div data-card className="group relative bg-gray-50 p-6 sm:p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-green-100">
                {/* Number Badge */}
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-base sm:text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mt-6 sm:mt-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
              </div>

              {/* Flow Arrow - Mobile Only */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 sm:hidden">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ArrowDown className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}
