/*
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';


import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [AuthService, AngularFireAuth, InjectionToken]
  }));

  it('should be created', async () => {
    service= await TestBed.get(AuthService);
    expect(service).toBeTruthy();
   });

   //comprobamos si el AuthService tiene la función para logearse
  it('should have login function', () => {
    service = TestBed.get(AuthService);
    expect(service.login).toBeTruthy();
  });

  //comprobamos si el AuthService tiene la función para logearse
  it('should have login function', () => {
    service = TestBed.get(AuthService);
    expect(service.login).toBeTruthy();
  });

  //comprobamos si el AuthService tiene la función para deslogearse
  it('should have logout function', () => {
    service = TestBed.get(AuthService);
    expect(service.logout).toBeTruthy();
  });

  //comprobamos si el AuthService tiene la función para registrarse
  it('should have registrar function', () => {
    service = TestBed.get(AuthService);
    expect(service.registrar).toBeTruthy();
  });
});
*/
