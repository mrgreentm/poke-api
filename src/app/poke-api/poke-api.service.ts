import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonInterface } from './interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  favoritePokemons: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient) {}

  getPokemonById(filters: {
    id?: number;
    apiUrl?: string;
  }): Observable<PokemonInterface> {
    if (filters.id) {
      return this.httpClient.get(
        `${environment.api_url}/pokemon/${filters.id}`
      ) as Observable<PokemonInterface>;
    } else {
      return this.httpClient.get(
        `${filters.apiUrl}`
      ) as Observable<PokemonInterface>;
    }
  }
  getPokemonForPagination(
    offset: number = 0,
    limit: number = 100
  ): Observable<PokemonInterface> {
    return this.httpClient.get(
      `${environment.api_url}/pokemon?limit=${limit}&offset=${offset}`
    ) as Observable<PokemonInterface>;
  }
}
