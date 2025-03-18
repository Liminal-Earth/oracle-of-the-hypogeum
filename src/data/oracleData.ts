
import { OracleCard, CardType, CardCategory } from "./types/oracleTypes";
import { entityCards } from "./cards/entityCards";
import { magicianCards } from "./cards/magicianCards";
import { monsterCards } from "./cards/monsterCards";

// Re-export types
export type { CardType, CardCategory, OracleCard };

// Re-export card data
export { entityCards, magicianCards, monsterCards };

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
