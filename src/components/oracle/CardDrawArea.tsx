
import React from 'react';
import { OracleCard } from "@/data/oracleData";
import OracleCardComponent from "@/components/OracleCard";
import CardPlaceholder from "@/components/CardPlaceholder";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface ReadingCardState {
  card: OracleCard;
  flipped: boolean;
}

interface CardDrawAreaProps {
  reading: ReadingCardState[];
  onDrawCard: () => void;
  deckEmpty: boolean;
}

const CardDrawArea: React.FC<CardDrawAreaProps> = ({ 
  reading, 
  onDrawCard, 
  deckEmpty 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {reading.map((readingCard, index) => (
        <div key={index} className="card-appear" style={{ animationDelay: `${index * 0.2}s` }}>
          <div className="relative">
            <OracleCardComponent 
              name={readingCard.card.name}
              image={readingCard.card.imageUrl} 
              flipped={readingCard.flipped}
              disabled={true}
            />
            {readingCard.flipped && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/10 hover:bg-black/20"
                  >
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Card Info</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 p-4 z-50" 
                  side="top"
                  align="center"
                  sideOffset={10}
                >
                  <div className="space-y-2">
                    <h4 className="font-medium">{readingCard.card.name} - {readingCard.card.category}</h4>
                    <p className="text-sm text-muted-foreground">{readingCard.card.description}</p>
                    {readingCard.card.attributes && (
                      <div className="mt-2">
                        <span className="text-xs font-medium">Attributes: </span>
                        <span className="text-xs">{readingCard.card.attributes.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
          <p className="mt-2 text-center font-medium">
            {index === 0 ? 'Prevailing Current' : 'Underlying Current'}
          </p>
        </div>
      ))}
      
      {reading.length < 2 && (
        <div className="flex items-center justify-center w-52 h-72">
          <CardPlaceholder onClick={onDrawCard} disabled={deckEmpty || reading.length >= 2} />
        </div>
      )}
    </div>
  );
};

export default CardDrawArea;
