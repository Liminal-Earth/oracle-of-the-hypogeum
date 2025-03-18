
import React from 'react';
import { OracleCard } from "@/data/oracleData";

interface ReadingCardState {
  card: OracleCard;
  flipped: boolean;
}

interface InterpretationSectionProps {
  reading: ReadingCardState[];
  interpretation: string;
  isReadingComplete: boolean;
}

const InterpretationSection: React.FC<InterpretationSectionProps> = ({ 
  reading, 
  interpretation, 
  isReadingComplete 
}) => {
  if (!isReadingComplete || !interpretation) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border animate-appear-slide-up">
      <h3 className="text-xl font-serif text-oracle-mystical mb-3">Interpretation</h3>
      <p className="text-foreground leading-relaxed">{interpretation}</p>
      
      {/* Card details in the interpretation section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reading.map((readingCard, index) => (
          <div key={index} className="p-4 bg-black/5 rounded-lg border border-oracle-gold/20">
            <h4 className="font-medium text-sm flex items-center gap-2">
              {readingCard.card.name} - {readingCard.card.category}
              <span className="text-xs font-normal text-muted-foreground">
                {index === 0 ? '(Prevailing Current)' : '(Underlying Current)'}
              </span>
            </h4>
            <p className="text-sm text-muted-foreground mt-1">{readingCard.card.description}</p>
            {readingCard.card.attributes && (
              <div className="mt-2">
                <span className="text-xs font-medium">Attributes: </span>
                <span className="text-xs">{readingCard.card.attributes.join(', ')}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterpretationSection;
