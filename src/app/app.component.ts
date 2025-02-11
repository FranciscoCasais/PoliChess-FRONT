import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'PoliChess';

  public cursorEncimaCerrar: boolean = false;
  public cursorEncimaLogin: boolean = false;
  public cursorEncimaTresLineas: boolean = false;
  public navbarAchicado: boolean = false;
  public registro: boolean = false;
  public tresLineas: boolean = false;
  public ventanaLoginRegistro: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.navbarAchicado = false;
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
    }
  }

  public toggleRegistro(): void {
    this.registro = !this.registro;
  }

  public toggleTresLineas(): void {
    this.tresLineas = !this.tresLineas;
  }

  public toggleVentanaLoginRegistro(): void {
    this.cursorEncimaCerrar = false;
    this.registro = false;
    this.ventanaLoginRegistro = !this.ventanaLoginRegistro;

    if (this.ventanaLoginRegistro) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }

  /* @HostListener('document:click', ['$event'])
  public cerrarContenedorSeccionesDesplegable(event: Event): void {
    const contenedorDesplegable = document.getElementById('contenedor-secciones-desplegable');

    if (contenedorDesplegable && !contenedorDesplegable.contains(event.target as Node)) {
      this.tresLineas = false;
    }
  } */

  @HostListener('document:click', ['$event'])
  public cerrarVentanaLoginRegistro(event: Event): void {
    const ventanaLoginRegistro = document.getElementById('ventana-login-registro');

    if (ventanaLoginRegistro && !ventanaLoginRegistro.contains(event.target as Node)) {
      document.body.style.overflowY = 'auto';
      this.ventanaLoginRegistro = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(): void {
    if(isPlatformBrowser(this.platformId)) {
      if(window.scrollY > 0) {
        this.navbarAchicado = true;
      } else {
        this.navbarAchicado = false;
      }
    }
  }

}
