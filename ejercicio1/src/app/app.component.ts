import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ejercicio 1';

  edadUno: number = 0;
  edadDos: number = 0;
  resultado: number = 0;

  Suma() {
    this.resultado = this.edadUno + this.edadDos;
  }

  Promedio() {
    this.resultado = (this.edadUno + this.edadDos) / 2;
  }
}
