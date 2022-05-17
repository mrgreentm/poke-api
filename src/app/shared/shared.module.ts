import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  declarations: [PokemonTableComponent],
  exports: [PokemonTableComponent],
})
export class SharedModule {}
