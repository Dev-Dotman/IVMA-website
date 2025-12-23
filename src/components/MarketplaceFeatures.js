"use client";
import { useEffect, useRef } from 'react';
import { Store, Package, CreditCard, Receipt, MessageSquare, Laptop, Smartphone, BarChart, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarketplaceFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('[data-fade]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Store,
      title: "E-commerce Store",
      description: "Sell nationwide with your professional online store"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock, manage products, get low-stock alerts"
    },
    {
      icon: CreditCard,
      title: "Point of Sale System",
      description: "Process in-store sales like supermarkets"
    },
    {
      icon: Receipt,
      title: "Professional Receipts",
      description: "Auto-generate branded receipts for every sale"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Telegram Integration",
      description: "Accept orders via WhatsApp and Telegram instantly"
    },
    {
      icon: BarChart,
      title: "Payment Processing",
      description: "Secure payments with instant settlements"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge and Title */}
        <div data-fade className="mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Store className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">What We Do</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-center text-gray-900 mb-6">
            <em className="font-serif">Experience</em>
            <br />
            Complete Business Management
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Run Your Entire Business From One Platform. It's Not Just About Selling, It's About Managing Everything With Structure.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div data-fade>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              All-in-One
              <br />
              <span className="text-green-600 font-semibold">Business Solution</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We Give Business Owners The Ability To Not Only Sell Online Everywhere In Nigeria, But Also Run Their Business With Structure Using Integrated Tools.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-green-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="group bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Explore All Features</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div data-fade>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/dashboarduipos.png" 
                alt="IVMA POS Dashboard" 
                className="w-full h-auto object-cover"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0"></div>
            </div>

            {/* Decorative Elements */}
            {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div> */}
          </div>
        </div>

        {/* Bottom Integration Message */}
        {/* <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full px-8 py-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-900 font-semibold">
              Everything Works Together Seamlessly
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
