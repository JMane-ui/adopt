import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPerritosComponent } from './mostrar-perritos.component';

describe('MostrarPerritosComponent', () => {
  let component: MostrarPerritosComponent;
  let fixture: ComponentFixture<MostrarPerritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPerritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPerritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
