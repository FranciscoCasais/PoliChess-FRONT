import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTorneosComponent } from './seccion-torneos.component';

describe('SeccionTorneosComponent', () => {
  let component: SeccionTorneosComponent;
  let fixture: ComponentFixture<SeccionTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionTorneosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
