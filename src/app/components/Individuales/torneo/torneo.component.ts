import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneoService } from '../../../../services/torneo.service'; // Ajusta según tu estructura
import { Torneo } from '../../../../models/torneo.model'; // Ajusta según tu estructura
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de tener esto importado

@Component({
  selector: 'app-torneo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {
  torneo: Torneo | undefined;
  rankingInicial: { posicion: number; jugador: any }[] = [];
  rankingFinal: { posicion: number; jugador: any }[] = [];

  constructor(
    private route: ActivatedRoute,
    private torneoService: TorneoService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const torneo = this.torneoService.obtenerTorneoPorId(Number(id));
      if (torneo) {
        this.torneo = torneo;
      }
    }
  }


  getEstadoTorneo(estado: string | undefined): string {
    switch (estado) {
      case 'pendiente':
        return 'No Comenzado';
      case 'en_curso':
        return 'En Curso';
      case 'finalizado':
        return 'Finalizado';
      default:
        return 'Desconocido';
    }
  }

  // Función para redirigir a la página del perfil del jugador
  verPerfilJugador(id: number): void {
    this.router.navigate([`/jugador/${id}`]); // Redirige a la ruta del perfil del jugador
  }
}
