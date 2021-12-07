import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CrudService]
  }));

   it('should be created', () => {
    service= TestBed.get(CrudService);
    expect(service).toBeTruthy();
   });

   //comprobamos si el crudService tiene la función para listar perfiles
   it('should have GetAllProfile function', () => {
    service= TestBed.get(CrudService);
    expect(service.GetAllProfile).toBeTruthy();
   });

   //comprobamos si el crudService tiene la función para añadir perfiles
   it('should have addProfile function', () => {
    service= TestBed.get(CrudService);
    expect(service.addProfile).toBeTruthy();
   });

   //comprobamos si el crudService tiene la función para buscar un perfil
   it('should have GetOnProfile function', () => {
    service= TestBed.get(CrudService);
    expect(service.GetOnProfile).toBeTruthy();
   });

   //comprobamos si el crudService tiene la función para traer un perfil aleatorio
   it('should have SelectOnProfile function', () => {
    service= TestBed.get(CrudService);
    expect(service.SelectOnProfile).toBeTruthy();
   });

   //comprobamos si el crudService tiene la función para actualizar un perfil
   it('should have updateProfile function', () => {
    service= TestBed.get(CrudService);
    expect(service.updateProfile).toBeTruthy();
   });

   //comprobamos si el crudService tiene la función para coger el email del perfil que se está mostrando
   it('should have GetCurrentProfile function', () => {
    service= TestBed.get(CrudService);
    expect(service.GetCurrentProfile).toBeTruthy();
   });

});
