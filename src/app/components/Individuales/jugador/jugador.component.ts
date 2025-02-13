import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadorService } from "../../../../services/jugador.service";  // Ajusta la importación según tu estructura
import { Jugador } from '../../../../models/jugador.model';  // Ajusta la importación según tu estructura
import { CommonModule } from '@angular/common'; // Asegúrate de importar esto

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'] // Asegúrate de usar 'styleUrls' en lugar de 'styleUrl'
})
export class JugadorComponent implements OnInit {
  
  jugador: Jugador | undefined;

  constructor(
    private route: ActivatedRoute,  // Para obtener el id de la URL
    private jugadorService: JugadorService  // Para obtener la información del jugador
  ) {}

  ngOnInit(): void {
    // Obtén el id del jugador desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Llama al servicio para obtener la información del jugador por su id
      this.jugador = this.jugadorService.obtenerJugadorPorId(Number(id));
    }
  }

  // Función para calcular la edad en base a la fecha de nacimiento
  calcularEdad(fechaDeNacimiento: Date): number {
    const today = new Date();
    const birthDate = new Date(fechaDeNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    // Ajusta la edad si aún no ha cumplido años este año
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
