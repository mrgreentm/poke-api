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

  getPokemonById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/pokemon/${id}`);
  }
}
