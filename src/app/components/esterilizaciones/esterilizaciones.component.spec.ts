import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsterilizacionesComponent } from './esterilizaciones.component';

describe('EsterilizacionesComponent', () => {
  let component: EsterilizacionesComponent;
  let fixture: ComponentFixture<EsterilizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsterilizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsterilizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
