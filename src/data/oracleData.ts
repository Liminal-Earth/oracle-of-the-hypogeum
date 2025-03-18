
export type CardType = 'entity' | 'magician' | 'monster';
export type CardCategory = 
  | 'Pre-Manifest Powers' 
  | 'Places In Which Things Manifest' 
  | 'Entities That Manifest'
  | 'Forms In Which Things Manifest'
  | 'The Mysteries of Manifestation'
  | 'Magician'
  | 'Monster';

export interface OracleCard {
  id: string;
  name: string;
  type: CardType;
  category: CardCategory;
  description: string;
  imageUrl: string;
  attributes?: string[];
}

// Entity Cards Data
export const entityCards: OracleCard[] = [
  // Pre-Manifest Powers
  { 
    id: 'anthuor',
    name: 'Anthuor', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'Wild energy and potential, but the kind that the diviner has no control over. A system which persists in the face of great turmoil or trouble. The origin of a thing or situation. Amplifies the effect of other cards, except monsters, which are automatically negated by Anthuor.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'barbaro',
    name: 'Barbaro', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'Power, but powerful ambiguity. The end of a system, caused not by outright destruction, but by the inability of some party to act. A kind of temporal malleability.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'acho',
    name: 'Acho', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'Stability. A firm foundation. Sentience within the inanimate.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'the-maiden',
    name: 'The Maiden', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'Like Hermes, Messenger of the Gods, the Maiden acts as a conduit between the Hypogeum and "reality." And, like Artemis, the Maiden is both the act of questioning (hunting), and the results thereof (the hunted).',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'the-musician',
    name: 'The Musician', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'A major change within the power of the querent to make.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'the-vernow',
    name: 'The Vernow', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'Unexpected trouble. Worshiped as a deity by the Monsters. Automatically negates the magicians. Reverses the effect of other cards.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'memlen',
    name: 'Memlen', 
    type: 'entity', 
    category: 'Pre-Manifest Powers',
    description: 'The session must immediately be closed to avoid attracting the attention of unwanted negative energies and entities with questionable intent. A new session may be started at least one hour after the Memlen appear.',
    imageUrl: '/card-placeholder.png',
  },
  
  // Places In Which Things Manifest
  { 
    id: 'the-buorth',
    name: 'The Buorth', 
    type: 'entity', 
    category: 'Places In Which Things Manifest',
    description: 'Heaven. Wisdom to look for answers from ancestors. A perfected state. Completion.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'sky',
    name: 'Sky', 
    type: 'entity', 
    category: 'Places In Which Things Manifest',
    description: 'Moving from one world to the next. The ability to "unstick" oneself from a sticky situation. Moving house. Sustenance.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'mountain',
    name: 'Mountain', 
    type: 'entity', 
    category: 'Places In Which Things Manifest',
    description: 'The most nakedly auspicious symbol as concerns wealth, wellness, the body, etc. An increase in the flow of positive energies into the querent\'s life.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'forest',
    name: 'Forest', 
    type: 'entity', 
    category: 'Places In Which Things Manifest',
    description: 'Growth. Community. Interdependence.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'plain',
    name: 'Plain', 
    type: 'entity', 
    category: 'Places In Which Things Manifest',
    description: 'Exposure. Monotony that one can escape by viewing the details.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'cave',
    name: 'Cave', 
    type: 'entity', 
    category: 'Places In Which Things Manifest',
    description: 'Going deep, into places not usually visited, that become sanctuaries. Ancestral contributions that require thought to unravel. Safety, unless a bear\'s in there. Sometimes a literal cave.',
    imageUrl: '/card-placeholder.png',
  },
  
  // Entities That Manifest
  { 
    id: 'human',
    name: 'Human', 
    type: 'entity', 
    category: 'Entities That Manifest',
    description: 'The querent, specifically. Home, community. A default state.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'animal',
    name: 'Animal', 
    type: 'entity', 
    category: 'Entities That Manifest',
    description: 'Something obvious.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'plant',
    name: 'Plant', 
    type: 'entity', 
    category: 'Entities That Manifest',
    description: 'Knowledge hidden in plain sight. A slow, contemplative process with big rewards.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'fungus',
    name: 'Fungus', 
    type: 'entity', 
    category: 'Entities That Manifest',
    description: 'A vast network underneath something mundane. The visible aspects can be toxic, delicious, or enlightening. Communication across a long distance, either space or time.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'insect',
    name: 'Insect', 
    type: 'entity', 
    category: 'Entities That Manifest',
    description: 'Small, considered motions that don\'t waste energy. Small changes at the onset gradually turning into huge changes. A tiny representative of a large force that could easily destroy the planet if they could only get organized.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'animalcule',
    name: 'Animalcule', 
    type: 'entity', 
    category: 'Entities That Manifest',
    description: 'Raw, unfettered magic. A minuscule change without which a system would collapse. Transformation/inner alchemy.',
    imageUrl: '/card-placeholder.png',
  },
  
  // Forms In Which Things Manifest
  { 
    id: 'fire',
    name: 'Fire', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'The root of Fire. Passion. Meaning depends on card context.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'air',
    name: 'Air', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'The root of Air. Intellect. Meaning depends on card context.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'water',
    name: 'Water', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'The root of Water. Emotion. Meaning depends on card context.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'earth',
    name: 'Earth/Soil', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'The root of Earth. Physicality. Meaning depends on card context.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'life-force',
    name: 'Life Force', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'Inner vitality/strength. A shared power. Art. Something available to all. Health, wellness.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'light',
    name: 'Light', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'Purifying exposure. An ultimate energy transferred from the sun, through a plant, into a person. A directed source of inspiration (i.e. from something external acting as a spotlight).',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'shadow',
    name: 'Shadow', 
    type: 'entity', 
    category: 'Forms In Which Things Manifest',
    description: 'Darkness for sun lovers, but cool shade for those who thrive in it.',
    imageUrl: '/card-placeholder.png',
  },
  
  // The Mysteries of Manifestation
  { 
    id: 'mystery',
    name: 'Mystery', 
    type: 'entity', 
    category: 'The Mysteries of Manifestation',
    description: 'An initiation. Confronting one\'s darkness in order to understand life and death. Descending into the Hypogeum via the Imaginal Realm and finding an answer.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'silence',
    name: 'Silence', 
    type: 'entity', 
    category: 'The Mysteries of Manifestation',
    description: 'Silence.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'time-hunter',
    name: 'Time Hunter', 
    type: 'entity', 
    category: 'The Mysteries of Manifestation',
    description: 'Something from the querent\'s past—or future!—manifests. At the most mundane level, bureaucracy.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'golden-egg',
    name: 'Golden Egg', 
    type: 'entity', 
    category: 'The Mysteries of Manifestation',
    description: 'A gift given by the final survivors of an ancient culture. Something valuable found in the wilderness. The Golden Gift of the Sasquatch. A double-yolked egg.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'wormwood',
    name: 'Wormwood', 
    type: 'entity', 
    category: 'The Mysteries of Manifestation',
    description: 'A resetting of the landscape. Digging up the garden at the end of the season. Destruction, but in order to restore.',
    imageUrl: '/card-placeholder.png',
  },
  { 
    id: 'the-stone-book',
    name: 'The Stone Book', 
    type: 'entity', 
    category: 'The Mysteries of Manifestation',
    description: 'A new story. A shift of the timeline. Reshuffle the deck and begin a new reading.',
    imageUrl: '/card-placeholder.png',
  }
];

