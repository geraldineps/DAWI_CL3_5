import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta-1.component.html',
  styleUrl: './pregunta-1.component.scss'
})
export class Pregunta1Component {

  utilidades= {
    salario: 0,
    anios: 0,
    resultado: 0
  }

  mostrarResultado = false;

  calcularUtilidades(){
    if(Number(this.utilidades.anios)<1){
      this.utilidades.resultado=Number(this.utilidades.salario)*0.05;
    } 
    else if (Number(this.utilidades.anios)>=1 && Number(this.utilidades.anios)<2){
      this.utilidades.resultado=Number(this.utilidades.salario)*0.07;
    }
    else if (Number(this.utilidades.anios)>=2 && Number(this.utilidades.anios)<5){
      this.utilidades.resultado=Number(this.utilidades.salario)*0.1;
    }
    else if (Number(this.utilidades.anios)>=5 && Number(this.utilidades.anios)<10){
      this.utilidades.resultado=Number(this.utilidades.salario)*0.15;
    }
    else {
      this.utilidades.resultado=Number(this.utilidades.salario)*0.2;
    }
    this.mostrarResultado = true ;
  }

}
