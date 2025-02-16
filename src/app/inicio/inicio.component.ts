import { Component, inject } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia.model';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador.model';
import { TorneoService } from '../../services/torneo.service';
import { Torneo } from '../../models/torneo.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [RouterLink, CommonModule],
})
export class InicioComponent {
  private noticiaService: NoticiaService = inject(NoticiaService);
  private jugadorService: JugadorService = inject(JugadorService);
  private torneoService: TorneoService = inject(TorneoService);

  protected noticias: Noticia[] = this.noticiaService.obtenerNoticias();
  protected jugadores: Jugador[] = this.jugadorService.obtenerJugadores();
  protected torneos: Torneo[] = this.torneoService.obtenerTorneos();

  protected noticiaPagina = 0;
  protected jugadorPagina = 0;
  protected torneoPagina = 0;

  protected elementosPorPagina = 3;

  public verMas(): void {
    document.getElementById("noticias")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  public cambiarPagina(tipo: 'noticias' | 'jugadores' | 'torneos', direccion: 'anterior' | 'siguiente'): void {
    const totalPaginas = Math.ceil(this[tipo].length / this.elementosPorPagina);
    
    if (tipo === 'noticias') {
      this.noticiaPagina = this.calcularNuevaPagina(this.noticiaPagina, direccion, totalPaginas);
    } else if (tipo === 'jugadores') {
      this.jugadorPagina = this.calcularNuevaPagina(this.jugadorPagina, direccion, totalPaginas);
    } else if (tipo === 'torneos') {
      this.torneoPagina = this.calcularNuevaPagina(this.torneoPagina, direccion, totalPaginas);
    }
  }

  private calcularNuevaPagina(paginaActual: number, direccion: 'anterior' | 'siguiente', totalPaginas: number): number {
    if (direccion === 'siguiente') {
      return (paginaActual + 1) % totalPaginas;
    } else {
      return (paginaActual - 1 + totalPaginas) % totalPaginas;
    }
  }

  protected obtenerElementosPagina(array: any[], pagina: number): any[] {
    const inicio = pagina * this.elementosPorPagina;
    return array.slice(inicio, inicio + this.elementosPorPagina);
  }

  protected esUltimaPagina(tipo: 'noticias' | 'jugadores' | 'torneos'): boolean {
    const totalPaginas = Math.ceil(this[tipo].length / this.elementosPorPagina);
    let paginaActual: number;

    switch (tipo) {
      case 'noticias':
        paginaActual = this.noticiaPagina;
        break;
      case 'jugadores':
        paginaActual = this.jugadorPagina;
        break;
      case 'torneos':
        paginaActual = this.torneoPagina;
        break;
    }

    return paginaActual === totalPaginas - 1;
  }
}