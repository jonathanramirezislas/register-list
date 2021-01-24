import { Component, Input, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  //getting personas from father
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
  }

  emitirsaludo(){
    this.personaService.saludar.emit(this.indice)
  }

}
