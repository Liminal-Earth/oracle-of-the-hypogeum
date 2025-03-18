
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
