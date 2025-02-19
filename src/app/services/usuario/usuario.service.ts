import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private BASE_URL: string = 'http://localhost:3000/polichess/usuarios';

  constructor(private http: HttpClient) { }

  public obtenerUno(id: number) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  public agregar(nombre: string, apellido: string, nombre_usuario: string, contrasena_hash: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { nombre, apellido, nombre_usuario, contrasena_hash };
    return this.http.post(this.BASE_URL, body, { headers });
  }
}
