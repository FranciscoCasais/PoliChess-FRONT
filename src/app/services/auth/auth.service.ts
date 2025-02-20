import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../../local-storage.token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage | null) {
    if (!!this.localStorage) {
      const usuarioGuardado: any = this.localStorage.getItem('usuario');

      if (usuarioGuardado) {
        this.setUsuario(JSON.parse(usuarioGuardado));
      }
    }
  }

  setUsuario(usuario: any) {
    if (!!this.localStorage) {
      this.localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    }
  }

  getUsuario() {
    console.log(this.localStorage);
    if (!!this.localStorage) {
      console.log(this.localStorage.getItem("usuarioActual"));
      const usuarioGuardado = this.localStorage.getItem("usuarioActual");
      console.log(usuarioGuardado);
      return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    }
  }

  logout() {
    if (!!this.localStorage) {
      this.localStorage.removeItem("usuarioActual");
    }
  }
}
