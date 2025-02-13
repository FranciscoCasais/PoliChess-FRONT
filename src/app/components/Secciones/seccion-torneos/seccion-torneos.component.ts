import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TorneoService } from "../../../../services/torneo.service";
import { Torneo } from '../../../../models/torneo.model';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-torneos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Incluir FormsModule aquí
  templateUrl: './seccion-torneos.component.html',
  styleUrls: ['./seccion-torneos.component.css']
})
export class SeccionTorneosComponent implements OnInit {
  protected torneos: Torneo[] = [];
  protected torneosFiltrados: Torneo[] = [];
  protected busquedaNombre: string = '';
  protected filtroEstado: string = 'todos'; // Filtro por estado
  protected filtroRitmo: string = 'todos'; // Filtro por ritmo

  // Variables para paginación
  protected paginaActual: number = 1;
  protected torneosPorPagina: number = 10;  // Número de torneos por página

  constructor(
    private torneoService: TorneoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.torneos = this.torneoService.obtenerTorneos();
    this.actualizarEstadoTorneos();
    this.torneosFiltrados = [...this.torneos];
    this.filtrarTorneos(); 
    this.ordenarTorneosPorFecha(); // Ordena los torneos por fecha
  }

  filtrarPorNombre(): void {
    const nombreBusqueda = this.busquedaNombre.toLowerCase();
    
    // Primero, filtramos los torneos por nombre
    this.torneosFiltrados = this.torneos.filter(torneo =>
      torneo.nombre.toLowerCase().includes(nombreBusqueda)
    );
    

    this.filtrarTorneos(); 
    this.ordenarTorneosPorFecha();
  }

  // Función para filtrar torneos por estado
  filtrarTorneosPorEstado(event?: any): void {
    if (event) {
      this.filtroEstado = event.target.value;
    }
    this.filtrarTorneos();
    this.ordenarTorneosPorFecha();
  }


  filtrarTorneosPorRitmo(): void {
    this.filtrarTorneos(); 
    this.ordenarTorneosPorFecha(); 
  }


  private filtrarTorneos(): void {
    this.torneosFiltrados = this.torneos.filter(torneo => {
      const coincideEstado = this.filtroEstado === 'todos' || torneo.estado === this.filtroEstado;
      const coincideRitmo = this.filtroRitmo === 'todos' || torneo.ritmo.toLowerCase() === this.filtroRitmo;
      const coincideNombre = this.busquedaNombre === '' || torneo.nombre.toLowerCase().includes(this.busquedaNombre.toLowerCase());

      return coincideEstado && coincideRitmo && coincideNombre; 
    });
  }

  getEstadoTorneo(estado: string): string {
    switch (estado) {
      case 'en_curso':
        return 'En curso';
      case 'finalizado':
        return 'Finalizado';
      case 'pendiente':
        return 'No comenzado';
      default:
        return 'Estado desconocido';
    }
  }

  actualizarEstadoTorneos(): void {
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    this.torneos.forEach(torneo => {
      const fechaInicio = new Date(torneo.fecha);
      fechaInicio.setHours(0, 0, 0, 0);

      const fechaFin = torneo.duracion?.fin ? new Date(torneo.duracion.fin) : null;
      if (fechaFin) {
        fechaFin.setHours(0, 0, 0, 0);
      }

      if (fechaInicio.getTime() > fechaActual.getTime()) {
        torneo.estado = 'pendiente';
      } else if (fechaFin && fechaFin.getTime() < fechaActual.getTime()) {
        torneo.estado = 'finalizado';
      } else if (fechaFin && fechaInicio.getTime() <= fechaActual.getTime() && fechaFin.getTime() >= fechaActual.getTime()) {
        torneo.estado = 'en_curso';
      } else {
        torneo.estado = 'pendiente';
      }
    });
  }

  ordenarTorneosPorFecha(): void {
    const fechaActual = new Date();

    const enCurso = this.torneosFiltrados.filter(torneo => torneo.estado === 'en_curso');
    const pendientes = this.torneosFiltrados.filter(torneo => torneo.estado === 'pendiente');
    const finalizados = this.torneosFiltrados.filter(torneo => torneo.estado === 'finalizado');

   
    const ordenarPorFecha = (a: Torneo, b: Torneo) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return Math.abs(fechaA.getTime() - fechaActual.getTime()) - Math.abs(fechaB.getTime() - fechaActual.getTime());
    };

    enCurso.sort(ordenarPorFecha);
    pendientes.sort(ordenarPorFecha);
    finalizados.sort(ordenarPorFecha);

    
    this.torneosFiltrados = [...enCurso, ...pendientes, ...finalizados];
  }


  getTorneosPaginaActual(): Torneo[] {
    const inicio = (this.paginaActual - 1) * this.torneosPorPagina;
    const fin = this.paginaActual * this.torneosPorPagina;
    return this.torneosFiltrados.slice(inicio, fin);
  }


  irPaginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }
  
  irPaginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }
  


  get totalPaginas(): number {
    return Math.ceil(this.torneosFiltrados.length / this.torneosPorPagina);
  }
  
}
