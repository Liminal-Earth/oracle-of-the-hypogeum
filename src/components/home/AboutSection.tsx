
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-oracle-parchment/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-oracle-mystical mb-6 text-center">What is the Oracle of the Hypogeum?</h2>
          
          <div className="prose prose-slate max-w-none">
            <p>
              The Oracle of the Hypogeum is a series of 48 symbols which originated in the Ancient Quatrian culture. The Quatrians used these symbols to help remythologize their landscapes, both internal and external. They were utilized for divination, but also as a symbolic alphabet which could be used to generate stories and mythic structures, rituals, and spells. 
            </p>
            
            <p>
              Although specific traditions and customs varied from biome to biome, the ideas represented by these glyphs were universal. They could be found, individually or collectively, on everything from doorposts to road signs to tattoos. They were said to have been taught to humans by ANTHUOR, the Quatrian deer spirit, who communicated the symbols via shapes seen in the murmurations of starlings. The starlings took flight from within the Hypogeum, a mysterious stone chamber central to Quatrian myth.
            </p>
            
            <p>
              As ubiquitous within Quatrian culture as corporate logos are in Late Capitalist neoliberalism, the primary use for the Symbols seems to have been a way to express meaning across a variety of cultural contexts. Just as someone living in Southeast Asia might recognize the "Golden Arches" as representative of McDonald's, so a Quatrian from a sub-polar settlement would understand that the symbol for "Life Force" depicted a plant emerging from a seed.
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
  );
};

export default AboutSection;
