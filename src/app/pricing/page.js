"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Check, Star, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const heroRef = useRef(null);
  const pricingRef = useRef(null);

  // Calculate prices
  const monthlyPrice = 1500;
  const annualDiscount = 0.16; // 16% discount
  const annualPrice = Math.round(monthlyPrice * 12 * (1 - annualDiscount));
  const annualMonthlyPrice = Math.round(annualPrice / 12);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate hero section
    tl.fromTo(heroRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate pricing cards
    tl.fromTo('.pricing-card',
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={heroRef} className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0</span>
              <span className="text-gray-500">from 4,000+ reviews</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              We've got a plan<br />
              that's <span className="italic">perfect</span> for you
            </h1>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <div className="flex items-center bg-white border border-gray-200 rounded-full p-1">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !isAnnual 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly billing
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isAnnual 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual billing
                </button>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Save 16%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Business Plan */}
            <div className="pricing-card bg-white rounded-3xl p-8 shadow-lg border border-gray-200 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Business plan</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-light text-gray-900">
                    ₦{isAnnual ? annualMonthlyPrice.toLocaleString() : monthlyPrice.toLocaleString()}
                  </span>
                  <div className="text-gray-500">
                    <div className="text-sm">per month</div>
                  </div>
                </div>
                {isAnnual && (
                  <div className="mt-2">
                    <span className="text-green-600 font-medium text-sm">
                      ₦{annualPrice.toLocaleString()} billed annually
                    </span>
                    <div className="text-gray-500 text-sm line-through">
                      ₦{(monthlyPrice * 12).toLocaleString()} if paid monthly
                    </div>
                  </div>
                )}
                <p className="text-gray-600 mt-4">
                  Complete inventory management for unlimited users.
                </p>
              </div>

              {/* Get Started Button */}
              <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-colors mb-8">
                {isAnnual ? 'Join Waitlist - Save 16%' : 'Join Waitlist'}
              </button>

              {/* Features */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">
                    FEATURES
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Everything you need to manage your inventory effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Real-time stock tracking</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Advanced reporting and analytics</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Free website with inventory sync</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">WhatsApp checkout integration</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Weekly AI reports & insights</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Unlimited individual users</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Low-stock alerts & notifications</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Purchase order management</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Multi-location support</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Cloud backup & security</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">24/7 priority support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Plan */}
            <div className="pricing-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 relative">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Custom Solution</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-3xl font-light text-gray-700">Let's talk</span>
                </div>
                <p className="text-gray-600 mt-4">
                  Need a custom solution? Contact our team.
                </p>
                <p className="text-green-600 font-medium text-sm mt-2">
                  Trust us, it's really affordable.
                </p>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-white text-gray-900 py-4 rounded-xl font-medium text-lg hover:bg-gray-50 transition-colors border border-gray-200 mb-8 flex items-center justify-center space-x-2">
                <span>Contact our team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Features */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">
                    WHAT YOU GET
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Everything in Business plan, plus:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Custom integrations, based on EXACTLY what you need</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">SLA guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Companies */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-8">Trusted by businesses worldwide</p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="text-gray-400 font-semibold text-lg">Shopify</div>
              <div className="text-gray-400 font-semibold text-lg">Amazon</div>
              <div className="text-gray-400 font-semibold text-lg">Square</div>
              <div className="text-gray-400 font-semibold text-lg">WooCommerce</div>
              <div className="text-gray-400 font-semibold text-lg">BigCommerce</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about IVMA pricing
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Is there a free trial?</h3>
                <p className="text-gray-600">
                  Yes! We offer a 14-day free trial with full access to all features. No credit card required.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Absolutely. You can cancel your subscription at any time. No questions asked, no cancellation fees.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-600">
                  Yes! Save 16% when you choose annual billing. That's like getting 2 months free every year.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Is my data secure?</h3>
                <p className="text-gray-600">
                  Your data security is our top priority. We use enterprise-grade encryption and secure cloud storage with automatic backups.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gray-900 rounded-3xl p-12">
            <h2 className="text-3xl font-light text-white mb-4">
              Ready to streamline your inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the waitlist and be first to know when IVMA launches.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Join the Waitlist
            </button>
            <p className="text-gray-400 mt-4 text-sm">
              Early access for waitlist members • Launching soon • No commitment required
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
