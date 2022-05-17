import { PokeApiService } from './../../poke-api/poke-api.service';
import {
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { PokemonInterface } from 'src/app/poke-api/interfaces/pokemon-interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent implements OnChanges {
  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'url'];

  @Input() pagination: any;
  dataSource!: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<any>(this.pagination);
    this.dataSource.data = this.pagination;
    this.dataSource.paginator = this.paginator;
  }

  getPokemonsForPagination(offset: number): void {
    this.pokeApiService
      .getPokemonForPagination(offset)
      .subscribe(({ results }: PokemonInterface | any) => {
        this.dataSource = results;
        console.log(results);
      });
  }
  getMoreDataForPokemon(apiUrl: string): void {
    this.pokeApiService.getPokemonById({ apiUrl: apiUrl }).subscribe((res) => {
      const currentValue = this.pokeApiService.favoritePokemons.value;
      const updatedValue = res.id;
      this.pokeApiService.favoritePokemons.next([
        ...currentValue,
        updatedValue,
      ]);
    });
  }
}
