import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonInterface } from './interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private httpClient: HttpClient) {}

  getPokemonById(id: number): Observable<PokemonInterface> {
    return this.httpClient.get(
      `${environment.api_url}/pokemon/${id}`
    ) as Observable<PokemonInterface>;
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
