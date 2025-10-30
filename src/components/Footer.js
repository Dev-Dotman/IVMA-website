"use client";
import { useEffect, useRef } from 'react';
import { Twitter, Linkedin, Github, Package, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const footer = footerRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;

    // Animate footer on scroll
    gsap.fromTo(footer, 
      { 
        y: 50,
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate logo
    gsap.fromTo(logo,
      { scale: 0, rotation: -180 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%"
        }
      }
    );

    // Animate footer links
    gsap.fromTo(links,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4" ref={el => linksRef.current[0] = el}>
            <div className="flex items-center space-x-2">
              <div ref={logoRef} className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold">IVMA</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Streamline your inventory management with our powerful, easy-to-use SaaS platform trusted by thousands of businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div ref={el => linksRef.current[1] = el}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Features <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Pricing <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Integrations <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">API <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Security <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div ref={el => linksRef.current[2] = el}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">About Us <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Careers <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Blog <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Press <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Contact <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div ref={el => linksRef.current[3] = el}>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Help Center <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Documentation <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Tutorials <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Community <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">Status <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 IVMA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
