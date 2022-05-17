import { StatusBarComponent } from './status-bar/status-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIconModule],
  declarations: [PokemonTableComponent, PokedexHomeComponent, StatusBarComponent],
  exports: [PokemonTableComponent, PokedexHomeComponent, StatusBarComponent],
})
export class SharedModule {}
