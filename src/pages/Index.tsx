
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import HowToUseSection from '@/components/home/HowToUseSection';
import CardCategoriesSection from '@/components/home/CardCategoriesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Papyrus texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0" 
           style={{ 
             backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.4%22 result=%22noise%22 /%3E%3CfeDisplacementMap in=%22SourceGraphic%22 in2=%22noise%22 scale=%225%22 /%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 /%3E%3C/svg%3E')",
             backgroundSize: '500px 500px',
           }} 
      />
      <HeroSection />
      <AboutSection />
      <HowToUseSection />
      <CardCategoriesSection />
    </div>
  );
};

export default Index;
