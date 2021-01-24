import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
//import { logggingService } from '../loggingServise.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput: string;
  apellidoInput: string;

  constructor(private personaService: PersonaService) {
    this.personaService.saludar.subscribe((indice: number) =>
      alert('el indice es ' + indice)
    );
  }

  ngOnInit(): void {}

  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput
    );
    this.personaService.agregarPersona(persona1);
  }
}
