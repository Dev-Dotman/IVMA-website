"use client";
import { useState, useRef } from "react";
import Header from "../components/Header";
import MarketplaceHero from "../components/MarketplaceHero";
import MarketplaceAbout from "../components/MarketplaceAbout";
import MarketplaceFeatures from "../components/MarketplaceFeatures";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import Footer from "../components/Footer";
import WaitlistModal from "../components/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const badgeRef = useRef(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <main>
        <MarketplaceAbout />
        <MarketplaceFeatures />
        <MarketplaceHero onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Fixed Bottom Right Badge */}
      <div 
        ref={badgeRef}
        className="fixed bottom-2 right-2 z-40"
      >
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full shadow-xl border border-white/20 backdrop-blur-sm flex items-center space-x-2 group hover:scale-105 transition-transform cursor-pointer">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span className="font-semibold text-xs">Nigeria's No. 1 Marketplace</span>
        </div>
      </div>
    </div>
  );
}
