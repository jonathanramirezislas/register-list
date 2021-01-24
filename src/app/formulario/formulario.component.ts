import { Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  //emiter to the father
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInputRef') nombreInput : ElementRef;
  @ViewChild('appellidoInputRef') apellidoInput : ElementRef;


  agregarPersona(){
   let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
   this.personaCreada.emit(persona1);
 }


}
