import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioComponent } from '../usuario/usuario.component';
 import { Router, RouterModule,RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 👈 Import necesario

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, UsuarioComponent, RouterModule, RouterLink, FormsModule], // 👈 Asegurate de importar FormsModule
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  pagina: number = 1;
  busqueda: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(): void {
    this.usuarioService.obtenerAlgunosPorBusqueda(this.busqueda, this.pagina).subscribe({
      next: (data: any) => this.usuarios = data,
      error: (err) => console.error('Error al obtener usuarios', err)
    });
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
    this.buscarUsuarios();
  }

  verPerfil(id: number): void {
    this.router.navigate(['/jugadores', id]);
  }
}
