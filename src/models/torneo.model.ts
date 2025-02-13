
import { Jugador } from "./jugador.model";
const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must be a string or an object with the appropriate keys.';

export interface Torneo {
  id: number;
  nombre: string;
  organizador_id: number;  // Nuevo atributo
  descripcion: string;  // Descripción ahora es obligatoria
  ritmo: 'Estándar' | 'Rápido' | 'Blitz';  // Cambio de tipo
  sistema_emparejamiento: 'Suizo' | 'Todos contra todos' | 'Todos contra todos (ida y vuelta)';  // Nuevo atributo
  criterio_desempate: 'Buchholz' | 'Buchholz mediano' | 'Buchholz -1' | 'Sonneborn-Berger';  // Nuevo atributo
  intervalo_rondas: number;  // Nuevo atributo
  horario_preferido: string;  // Nuevo atributo
  minimo_jugadores: number;  // Nuevo atributo
  maximo_jugadores: number;  // Nuevo atributo
  minimo_elo: number;  // Nuevo atributo
  maximo_elo: number;  // Nuevo atributo
  estado: 'Pendiente' | 'En curso' | 'Finalizado' | 'Cancelado';  // Cambio de tipo
  duracion?: { inicio: Date; fin: Date };
  fechaInicio: Date;
  
} //falta agregar array jugadores y adaptar todo el codigo a los nuevos atributos, de este archivo y del servicio 

function new_(
  nombre: string,
  organizador_id: number,  // Nuevo parámetro
  descripcion: string,  // Descripción obligatoria
  ritmo: 'Estándar' | 'Rápido' | 'Blitz',  // Cambio de tipo
  sistema_emparejamiento: 'Suizo' | 'Todos contra todos' | 'Todos contra todos (ida y vuelta)',  // Nuevo parámetro
  criterio_desempate: 'Buchholz' | 'Buchholz mediano' | 'Buchholz -1' | 'Sonneborn-Berger',  // Nuevo parámetro
  intervalo_rondas: number,  // Nuevo parámetro
  horario_preferido: string,  // Nuevo parámetro
  minimo_jugadores: number,  // Nuevo parámetro
  maximo_jugadores: number,  // Nuevo parámetro
  minimo_elo: number,  // Nuevo parámetro
  maximo_elo: number,  // Nuevo parámetro
  estado: 'Pendiente' | 'En curso' | 'Finalizado' | 'Cancelado',  // Cambio de tipo
  id: number = -1  // Default id si no se proporciona
): Torneo {
  return {
    id,
    nombre,
    organizador_id,
    descripcion,
    ritmo,
    sistema_emparejamiento,
    criterio_desempate,
    intervalo_rondas,
    horario_preferido,
    minimo_jugadores,
    maximo_jugadores,
    minimo_elo,
    maximo_elo,
    estado,
  };
}

function from(param: object): Torneo {
  if (!isTorneo(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Torneo;
  return new_(
    p.nombre,
    p.organizador_id,
    p.descripcion,
    p.ritmo,
    p.sistema_emparejamiento,
    p.criterio_desempate,
    p.intervalo_rondas,
    p.horario_preferido,
    p.minimo_jugadores,
    p.maximo_jugadores,
    p.minimo_elo,
    p.maximo_elo,
    p.estado,
    p.id
  );
}

function isTorneo(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof (arg as any).id === 'number' &&
    'nombre' in arg && typeof (arg as any).nombre === 'string' &&
    'organizador_id' in arg && typeof (arg as any).organizador_id === 'number' &&
    'descripcion' in arg && typeof (arg as any).descripcion === 'string' &&
    'ritmo' in arg && ['Estándar', 'Rápido', 'Blitz'].includes((arg as any).ritmo) &&
    'sistema_emparejamiento' in arg && ['Suizo', 'Todos contra todos', 'Todos contra todos (ida y vuelta)'].includes((arg as any).sistema_emparejamiento) &&
    'criterio_desempate' in arg && ['Buchholz', 'Buchholz mediano', 'Buchholz -1', 'Sonneborn-Berger'].includes((arg as any).criterio_desempate) &&
    'intervalo_rondas' in arg && typeof (arg as any).intervalo_rondas === 'number' &&
    'horario_preferido' in arg && typeof (arg as any).horario_preferido === 'string' &&
    'minimo_jugadores' in arg && typeof (arg as any).minimo_jugadores === 'number' &&
    'maximo_jugadores' in arg && typeof (arg as any).maximo_jugadores === 'number' &&
    'minimo_elo' in arg && typeof (arg as any).minimo_elo === 'number' &&
    'maximo_elo' in arg && typeof (arg as any).maximo_elo === 'number' &&
    'estado' in arg && ['Pendiente', 'En curso', 'Finalizado', 'Cancelado'].includes((arg as any).estado)
  );
}

function toJSON(torneo: Torneo) {
  return {
    "torneo": {
      "id": torneo.id,
      "nombre": torneo.nombre,
      "organizador_id": torneo.organizador_id,
      "descripcion": torneo.descripcion,
      "ritmo": torneo.ritmo,
      "sistema_emparejamiento": torneo.sistema_emparejamiento,
      "criterio_desempate": torneo.criterio_desempate,
      "intervalo_rondas": torneo.intervalo_rondas,
      "horario_preferido": torneo.horario_preferido,
      "minimo_jugadores": torneo.minimo_jugadores,
      "maximo_jugadores": torneo.maximo_jugadores,
      "minimo_elo": torneo.minimo_elo,
      "maximo_elo": torneo.maximo_elo,
      "estado": torneo.estado
    }
  };
}

export default {
  new: new_,
  from,
  isTorneo,
  toJSON
} as const;
