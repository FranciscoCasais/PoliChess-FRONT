import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jugadorModel, { Jugador } from "../models/jugador.model";


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  public obtenerJugadorPorId(id: number): Jugador | undefined {
    const jugadores = this.obtenerJugadores(); // Supongamos que ya tienes este método que devuelve todos los jugadores
    return jugadores.find(jugador => jugador.id === id);
  }

  public obtenerJugadores(): Jugador[]  {
    return [
      {
        id: 0,
        nombre: "Daniel",
        apellido: "Santi",
        fechaDeNacimiento: new Date("1894-10-25"),
        eloStandard: 1400,
        eloBlitz: 1960,
        eloRapido: 1820,
        foto: "DanielSanti.jpg",
        nombreDeUsuario: "danielSanti1894"
      },
      {
        id: 1,
        nombre: "Ted",
        apellido: "Beneke",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 0,
        eloBlitz: 1702,
        eloRapido: 1150,
        foto: "tedBeneke.jpg",
        nombreDeUsuario: "tedBeneke2024"
      },
      {
        id: 2,
        nombre: "James",
        apellido: "Whistler",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 2300,
        eloBlitz: 1900,
        eloRapido: 1820,
        foto: "james whistler.jpg",
        nombreDeUsuario: "jamesWhistler2024"
      },
      {
        id: 3,
        nombre: "Francisco",
        apellido: "Casais",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 1245,
        eloBlitz: 1249,
        eloRapido: 1450,
        foto: "patillas.jpg",
        nombreDeUsuario: "franciscoCasais"
      },
      {
        id: 4,
        nombre: "Christian",
        apellido: "Miguez",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 519,
        eloBlitz: 0,
        eloRapido: 0,
        foto: "miguez.jpg",
        nombreDeUsuario: "christianMiguez"
      },
      {
        id: 5,
        nombre: "Martin",
        apellido: "Barbieri",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 1200,
        eloBlitz: 1700,
        eloRapido: 1900,
        foto: "martinBarbieri.jpg",
        nombreDeUsuario: "martinBarbieri"
      },
      {
        id: 8,
        nombre: "Santino",
        apellido: "Andreachi",
        fechaDeNacimiento: new Date("2005-10-11"),
        eloStandard: 100000000,
        eloBlitz: 100000000,
        eloRapido: 100000,
        foto: "santi.png",
        nombreDeUsuario: "santinoAndreachi"
      },
      {
        id: 9,
        nombre: "Daniel",
        apellido: "Fantasma",
        fechaDeNacimiento: new Date("1998-10-11"),
        eloStandard: 0,
        eloBlitz: 400,
        eloRapido: 697,
        foto: "danielfantasma.jpg",
        nombreDeUsuario: "danielFantasma1998"
      },
      {
        id: 10,
        nombre: "Daniel",
        apellido: "Mostacho",
        fechaDeNacimiento: new Date("2000-10-11"),
        eloStandard: 1600,
        eloBlitz: 1562,
        eloRapido: 1620,
        foto: "danielmostacho.jpg",
        nombreDeUsuario: "danielMostacho2000"
      },
      {
        id: 11,
        nombre: "Daniel",
        apellido: "Lengua",
        fechaDeNacimiento: new Date("2000-10-11"),
        eloStandard: 1400,
        eloBlitz: 1240,
        eloRapido: 1421,
        foto: "danielLengua.jpg",
        nombreDeUsuario: "danielLengua2000"
      },
      {
        id: 12,
        nombre: "Daniel",
        apellido: "Naroditsky",
        fechaDeNacimiento: new Date("1995-10-11"),
        eloStandard: 2619,
        eloBlitz: 2638,
        eloRapido: 2711,
        foto: "danielnaroditsky.jpg",
        nombreDeUsuario: "danielNaroditsky1995"
      },
      {
        id: 13,
        nombre: "Daniel",
        apellido: "Nievas",
        fechaDeNacimiento: new Date("1982-10-11"),
        eloStandard: 1820,
        eloBlitz: 1340,
        eloRapido: 1921,
        foto: "danielNievas.jpg",
        nombreDeUsuario: "danielNievas1982"
      },
      {
        id: 14,
        nombre: "Daniel",
        apellido: "Playosa",
        fechaDeNacimiento: new Date("1984-10-11"),
        eloStandard: 1200,
        eloBlitz: 1240,
        eloRapido: 1121,
        foto: "danielPlayosa.jpg",
        nombreDeUsuario: "danielPlayosa1984"
      },
      {
        id: 15,
        nombre: "Daniel",
        apellido: "Poeta",
        fechaDeNacimiento: new Date("1998-10-11"),
        eloStandard: 1500,
        eloBlitz: 1440,
        eloRapido: 1531,
        foto: "danielpoeta.jpg",
        nombreDeUsuario: "danielPoeta1998"
      },
      {
        id: 16,
        nombre: "Daniel",
        apellido: "Megatone",
        fechaDeNacimiento: new Date("1972-10-11"),
        eloStandard: 1200,
        eloBlitz: 1200,
        eloRapido: 1200,
        foto: "danielriestra.jpg",
        nombreDeUsuario: "danielMegatone1972"
      },
      {
        id: 17,
        nombre: "Daniel",
        apellido: "Tortuga",
        fechaDeNacimiento: new Date("2000-10-11"),
        eloStandard: 890,
        eloBlitz: 1240,
        eloRapido: 1111,
        foto: "danielTortuga.jpg",
        nombreDeUsuario: "danielTortuga2000"
      },
      {
        id: 18,
        nombre: "Daniel",
        apellido: "Hocico",
        fechaDeNacimiento: new Date("2018-10-11"),
        eloStandard: 1000000,
        eloBlitz: 100000,
        eloRapido: 100000,
        foto: "danielHocico.jpg",
        nombreDeUsuario: "danielHocico"
      },
      {
        id: 19,
        nombre: "DD Daniel",
        apellido: "Desi",
        fechaDeNacimiento: new Date("2005-10-11"),
        eloStandard: 1,
        eloBlitz: 0,
        eloRapido: 1,
        foto: "desi.jpg",
        nombreDeUsuario: "desialtoboludojj"
      },
      {
        id: 21,
        nombre: "UsuarioPrueba1235",
        apellido: "",
        fechaDeNacimiento: new Date("2005-10-11"),
        eloStandard: 0,
        eloBlitz: 0,
        eloRapido: 0,
        foto: "desi.jpg",
        nombreDeUsuario: "desialtoboludojj"
      },
      {
        id: 22,
        nombre: "UsuarioPrueba1234",
        apellido: "",
        fechaDeNacimiento: new Date("2005-10-11"),
        eloStandard: 0,
        eloBlitz: 0,
        eloRapido: 0,
        foto: "desi.jpg",
        nombreDeUsuario: "desialtoboludojj"
      },
      {
        id: 23,
        nombre: "UsuarioPrueba12",
        apellido: "",
        fechaDeNacimiento: new Date("2005-10-11"),
        eloStandard: 0,
        eloBlitz: 0,
        eloRapido: 0,
        foto: "desi.jpg",
        nombreDeUsuario: "desialtoboludojj"
      }
    ];
  }
}