// Magician Cards Data
export const magicianCards: OracleCard[] = [
  { 
    id: 'yan',
    name: 'Yan', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Temperate. Yan, the First Magician, is kind and mild. Yan deescalates bad situations, and provides sweetness and contentment.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Grape', 'Blackberry']
  },
  { 
    id: 'tan',
    name: 'Tan', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Kind. Tan means kindness both received and delivered.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Honeysuckle', 'Nettle']
  },
  { 
    id: 'tether',
    name: 'Tether', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Calm. Tether provides the kind of simple calmness one experiences just before falling asleep.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Sweet Pea', 'Rose']
  },
  { 
    id: 'mether',
    name: 'Mether', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Bountiful. Mether helps the querent recognize and benefit from all positive currents flowing in her direction.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Gourd', 'Locust']
  },
  { 
    id: 'pip',
    name: 'Pip', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Joyous. Pip is the kind of "joy" one experiences when something particularly vexing has been overcome.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Poison Ivy', 'Hawthorn']
  },
  { 
    id: 'azer',
    name: 'Azer', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Hilarious. Azer is freaking hilarious. As opposed to joy, hilarity may be more fleeting, but the absolute release of sheer comedy is immensely helpful for the querent.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Wonga Wonga', 'Thistle']
  },
  { 
    id: 'sezar',
    name: 'Sezar', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Wonderful. Sezar defeats Monsters by disguising itself as a toxin, which can be neutralized if the querent knows how.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Nightshade', 'Devil\'s Club']
  },
  { 
    id: 'akker',
    name: 'Akker', 
    type: 'magician', 
    category: 'Magician',
    description: 'The Giver. Akker gives gifts.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Holly', 'Ivy']
  }
];

