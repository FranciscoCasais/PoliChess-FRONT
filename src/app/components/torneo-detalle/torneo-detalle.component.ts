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
    this.torneoService.obtenerUno(id).subscribe((data) => {
      this.torneo = data;
     
    });

    this.usuarioLogueado = this.loginService.isAuthenticated();
    this.idUsuario = this.loginService.getUsuarioId();
  }

  volver() {
    this.location.back();
  }




}
