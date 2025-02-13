const parametrosNoValidos: string = "Parámetros no válidos";

export interface Noticia {
  id: number,
  titulo: string,
  imagen: string,
  copete: string,
  autor: string,
  fecha: Date,
  cuerpo: string,  
  importancia: 1 | 2 | 3 | 4 | 5  
}

function new_(
  id?: number,
  titulo?: string,
  imagen?: string,
  copete?: string,
  autor?: string,
  fecha?: Date,
  cuerpo?: string, // Parámetro de cuerpo como string
  importancia?: 1 | 2 | 3 | 4 | 5  // Parámetro de importancia
): Noticia {
  return {
    id: (id ?? -1),
    titulo: (titulo ?? ''),
    imagen: (imagen ?? ''),
    copete: (copete ?? ''),
    autor: (autor ?? ''),
    fecha: (fecha ?? new Date()),
    cuerpo: (cuerpo ?? ''),  // Valor por defecto del cuerpo es un string vacío
    importancia: (importancia ?? 3),  // Valor por defecto de importancia es 3
  }
}

function from(param: object): Noticia {
  if (!isNoticia(param)) {
    throw new Error(parametrosNoValidos);
  }
  const p = param as Noticia;
  return new_(p.id, p.titulo, p.imagen, p.copete, p.autor, p.fecha, p.cuerpo, p.importancia);
}

function isNoticia(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' &&
    'titulo' in arg && typeof arg.titulo === 'string' &&
    'imagen' in arg && typeof arg.imagen === 'string' &&
    'copete' in arg && typeof arg.copete === 'string' &&
    'autor' in arg && typeof arg.autor === 'string' &&
    'fecha' in arg && arg.fecha instanceof Date &&
    'cuerpo' in arg && typeof (arg as { cuerpo: unknown }).cuerpo === 'string' &&
    'importancia' in arg && typeof (arg as { importancia: number }).importancia === 'number' &&
    [1, 2, 3, 4, 5].includes((arg as { importancia: number }).importancia) // Verifica que la importancia esté entre 1 y 5
  );
}

function toJSON(noticia: Noticia) {
  return {
    "noticia": {
      "id": noticia.id,
      "titulo": noticia.titulo,
      "imagen": noticia.imagen,
      "copete": noticia.copete,
      "autor": noticia.autor,
      "fecha": noticia.fecha,
      "cuerpo": noticia.cuerpo,  // Cuerpo como string
      "importancia": noticia.importancia
    }
  }
}

export default {
  new: new_,
  from,
  isNoticia,
  toJSON
} as const;
