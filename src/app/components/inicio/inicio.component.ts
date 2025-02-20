import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public verMas(): void {
    document.getElementById("noticias")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}
