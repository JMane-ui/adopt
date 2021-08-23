import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesCampaniaComponent } from './donaciones-campania.component';

describe('DonacionesCampaniaComponent', () => {
  let component: DonacionesCampaniaComponent;
  let fixture: ComponentFixture<DonacionesCampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonacionesCampaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
