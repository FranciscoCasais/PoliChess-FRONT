import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BASE_URL: string = 'http://localhost:3000/polichess/login';

  constructor(private http: HttpClient) { }

  public login(nombre_usuario: string, contrasena_hash: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { nombre_usuario, contrasena_hash };
    return this.http.post(this.BASE_URL, body, { headers });
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  logout() {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public toJSON(nombre_usuario: string, contrasena_hash: string) {
    return {
      "nombre_usuario": nombre_usuario,
      "contrasena_hash": contrasena_hash
    };
  }
}
