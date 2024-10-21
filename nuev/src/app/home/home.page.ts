import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  limiteInferior: number = 1;
  limiteSuperior: number = 100;
  intentos: number = 0;
  maxIntentos: number = 10;
  adivinado: boolean = false;
  mensaje: string = "Piensa en un número entre 1 y 100.";
  respuestaUsuario: string = "";

  constructor() {}

  iniciarJuego() {
    this.limiteInferior = 1;
    this.limiteSuperior = 100;
    this.intentos = 0;
    this.adivinado = false;
    this.mensaje = "Estoy listo para adivinar. ¡Vamos allá!";
    this.adivinarNumero();
  }

  adivinarNumero() {
    if (this.intentos < this.maxIntentos && !this.adivinado) {
      const suposicion: number = Math.floor((this.limiteInferior + this.limiteSuperior) / 2);
      this.mensaje = `¿Es tu número el ${suposicion}?`;
      this.intentos++;
    } else {
      this.mensaje = "¡Oh no! No pude adivinar tu número.";
    }
  }

  manejarRespuesta() {
    const respuesta = this.respuestaUsuario.toLowerCase();
    const suposicion: number = Math.floor((this.limiteInferior + this.limiteSuperior) / 2);

    if (respuesta === 'mayor') {
      this.limiteInferior = suposicion + 1;
      this.adivinarNumero();
    } else if (respuesta === 'menor') {
      this.limiteSuperior = suposicion - 1;
      this.adivinarNumero();
    } else if (respuesta === 'correcto') {
      this.mensaje = `¡Genial! Adiviné tu número en ${this.intentos} intento(s).`;
      this.adivinado = true;
    } else {
      this.mensaje = "Por favor, responde 'mayor', 'menor' o 'correcto'.";
    }

    // Limpiar el campo de entrada
    this.respuestaUsuario = '';
  }
}
