import React, { useState, useEffect } from 'react';
import { entityCards, magicianCards, monsterCards, OracleCard, CardCategory, allCards } from '@/data/oracleData';
import OracleCardComponent from '@/components/OracleCard';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const OracleCardLibrary: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<OracleCard | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = allCards.map(card => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = card.imageUrl;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
        console.log('All card images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesPreloaded(true);
      }
    };
    
    preloadImages();
  }, []);
  
  const filterCards = (cards: OracleCard[], term: string) => {
    if (!term) return cards;
    return cards.filter(card => 
      card.name.toLowerCase().includes(term.toLowerCase()) || 
      card.description.toLowerCase().includes(term.toLowerCase())
    );
  };
  
  const filteredEntityCards = filterCards(entityCards, searchTerm);
  const filteredMagicianCards = filterCards(magicianCards, searchTerm);
  const filteredMonsterCards = filterCards(monsterCards, searchTerm);
  
  const groupedEntityCards: Record<CardCategory, OracleCard[]> = {
    'Pre-Manifest Powers': [],
    'Places In Which Things Manifest': [],
    'Entities That Manifest': [],
    'Forms In Which Things Manifest': [],
    'The Mysteries of Manifestation': [],
    'Magician': [],
    'Monster': [],
  };
  
  filteredEntityCards.forEach(card => {
    groupedEntityCards[card.category].push(card);
  });
  
  const handleCardClick = (card: OracleCard) => {
    setSelectedCard(card);
  };
  
  if (!imagesPreloaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-oracle-mystical border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
          <p className="text-muted-foreground">Loading the Oracle cards...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search cards by name or description..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
        
        <Tabs defaultValue="entities">
          <TabsList className="w-full max-w-md mx-auto">
            <TabsTrigger value="entities" className="flex-1">Entities ({filteredEntityCards.length})</TabsTrigger>
            <TabsTrigger value="magicians" className="flex-1">Magicians ({filteredMagicianCards.length})</TabsTrigger>
            <TabsTrigger value="monsters" className="flex-1">Monsters ({filteredMonsterCards.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="entities" className="mt-6">
            {Object.entries(groupedEntityCards).map(([category, cards]) => (
              cards.length > 0 && (
                <div key={category} className="mb-10">
                  <h3 className="text-xl font-serif text-oracle-mystical mb-4">{category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {cards.map(card => (
                      <div key={card.id} className="flex flex-col items-center">
                        <OracleCardComponent 
                          name={card.name}
                          image={card.imageUrl}
                          flipped={true}
                          onClick={() => handleCardClick(card)}
                          className="w-36 h-52 sm:w-40 sm:h-56"
                          hideLabel={true}
                        />
                        <p className="mt-2 text-center font-medium text-sm">{card.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </TabsContent>
          
          <TabsContent value="magicians" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredMagicianCards.map(card => (
                <div key={card.id} className="flex flex-col items-center">
                  <OracleCardComponent 
                    name={card.name}
                    image={card.imageUrl}
                    flipped={true}
                    onClick={() => handleCardClick(card)}
                    className="w-36 h-52 sm:w-40 sm:h-56"
                    hideLabel={true}
                  />
                  <p className="mt-2 text-center font-medium text-sm">{card.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monsters" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredMonsterCards.map(card => (
                <div key={card.id} className="flex flex-col items-center">
                  <OracleCardComponent 
                    name={card.name}
                    image={card.imageUrl}
                    flipped={true}
                    onClick={() => handleCardClick(card)}
                    className="w-36 h-52 sm:w-40 sm:h-56"
                    hideLabel={true}
                  />
                  <p className="mt-2 text-center font-medium text-sm">{card.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Dialog open={!!selectedCard} onOpenChange={open => !open && setSelectedCard(null)}>
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
                  <OracleCardComponent 
                    name={selectedCard.name}
                    image={selectedCard.imageUrl}
                    flipped={true}
                    className="w-48 h-64 md:w-52 md:h-72"
                    hideLabel={true}
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
              
              <div className="flex justify-end mt-4">
                <Button 
                  onClick={() => setSelectedCard(null)}
                  variant="outline"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OracleCardLibrary;
