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
        organizador_id: 1,
        descripcion: "El campeonato mundial de ajedrez Blitz",
        ritmo: "Blitz",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Buchholz",
        intervalo_rondas: 30,
        horario_preferido: "15:00",
        minimo_jugadores: 2,
        maximo_jugadores: 16,
        minimo_elo: 1000,
        maximo_elo: 3000,
        estado: "Pendiente"
      },
      {
        id: 1,
        nombre: "Torneo Regional",
        organizador_id: 2,
        descripcion: "Un torneo regional para jugadores de todas las edades",
        ritmo: "Estándar",
        sistema_emparejamiento: "Todos contra todos",
        criterio_desempate: "Buchholz mediano",
        intervalo_rondas: 40,
        horario_preferido: "16:00",
        minimo_jugadores: 4,
        maximo_jugadores: 32,
        minimo_elo: 800,
        maximo_elo: 2400,
        estado: "Pendiente"
      },
      {
        id: 2,
        nombre: "Torneo Internacional Rápido",
        organizador_id: 3,
        descripcion: "Un torneo de ajedrez rápido a nivel internacional",
        ritmo: "Rápido",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Buchholz -1",
        intervalo_rondas: 25,
        horario_preferido: "14:00",
        minimo_jugadores: 6,
        maximo_jugadores: 40,
        minimo_elo: 1200,
        maximo_elo: 2500,
        estado: "Pendiente"
      },
      {
        id: 3,
        nombre: "Copa Nacional",
        organizador_id: 4,
        descripcion: "Campeonato nacional con los mejores jugadores del país",
        ritmo: "Estándar",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Sonneborn-Berger",
        intervalo_rondas: 30,
        horario_preferido: "15:00",
        minimo_jugadores: 8,
        maximo_jugadores: 64,
        minimo_elo: 1500,
        maximo_elo: 2800,
        estado: "Pendiente"
      },
      {
        id: 4,
        nombre: "Torneo Universitario",
        organizador_id: 5,
        descripcion: "Competencia de ajedrez para estudiantes universitarios",
        ritmo: "Blitz",
        sistema_emparejamiento: "Todos contra todos",
        criterio_desempate: "Buchholz",
        intervalo_rondas: 15,
        horario_preferido: "17:00",
        minimo_jugadores: 10,
        maximo_jugadores: 50,
        minimo_elo: 600,
        maximo_elo: 2200,
        estado: "Pendiente"
      },
      {
        id: 5,
        nombre: "Copa de Invierno",
        organizador_id: 6,
        descripcion: "Torneo de ajedrez en el frío invierno",
        ritmo: "Estándar",
        sistema_emparejamiento: "Todos contra todos (ida y vuelta)",
        criterio_desempate: "Buchholz mediano",
        intervalo_rondas: 35,
        horario_preferido: "16:30",
        minimo_jugadores: 4,
        maximo_jugadores: 20,
        minimo_elo: 1100,
        maximo_elo: 2700,
        estado: "Pendiente"
      },
      {
        id: 6,
        nombre: "Copa Internacional Blitz",
        organizador_id: 7,
        descripcion: "Competencia internacional de ajedrez Blitz",
        ritmo: "Blitz",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Sonneborn-Berger",
        intervalo_rondas: 20,
        horario_preferido: "14:30",
        minimo_jugadores: 8,
        maximo_jugadores: 64,
        minimo_elo: 1300,
        maximo_elo: 3000,
        estado: "Pendiente"
      },
      {
        id: 7,
        nombre: "Torneo Juvenil de Ajedrez",
        organizador_id: 8,
        descripcion: "Un torneo para jóvenes promesas del ajedrez",
        ritmo: "Rápido",
        sistema_emparejamiento: "Todos contra todos",
        criterio_desempate: "Buchholz",
        intervalo_rondas: 25,
        horario_preferido: "13:00",
        minimo_jugadores: 6,
        maximo_jugadores: 40,
        minimo_elo: 800,
        maximo_elo: 2400,
        estado: "Pendiente"
      },
      {
        id: 8,
        nombre: "Torneo Abierto de Ajedrez",
        organizador_id: 9,
        descripcion: "Un torneo abierto para todos los niveles de jugadores",
        ritmo: "Estándar",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Buchholz -1",
        intervalo_rondas: 40,
        horario_preferido: "15:30",
        minimo_jugadores: 10,
        maximo_jugadores: 50,
        minimo_elo: 1000,
        maximo_elo: 2800,
        estado: "Pendiente"
      },
      {
        id: 9,
        nombre: "Copa del Mundo Ajedrez",
        organizador_id: 10,
        descripcion: "La copa mundial con los mejores jugadores de ajedrez Blitz",
        ritmo: "Blitz",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Buchholz mediano",
        intervalo_rondas: 30,
        horario_preferido: "14:00",
        minimo_jugadores: 6,
        maximo_jugadores: 32,
        minimo_elo: 1400,
        maximo_elo: 3200,
        estado: "Pendiente"
      },
      {
        id: 10,
        nombre: "Campeonato Latinoamericano",
        organizador_id: 11,
        descripcion: "El campeonato de ajedrez más importante de América Latina",
        ritmo: "Estándar",
        sistema_emparejamiento: "Todos contra todos",
        criterio_desempate: "Sonneborn-Berger",
        intervalo_rondas: 35,
        horario_preferido: "15:30",
        minimo_jugadores: 12,
        maximo_jugadores: 60,
        minimo_elo: 1200,
        maximo_elo: 2900,
        estado: "Pendiente"
      },
      {
        id: 11,
        nombre: "Torneo de Ajedrez Online",
        organizador_id: 12,
        descripcion: "Torneo virtual de ajedrez rápido",
        ritmo: "Rápido",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Buchholz",
        intervalo_rondas: 20,
        horario_preferido: "17:00",
        minimo_jugadores: 4,
        maximo_jugadores: 50,
        minimo_elo: 800,
        maximo_elo: 2500,
        estado: "Pendiente"
      },
      {
        id: 12,
        nombre: "Copa Honor a La Crema de fin de año",
        organizador_id: 13,
        descripcion: "La copa honor a la crema ha sido un evento importantisimo en el club Gruyere desde tiempos ancestrales.",
        ritmo: "Blitz",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Sonneborn-Berger",
        intervalo_rondas: 30,
        horario_preferido: "15:00",
        minimo_jugadores: 6,
        maximo_jugadores: 32,
        minimo_elo: 1300,
        maximo_elo: 2800,
        estado: "Pendiente"
      },
      {
        id: 13,
        nombre: "Torneo Ludopatia infantil",
        organizador_id: 14,
        descripcion: "Torneo en honor a Francisco Casais, cuyo mercado pago fue vaciado y a raiz de la depresión que eso le generó decidió no laburar NIIIIIIIIENPEDO en polichess",
        ritmo: "Blitz",
        sistema_emparejamiento: "Suizo",
        criterio_desempate: "Buchholz -1",
        intervalo_rondas: 15,
        horario_preferido: "23:00",
        minimo_jugadores: 4,
        maximo_jugadores: 20,
        minimo_elo: 500,
        maximo_elo: 2200,
        estado: "Pendiente"
      }
    ];
  }
  
}
