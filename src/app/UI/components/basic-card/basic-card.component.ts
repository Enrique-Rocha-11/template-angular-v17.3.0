import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss'
})
export class BasicCardComponent {

  @Input() title:string = 'Plantilla de Angular';
  @Input() text: any = 'Lorem imsum dolor sit amet, consectetur adipiscing elit.';


  tema(){
    document.getElementById("body")?.classList.add("blue-theme");
  }

}
