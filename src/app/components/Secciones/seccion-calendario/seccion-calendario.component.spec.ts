import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCalendarioComponent } from './seccion-calendario.component';

describe('SeccionCalendarioComponent', () => {
  let component: SeccionCalendarioComponent;
  let fixture: ComponentFixture<SeccionCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionCalendarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
