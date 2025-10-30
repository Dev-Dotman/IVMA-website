"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ClipboardList, 
  Zap, 
  Bell, 
  History, 
  BarChart3, 
  Cloud, 
  Puzzle, 
  Settings 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const featuresRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const features = featuresRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    // Animate title
    gsap.fromTo(title,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: features,
          start: "top 80%"
        }
      }
    );

    // Animate feature cards
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: features,
          start: "top 70%"
        }
      }
    );
  }, []);

  const features = [
    {
      icon: ClipboardList,
      number: "1",
      title: "See What You Have",
      description: "Know exactly what's in stock right now. No more guessing or checking boxes in the back room - just look at your phone."
    },
    {
      icon: Zap,
      number: "2", 
      title: "Add & Remove Stock Fast",
      description: "Sold something? Got new stock? Just tap a few buttons and you're done. Takes 10 seconds, not 10 minutes."
    },
    {
      icon: Bell,
      number: "3",
      title: "Get Reminded When Low", 
      description: "Running out of your best seller? We'll tell you before your customers start asking. No more embarrassing 'sorry, we're out' moments."
    },
    {
      icon: History,
      number: "4",
      title: "Know What Happened",
      description: "See who took what, when they took it, and how much is left. Perfect for when your staff says 'I don't know what happened to it.'"
    },
    {
      icon: BarChart3, 
      number: "5",
      title: "Simple Reports",
      description: "Which products make you money? Which ones just sit there? Get easy-to-read reports that actually help you decide what to buy more of."
    },
    {
      icon: Cloud,
      number: "6", 
      title: "Works Everywhere",
      description: "Check your inventory from home, the store, or on vacation. As long as you have internet, you're good to go."
    },
    {
      icon: Puzzle,
      number: "7",
      title: "Super Easy to Use", 
      description: "If you can use WhatsApp, you can use this. No training needed, no confusing buttons - just simple and clean."
    },
    {
      icon: Settings,
      number: "8",
      title: "Grows with Your Business",
      description: "Starting with 50 products? Great. Growing to 5,000? Still works perfectly. You won't need to switch to something else later."
    }
  ];

  return (
    <section ref={featuresRef} id="features" className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6">
            <span>✨ Everything Made Simple</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 leading-tight">
            No complicated stuff,<br />
            just <span className="text-green-600 font-medium">what works</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We built this for real business owners who want things to just work without the headache.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el} 
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {feature.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6">
            Still not sure? Try it free for 14 days - no strings attached.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
