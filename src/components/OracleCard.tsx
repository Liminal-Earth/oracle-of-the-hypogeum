
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
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      onClick={!disabled ? onClick : undefined}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full rounded-lg shadow-lg flex items-center justify-center backface-hidden ${flipped ? 'hidden' : ''}`}>
          <div className="card-back w-full h-full rounded-lg border-2 border-oracle-gold flex items-center justify-center">
            <div className="text-oracle-parchment text-opacity-60 font-serif text-sm">
              Oracle of the Hypogeum
            </div>
          </div>
        </div>
        
        <div className={`absolute w-full h-full rounded-lg shadow-lg backface-hidden rotate-y-180 ${flipped ? '' : 'hidden'}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-lg border-2 border-oracle-gold"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg">
            <h3 className="text-center font-serif text-xs sm:text-sm truncate">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleCard;
