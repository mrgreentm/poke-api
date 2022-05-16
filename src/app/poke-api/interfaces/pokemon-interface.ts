import { AbilityInterface } from './ability-interface';

export interface PokemonInterface {
  id: number;
  abilities: AbilityInterface[];
  name: string;
}
