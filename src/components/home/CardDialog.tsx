
import React from 'react';
import { OracleCard as CardType } from '@/data/oracleData';
import OracleCard from '@/components/OracleCard';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CardDialogProps {
  selectedCard: CardType | null;
  setSelectedCard: (card: CardType | null) => void;
}

const CardDialog: React.FC<CardDialogProps> = ({ selectedCard, setSelectedCard }) => {
  return (
    <Dialog open={!!selectedCard} onOpenChange={(open) => !open && setSelectedCard(null)}>
      <DialogContent className="max-w-2xl">
        {selectedCard && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-oracle-mystical">{selectedCard.name}</DialogTitle>
              <DialogDescription>
                {selectedCard.type === 'magician' && (
                  <div className="text-sm font-medium text-accent-foreground mt-1">
                    The {selectedCard.attributes?.join(' and ')} Magician
                  </div>
                )}
                {selectedCard.type === 'monster' && (
                  <div className="text-sm font-medium text-destructive mt-1">
                    {selectedCard.attributes?.[0]} Monster
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex justify-center">
                <OracleCard 
                  name={selectedCard.name}
                  image={selectedCard.imageUrl}
                  flipped={true}
                  className="w-48 h-64 md:w-52 md:h-72"
                />
              </div>
              <div>
                <h4 className="font-medium text-oracle-mystical mb-2">Description</h4>
                <p className="text-foreground">{selectedCard.description}</p>
                
                {selectedCard.type === 'entity' && (
                  <div className="mt-4">
                    <h4 className="font-medium text-oracle-mystical mb-2">Category</h4>
                    <p>{selectedCard.category}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
