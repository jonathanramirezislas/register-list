import { Component } from '@angular/core';
import { logggingService } from './loggingServise.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan','Perez'), 
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ];

  constructor(private logginService:logggingService){}


  personaAgregada(persona: Persona){
    this.personas.push( persona );
    this.logginService.enviarMensajeConsola("se agrego a persona");
  }

}
