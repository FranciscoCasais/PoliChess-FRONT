import { Location, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../../services/noticia/noticia.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ComentarioService } from '../../services/comentario/comentario.service';
import { LoginService } from '../../services/login/login.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NgIf],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
  public noticia: any;
  public autor: any;
  public fechaPublicacion: string = "Desconocida";
  public fechaActualizacion: string = "Desconocida";
  public totalComentarios: number = 0;

  constructor(private location: Location, private route: ActivatedRoute, private noticiaService: NoticiaService,
    private usuarioService: UsuarioService, private comentarioService: ComentarioService, public loginService: LoginService,
    public authService: AuthService) { }

  ngOnInit() {
    this.noticiaService.obtenerUno(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: (noticia) => {
        this.noticia = noticia;
        this.fechaPublicacion = this.formatearFecha(this.noticia.createdAt);
        this.fechaActualizacion = this.formatearFecha(this.noticia.updatedAt);

        this.usuarioService.obtenerUno(this.noticia.autor_id).subscribe({
          next: (autor) => {
            this.autor = autor;
          },
          error: (error) => {
            console.error("Error obteniendo autor:", error);
            this.autor = {};
          }
        });

        this.comentarioService.obtenerTotal(this.noticia.id).subscribe({
          next: (total: any) => {
            this.totalComentarios = total;
          },
          error: (error) => {
            console.error("Error obteniendo total de comentarios:", error);
            this.totalComentarios = 0;
          }
        });
      },
      error: (error) => {
        console.error("Error obteniendo noticia:", error);
        this.noticia = {};
      }
    });
  }

  public formatearFecha(fechaISO: string): string {
    const fecha = new Date(fechaISO);

    const dia = fecha.getUTCDate().toString().padStart(2, '0');
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getUTCFullYear().toString().slice(-2);
    const horas = fecha.getUTCHours().toString().padStart(2, '0');
    const minutos = fecha.getUTCMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${año} ${horas}:${minutos}`;
  }

  public volver(): void {
    this.location.back();
  }

  public toggleLogin(): void {
    
  }

}
