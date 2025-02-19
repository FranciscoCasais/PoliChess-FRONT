import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AuthGuard } from './auth.guard';

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
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "noticias",
    component: NoticiasComponent
  }
];