// Monster Cards Data
export const monsterCards: OracleCard[] = [
  { 
    id: 'gnew',
    name: 'Gnew', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Smoke. Smoke not only obfuscates; it also makes breathing difficult. Gnew is an all-pervasive, general nastiness.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Wolf-headed']
  },
  { 
    id: 'gneuth',
    name: 'Gneuth', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Stench. Stench of the kind represented by Gneuth is like just a tiny amount of dog poop on your shoe. You\'ll never find it, and nobody will point it out to you.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Sow-headed']
  },
  { 
    id: 'weweu',
    name: 'Weweu', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Labor. Labor that doesn\'t matter is like holding a scorpion that just keeps stinging you over and over. Weweu is the "protestant work ethic"– meaningless work that doesn\'t benefit the querent.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Scorpion-headed']
  },
  { 
    id: 'wehneh',
    name: 'Wehneh', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Strife. Strife happens. Wehneh makes the strife within the querent\'s life more meaningful and significant. Wehneh also waits to feed off of the remains of whatever strife has caused.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Hyena-headed']
  },
  { 
    id: 'brekoax',
    name: 'Brekoax', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Spite. Spite directed at the querent doesn\'t have to have a reason. Brekoax revels in spite for spite\'s sake, and the querent shouldn\'t look for a \'reason\' for a bad situation.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Frog-headed']
  },
  { 
    id: 'kehket',
    name: 'Kehket', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Shame/Guilt. Shame and guilt are insinuated into the querent\'s by Kehket. This is one of the worst Monsters, as it can infect even positive experience.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Serpent-headed']
  },
  { 
    id: 'djerr',
    name: 'Djerr', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Waste/Pollution. Any surplus for which the querent doesn\'t have a plan becomes pollution. Djerr celebrates overages: too much, too fast, too intense. The Bird-headed Monster is an avalanche. How do you survive an avalanche?',
    imageUrl: '/card-placeholder.png',
    attributes: ['Bird-headed']
  },
  { 
    id: 'djuewet',
    name: 'Djuewet', 
    type: 'monster', 
    category: 'Monster',
    description: 'Ruler of Anxiety. Like the hare on the moors, anxiety lifts its head above the grasses and then bolts. Djuewet wants the querent to run away as fast as possible.',
    imageUrl: '/card-placeholder.png',
    attributes: ['Hare-headed']
  }
];

// All Cards Combined
export const allCards: OracleCard[] = [...entityCards, ...magicianCards, ...monsterCards];

// Utility function to get a card by ID
export const getCardById = (id: string): OracleCard | undefined => {
  return allCards.find(card => card.id === id);
};

// Utility function to shuffle cards
export const shuffleCards = (cards: OracleCard[]): OracleCard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
