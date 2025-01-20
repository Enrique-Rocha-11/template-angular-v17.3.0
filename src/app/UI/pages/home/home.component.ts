import { Component } from '@angular/core';
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {


  titulo: string = "";
  texto: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.titulo = "Template básico."
    // this.texto = "Te comparto una plantilla que me ha funcionado por años, espero te sea de utilidad."
    this.texto = [{
      text: "¡Hola, desarrolladores!"
    },
    {
      text: "He creado una plantilla básica en Angular para ayudarte a empezar rápido y fácil con tus proyectos."
    },
    {
      text: "Es sencilla, funcional y perfecta para personalizar a tu gusto. ¡Anímate a probarla y cuéntame qué te parece!"
    },
    {
      text: "Esta plantilla seguirá evolucionando con el tiempo, incorporando mejoras y nuevas herramientas para ofrecerte siempre lo mejor. ¡Esto es solo el comienzo!"
    }]
  }

  

}
