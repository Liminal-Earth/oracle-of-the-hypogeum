
import React from 'react';
import OracleReading from '@/components/OracleReading';

const ReadingPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-6 bg-oracle-neon animate-marquee overflow-hidden">
          <div className="whitespace-nowrap font-mono text-sm text-black px-4">
            ★★★ WELCOME TO THE ORACLE OF THE HYPOGEUM ★★★ CONSULT THE ANCIENT WISDOM ★★★ YOUR DESTINY AWAITS ★★★
          </div>
        </div>
        
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-oracle-weird animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-oracle-cyber animate-float opacity-20"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border-4 border-oracle-neon transform rotate-45 animate-pulse opacity-25"></div>
        
        {/* More web 1.0 elements */}
        <div className="absolute bottom-10 left-5">
          <img src="https://web.archive.org/web/20090830192916/http://geocities.com/clipart/pbi/under.gif" 
               alt="Under Construction" className="w-24 h-auto" />
        </div>
        
        <div className="absolute top-1/4 right-5">
          <img src="https://web.archive.org/web/20090821205714/http://www.geocities.com/Area51/Corridor/5177/eyes.gif" 
               alt="Animated Eyes" className="w-20 h-auto" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-serif mb-6 text-center rainbow-text">
          <span className="inline-block animate-float">Oracle Reading</span>
          <span className="blink ml-2">_</span>
        </h1>
        
        <div className="w-32 h-4 bg-oracle-neon mx-auto mb-8 pixel-border"></div>
        
        <div className="marquee mb-8">
          <span className="text-center text-oracle-cyber text-xl">
            ★★★ Draw cards to create a divination map that reveals the currents influencing your situation ★★★
          </span>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8 border-4 border-oracle-weird p-4 retro-bg">
          <p className="text-center text-white font-mono">
            Consult the Oracle of the Hypogeum. The ancients speak through these cards. 
            <span className="block text-oracle-neon mt-2 animate-pulse">ARE YOU READY TO KNOW YOUR FATE?</span>
          </p>
        </div>
        
        <OracleReading />
        
        <div className="mt-16 text-center">
          <p className="text-xs text-oracle-cyber font-mono">
            ⓒ 1997 Oracle of the Hypogeum | Best viewed in Netscape Navigator 3.0 | 
            <a href="#" className="underline blink ml-1">Sign our guestbook</a>
          </p>
          <div className="flex justify-center mt-2">
            <img src="https://web.archive.org/web/20091027005536/http://hk.geocities.com/geocities/features/counter/count.gif" 
                 alt="Visitor counter" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;
