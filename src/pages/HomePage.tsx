
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CardCategoriesSection from '@/components/home/CardCategoriesSection';
import HowToUseSection from '@/components/home/HowToUseSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CardCategoriesSection />
      <HowToUseSection />
    </div>
  );
};

export default HomePage;
