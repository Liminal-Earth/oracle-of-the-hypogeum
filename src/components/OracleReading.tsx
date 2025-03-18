
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { allCards, shuffleCards, OracleCard } from "@/data/oracleData";
import OracleCardComponent from "@/components/OracleCard";
import CardPlaceholder from "@/components/CardPlaceholder";
import { Shuffle, BookOpen } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ReadingCardState {
  card: OracleCard;
  flipped: boolean;
}

const OracleReading: React.FC = () => {
  const [deck, setDeck] = useState<OracleCard[]>([]);
  const [reading, setReading] = useState<ReadingCardState[]>([]);
  const [isReadingComplete, setIsReadingComplete] = useState(false);
  const [interpretation, setInterpretation] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    initializeDeck();
  }, []);

  const initializeDeck = () => {
    const shuffledDeck = shuffleCards(allCards);
    setDeck(shuffledDeck);
    setReading([]);
    setIsReadingComplete(false);
    setInterpretation('');
  };

  const drawCard = () => {
    if (deck.length === 0 || reading.length >= 2) {
      return;
    }

    const newCard = deck[0];
    const remainingDeck = deck.slice(1);
    
    const newReadingCard: ReadingCardState = {
      card: newCard,
      flipped: false
    };
    
    setDeck(remainingDeck);
    setReading([...reading, newReadingCard]);
    
    // Flip the card after a short delay
    setTimeout(() => {
      setReading(prev => {
        const updated = [...prev];
        updated[updated.length - 1].flipped = true;
        return updated;
      });
      
      // If this is the second card, generate the interpretation
      if (reading.length === 1) {
        setTimeout(() => {
          generateInterpretation([...reading, newReadingCard].map(rc => rc.card));
          setIsReadingComplete(true);
        }, 1000);
      }
    }, 800);
  };

  const generateInterpretation = (cards: OracleCard[]) => {
    if (cards.length !== 2) return;
    
    const [prevailing, underlying] = cards;
    
    let interpretationText = "";
    
    // Check for special combinations
    if (prevailing.type === 'magician' && underlying.type === 'monster') {
      interpretationText = `The ${prevailing.name} (${prevailing.type}) has captured ${underlying.name} (${underlying.type}). This is a favorable reading! ${prevailing.name}, ${prevailing.attributes?.join(' and ')}, brings its positive influence to overcome the negative energy of ${underlying.name}.`;
    } 
    else if (prevailing.type === 'monster' && underlying.type === 'magician') {
      interpretationText = `The ${prevailing.name} (${prevailing.type}) has evaded capture by ${underlying.name} (${underlying.type}). This suggests challenges ahead. The influence of ${prevailing.name} may be presenting obstacles that require special attention.`;
    }
    else if (prevailing.id === 'anthuor' && underlying.type === 'monster') {
      interpretationText = `Anthuor, The One Who Withstands, has automatically captured ${underlying.name}. This is a powerful and favorable reading! Anthuor's wild energy negates the negative influence of ${underlying.name}.`;
    }
    else if (prevailing.id === 'the-vernow' && underlying.type === 'magician') {
      interpretationText = `The Vernow, as an Unpleasant Surprise, has evaded ${underlying.name}. This suggests unexpected troubles ahead that may be difficult to overcome. The Vernow reverses the positive effects that ${underlying.name} might have brought.`;
    }
    else if (prevailing.type === 'magician' && underlying.type === 'magician') {
      interpretationText = `Two Magicians - ${prevailing.name} and ${underlying.name} - work together to bring harmony. This is a very favorable reading! Their combined positive energies suggest a period of growth and positive development.`;
    }
    else if (prevailing.type === 'monster' && underlying.type === 'monster') {
      interpretationText = `Two Monsters - ${prevailing.name} and ${underlying.name} - indicate a darker place in which you currently reside. This suggests multiple challenges or negative influences may be affecting your situation.`;
    }
    else {
      // Regular interpretation for entity cards
      interpretationText = `The prevailing current is represented by ${prevailing.name} (${prevailing.category}), indicating ${prevailing.description.split('.')[0]}. The underlying current is represented by ${underlying.name} (${underlying.category}), suggesting ${underlying.description.split('.')[0]}.`;
    }
    
    // Special case for Memlen
    if (prevailing.id === 'memlen' || underlying.id === 'memlen') {
      interpretationText = "MEMLEN has appeared. The session must immediately be closed to avoid attracting unwanted negative energies. A new session may be started in at least one hour.";
      
      toast({
        title: "Warning: Memlen Has Appeared",
        description: "The session should be closed. You may start a new reading after some time has passed.",
        variant: "destructive",
      });
    }
    
    setInterpretation(interpretationText);
  };

  const resetReading = () => {
    initializeDeck();
    
    toast({
      title: "New Reading Started",
      description: "The cards have been shuffled for a new reading.",
    });
  };

  return (
    <div className="reading-container p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-serif text-oracle-mystical mb-4">Oracle Reading</h2>
        <p className="text-center text-muted-foreground mb-6">
          Draw two cards for a Short Reading. The first card represents the prevailing current, and the second card represents the underlying current.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {reading.map((readingCard, index) => (
            <div key={index} className="card-appear" style={{ animationDelay: `${index * 0.2}s` }}>
              <OracleCardComponent 
                name={readingCard.card.name}
                image={readingCard.card.imageUrl} 
                flipped={readingCard.flipped}
                disabled={true}
              />
              <p className="mt-2 text-center font-medium">
                {index === 0 ? 'Prevailing Current' : 'Underlying Current'}
              </p>
              {readingCard.flipped && (
                <div className="mt-3 p-3 bg-black/5 rounded-lg border border-oracle-gold/20">
                  <h4 className="font-medium text-sm">{readingCard.card.name} - {readingCard.card.category}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{readingCard.card.description}</p>
                  {readingCard.card.attributes && (
                    <div className="mt-2">
                      <span className="text-xs font-medium">Attributes: </span>
                      <span className="text-xs">{readingCard.card.attributes.join(', ')}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {reading.length < 2 && (
            <div className="flex items-center justify-center w-52 h-72">
              <CardPlaceholder onClick={drawCard} disabled={deck.length === 0 || reading.length >= 2} />
            </div>
          )}
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={drawCard}
            disabled={deck.length === 0 || reading.length >= 2}
            className="bg-oracle-mystical hover:bg-oracle-mystical/80"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Draw Card
          </Button>
          
          <Button
            onClick={resetReading}
            variant="outline"
            className="border-oracle-mystical text-oracle-mystical hover:bg-oracle-mystical/10"
          >
            <Shuffle className="mr-2 h-4 w-4" />
            New Reading
          </Button>
        </div>
      </div>
      
      {isReadingComplete && interpretation && (
        <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border animate-appear-slide-up">
          <h3 className="text-xl font-serif text-oracle-mystical mb-3">Interpretation</h3>
          <p className="text-foreground leading-relaxed">{interpretation}</p>
        </div>
      )}
    </div>
  );
};

export default OracleReading;
