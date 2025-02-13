import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../../../../services/torneo.service'; // Ajusta según tu estructura
import { Torneo } from '../../../../models/torneo.model'; // Ajusta según tu estructura
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de tener esto importado

@Component({
  selector: 'app-torneo',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './torneo.component.html',
  styleUrl: './torneo.component.css'
})
export class TorneoComponent implements OnInit {
  torneo: Torneo | undefined;
  rankingInicial: { posicion: number; jugador: any }[] = [];
  rankingFinal: { posicion: number; jugador: any }[] = [];

  constructor(
    private route: ActivatedRoute,
    private torneoService: TorneoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const torneo = this.torneoService.obtenerTorneoPorId(Number(id));
      if (torneo) {
        this.torneo = torneo;
        this.cargarRankings();
      }
    }
  }

  cargarRankings(): void {
    if (this.torneo) {
      // Convertir Map a un array ordenado por posición
      this.rankingInicial = Array.from(this.torneo.rankingInicial).map(([posicion, jugador]) => ({
        posicion,
        jugador
      }));

      this.rankingFinal = Array.from(this.torneo.rankingFinal).map(([posicion, jugador]) => ({
        posicion,
        jugador
      }));
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
}