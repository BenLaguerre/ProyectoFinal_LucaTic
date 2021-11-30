import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechonesGustadosComponent } from './lechones-gustados.component';

describe('LechonesGustadosComponent', () => {
  let component: LechonesGustadosComponent;
  let fixture: ComponentFixture<LechonesGustadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LechonesGustadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LechonesGustadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
