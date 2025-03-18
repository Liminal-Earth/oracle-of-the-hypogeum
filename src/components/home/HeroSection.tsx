
import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allCards, shuffleCards, OracleCard as CardType } from '@/data/oracleData';
import OracleCard from '@/components/OracleCard';
import CardDialog from './CardDialog';

const HeroSection: React.FC = () => {
  // Get 8 random cards from the deck on each page load
  const randomCards = useMemo(() => {
    return shuffleCards(allCards).slice(0, 8);
  }, []);
  
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload images for the random cards shown on the homepage
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = randomCards.map(card => {
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
        console.log('Hero section card images preloaded successfully');
      } catch (error) {
        console.error('Error preloading hero images:', error);
        // Still set to true so the UI doesn't get stuck
        setImagesPreloaded(true);
      }
    };
    
    preloadImages();
  }, [randomCards]);

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-oracle-mystical/5 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-oracle-mystical mb-6 relative">
          <span className="relative">
            Oracle of the Hypogeum
            <span className="absolute bottom-0 left-0 w-full h-1 bg-oracle-gold opacity-50"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
          An ancient Quatrian divination system with 48 sacred symbols to help remythologize your internal and external landscapes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild size="lg" className="bg-oracle-mystical hover:bg-oracle-mystical/90">
            <Link to="/reading">
              <BookOpen className="mr-2 h-5 w-5" />
              Start a Reading
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-oracle-mystical text-oracle-mystical hover:bg-oracle-mystical/10">
            <Link to="/cards">
              <Library className="mr-2 h-5 w-5" />
              Explore the Cards
            </Link>
          </Button>
        </div>
        
        <div className="relative w-full max-w-4xl aspect-[2/1] sm:aspect-video rounded-lg overflow-hidden shadow-xl animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-oracle-stone/20 to-oracle-mystical/20 z-10"></div>
          
          {!imagesPreloaded ? (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-background/50">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-oracle-mystical border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
                <p className="text-muted-foreground">Summoning the Oracle cards...</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="grid grid-cols-4 gap-1 md:gap-4 p-2 md:p-4">
                {randomCards.map((card, i) => (
                  <div 
                    key={card.id} 
                    className="transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                    style={{ 
                      transform: `rotate(${Math.random() * 6 - 3}deg)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                    onClick={() => handleCardClick(card)}
                  >
                    <OracleCard 
                      name={card.name}
                      image={card.imageUrl}
                      flipped={true}
                      hideLabel={true}
                      className="w-14 h-20 sm:w-24 sm:h-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CardDialog selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
    </section>
  );
};

export default HeroSection;
