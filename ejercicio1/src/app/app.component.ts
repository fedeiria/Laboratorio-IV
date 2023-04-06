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
  suma: number = 0;
  promedio: number = 0;

  Calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }

  ClearTextBox() {
    this.suma = 0;
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
  }
}
