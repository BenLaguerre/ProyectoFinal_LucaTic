import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionComponent } from './seleccion.component';
import { SeleccionService } from 'src/app/service/seleccion.service';

import { CrudService } from 'src/app/service/crud.service';
import { DetallePerfilComponent } from '../detalle-perfil/detalle-perfil.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SeleccionComponent', () => {
  let component: SeleccionComponent;
  let fixture: ComponentFixture<SeleccionComponent>;

  //se meten los servicios y componentes como providers
  //se importan el RoutingTestingModule y el HttpTestingModule
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CrudService, SeleccionService,DetallePerfilComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


