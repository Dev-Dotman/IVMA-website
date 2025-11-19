'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const testimonialsRef = useRef();
  const topRowRef = useRef();
  const bottomRowRef = useRef();

  const topRowTestimonials = [
    { 
      text: "IVY transformed our warehouse operations. Real-time tracking reduced our stock discrepancies by 95%!", 
      author: "Sarah Johnson", 
      position: "Operations Manager, TechCorp",
      rating: 5
    },
    { 
      text: "Finally, an inventory system that doesn't break the bank. Transparent pricing with powerful features!", 
      author: "Michael Chen", 
      position: "Small Business Owner, San Francisco",
      rating: 5
    },
    { 
      text: "The mobile app saved us during our busy season. Managing inventory on-the-go has never been easier.", 
      author: "Jessica Williams", 
      position: "Retail Manager, Austin",
      rating: 5
    },
    { 
      text: "Onboarded 50 products in minutes. The bulk import feature is absolutely incredible!", 
      author: "David Rodriguez", 
      position: "Procurement Director, StartupCo",
      rating: 5
    },
    { 
      text: "From raw materials to finished goods - IVY handles our entire supply chain seamlessly.", 
      author: "Emily Parker", 
      position: "Manufacturing Lead, Brooklyn",
      rating: 5
    },
    { 
      text: "The automated alerts and QR code tracking make our inventory management professional and secure.", 
      author: "James Thompson", 
      position: "Warehouse Owner, Miami",
      rating: 5
    }
  ];

  const bottomRowTestimonials = [
    { 
      text: "Customer support resolved our integration issue in 5 minutes. Outstanding technical service!", 
      author: "Rachel Kim", 
      position: "IT Manager, Portland",
      rating: 5
    },
    { 
      text: "The low-stock predictions are spot-on. IVY knows exactly when we need to reorder!", 
      author: "Alex Rivera", 
      position: "Supply Chain Analyst, Seattle",
      rating: 5
    },
    { 
      text: "Switching from spreadsheets was seamless. The data migration was completely hassle-free.", 
      author: "Lisa Chang", 
      position: "Operations Consultant, Chicago",
      rating: 5
    },
    { 
      text: "Clean dashboard, fast updates, accurate reporting. This is how inventory management should be done.", 
      author: "Mark Stevens", 
      position: "Logistics Coordinator, Los Angeles",
      rating: 5
    },
    { 
      text: "Been using IVY for 2 years across 3 locations. Never had a system failure - consistently reliable.", 
      author: "Amanda Foster", 
      position: "Multi-store Owner, Denver",
      rating: 5
    },
    { 
      text: "The cost savings from reduced waste and optimized ordering paid for itself in 2 months!", 
      author: "Daniel Lee", 
      position: "Restaurant Chain Manager, Nashville",
      rating: 5
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate testimonial cards on scroll
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
        }
      });

      // Top row - slide to right
      const topRow = topRowRef.current;
      if (topRow) {
        gsap.set(topRow, { x: 0 });
        gsap.to(topRow, {
          x: -topRow.scrollWidth / 2,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }

      // Bottom row - slide to left
      const bottomRow = bottomRowRef.current;
      if (bottomRow) {
        gsap.set(bottomRow, { x: -bottomRow.scrollWidth / 2 });
        gsap.to(bottomRow, {
          x: 0,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const renderTestimonialCard = (testimonial, index) => (
    <div key={index} className="testimonial-card flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mx-3 hover:shadow-xl transition-shadow duration-300">
      {/* Quote mark */}
      <div className="text-4xl text-green-600 mb-4 font-serif">&quot;</div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
        ))}
      </div>
      
      {/* Testimonial text */}
      <p className="text-gray-700 mb-6 leading-relaxed text-sm">
        {testimonial.text}
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
          <p className="text-xs text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={testimonialsRef} id="testimonials" className="testimonials-section py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-900 rounded-full px-6 py-2 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-green-400 text-green-400" />
              <span className="text-white text-sm font-medium">Rated 4.9/5 by over 10,000 businesses</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by businesses <br />
            across every industry.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied businesses who've streamlined their inventory management with IVY.
          </p>
        </div>

        {/* Top sliding row - moves right */}
        <div className="mb-8">
          <div 
            ref={topRowRef}
            className="flex"
            style={{ width: 'max-content' }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...topRowTestimonials, ...topRowTestimonials].map((testimonial, index) => 
              renderTestimonialCard(testimonial, `top-${index}`)
            )}
          </div>
        </div>

        {/* Bottom sliding row - moves left */}
        <div>
          <div 
            ref={bottomRowRef}
            className="flex"
            style={{ width: 'max-content' }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map((testimonial, index) => 
              renderTestimonialCard(testimonial, `bottom-${index}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
