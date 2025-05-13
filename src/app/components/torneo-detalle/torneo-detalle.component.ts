import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../../services/torneo/torneo.service';
import { CommonModule,Location } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private torneoService: TorneoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.torneoService.obtenerUno(id).subscribe((data) => {
      this.torneo = data;
    });
  }
   volver() {
    this.location.back();
  }
}
