"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, MessageCircle, Clock, Mic, ExternalLink, Toggle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BonusFeatures({ onWaitlistClick }) {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    gsap.fromTo([leftContent, rightContent],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-8">
            {/* Services Badge */}
            <div className="inline-block">
              <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-600">
                Bonus Features (Free!)
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
              We give you a<br />
              <span className="text-green-600">free E-commerce website</span> too!
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Your inventory is automatically connected to your website. Just toggle which items you want to show online, and your customers can see what's available in real-time.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                  <Globe className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-gray-900 font-semibold block">Free website, no setup fees</span>
                  <span className="text-gray-600 text-sm">Pick what you want to sell online with simple on/off switches</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-gray-900 font-semibold block">WhatsApp & Telegram checkout</span>
                  <span className="text-gray-600 text-sm">Don't like online payments? Customers can message you on WhatsApp or Telegram to complete their order</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                  <Clock className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-gray-900 font-semibold block">Always up-to-date</span>
                  <span className="text-gray-600 text-sm">When you update your inventory, your website updates too. No more "sorry, we're out of stock" awkwardness</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={onWaitlistClick}
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              <span>Join the Waitlist</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div ref={rightContentRef} className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              {/* Header Section */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">Your Online Store</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live & Ready</span>
                  </div>
                </div>
              </div>

              {/* Hello Customer Section */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🛍️</span>
                  <span className="text-lg font-semibold text-gray-900">Your Store Dashboard</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Simply turn items on or off for your website. Everything stays in sync with your inventory automatically.
                </p>
              </div>

              {/* Toggle Examples */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">iPhone 15 Cases</div>
                      <div className="text-sm text-gray-600">25 in stock</div>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      💻
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Laptops</div>
                      <div className="text-sm text-gray-600">3 in stock</div>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-start px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* WhatsApp/Telegram Checkout Example */}
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">Messaging Checkout</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-700">
                      "Hi! I'd like to buy the iPhone case. Can we complete this on WhatsApp or Telegram?"
                    </div>
                    <div className="text-xs text-green-600 mt-1 font-medium">Click to chat →</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 rounded-full opacity-60 flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-50 rounded-2xl border border-gray-200 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
