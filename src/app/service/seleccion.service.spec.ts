import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeleccionService } from './seleccion.service';

describe('SeleccionService', () => {
  let service: SeleccionService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SeleccionService],
    })
  );

  it('should be created', () => {
    service = TestBed.get(SeleccionService);
    expect(service).toBeTruthy();
  });

  //comprobamos si el SeleccionService tiene la función para recoger email
  it('should have GetAllProfile function', () => {
    service = TestBed.get(SeleccionService);
    expect(service.addEmail).toBeTruthy();
  });

  //comprobamos si el SeleccionService tiene la función para traer el email como observable
  it('should have GetAllProfile function', () => {
    service = TestBed.get(SeleccionService);
    expect(service.getEmail$).toBeTruthy();
  });
});
