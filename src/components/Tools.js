"use client";
import { useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, ChevronDown, FileDown, Settings, Package } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ToolsPage() {
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

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section ref={featuresRef} id="tools" className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div ref={titleRef} className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6">
                <Settings className="w-4 h-4" />
                <span>WHAT YOU GET</span>
              </div>
              
              <h2 className="text-5xl font-normal text-gray-900 mb-8">
                Everything you need to keep<br />
                your <span className="inline-flex items-center space-x-2">
                  <span className="bg-green-100 p-2 rounded-lg">
                    <Package className="w-6 h-6 text-green-600" />
                  </span>
                </span> business organized
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-16">
              <div className="flex flex-wrap justify-center gap-2">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">Small Shop</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">Online Store</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">Retail Store</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">Warehouse</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">Factory</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">Distributor</button>
              </div>
            </div>

            {/* Three Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Column 1 - Stock Tracking */}
              <div ref={el => cardsRef.current[0] = el} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg font-bold text-gray-700">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Know What You Have</h3>
                    <p className="text-gray-600 leading-relaxed">
                      See exactly what's in stock right now. Get alerts when you're running low so you never disappoint customers again.
                    </p>
                  </div>
                </div>
                
                {/* Stock Dashboard Preview */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">85%</span>
                    </div>
                    <span className="text-sm text-gray-500">Stock Level</span>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-4 h-4" />
                      <span className="text-sm">Total Items</span>
                    </div>
                    <div className="text-2xl font-bold">2,847</div>
                  </div>
                </div>
              </div>

              {/* Column 2 - Purchase Orders */}
              <div ref={el => cardsRef.current[1] = el} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg font-bold text-gray-700">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Order More Stuff</h3>
                    <p className="text-gray-600 leading-relaxed">
                      When you need to restock, just click a button. Track what you've ordered and when it's arriving - no more guessing games.
                    </p>
                  </div>
                </div>
                
                {/* Purchase Orders Dashboard Preview */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Orders Coming In</span>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">5</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 border-b border-gray-100 pb-2">Orders Sent Out</div>
                    <div className="text-sm text-gray-500 border-b border-gray-100 pb-2">Stuff Received</div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-blue-100">
                        📦
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm mb-1">Office Supplies</div>
                        <div className="text-xs text-gray-500 leading-relaxed mb-2">
                          Pens, papers, and other office stuff you need to keep the business running.
                        </div>
                        <div className="font-bold text-gray-900">$245.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Analytics Dashboard */}
              <div ref={el => cardsRef.current[2] = el} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg font-bold text-gray-700">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">See How You're Doing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Simple reports that actually make sense. See what's selling fast, what's not moving, and make smarter business decisions.
                    </p>
                  </div>
                </div>
                
                {/* Analytics Dashboard Preview */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2">
                      <span>All Locations</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <button className="w-full flex items-center justify-between text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2">
                      <span>Last 30 Days</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Your Business Report</div>
                      <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                        See what's working and what's not. Easy to understand numbers that help you make better choices.
                      </div>
                      <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        <FileDown className="w-4 h-4" />
                        <span>Download Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
