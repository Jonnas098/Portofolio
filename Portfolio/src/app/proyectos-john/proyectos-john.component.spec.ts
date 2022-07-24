import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosJohnComponent } from './proyectos-john.component';

describe('ProyectosJohnComponent', () => {
  let component: ProyectosJohnComponent;
  let fixture: ComponentFixture<ProyectosJohnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosJohnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosJohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
