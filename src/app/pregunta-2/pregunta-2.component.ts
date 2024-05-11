import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta-2.component.html',
  styleUrl: './pregunta-2.component.scss'
})
export class Pregunta2Component {  

    numeros= {
        numero1: 0,
        numero2: 0,
        numero3: 0,
        numero4: 0,
        numero5: 0,
        resultado: 0
      }

      mostrarResultado = false;
  
    calcularMayor() {
      const mayor = [Number(this.numeros.numero1),Number(this.numeros.numero2),Number(this.numeros.numero3),Number(this.numeros.numero4),Number(this.numeros.numero5)];
      this.numeros.resultado = Math.max(...mayor);
      this.mostrarResultado = true ;
    }

}
