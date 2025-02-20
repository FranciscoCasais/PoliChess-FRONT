import { Injectable } from '@angular/core';
import { Torneo } from '../models/torneo.model';
import { JugadorService } from './jugador.service'; // Importamos el servicio de jugadores

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private jugadorService: JugadorService) {}

  // Obtener un torneo por su ID
  public obtenerTorneoPorId(id: number): Torneo | undefined {
    const torneos = this.obtenerTorneos(); // Método que devuelve todos los torneos
    return torneos.find(torneo => torneo.id === id);
  }

  // Método que devuelve una lista de torneos
  public obtenerTorneos(): Torneo[] {
    const jugadores = this.jugadorService.obtenerJugadores(); // Obtener jugadores del servicio de jugadores

    return [
      {
        id: 0,
        nombre: "Campeonato Mundial",
        ritmo: "Blitz",
        fecha: new Date("2024-01-15"),
        hora: "15:00",
        jugadores: new Set(jugadores.slice(0, 3)), // Seleccionamos algunos jugadores para este torneo
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-01-15T10:00:00"),
          fin: new Date("2024-01-15T15:00:00")
        },
        descripcion: "El campeonato mundial de ajedrez Blitz",
        ganador: undefined
      },
      {
        id: 1,
        nombre: "Torneo Regional",
        ritmo: "Standard",
        fecha: new Date("2025-02-01"),
        hora: "15:00",
        jugadores: new Set(jugadores.slice(3, 6)), // Seleccionamos otro grupo de jugadores
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2025-02-01T10:00:00"),
          fin: new Date("2025-02-01T15:00:00")
        },
        descripcion: "Un torneo regional para jugadores de todas las edades",
        ganador: undefined
      },
      {
        id: 2,
        nombre: "Torneo Internacional Rápido",
        ritmo: "Rápido",
        fecha: new Date("2024-01-10"),
        hora: "15:00",
        jugadores: new Set(jugadores.slice(6, 9)), // Otro grupo de jugadores
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-01-10T10:00:00"),
          fin: new Date("2024-01-10T15:00:00")
        },
        descripcion: "Un torneo de ajedrez rápido a nivel internacional",
        ganador: undefined
      },
      {
        id: 3,
        nombre: "Copa Nacional",
        ritmo: "Standard",
        fecha: new Date("2024-04-15"),
        hora: "15:00",
        jugadores: new Set(jugadores.slice(9, 12)), // Más jugadores
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-04-15T10:00:00"),
          fin: new Date("2024-04-15T15:00:00")
        },
        descripcion: "Campeonato nacional con los mejores jugadores del país",
        ganador: undefined
      },
      {
        id: 4,
        nombre: "Torneo Universitario",
        ritmo: "Blitz",
        fecha: new Date("2024-05-01"),
        hora: "15:00",
        jugadores: new Set(jugadores.slice(1, 15)), // Continuamos con más jugadores
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-05-01T10:00:00"),
          fin: new Date("2024-05-01T15:00:00")
        },
        descripcion: "Competencia de ajedrez para estudiantes universitarios",
        ganador: undefined
      },
    ];
  }
}
