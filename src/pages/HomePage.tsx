
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Library } from 'lucide-react';
import { allCards, shuffleCards } from '@/data/oracleData';
import OracleCard from '@/components/OracleCard';

const HomePage: React.FC = () => {
  // Get 8 random cards from the deck on each page load
  const randomCards = useMemo(() => {
    return shuffleCards(allCards).slice(0, 8);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-oracle-stone/20 to-oracle-mystical/20 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-4">
                {randomCards.map((card, i) => (
                  <div 
                    key={card.id} 
                    className="transform transition-transform duration-500 hover:scale-105"
                    style={{ 
                      transform: `rotate(${Math.random() * 6 - 3}deg)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  >
                    <OracleCard 
                      name={card.name}
                      image={card.imageUrl}
                      flipped={true}
                      className="w-16 h-24 sm:w-24 sm:h-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-oracle-parchment/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-oracle-mystical mb-6 text-center">What is the Oracle of the Hypogeum?</h2>
            
            <div className="prose prose-slate max-w-none">
              <p>
                The Oracle of the Hypogeum is a deck of 48 cards, each card based upon a sacred symbol from the Ancient Quatrian culture. The Quatrians used these symbols to help remythologize their landscapes, both internal and external.
              </p>
              
              <p>
                Although specific traditions and customs varied from biome to biome, the ideas represented by these glyphs were universal. They could be found, individually or collectively, on everything from doorposts to road signs to tattoos. They were said to have been taught to humans by ANTHUOR, the Quatrian deer power, who communicated the symbols via shapes seen in the murmurations of starlings. The starlings took flight from within the Hypogeum, a mysterious stone chamber central to Quatrian myth.
              </p>
              
              <p>
                As ubiquitous within Quatrian culture as corporate logos are in Late Capitalist neoliberalism, the primary use for the Symbols seems to have been a way to express meaning across a variety of cultural contexts. Just as someone living in Southeast Asia might recognize the "Golden Arches" as representative of McDonald's, so a Quatrian from a sub-polar settlement would understand that the symbol for "Life Force" (vimna) depicted a plant emerging from a seed.
              </p>
              
              <h3 className="text-xl font-serif text-oracle-mystical mt-8 mb-4">A Different Conception of Time</h3>
              
              <p>
                Every society practiced some form of what we now refer to as "Divination," and the Quatrians were no exception. That said, our understanding of divination (via Tarot Cards, the I Ching, etc.) depends on a much different conception of time than that of the various societies of Quatria.
              </p>
              
              <p>
                Quatrians conceived of experience as a kind of "bubbling up" of instances from an underlying Ground of Being. Instead of our linear timeline, or even something cyclical, "time," in Quatria, resembled the surface of a lake, and "instances" as susurrations on the face of the water.
              </p>
              
              <p>
                Quatrian "divination" seems to have been used to identify other factors causing the entire singularity at which the reader found herself. Thus, the diviner uses the cards to quite literally make a map, of consciousness or otherwise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Card Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-oracle-mystical mb-10 text-center">The Oracle Deck</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-oracle-mystical to-oracle-shadow flex items-center justify-center">
                <h3 className="text-xl font-serif text-white">32 Entity Cards</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Features in the landscape, both active and passive. These include pre-manifest powers, places of manifestation, entities that manifest, forms of manifestation, and mysteries.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cards">View Entity Cards</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-oracle-moss to-oracle-earth flex items-center justify-center">
                <h3 className="text-xl font-serif text-white">8 Magicians</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  "Positive" or beneficial forces working on behalf of ANTHUOR. Each Magician is associated with plants whose power was preeminent to the Quatrians.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cards?tab=magicians">View Magicians</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-oracle-shadow to-black flex items-center justify-center">
                <h3 className="text-xl font-serif text-white">8 Monsters</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  "Negative" or unfortunate influences from an old world, who need to be defeated by the Magicians. Each is a Therioanthropic beast with a specific domain.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cards?tab=monsters">View Monsters</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Use Section */}
      <section className="py-16 bg-oracle-parchment/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-oracle-mystical mb-6 text-center">Using the Oracle</h2>
            
            <div className="prose prose-slate max-w-none">
              <p>
                There is no wrong way to read the cards, but the Quatrian diviners left us a few suggestions.
              </p>
              
              <p>
                Readings using the Oracle are typically read using pairs of cards. The simplest reading (Short Reading) uses two cards. The deck is shuffled or 'flipped through' and two cards are drawn. The first card is the prevailing current, or most significant aspect of the reading, and the second card is the underlying current, or secondary aspect of the reading.
              </p>
              
              <p>
                The reader then intuits the meaning of the reading based on her understanding of the situation, as well as the symbols on the cards. If she so desires, she can also ask follow-up questions using the same process.
              </p>
              
              <h3 className="text-xl font-serif text-oracle-mystical mt-8 mb-4">Special Combinations</h3>
              
              <ul>
                <li>If a Magician is drawn as the prevailing current and a Monster for the underlying current, the Monster has been "Captured," or Defeated, by the Magician, and the reading is favorable.</li>
                <li>If a Monster is prevailing, it has evaded capture and the Magician in question must be removed from the deck for the remainder of the session.</li>
                <li>Two Magicians work together to bring harmony to the querent.</li>
                <li>Two Monsters indicate a darker place in which the querent currently resides.</li>
                <li>ANTHUOR, as the One Who Withstands, always captures Monsters.</li>
                <li>THE VERNOW, as an Unpleasant Surprise, always evades Magicians.</li>
              </ul>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-oracle-mystical hover:bg-oracle-mystical/90">
                <Link to="/reading">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Begin Your Reading
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
