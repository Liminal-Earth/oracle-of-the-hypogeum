
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import HowToUseSection from '@/components/home/HowToUseSection';
import CardCategoriesSection from '@/components/home/CardCategoriesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <HowToUseSection />
      <CardCategoriesSection />
    </div>
  );
};

export default Index;
