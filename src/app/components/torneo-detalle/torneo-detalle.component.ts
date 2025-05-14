import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../../services/torneo/torneo.service';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InscripcionService } from '../../services/inscripcion/inscripcion.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-torneo-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './torneo-detalle.component.html',
  styleUrls: ['./torneo-detalle.component.css']
})
export class TorneoDetalleComponent implements OnInit {
  torneo: any;
  location: any;
  usuarioLogueado: boolean = false;
  idUsuario: number | null = null;
  inscrito: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private torneoService: TorneoService,
    private inscripcionService: InscripcionService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioLogueado = this.loginService.isAuthenticated();
    this.idUsuario = this.loginService.getUsuarioId();

    this.torneoService.obtenerUno(id).subscribe((data) => {
      this.torneo = data;

      // 🔽 Nuevo fragmento insertado aquí
      if (this.usuarioLogueado && this.idUsuario && this.torneo?.id) {
        this.inscripcionService.verificarInscripcion(this.idUsuario, this.torneo.id).subscribe({
          next: (res) => this.inscrito = res.inscrito,
          error: (err) => console.error('Error al verificar inscripción:', err)
        });
      }
    });
  }

  inscribirse() {
    if (!this.usuarioLogueado || !this.idUsuario || !this.torneo?.id) return;

    this.inscripcionService.agregar({ torneo_id: this.torneo.id }).subscribe({
      next: () => {
        this.inscrito = true;
        alert("Inscripción exitosa.");
      },
      error: (err) => {
        console.error(err);
        alert("Ocurrió un error al inscribirse.");
      }
    });
  }

  volver() {
    this.location.back();
  }
}
