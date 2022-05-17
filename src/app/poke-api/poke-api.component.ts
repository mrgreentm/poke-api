import { PokeApiService } from './poke-api.service';
import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from './interfaces/pokemon-interface';
import { ResultsPokemonsInterface } from './interfaces/results-pokemons-interface';

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.scss'],
})
export class PokeApiComponent implements OnInit {
  pokemon!: PokemonInterface;
  pokemons!: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit() {
    this.getPokemonsForPagination();
  }

  getPokemonById(id: number): void {
    this.pokeApiService
      .getPokemonById(id)
      .subscribe((pokemon: PokemonInterface) => {
        this.pokemon = pokemon;
      });
  }

  getPokemonsForPagination(): void {
    this.pokeApiService
      .getPokemonForPagination()
      .subscribe(({ results }: PokemonInterface | any) => {
        this.pokemons = results;
      });
  }
}
