import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../../local-storage.token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BASE_URL: string = 'http://localhost:3000/polichess/login';

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private localStorage: Storage | null) { }

  public login(nombre_usuario: string, contrasena_hash: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { nombre_usuario, contrasena_hash };
    return this.http.post(this.BASE_URL, body, { headers });
  }

  public isAuthenticated(): boolean {
    return this.localStorage ? !!this.localStorage.getItem('token') : false;
  }

  setToken(token: string) {
    if (!!this.localStorage) {
      this.localStorage.setItem("token", token);
    }
  }

  logout() {
    if (!!this.localStorage) {
      this.localStorage.removeItem("token");
      window.location.reload();
    }
  }
}
