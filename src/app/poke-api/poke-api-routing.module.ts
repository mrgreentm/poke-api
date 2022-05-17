import { PokedexHomeComponent } from '../shared/pokedex-home/pokedex-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeApiComponent } from './poke-api.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexHomeComponent,
  },
  {
    path:'pokemons',
    component: PokeApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeApiRoutingModule {}
