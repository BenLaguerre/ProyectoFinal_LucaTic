import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechonesGustadosComponent } from './lechones-gustados.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { inject, async } from '@angular/core/testing';

@Component({
  template: `
    <a routerLink="/detalle-perfil/{{perfil.id}}">
    <mat-list-item>{{perfil.getName()}}</mat-list-item>
    <mat-divider></mat-divider>
    </a>
    <router-outlet></router-outlet>
  `
})
class TestComponent {
  collName = 'testing';
  perfil = {
    id: 1
  };
}

@Component({
  template: ''
})
class DummyComponent {
}

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
