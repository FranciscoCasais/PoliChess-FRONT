import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioComponent } from '../usuario/usuario.component';
 import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, UsuarioComponent,RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  pagina: number = 1;

  constructor(private usuarioService: UsuarioService,private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.obtenerAlgunosPorBusqueda('', this.pagina).subscribe({
      next: (data: any) => this.usuarios = data,
      error: (err) => console.error('Error al obtener usuarios', err)
    });
  }



verPerfil(id: number) {
  this.router.navigate(['/jugadores', id]);
}

}
