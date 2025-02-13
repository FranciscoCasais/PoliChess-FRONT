import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionJugadoresComponent } from './seccion-jugadores.component';

describe('SeccionJugadoresComponent', () => {
  let component: SeccionJugadoresComponent;
  let fixture: ComponentFixture<SeccionJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionJugadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
