
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CardCategoriesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-oracle-mystical mb-10 text-center">The Oracle Deck</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-oracle-mystical to-oracle-shadow flex items-center justify-center">
              <h3 className="text-xl font-serif text-black">32 Entity Cards</h3>
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
              <h3 className="text-xl font-serif text-black">8 Magicians</h3>
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
              <h3 className="text-xl font-serif text-black">8 Monsters</h3>
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
  );
};

export default CardCategoriesSection;
