import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaJugadorComponent } from './carta-jugador.component';

describe('CartaJugadorComponent', () => {
  let component: CartaJugadorComponent;
  let fixture: ComponentFixture<CartaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
