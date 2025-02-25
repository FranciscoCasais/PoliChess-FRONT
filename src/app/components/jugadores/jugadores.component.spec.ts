import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jugadoresComponent} from './jugadores.component';

describe('SeccionJugadoresComponent', () => {
  let component: jugadoresComponent;
  let fixture: ComponentFixture<jugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [jugadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(jugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});