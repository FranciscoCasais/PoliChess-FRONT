import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../../../../services/torneo.service';
import { Torneo } from '../../../../models/torneo.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importarlo


@Component({
  selector: 'app-seccion-calendario',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './seccion-calendario.component.html',
  styleUrl: './seccion-calendario.component.css',
})
export class SeccionCalendarioComponent implements OnInit {
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  diasSemana: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  mesActual: number = new Date().getMonth();
  anioActual: number = new Date().getFullYear();
  rangoAnios: number[] = [];

  diasDelMes: number[] = [];
  celdasVacias: number[] = [];
  torneosPorDia: { [key: number]: Torneo[] } = {};

  constructor(private torneoService: TorneoService) {}

  ngOnInit(): void {
    this.generarRangoAnios();
    this.generarCalendario();
  }

  // Generar rango de años (5 años atrás y 5 adelante)
  generarRangoAnios(): void {
    const anioActual = new Date().getFullYear();
    for (let i = anioActual - 5; i <= anioActual + 5; i++) {
      this.rangoAnios.push(i);
    }
  }

  // Generar calendario del mes y año actuales
  generarCalendario(): void {
    this.diasDelMes = this.obtenerDiasDelMes(this.mesActual, this.anioActual);
    this.celdasVacias = this.calcularCeldasVacias(this.mesActual, this.anioActual);
    this.torneosPorDia = this.agruparTorneosPorDia();
  }

  // Obtener los días del mes
  obtenerDiasDelMes(mes: number, anio: number): number[] {
    const totalDias = new Date(anio, mes + 1, 0).getDate();
    return Array.from({ length: totalDias }, (_, i) => i + 1);
  }

  // Calcular las celdas vacías al inicio del calendario
  calcularCeldasVacias(mes: number, anio: number): number[] {
    const primerDiaSemana = new Date(anio, mes, 1).getDay(); // Devuelve 0-6 (Domingo-Sábado)
    return Array.from({ length: primerDiaSemana });
  }

  // Agrupar torneos por día
  agruparTorneosPorDia(): { [key: number]: Torneo[] } {
    const torneos = this.torneoService.obtenerTorneos();
    const torneosAgrupados: { [key: number]: Torneo[] } = {};

    torneos.forEach(torneo => {
      const fecha = new Date(torneo.fecha);
      if (fecha.getMonth() === this.mesActual && fecha.getFullYear() === this.anioActual) {
        const dia = fecha.getDate();
        if (!torneosAgrupados[dia]) torneosAgrupados[dia] = [];
        torneosAgrupados[dia].push(torneo);
      }
    });
    return torneosAgrupados;
  }

  // Cambiar el mes actual
  cambiarMes(cambio: number): void {
    this.mesActual += cambio;

    if (this.mesActual > 11) {
      this.mesActual = 0;
      this.anioActual++;
    } else if (this.mesActual < 0) {
      this.mesActual = 11;
      this.anioActual--;
    }

    this.verificarLimitesAnio();
    this.generarCalendario();
  }

  // Cambiar año desde selector
  cambiarAnio(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.anioActual = Number(target.value);
    this.generarCalendario();
  }

  // Verificar límites de año
  verificarLimitesAnio(): void {
    const anioActual = new Date().getFullYear();
    if (this.anioActual < anioActual - 5) {
      this.anioActual = anioActual - 5;
    } else if (this.anioActual > anioActual + 5) {
      this.anioActual = anioActual + 5;
    }
  }
}
