import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CrearTorneoComponent } from './crear-torneo/crear-torneo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

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
    path: "creartorneo",
    component: CrearTorneoComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "noticias",
    component: NoticiasComponent
  }
];
