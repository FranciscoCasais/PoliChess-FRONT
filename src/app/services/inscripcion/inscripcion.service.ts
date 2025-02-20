import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private BASE_URL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public obtenerUno(id: number) {
    return this.http.get(`${this.BASE_URL}/inscripciones/${id}`);
  }

  public obtenerAlgunos(idTorneo: number, pagina: number) {
    return this.http.get(`${this.BASE_URL}/torneos/${idTorneo}/inscripciones/pagina/${pagina}`);
  }

  public agregar(inscripcion: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = inscripcion;
    return this.http.post(`${this.BASE_URL}/inscripciones`, body, { headers });
  }

  public editar(inscripcion: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = inscripcion;

    return this.http.put(`${this.BASE_URL}/inscripciones`, body, { headers });
  }

  public eliminar(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(`${this.BASE_URL}/inscripciones/${id}`, { headers });
  }
}
