
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
              The simplest readings using the Oracle, like those provided here, are typically read using pairs of symbols. In physical card deck form, the deck is shuffled or 'flipped through' and two cards are drawn. The first card is the prevailing current, or most significant aspect of the reading, and the second card is the underlying current, or secondary aspect of the reading.
            </p>
                          <br/>

            <p>
              The reader then intuits the meaning of the reading based on her understanding of the situation, as well as the symbols on the cards. If she so desires, she can also ask follow-up questions using the same process. Needless to say, the meanings of the symbols become clearer with practice, and someone experienced in interpreting them can provide insightful readings for others.
            </p>
            
            <h3 className="text-xl font-serif text-oracle-mystical mt-8 mb-4">Special Combinations</h3>
            
            <ul>
              <li>If a Magician is drawn as the prevailing current and a Monster for the underlying current, the Monster has been "Captured," or Defeated, by the Magician, and the reading is favorable.</li>
              <br/>
              <li>If a Monster is prevailing and a Magician is underlying, the Monster has evaded capture and the Magician in question has been defeated. The reading is unfavorable.</li>
              <br/>
              <li>Two Magicians work together to bring harmony to the querent.Always favorable. </li>
              <br/>
              <li>Two Monsters indicate a darker place in which the querent currently resides. Always unfavorable.</li>
              <br/>
              <li>ANTHUOR and a Monster: ANTHUOR, as the One Who Withstands, always captures Monsters, regardless of whether they are prevailing or underlying.</li>
              <br/>
              <li>THE VERNOW and a Magician: THE VERNOW, as an Unpleasant Surprise, always evades Magicians, regardless of whether they are prevailing or underlying.</li>
              <br/>
              <li>MEMLEN are a scary mystery and drawing this symbol means the reading MUST be concluded IMMEDIATELY. The diviner must wait at least an hour before attempting another reading.</li>
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
