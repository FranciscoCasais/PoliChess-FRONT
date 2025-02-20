import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia/noticia.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  title = "Noticias";
}
