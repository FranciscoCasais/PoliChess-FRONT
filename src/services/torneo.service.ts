import { Injectable } from '@angular/core';
import { Torneo } from "../models/torneo.model";

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  // Obtener un torneo por su ID
  public obtenerTorneoPorId(id: number): Torneo | undefined {
    const torneos = this.obtenerTorneos(); // Método que devuelve todos los torneos
    return torneos.find(torneo => torneo.id === id);
  }

  // Método que devuelve una lista de torneos
  public obtenerTorneos(): Torneo[] {
    return [
      {
        id: 0,
        nombre: "Campeonato Mundial",
        ritmo: "Blitz",
        fecha: new Date("2024-01-15"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
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
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
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
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
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
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
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
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-05-01T10:00:00"),
          fin: new Date("2024-05-01T15:00:00")
        },
        descripcion: "Competencia de ajedrez para estudiantes universitarios",
        ganador: undefined
      },
      {
        id: 5,
        nombre: "Copa de Invierno",
        ritmo: "Standard",
        fecha: new Date("2024-06-20"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-06-20T10:00:00"),
          fin: new Date("2024-06-20T15:00:00")
        },
        descripcion: "Torneo de ajedrez en el frío invierno",
        ganador: undefined
      },
      {
        id: 6,
        nombre: "Copa Internacional Blitz",
        ritmo: "Blitz",
        fecha: new Date("2024-07-05"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-07-05T10:00:00"),
          fin: new Date("2024-07-05T15:00:00")
        },
        descripcion: "Competencia internacional de ajedrez Blitz",
        ganador: undefined
      },
      {
        id: 7,
        nombre: "Torneo Juvenil de Ajedrez",
        ritmo: "Rápido",
        fecha: new Date("2024-08-10"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-08-10T10:00:00"),
          fin: new Date("2024-08-10T15:00:00")
        },
        descripcion: "Un torneo para jóvenes promesas del ajedrez",
        ganador: undefined
      },
      {
        id: 8,
        nombre: "Torneo Abierto de Ajedrez",
        ritmo: "Standard",
        fecha: new Date("2024-09-25"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-09-25T10:00:00"),
          fin: new Date("2024-09-25T15:00:00")
        },
        descripcion: "Un torneo abierto para todos los niveles de jugadores",
        ganador: undefined
      },
      {
        id: 9,
        nombre: "Copa del Mundo Ajedrez",
        ritmo: "Blitz",
        fecha: new Date("2024-10-05"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-10-05T10:00:00"),
          fin: new Date("2024-10-05T15:00:00")
        },
        descripcion: "La copa mundial con los mejores jugadores de ajedrez Blitz",
        ganador: undefined
      },
      {
        id: 10,
        nombre: "Campeonato Latinoamericano",
        ritmo: "Standard",
        fecha: new Date("2024-11-15"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-11-15T10:00:00"),
          fin: new Date("2024-11-15T15:00:00")
        },
        descripcion: "El campeonato de ajedrez más importante de América Latina",
        ganador: undefined
      },
      {
        id: 11,
        nombre: "Torneo de Ajedrez Online",
        ritmo: "Rápido",
        fecha: new Date("2024-12-01"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-12-01T10:00:00"),
          fin: new Date("2024-12-01T15:00:00")
        },
        descripcion: "Torneo virtual de ajedrez rápido",
        ganador: undefined
      },
      {
        id: 12,
        nombre: "Copa Honor a La Crema de fin de año",
        ritmo: "Blitz",
        fecha: new Date("2030-11-08"),
        hora: "15:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2030-11-08T10:00:00"),
          fin: new Date("2030-11-08T15:00:00")
        },
        descripcion: "La copa honor a la crema ha sido un evento importantisimo en el club Gruyere desde tiempos ancestrales.",
        ganador: undefined
      },
      {
        id: 13,
        nombre: "Torneo Ludopatia infantil",
        ritmo: "Blitz",
        fecha: new Date("2024-12-10"),
        hora: "23:00",
        jugadores: new Set(),
        rankingInicial: new Map(),
        rankingFinal: new Map(),
        estado: 'pendiente',
        duracion: {
          inicio: new Date("2024-12-10T23:00:00"),
          fin: new Date("2024-12-10T23:30:00")
        },
        descripcion: "Torneo en honor a Francisco Casais, cuyo mercado pago fue vaciado y a raiz de la depresión que eso le generó decidió no laburar NIIIIIIIIENPEDO en polichess",
        ganador: undefined
      },
    ];
  }
  
}
