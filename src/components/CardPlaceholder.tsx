
import React from 'react';
import { cn } from "@/lib/utils";

interface CardPlaceholderProps {
  className?: string;
}

const CardPlaceholder: React.FC<CardPlaceholderProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-full h-full rounded-lg border-2 border-oracle-gold overflow-hidden animate-glow",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-oracle-mystical to-oracle-shadow"></div>
      
      {/* Sacred Geometry Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-4/5 h-4/5">
          <div className="absolute inset-0 border-2 border-oracle-gold rounded-full"></div>
          <div className="absolute inset-0 border border-oracle-gold rounded-full transform rotate-45"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/5 h-3/5 border border-oracle-gold rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="shimmer-text text-center font-serif text-lg px-4">
          Oracle of the Hypogeum
        </div>
      </div>
      
      {/* Top Symbols */}
      <div className="absolute top-3 left-0 right-0 flex justify-center space-x-4 opacity-60">
        <div className="text-oracle-gold text-xs">✧</div>
        <div className="text-oracle-gold text-xs">⚜</div>
        <div className="text-oracle-gold text-xs">✧</div>
      </div>
      
      {/* Bottom Symbols */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-4 opacity-60">
        <div className="text-oracle-gold text-xs">⚜</div>
        <div className="text-oracle-gold text-xs">✧</div>
        <div className="text-oracle-gold text-xs">⚜</div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  );
};

export default CardPlaceholder;
