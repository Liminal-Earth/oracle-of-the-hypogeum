
import React from 'react';
import { cn } from "@/lib/utils";

interface OracleCardProps {
  name: string;
  image: string;
  flipped?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const OracleCard: React.FC<OracleCardProps> = ({ 
  name, 
  image, 
  flipped = false, 
  onClick, 
  className,
  disabled = false
}) => {
  return (
    <div 
      className={cn(
        "relative perspective-1000 w-52 h-72 cursor-pointer oracle-card",
        disabled && "opacity-70 cursor-not-allowed",
        className
      )}
      onClick={!disabled ? onClick : undefined}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full rounded-lg shadow-gold-glow flex items-center justify-center backface-hidden ${flipped ? 'hidden' : ''}`}>
          <div className="card-back w-full h-full rounded-lg border-2 border-oracle-gold flex items-center justify-center">
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
        
        <div className={`absolute w-full h-full rounded-lg shadow-gold-glow backface-hidden rotate-y-180 ${flipped ? '' : 'hidden'}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-lg border-2 border-oracle-gold"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-2 rounded-b-lg">
            <h3 className="text-center font-serif text-oracle-gold text-xs sm:text-sm truncate">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleCard;
