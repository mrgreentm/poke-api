import { PokeApiService } from './../../poke-api/poke-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.scss'],
})
export class PokedexHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToPokedex(): void {
    this.router.navigateByUrl('/pokemons');
  }
  showFavoritePokemons(): void {
    this.router.navigateByUrl('/pokemons/favorites')
  }
}
