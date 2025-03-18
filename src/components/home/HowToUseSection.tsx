
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowToUseSection: React.FC = () => {
  return (
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
  );
};

export default HowToUseSection;
