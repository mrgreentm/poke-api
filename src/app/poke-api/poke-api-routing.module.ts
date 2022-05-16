import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeApiComponent } from './poke-api.component';

const routes: Routes = [
  {
    path: '',
    component: PokeApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeApiRoutingModule {}
