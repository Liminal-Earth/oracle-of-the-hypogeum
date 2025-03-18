
import React from 'react';
import { cn } from "@/lib/utils";

interface CardPlaceholderProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CardPlaceholder: React.FC<CardPlaceholderProps> = ({ className, onClick, disabled = false }) => {
  return (
    <div 
      className={cn(
        "relative w-52 h-72 rounded-lg border border-oracle-gold/30 overflow-hidden shadow-gold-glow transition-all duration-300 hover:shadow-gold-glow-lg",
        disabled && "opacity-70 cursor-not-allowed",
        onClick && !disabled ? "cursor-pointer" : "",
        className
      )}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="card-back w-full h-full rounded-lg border-2 border-oracle-gold flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          {/* Sacred Geometry Pattern */}
          <div className="relative w-4/5 h-4/5 opacity-30">
            <div className="absolute inset-0 border border-oracle-gold rounded-full"></div>
            <div className="absolute inset-0 border border-oracle-gold rounded-full transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/5 h-3/5 border border-oracle-gold rotate-45"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/5 h-2/5 border border-oracle-gold transform rotate-45"></div>
            </div>
          </div>
          
          <div className="text-oracle-gold text-opacity-80 font-serif text-sm relative z-10">
            Oracle of the Hypogeum
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
        </div>
      </div>
      
      {/* Draw card text */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-oracle-gold text-[10px] uppercase tracking-widest">Draw Card</span>
      </div>
    </div>
  );
};

export default CardPlaceholder;
