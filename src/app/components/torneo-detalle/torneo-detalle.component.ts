import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../../services/torneo/torneo.service'; // Ajusta la ruta si es necesario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-torneo-detalle',
  templateUrl: './torneo-detalle.component.html',
   standalone: true,
    imports: [CommonModule,FormsModule],
  styleUrls: ['./torneo-detalle.component.css']
})
export class TorneoDetalleComponent implements OnInit {
  torneo: any; // Define una variable para almacenar el torneo

  constructor(
    private torneoService: TorneoService, // Inyectar el servicio
    private route: ActivatedRoute // Inyectar ActivatedRoute para obtener el ID de la URL
  ) {}

  ngOnInit(): void {
    const torneoId = this.route.snapshot.paramMap.get('id'); // Obtener el ID de la URL
    if (torneoId) {
      const idNumero = Number(torneoId); // Convertir el id a número
      if (!isNaN(idNumero)) {
        this.torneoService.obtenerPorId(idNumero).subscribe({
          next: (data) => {
            this.torneo = data; // Asignar los datos al objeto torneo
            console.log('Torneo cargado:', this.torneo); // Para debuguear
          },
          error: (err) => {
            console.error('Error al obtener el torneo', err); // Manejo de errores
          }
        });
      } else {
        console.error('ID de torneo inválido');
      }
    } else {
      console.error('ID de torneo no encontrado en la URL');
    }
  }
}
