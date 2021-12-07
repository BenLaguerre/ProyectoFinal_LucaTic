import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddPerfilComponent } from './add-perfil.component';

describe('AddPerfilComponent', () => {
  let component: AddPerfilComponent;
  let fixture: ComponentFixture<AddPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*
  //vamos a testear si se llama a la función addPerfil cuando hacemos click en el botón de registro
  it('should click Send button with async', async(() => {
    let buttonElement = fixture.debugElement.query(By.css('#btn-registro'));
      
    spyOn(component, 'addPerfil');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
  
    fixture.whenStable().then(() => {
      expect(component.addPerfil).toHaveBeenCalled();
    });
  })); */

});
