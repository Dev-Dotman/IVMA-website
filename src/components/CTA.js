"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaitlistForm from './WaitlistForm';

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
        <p className="text-xl text-gray-600 mb-12">
          Join the waitlist and be among the first to experience IVMA when we launch.
        </p>
        
        <WaitlistForm />
        
        <p className="text-sm text-gray-500 mt-8">
          Launching soon • Early access for waitlist members • No credit card required
        </p>
      </div>
    </section>
  );
}
