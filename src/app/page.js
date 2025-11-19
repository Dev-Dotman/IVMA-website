"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import ToolsPage from "@/components/Tools";
import BonusFeatures from "../components/BonusFeatures";
import AISection from "../components/AISection";
import WaitlistModal from "../components/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <main>
        <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <ToolsPage />
        <BonusFeatures onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <Features onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
