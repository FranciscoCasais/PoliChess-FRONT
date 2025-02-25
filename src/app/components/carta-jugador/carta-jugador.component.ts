import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-carta-jugador',
  standalone: true,
  imports: [],
  templateUrl: './carta-jugador.component.html',
  styleUrl: './carta-jugador.component.css'
})
export class CartaJugadorComponent {
  @Input() public noticia!: any;
  public autorNombre: string = "Desconocido";

  constructor(public usuarioService: UsuarioService) { }

  async ngOnInit(): Promise<void> {
    this.usuarioService.obtenerUno(this.noticia.autor_id).subscribe({
      next: (autor: any) => {
        this.autorNombre = `${autor.nombre} ${autor.apellido}`;
      },
      error: (error) => {
        console.error("Error obteniendo autor:", error);
      }
    });
  }
}
