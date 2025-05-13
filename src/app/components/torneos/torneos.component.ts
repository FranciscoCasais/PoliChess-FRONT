  import { Component, OnInit } from '@angular/core';
  import { TorneoService } from '../../services/torneo/torneo.service'; // Ajusta la ruta si es necesario
  import { Router, RouterModule } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { TorneoComponent } from '../torneo/torneo.component';
  import { LoginService } from '../../services/login/login.service';

  @Component({
    selector: 'app-torneos',
    standalone: true,
    imports: [CommonModule,FormsModule,RouterModule,TorneoComponent],
    templateUrl: './torneos.component.html',
    styleUrls: ['./torneos.component.css']
  })
  export class TorneosComponent implements OnInit {
    torneos: any[] = [];
    pagina: number = 1; // Página actual para la paginación
    searchQuery: string = ''; // Parámetro de búsqueda
    

    constructor(private torneoService: TorneoService, private router: Router, public loginService: LoginService) {}
irACrearTorneo(): void {
  this.router.navigate(['/creartorneo']);
}


    ngOnInit(): void {
      this.cargarTorneos();
    }

    cargarTorneos(): void {
      this.torneoService.obtenerAlgunos(this.pagina).subscribe({
        next: (data: any) => {
          this.torneos = data; // Asignar los datos de torneos a la variable
          console.log('Torneos cargados:', this.torneos); // Para verificar los datos
        },
        error: (err) => {
          console.error('Error al obtener torneos', err); // Manejo de errores
        }
      });
    }
limpiarBusqueda(): void {
  this.searchQuery = '';
  this.cargarTorneos();
}


    buscarTorneos(): void {
      if (this.searchQuery) {
        this.torneoService.obtenerAlgunosPorBusquda(this.pagina, this.searchQuery).subscribe({
          next: (data: any) => {
            this.torneos = data;
          },
          error: (err) => console.error('Error al buscar torneos', err)
        });
      } else {
        this.cargarTorneos();
      }
    }

    verDetalles(id: number): void {
      this.router.navigate([`/torneos/${id}`]); // Redirige al componente detalle con el ID
    }
  }
