import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "noticias",
    component: NoticiasComponent
  }
];
