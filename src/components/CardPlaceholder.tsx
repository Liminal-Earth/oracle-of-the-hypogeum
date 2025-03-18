
import React from 'react';
import { cn } from "@/lib/utils";

interface CardPlaceholderProps {
  className?: string;
}

const CardPlaceholder: React.FC<CardPlaceholderProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-full h-full rounded-lg border-2 border-oracle-gold overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-oracle-mystical to-oracle-shadow"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-oracle-parchment font-serif text-lg animate-pulse-subtle">
          Oracle of the Hypogeum
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default CardPlaceholder;
