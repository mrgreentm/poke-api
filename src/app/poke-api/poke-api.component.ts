import { PokeApiService } from './poke-api.service';
import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from './interfaces/pokemon-interface';

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.scss'],
})
export class PokeApiComponent implements OnInit {
  pokemon!: PokemonInterface;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit() {}

  getPokemonById(id: number): void {
    this.pokeApiService
      .getPokemonById(id)
      .subscribe((pokemon: PokemonInterface) => {
        this.pokemon = pokemon;
      });
  }
}
