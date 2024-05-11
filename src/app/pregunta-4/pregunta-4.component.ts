import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-4',
  standalone: true,
  imports: [],
  templateUrl: './pregunta-4.component.html',
  styleUrl: './pregunta-4.component.scss'
})
export class Pregunta4Component {
  resultado = 0;

  mostrarResultado = false;

  calcularSuma() {
    let suma = 0;
    for (let i = 9; i <= 45; i++) {
      if (i % 3 == 0 || i % 7 == 0) {
        suma += i;
      }
    }
    this.resultado = suma;
    this.mostrarResultado = true;
  }
}
