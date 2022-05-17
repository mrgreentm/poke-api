import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeApiComponent } from './poke-api.component';
import { PokeApiRoutingModule } from './poke-api-routing.module';

@NgModule({
  imports: [CommonModule, PokeApiRoutingModule, HttpClientModule, SharedModule],
  declarations: [PokeApiComponent],
  exports: [PokeApiComponent],
})
export class PokeApiModule {}
