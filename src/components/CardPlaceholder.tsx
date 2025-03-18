
import React from 'react';
import { cn } from "@/lib/utils";

interface CardPlaceholderProps {
  className?: string;
}

const CardPlaceholder: React.FC<CardPlaceholderProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-full h-full rounded border-4 border-dashed border-oracle-cyber overflow-hidden animate-pulse",
      className
    )}>
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Early internet pattern */}
      <div className="absolute inset-0 retro-bg opacity-20"></div>
      
      {/* Sacred Geometry Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <div className="relative w-4/5 h-4/5 animate-spin-slow">
          <div className="absolute inset-0 border-4 border-oracle-neon rounded-full"></div>
          <div className="absolute inset-0 border-2 border-oracle-cyber rounded-full transform rotate-45"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/5 h-3/5 border-4 border-oracle-weird rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="shimmer-text text-center font-serif text-lg px-4 animate-pulse blink">
          <span className="rainbow-text">ORACLE</span>
          <br />
          OF THE 
          <br />
          <span className="rainbow-text">HYPOGEUM</span>
        </div>
      </div>
      
      {/* Animated symbols */}
      <div className="absolute top-3 left-0 right-0 flex justify-center space-x-4">
        <div className="text-oracle-neon text-xl animate-pulse">★</div>
        <div className="text-oracle-cyber text-xl animate-float">✦</div>
        <div className="text-oracle-weird text-xl animate-pulse">★</div>
      </div>
      
      {/* Bottom Symbols */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-4">
        <div className="text-oracle-cyber text-xl animate-float">✦</div>
        <div className="text-oracle-weird text-xl animate-pulse">★</div>
        <div className="text-oracle-neon text-xl animate-float">✦</div>
      </div>
      
      {/* Marquee text at bottom */}
      <div className="absolute bottom-1 left-0 right-0 marquee text-xs text-oracle-cyber">
        <span>★★★ CLICK TO REVEAL YOUR DESTINY ★★★ ANCIENT WISDOM AWAITS ★★★ THE TRUTH IS OUT THERE ★★★</span>
      </div>
      
      {/* CRT scanline effect */}
      <div className="absolute inset-0 crt pointer-events-none"></div>
    </div>
  );
};

export default CardPlaceholder;
