"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, TrendingUp, AlertTriangle, Target, Calendar, Sparkles, BarChart3, ArrowUp, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AISection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    gsap.fromTo(section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-gray-50 relative overflow-hidden">
      {/* Circular Background Shapes */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/4 -right-16 w-32 h-32 bg-green-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-green-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-16 right-1/3 w-48 h-48 bg-green-100 rounded-full opacity-25"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI Reports Every Week</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight">
            AI? <span className="text-green-600 font-medium">Yes please.</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every Monday, get a simple AI report that tells you exactly what's happening in your business. 
            No confusing charts - just clear insights you can actually use.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 mb-16">
          {/* Top Seller Card - Tall */}
          <div ref={el => cardsRef.current[0] = el} className="break-inside-avoid mb-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <div className="flex items-center space-x-1 text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">+240%</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Top Seller Alert</h3>
            <p className="text-gray-600 text-sm mb-4">iPhone cases are absolutely flying off the shelves this week</p>
            <div className="bg-gray-200 rounded-lg p-3 mb-4">
              <div className="text-xs text-gray-800 font-medium mb-1">Weekly Performance</div>
              <div className="text-lg font-bold text-gray-900">24 units sold</div>
              <div className="text-xs text-gray-700">Only 8 left in stock</div>
            </div>
            <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full inline-block">
              🚀 Order more ASAP
            </div>
          </div>

          {/* Quick Insight Card - Short */}
          <div ref={el => cardsRef.current[1] = el} className="break-inside-avoid mb-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
              <div className="text-purple-600 text-sm font-medium">December</div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Holiday Pattern</h3>
            <p className="text-gray-600 text-sm mb-3">Phone accessories always spike this month</p>
            <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full inline-block">
              📈 Peak season active
            </div>
          </div>

          {/* Sample Report Preview - Extra Tall */}
          <div ref={el => cardsRef.current[2] = el} className="break-inside-avoid mb-6 bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Weekly Report Sample</h3>
                <p className="text-gray-600 text-xs">What you get every Monday</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-200 space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">📈 This Week's Winner</h4>
                <p className="text-gray-700 text-xs">iPhone cases sold 24 units (up 240%). You're down to 8 left!</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">⚠️ Needs Attention</h4>
                <p className="text-gray-700 text-xs">Bluetooth speakers sitting for 3 weeks. Try 15% discount?</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm">💡 Smart Tip</h4>
                <p className="text-gray-700 text-xs">Laptop accessories pick up mid-month. Order chargers next week.</p>
              </div>
            </div>
          </div>

          {/* Slow Mover Card - Medium */}
          <div ref={el => cardsRef.current[3] = el} className="break-inside-avoid mb-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <div className="flex items-center space-x-1 text-orange-600">
                <ArrowDown className="w-4 h-4" />
                <span className="text-sm font-medium">-60%</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Slow Mover</h3>
            <p className="text-gray-600 text-sm mb-4">Bluetooth speakers haven't moved much lately</p>
            <div className="bg-gray-200 rounded-lg p-3 mb-4">
              <div className="text-xs text-gray-800 font-medium mb-1">Sitting for</div>
              <div className="text-lg font-bold text-gray-900">21 days</div>
            </div>
            <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full inline-block">
              💡 Try a 15% discount
            </div>
          </div>

          {/* Reorder Alert Card - Short */}
          <div ref={el => cardsRef.current[4] = el} className="break-inside-avoid mb-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <div className="text-blue-600 text-sm font-medium">Next Week</div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Perfect Timing</h3>
            <p className="text-gray-600 text-sm mb-3">Based on patterns, laptop chargers sell more mid-month</p>
            <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full inline-block">
              🎯 Order window opens
            </div>
          </div>

          {/* Money Insight Card - Medium */}
          <div ref={el => cardsRef.current[5] = el} className="break-inside-avoid mb-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-6 h-6 text-gray-600" />
              <div className="text-gray-600 text-sm font-medium">💰</div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Cash Flow Tip</h3>
            <p className="text-gray-600 text-sm mb-4">You have ₦45,000 in slow inventory</p>
            <div className="bg-gray-200 rounded-lg p-3 mb-4">
              <div className="text-xs text-gray-800 font-medium mb-1">Potential cash unlock</div>
              <div className="text-lg font-bold text-gray-900">₦22,500</div>
              <div className="text-xs text-gray-700">If you move half</div>
            </div>
            <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full inline-block">
              💸 Free up cash for winners
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Start Getting AI Reports
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Your first AI report comes after just one week of using IVY
          </p>
        </div>
      </div>
    </section>
  );
}
