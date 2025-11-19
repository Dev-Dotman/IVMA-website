"use client";
import { Play, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const dashboardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Animate title
    tl.fromTo(titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate subtitle
    tl.fromTo(subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Animate buttons
    tl.fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Animate dashboard preview
    tl.fromTo(dashboardRef.current,
      { y: 80, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section ref={heroRef} className="px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
          <span>First Way</span>
          <span>/</span>
          <span>Manage Your Inventory</span>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 ref={titleRef} className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            <em className="font-light">We</em> make selling very
            <br />
            <em className="font-light">EASY</em>
          </h1>
          <p ref={subtitleRef} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track, manage, and optimize your inventory from one powerful, easy-to-use, secure, scalable, and smart dashboard.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 group">
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        {/* <div ref={dashboardRef} className="relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Shipping Performance</h3>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-gray-100 rounded text-sm">Monthly</button>
                      <button className="px-3 py-1 text-gray-500 text-sm">Quarterly</button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { id: '#1006294', flag: '🇺🇸', name: 'Wade Warren', qty: '2 Items', price: '$39.98', status: 'On Delivery' },
                      { id: '#1006295', flag: '🇬🇧', name: 'Jenny Wilson', qty: '3 Items', price: '$19.99', status: 'On Delivery' },
                      { id: '#1006296', flag: '🇷🇺', name: 'Guy Hawkins', qty: '4 Items', price: '$79.98', status: 'On Delivery' },
                      { id: '#1006297', flag: '🇷🇺', name: 'Cody Fisher', qty: '8 Items', price: '$79.98', status: 'On Delivery' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500">{item.id}</span>
                          <span className="text-lg">{item.flag}</span>
                          <span className="font-medium text-gray-900">{item.name}</span>
                          <span className="text-sm text-gray-500">{item.qty}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-900">{item.price}</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Stock Activity</h3>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">900</div>
                    <div className="text-sm text-gray-500">Current Stock Unit</div>
                  </div>
                  <div className="bg-green-500 h-2 rounded-full mb-6"></div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">In Available</span>
                      <span className="font-semibold">800 Unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Low Stock</span>
                      <span className="font-semibold">80 Unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Out of Stock</span>
                      <span className="font-semibold">20 Unit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-100 rounded-full opacity-60"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-green-50 rounded-full opacity-40"></div>
        </div> */}
      </div>
    </section>
  );
}
