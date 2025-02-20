import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../../local-storage.token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage | null) {
    if (!!localStorage) {
      const usuarioGuardado: any = localStorage.getItem('usuario');

      if (usuarioGuardado) {
        this.setUsuario(JSON.parse(usuarioGuardado));
      }
    }
  }

  setUsuario(usuario: any) {
    if (!!this.localStorage) {
      localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    }
  }

  getUsuario() {
    if (!!this.localStorage) {
      const usuarioGuardado = this.localStorage.getItem("usuarioActual");
      return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    }
  }

  logout() {
    if (!!this.localStorage) {
      localStorage.removeItem("usuarioActual");
    }
  }
}
