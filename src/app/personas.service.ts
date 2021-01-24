import { Injectable } from "@angular/core";
import { logggingService } from "./loggingServise.service";
import { Persona } from "./persona.model";

@Injectable() //injectable allows us to inject a service inside another service 
export class PersonaService{
    personas: Persona[] = [
      new Persona('Juan','Perez'), 
      new Persona('Laura', 'Juarez'),
      new Persona('Karla', 'Lara')
    ];
  
    constructor(private logginService:logggingService){}
  
    agregarPersona(persona: Persona){
        this.logginService.enviarMensajeConsola("Agregamos a :"+persona.nombre);
      this.personas.push( persona );
    }
}