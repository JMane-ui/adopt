import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FqComponent } from './fq.component';

describe('FqComponent', () => {
  let component: FqComponent;
  let fixture: ComponentFixture<FqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
