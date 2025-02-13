import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../../../../services/noticia.service';
import { Noticia } from '../../../../models/noticia.model';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';  // Importar idioma español

registerLocaleData(localeEs, 'es');  // Registrar idioma español
@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {
  noticia: Noticia | undefined;

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticia = this.noticiaService.obtenerNoticiaPorId(id);
  }
}
