import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartaJugadorComponent } from '../carta-jugador/carta-jugador.component';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [ NgIf,
    NgFor,
    NgClass,
    CartaJugadorComponent,
    RouterLink], 
  templateUrl: 'jugadores.component.html',
  styleUrls: ['jugadores.component.css']
})
export class jugadoresComponent implements OnInit {
  protected jugadores: any;
  /* protected jugadoresFiltrados: Jugador[] = []; */
  protected busqueda: string = '';
  protected filtroElo: string = 'standard';

  public paginaActual: number = 1;
  public paginas: number = 0;

  constructor(private usuarioService: UsuarioService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.obtenerJugadores();
    this.obtenerPaginas();
  }

  public obtenerJugadores(): void {
    if (this.busqueda === "") {
      this.usuarioService.obtenerAlgunosPorBusqueda(this.busqueda,this.paginaActual).subscribe({
        next: (jugadores) => {
          this.jugadores = jugadores;
        },
        error: (error) => {
          console.error("Error obteniendo jugadores:", error);
          this.jugadores = [];
        }
      });
    } else {
      this.usuarioService.obtenerAlgunosPorBusqueda(this.busqueda, this.paginaActual).subscribe({
        next: (jugadores) => {
          this.jugadores = jugadores;
        },
        error: (error) => {
          console.error("Error obteniendo jugadores:", error);
          this.jugadores = [];
        }
      });
    }
  }



  public buscarJugadores(): void {
    this.busqueda = (document.getElementById("buscarJugador") as HTMLInputElement).value;
    this.obtenerJugadores();
    this.obtenerPaginas();
  }

  public limpiarBusqueda(): void {
    this.busqueda = "";
    (document.getElementById("buscarJugador") as HTMLInputElement).value = "";
    this.obtenerJugadores();
    this.obtenerPaginas();
  }

  public paginaAnterior(): void {
    this.paginaActual--;
    this.obtenerJugadores();
  }

  public paginaSiguiente(): void {
    this.paginaActual++;
    this.obtenerJugadores();
  }

  public primeraPagina(): void {
    this.paginaActual = 1;
    this.obtenerJugadores();
  }

  public ultimaPagina(): void {
    this.paginaActual = this.paginas;
    this.obtenerJugadores();
  }

  public obtenerPaginas() {
    let i: number = 1;
    let jugadores: any;
    const obtenerCantidad = (): void => {
      if (this.busqueda === "") {
        this.usuarioService.obtenerAlgunosPorBusqueda(this.busqueda,this.paginaActual).subscribe({
          next: (jugadoresObtenidas: any) => {
            jugadores = jugadoresObtenidas;

            if (jugadores.length > 0) {
              i++;
              obtenerCantidad();
            } else {
              this.paginas = i - 1;
            }
          },
          error: (error) => {
            console.error("Error obteniendo jugadores:", error);
            jugadores = [];
          }
        });
      } else {
        this.usuarioService.obtenerAlgunosPorBusqueda(this.busqueda, i).subscribe({
          next: (jugadoresObtenidas: any) => {
            jugadores = jugadoresObtenidas;

            if (jugadores.length > 0) {
              i++;
              obtenerCantidad();
            } else {
              this.paginas = i - 1;
            }
          },
          error: (error) => {
            console.error("Error obteniendo jugadores:", error);
            jugadores = [];
          }
        });
      }
    }

    obtenerCantidad();
  }
  }













/*


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
  }*/
