import { Component } from '@angular/core';

interface Persona {
  nome: string;
  cognome: string;
  dataDiNascita: Date;
  oraDiNascita: string;
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {

  persona: Persona = {
    nome: 'Yari',
    cognome: 'Cherchi',
    dataDiNascita: new Date(1995,9, 11),
    oraDiNascita: '10:00'
  };

  constructor() { }

  calcolaEta() {
    const diffTempo = Date.now() - this.persona.dataDiNascita.getTime();
    const diffAnni = new Date(diffTempo).getFullYear() - 1970;
    const diffMinuti = Math.floor(diffTempo / (1000 * 60));
    const diffOre = Math.floor(diffTempo / (1000 * 60 * 60));
  
    console.log(`L'età di ${this.persona.nome} ${this.persona.cognome} è di ${diffAnni} anni, ${diffMinuti} minuti e ${diffOre} ore.`);
  }
  
}
