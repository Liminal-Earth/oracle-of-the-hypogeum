
import React from 'react';
import { OracleCard } from "@/data/oracleData";
import OracleCardComponent from "@/components/OracleCard";
import CardPlaceholder from "@/components/CardPlaceholder";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  const [openDialogIndex, setOpenDialogIndex] = React.useState<number | null>(null);

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
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/10 hover:bg-black/20"
                onClick={() => setOpenDialogIndex(index)}
              >
                <Info className="h-4 w-4" />
                <span className="sr-only">Card Info</span>
              </Button>
            )}

            <Dialog open={openDialogIndex === index} onOpenChange={(open) => !open && setOpenDialogIndex(null)}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif text-oracle-mystical">{readingCard.card.name}</DialogTitle>
                  <DialogDescription>
                    {readingCard.card.type === 'magician' && (
                      <div className="text-sm font-medium text-accent-foreground mt-1">
                        The {readingCard.card.attributes?.join(' and ')} Magician
                      </div>
                    )}
                    {readingCard.card.type === 'monster' && (
                      <div className="text-sm font-medium text-destructive mt-1">
                        {readingCard.card.attributes?.[0]} Monster
                      </div>
                    )}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="flex justify-center">
                    <OracleCardComponent 
                      name={readingCard.card.name}
                      image={readingCard.card.imageUrl}
                      flipped={true}
                      className="w-48 h-64 md:w-52 md:h-72"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-oracle-mystical mb-2">Description</h4>
                    <p className="text-foreground">{readingCard.card.description}</p>
                    
                    {readingCard.card.type === 'entity' && (
                      <div className="mt-4">
                        <h4 className="font-medium text-oracle-mystical mb-2">Category</h4>
                        <p>{readingCard.card.category}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button 
                    onClick={() => setOpenDialogIndex(null)}
                    variant="outline"
                  >
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
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
