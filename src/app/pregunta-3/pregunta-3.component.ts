import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta-3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta-3.component.html',
  styleUrl: './pregunta-3.component.scss'
})
export class Pregunta3Component {
  equipo = {
    ganados: 0,
    perdidos: 0,
    empatados: 0,
    puntajeTotal: 0
  };
  mostrarResultado = false;

  calcularPuntos()
  {
    this.equipo.puntajeTotal = Number(this.equipo.ganados * 3) + Number(this.equipo.empatados * 1);
    this.mostrarResultado = true;
  }
}