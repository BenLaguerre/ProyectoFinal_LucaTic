import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLechonComponent } from './detalle-lechon.component';

describe('DetalleLechonComponent', () => {
  let component: DetalleLechonComponent;
  let fixture: ComponentFixture<DetalleLechonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLechonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLechonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
