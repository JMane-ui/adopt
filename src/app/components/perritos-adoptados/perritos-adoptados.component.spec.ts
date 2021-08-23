import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerritosAdoptadosComponent } from './perritos-adoptados.component';

describe('PerritosAdoptadosComponent', () => {
  let component: PerritosAdoptadosComponent;
  let fixture: ComponentFixture<PerritosAdoptadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerritosAdoptadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerritosAdoptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
