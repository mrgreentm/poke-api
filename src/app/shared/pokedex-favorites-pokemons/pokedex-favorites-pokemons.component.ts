import { Component, OnChanges, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/poke-api/poke-api.service';

@Component({
  selector: 'app-pokedex-favorites-pokemons',
  templateUrl: './pokedex-favorites-pokemons.component.html',
  styleUrls: ['./pokedex-favorites-pokemons.component.scss'],
})
export class PokedexFavoritesPokemonsComponent implements OnInit, OnChanges {
  favoritesPokemons: any = [];
  favoritePokemonsId: number[] = [];
  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.favoritePokemonsId = this.pokeApiService.favoritePokemons.value;
    this.getAllFavoritesPokemons(this.favoritePokemonsId);
  }
  ngOnChanges(): void {
    this.favoritePokemonsId = this.pokeApiService.favoritePokemons.value;
    this.getAllFavoritesPokemons(this.favoritePokemonsId);
  }

  getAllFavoritesPokemons(array: number[]): void {
    for (let index = 0; index < array.length; index++) {
      if (array[index]) {
        this.pokeApiService
          .getPokemonById({ id: array[index] })
          .subscribe((pokemon) => {
            this.favoritesPokemons.push(pokemon);
          });
      }
    }
    console.log(this.favoritesPokemons);
  }
}
