import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearTorneoComponent } from './components/crear-torneo/crear-torneo.component';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';

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
  },
  {
    path: "noticias/:id",
    component: NoticiaComponent
  },
  {
    path: "creartorneo",
    component: CrearTorneoComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "crearnoticia",
    component: CrearNoticiaComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];
