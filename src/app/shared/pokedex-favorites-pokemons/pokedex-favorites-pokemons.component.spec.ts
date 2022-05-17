/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokedexFavoritesPokemonsComponent } from './pokedex-favorites-pokemons.component';

describe('PokedexFavoritesPokemonsComponent', () => {
  let component: PokedexFavoritesPokemonsComponent;
  let fixture: ComponentFixture<PokedexFavoritesPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexFavoritesPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexFavoritesPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
