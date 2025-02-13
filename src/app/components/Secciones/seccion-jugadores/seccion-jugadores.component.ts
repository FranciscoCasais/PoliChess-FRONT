import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { JugadorService } from "../../../../services/jugador.service";
import { Jugador } from '../../../../models/jugador.model';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './seccion-jugadores.component.html',
  styleUrls: ['./seccion-jugadores.component.css']
})
export class SeccionJugadoresComponent implements OnInit {
  protected jugadores: Jugador[] = [];
  protected jugadoresFiltrados: Jugador[] = [];
  protected busquedaNombre: string = '';
  protected filtroElo: string = 'standard';
  protected pageSize: number = 10; // Número de jugadores por página
  protected currentPage: number = 1; // Página actual

  constructor(
    private jugadorService: JugadorService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jugadores = this.jugadorService.obtenerJugadores();
    this.filtrarJugadores(); 
  }

  filtrarPorNombre(): void {
    const nombreBusqueda = this.busquedaNombre.toLowerCase();
    this.jugadoresFiltrados = this.jugadores.filter(jugador =>
      `${jugador.nombre} ${jugador.apellido}`.toLowerCase().includes(nombreBusqueda)
    );
    this.filtrarJugadoresPorElo();
  }

  filtrarJugadores(event?: any): void {
    if (event) {
      this.filtroElo = event.target.value;
    }
    this.filtrarPorNombre();
  }

  private filtrarJugadoresPorElo(): void {
    switch (this.filtroElo) {
      case 'rapido':
        this.jugadoresFiltrados = this.jugadoresFiltrados.sort((a, b) => b.eloRapido - a.eloRapido);
        break;
      case 'blitz':
        this.jugadoresFiltrados = this.jugadoresFiltrados.sort((a, b) => b.eloBlitz - a.eloBlitz);
        break;
      default:
        this.jugadoresFiltrados = this.jugadoresFiltrados.sort((a, b) => b.eloStandard - a.eloStandard);
        break;
    }
  }

 // Modificar la función para obtener los jugadores paginados
get jugadoresPaginados(): Jugador[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  // Retornamos la porción correspondiente a la página
  return this.jugadoresFiltrados.slice(startIndex, startIndex + this.pageSize);
}

// Modificar el cálculo del podio, usando el índice global
getPodioClase(index: number): string {
  const globalIndex = (this.currentPage - 1) * this.pageSize + index; // Índice global de los jugadores
  if (globalIndex === 0) {
    return 'podio-oro';  // Primer puesto
  } else if (globalIndex === 1) {
    return 'podio-plata'; // Segundo puesto
  } else if (globalIndex === 2) {
    return 'podio-bronce'; // Tercer puesto
  }
  return ''; // No es podio
}


  // Cambiar de página
  cambiarPagina(pagina: number): void {
    if (pagina > 0 && pagina <= this.numeroDePaginas) {
      this.currentPage = pagina;
    }
  }

  // Número total de páginas
  get numeroDePaginas(): number {
    return Math.ceil(this.jugadoresFiltrados.length / this.pageSize);
  }
}
