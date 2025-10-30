"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ctaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const cta = ctaRef.current;
    const content = contentRef.current;

    gsap.fromTo(content,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={ctaRef} className="px-6 py-20 bg-gray-50">
      <div ref={contentRef} className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of businesses already using IVMA to streamline their inventory management.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors hover:scale-105 transform">
          Start Free Trial
        </button>
        <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
      </div>
    </section>
  );
}
