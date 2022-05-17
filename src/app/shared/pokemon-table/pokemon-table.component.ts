import { PokeApiService } from './../../poke-api/poke-api.service';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
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
    console.log(this.dataSource);
  }

  getPokemonsForPagination(offset: number): void {
    this.pokeApiService
      .getPokemonForPagination(offset)
      .subscribe(({ results }: PokemonInterface | any) => {
        this.dataSource = results;
        console.log(results);
      });
  }
}
