
import React from 'react';
import { useOracleReading } from "@/hooks/useOracleReading";
import CardDrawArea from "@/components/oracle/CardDrawArea";
import ReadingControls from "@/components/oracle/ReadingControls";
import InterpretationSection from "@/components/oracle/InterpretationSection";

const OracleReading: React.FC = () => {
  const {
    deck,
    reading,
    isReadingComplete,
    interpretation,
    drawCard,
    resetReading,
  } = useOracleReading();

  return (
    <div className="reading-container p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-serif text-oracle-mystical mb-4">Oracle Reading</h2>
        <p className="text-center text-muted-foreground mb-6">
          Draw two cards for a Short Reading. The first card represents the prevailing current, and the second card represents the underlying current.
        </p>
        
        <CardDrawArea 
          reading={reading} 
          onDrawCard={drawCard} 
          deckEmpty={deck.length === 0} 
        />
        
        <ReadingControls 
          onDrawCard={drawCard} 
          onResetReading={resetReading} 
          disableDrawCard={deck.length === 0 || reading.length >= 2} 
        />
      </div>
      
      <InterpretationSection 
        reading={reading} 
        interpretation={interpretation} 
        isReadingComplete={isReadingComplete} 
      />
    </div>
  );
};

export default OracleReading;
