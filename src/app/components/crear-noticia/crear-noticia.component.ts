import { NgIf, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia/noticia.service';
import { ImagenService } from '../../services/imagen/imagen.service';
import { LimitLineBreak } from '../../directives/limit-line-break.directive';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-crear-noticia',
  standalone: true,
  imports: [NgIf, LimitLineBreak],
  templateUrl: './crear-noticia.component.html',
  styleUrl: './crear-noticia.component.css'
})
export class CrearNoticiaComponent {
  public maxLineas: number = 100;

  constructor(private noticiaService: NoticiaService, private imagenService: ImagenService, private authService: AuthService, public location: Location) { }

  public volver(): void {
    this.location.back();
  }

  public previewUrl: string | null = null;
  public selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      // Previsualizar la imagen
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  public borrarImagen(): void {
    (document.getElementById("fileInput") as HTMLInputElement).value = "";
    this.previewUrl = null;
    this.selectedFile = null;
  }

  public async crearNoticia() {
    let res;

    if (this.selectedFile) {
      res = await this.imagenService.subirImagenNoticia(this.selectedFile);

      console.log(res);
      if (!res) {
        alert("Ocurrió un error al subir la imagen.");
        return;
      }
    }
    
    const titulo: string = (document.getElementById("titulo") as HTMLInputElement).value;
    const copete: string = (document.getElementById("copete") as HTMLInputElement).value;
    const imagen: string | null = res ? res : null;
    const autor_id: number = this.authService.getUsuario().id;
    const cuerpo: string = (document.getElementById("cuerpo") as HTMLInputElement).value;

    this.noticiaService.agregar({ titulo, copete, imagen, autor_id, cuerpo }).subscribe({
      next: () => {
        alert("Noticia creada correctamente.");
        this.location.back();
      },
      error: (err: any) => {
        alert("Ocurrió un error al crear la noticia.");
        console.error(err);
      }
    });
  }
}
