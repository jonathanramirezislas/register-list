import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
//import { logggingService } from '../loggingServise.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
 
})
export class FormularioComponent  {
  //emiter to the father
  //@Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInputRef') nombreInput : ElementRef;
  @ViewChild('appellidoInputRef') apellidoInput : ElementRef;

  constructor(//private logginService:logggingService,
              private personaService:PersonaService)
              {
    
                this.personaService.saludar.subscribe(
                  (indice:number) =>alert("el indice es "+indice)
                );
  }
  ngOnInit(): void {
  }


  agregarPersona(){
   let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
   //Como ya se tiene un servicio ya no necesitamos pasarle los datos al padre
   //this.personaCreada.emit(persona1);
   
   ///this.logginService.enviarMensajeConsola("Se agrego :"+persona1.nombre+" "+persona1.apellido);
    this.personaService.agregarPersona(persona1);
 }

}
