
import React from 'react';
import { cn } from "@/lib/utils";

interface CardPlaceholderProps {
  className?: string;
}

const CardPlaceholder: React.FC<CardPlaceholderProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-full h-full rounded-lg border border-oracle-gold/30 overflow-hidden bg-white",
      className
    )}>
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30"></div>
      
      {/* Sacred Geometry Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          <div className="absolute inset-0 border border-oracle-gold/40 rounded-full"></div>
          <div className="absolute inset-0 border border-oracle-gold/20 rounded-full transform rotate-45"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/5 h-3/5 border border-oracle-gold/30"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center font-serif px-4">
          <span className="text-oracle-gold text-lg font-medium tracking-wider">ORACLE</span>
          <br />
          <span className="text-oracle-gray text-sm">OF THE</span> 
          <br />
          <span className="text-oracle-gold text-lg font-medium tracking-wider">HYPOGEUM</span>
        </div>
      </div>
      
      {/* Subtle symbols */}
      <div className="absolute top-4 left-0 right-0 flex justify-center space-x-4 opacity-50">
        <div className="text-oracle-gold text-xs">⚯</div>
        <div className="text-oracle-gold text-xs">⚭</div>
        <div className="text-oracle-gold text-xs">⚯</div>
      </div>
      
      {/* Bottom Symbols */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-50">
        <div className="text-oracle-gold text-xs">⚭</div>
        <div className="text-oracle-gold text-xs">⚯</div>
        <div className="text-oracle-gold text-xs">⚭</div>
      </div>
      
      {/* Draw card text */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-oracle-gray/60 text-[10px] uppercase tracking-widest">Draw Card</span>
      </div>
    </div>
  );
};

export default CardPlaceholder;
