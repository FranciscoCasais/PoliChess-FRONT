import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import noticiaModel, { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  /* private apiURL: string = "http://localhost:3000/noticias";

  constructor(private http: HttpClient) { }

  public obtenerNoticias() {
    return this.http.get(this.apiURL);
  }

  public agregarNoticia(noticia: Noticia) {
    return this.http.post(this.apiURL, noticiaModel.toJSON(noticia));
  }

  public modificarNoticia(noticia: Noticia) {
    return this.http.put(this.apiURL, noticiaModel.toJSON(noticia));
  }

  public eliminarNoticia(id: number) {
    return this.http.delete(`${ this.apiURL }/${ id }`);
  } */
  public obtenerNoticiaPorId(id: number): Noticia | undefined {
    const noticias = this.obtenerNoticias(); // Supongamos que ya tienes este método que devuelve todos los jugadores
    return noticias.find(noticia => noticia.id === id);
  }
    public obtenerNoticias(): Noticia[] {
      return [
        {
          id: 0,
          titulo: "Campeonato Mundial: Daniel India vence a Daniel China en un duelo épico",
          imagen: "indiavschina.jpeg",
          copete: "Un enfrentamiento histórico entre dos de los mejores jugadores del mundo dejó boquiabiertos a los espectadores.",
          autor: "Francisco Casais",
          fecha: new Date("2024-10-25"),
          cuerpo: "El Campeonato Mundial de Ajedrez vivió uno de los momentos más emocionantes en su historia cuando Daniel India se enfrentó a Daniel China en una partida final épica. Con estrategias que mantuvieron a los comentaristas al borde de sus asientos, Daniel India logró imponerse tras 97 movimientos. \n\nLa partida comenzó con una Defensa Siciliana por parte de Daniel China, quien mostró una preparación impresionante en la apertura. Sin embargo, Daniel India sorprendió con una maniobra táctica en el medio juego que desestabilizó al oponente. 'Sabía que sería difícil, pero confié en mi intuición', comentó el campeón. La victoria consolida a Daniel India como una de las mayores figuras del ajedrez contemporáneo.",
          importancia: 5
        },
        {
          id: 1,
          titulo: "¿Cómo saber si juego mejor que Daniel? La guía definitiva",
          imagen: "danielfantasma.jpg",
          copete: "Expertos desglosan las claves para identificar si puedes superar a Daniel en el tablero.",
          autor: "Carlos Mostacho",
          fecha: new Date("2024-10-30"),
          cuerpo: "Muchos jugadores de ajedrez se han preguntado alguna vez: ¿qué tan cerca estoy del nivel de Daniel? Esta guía, basada en el análisis de grandes maestros y psicólogos deportivos, te ayudará a responder esa pregunta. \n\nPrimero, evalúa tu nivel táctico: Daniel es conocido por detectar combinaciones brillantes en posiciones complejas. ¿Eres capaz de encontrar recursos similares en tus partidas? Segundo, analiza tu preparación en aperturas. Daniel dedica horas a estudiar las últimas innovaciones teóricas; si puedes anticiparte a las líneas que él utiliza, estás en buen camino. Por último, no olvides la fortaleza mental: Daniel ha demostrado una resiliencia increíble en momentos críticos, un aspecto clave que muchos jugadores pasan por alto.",
          importancia: 4
        },
        {
          id: 2,
          titulo: "Daniel India publica su libro: 'El Arte de la Precisión en el Ajedrez'",
          imagen: "danielTortuga.jpg",
          copete: "Un análisis profundo de las partidas que lo llevaron al éxito.",
          autor: "Ana Playosa",
          fecha: new Date("2024-11-02"),
          cuerpo: "El Gran Maestro Daniel India ha lanzado su esperado libro 'El Arte de la Precisión en el Ajedrez', un compendio de sus mejores partidas y análisis detallados de sus decisiones estratégicas. El libro se divide en capítulos que exploran las diferentes fases del juego, desde aperturas innovadoras hasta finales precisos. \n\nEn una entrevista reciente, Daniel comentó: 'Este libro no es solo para jugadores avanzados, también quiero inspirar a los principiantes a entender la belleza del ajedrez'. Las primeras críticas han sido muy positivas, destacando la claridad con la que Daniel explica conceptos complejos. Sin duda, una lectura obligatoria para los amantes del ajedrez.",
          importancia: 3
        },
        {
          id: 3,
          titulo: "Daniel China sorprende con una nueva apertura: 'La Defensa de Jade'",
          imagen: "danielriestra.jpg",
          copete: "Una línea revolucionaria promete cambiar el panorama competitivo.",
          autor: "Pedro Queso",
          fecha: new Date("2024-11-05"),
          cuerpo: "En un reciente torneo internacional, Daniel China presentó una apertura completamente nueva, a la que él mismo ha bautizado como 'La Defensa de Jade'. Esta línea, que combina elementos de la Defensa Francesa y el Sistema Londres, ha causado revuelo entre los analistas. \n\nDurante la partida inaugural, Daniel utilizó esta apertura para neutralizar rápidamente el ataque de un oponente fuerte, logrando una victoria aplastante en solo 25 movimientos. Los grandes maestros ya están estudiando esta defensa, mientras que las plataformas de ajedrez online reportan un aumento en su popularidad. 'Es solo el comienzo de algo grande', declaró Daniel.",
          importancia: 4
        },
        {
          id: 4,
          titulo: "Daniel y la Inteligencia Artificial: el futuro del entrenamiento ajedrecístico",
          imagen: "danielfantasma.jpg",
          copete: "Una colaboración entre el genio humano y la máquina.",
          autor: "Marta Peluquería",
          fecha: new Date("2024-11-10"),
          cuerpo: "Daniel India ha dado un paso adelante en el entrenamiento ajedrecístico al colaborar con desarrolladores de inteligencia artificial para crear un software revolucionario. Este programa, denominado 'MindChess', no solo analiza partidas, sino que también sugiere planes estratégicos basados en el estilo del usuario. \n\n'La clave del éxito en el ajedrez moderno es adaptarse a los avances tecnológicos', afirmó Daniel en una conferencia de prensa. 'Con MindChess, cualquier jugador puede acceder a un entrenador de élite'. Los primeros resultados han sido prometedores, con usuarios reportando mejoras significativas en sus habilidades.",
          importancia: 5
        },
        {
              id: 5,
              titulo: "Peluquería de Daniel Lengua dona parte de sus ganancias",
              imagen: "danielNievas.jpg",
              copete: "El dinero será destinado a víctimas del 'trauma del queso' en Megatone.",
              autor: "Lucía Queso",
              fecha: new Date("2024-11-15"),
              cuerpo: "Daniel Lengua continúa mostrando su lado solidario al donar parte de las ganancias de su peluquería a una causa noble. La iniciativa busca apoyar a las víctimas del llamado 'trauma del queso', un fenómeno psicológico que ha afectado a varios habitantes de Megatone. 'Es nuestra responsabilidad retribuir a la comunidad', comentó Daniel. La peluquería también ofrece descuentos especiales para quienes deseen contribuir directamente a la causa.",
              importancia: 3
            },
            {
              id: 6,
              titulo: "El arquitecto Daniel y su bigote más famoso de Playosa",
              imagen: "caballopolichess.png",
              copete: "Conocido como 'Mostacho de Oro', Daniel inspira a nuevas generaciones.",
              autor: "Sofía Sapo",
              fecha: new Date("2024-11-20"),
              cuerpo: "El arquitecto Daniel, conocido localmente como el 'Mostacho de Oro', ha capturado la imaginación de Playosa con su carismático bigote y su legado arquitectónico. Su estilo único ha inspirado a jóvenes estudiantes de arquitectura, quienes ven en él un modelo de creatividad y perseverancia. En una reciente charla, Daniel expresó: 'Un bigote puede ser tan icónico como un edificio bien diseñado'.",
              importancia: 2
            },
            {
              id: 7,
              titulo: "Lengua de Daniel: obra arquitectónica que desafía lo tradicional",
              imagen: "eloBlitz.png",
              copete: "Una estructura en forma de lengua gigante se inaugura en el centro de Playosa.",
              autor: "Pablo Megatone",
              fecha: new Date("2024-11-25"),
              cuerpo: "La 'Lengua de Daniel', una estructura arquitectónica en forma de lengua gigante, fue inaugurada en el centro de Playosa, causando asombro y admiración. Diseñada para simbolizar la conexión entre la comunicación y la creatividad, la obra combina materiales innovadores con técnicas tradicionales. 'Quise crear algo que hablara por sí mismo', explicó Daniel durante la ceremonia de inauguración, que atrajo a miles de visitantes.",
              importancia: 4
            },
            {
              id: 8,
              titulo: "Daniel y el campeonato mundial de sapos",
              imagen: "EloRapido.png",
              copete: "El 'Rey de los Sapos' lleva a su equipo a la gloria internacional.",
              autor: "Marcos Peluquería",
              fecha: new Date("2024-12-01"),
              cuerpo: "El campeonato mundial de sapos vivió un momento histórico con la victoria del equipo liderado por Daniel Lengua, apodado el 'Rey de los Sapos'. Con una precisión casi matemática, Daniel lideró a su equipo hacia la victoria en la final, superando a oponentes de todo el mundo. 'Este logro es el resultado de años de práctica y pasión', declaró emocionado tras recibir el trofeo.",
              importancia: 1
            },
            {
              id: 9,
              titulo: "Daniel Megatone crea el primer museo del queso",
              imagen: "danielNievas.jpg",
              copete: "Una obra maestra dedicada al queso y la arquitectura.",
              autor: "Raúl Mostacho",
              fecha: new Date("2024-12-05"),
              cuerpo: "El primer museo del queso, diseñado por Daniel Megatone, abrió sus puertas en Playosa. La obra combina elementos arquitectónicos vanguardistas con una exhibición interactiva que explora la historia y la cultura del queso. 'Quería crear un espacio donde el queso fuera el protagonista, tanto en sabor como en diseño', explicó Daniel. El museo ya se perfila como una de las atracciones más populares de la región.",
              importancia: 3
            },
            {
              id: 10,
              titulo: "El trauma de Daniel: pierde su bigote en un partido de sapos",
              imagen: "danielfantasma.jpg",
              copete: "Durante un juego de campeonato, Daniel sufrió el peor día de su vida.",
              autor: "Francisco Playosa",
              fecha: new Date("2024-12-10"),
              cuerpo: "Un inesperado accidente durante la final del campeonato de sapos dejó a Daniel sin su icónico bigote, lo que muchos describen como 'el peor día de su vida'. Según testigos, un mal movimiento lo llevó a acercarse demasiado a una llama de celebración, quemando parte de su bigote. 'Es solo pelo, pero duele', bromeó Daniel, aunque su expresión reflejaba tristeza.",
              importancia: 2
            },
            {
              id: 11,
              titulo: "Daniel Lengua arrasa en el torneo de arquitectura con queso",
              imagen: "danielfantasma.jpg",
              copete: "Una propuesta innovadora fusiona queso y diseño arquitectónico.",
              autor: "Clara Megatone",
              fecha: new Date("2024-12-15"),
              cuerpo: "Daniel Lengua impresionó a los jueces en el torneo de arquitectura con queso al presentar una estructura comestible que combinaba diseño moderno con funcionalidad culinaria. Su obra, una torre de queso fundido reforzada con pan crujiente, fue descrita como 'una maravilla efímera'. 'Quise demostrar que la arquitectura puede ser saboreada, no solo admirada', dijo Daniel al recibir el premio principal.",
              importancia: 5
            },
            {
              id: 12,
              titulo: "El sapo gigante de Daniel Lengua sorprende a Playosa",
              imagen: "danielfantasma.jpg",
              copete: "Una escultura gigante celebra la victoria en el mundial de sapos.",
              autor: "Julia Queso",
              fecha: new Date("2024-12-20"),
              cuerpo: "La escultura del sapo gigante, creada por Daniel Lengua, se erige como un homenaje a la victoria en el campeonato mundial de sapos. Ubicada en el centro de Playosa, la obra ha atraído a turistas y locales por igual. 'Quise capturar la esencia de nuestro triunfo en una forma tangible', comentó Daniel. La escultura también cuenta con una placa conmemorativa dedicada a los miembros del equipo campeón.",
              importancia: 4
            },
          
        
        
        {
          id: 13,
          titulo: "Peluquería Mostacho de Daniel revoluciona Megatone",
          imagen: "danielfantasma.jpg",
          copete: "La nueva tendencia: cortes inspirados en bigotes históricos.",
          autor: "Lucas Arquitectura",
          fecha: new Date("2024-12-23"),
          cuerpo: "La peluquería de Daniel Lengua en Megatone impone una nueva moda: cortes de cabello basados en bigotes históricos, atrayendo la atención de locales y visitantes.",
          importancia: 3
        },
        {
          id: 14,
          titulo: "Daniel Lengua lanza el queso 'Sapo Megatone'",
          imagen: "danielriestra.jpg",
          copete: "Un homenaje a sus dos pasiones: el queso y los sapos.",
          autor: "Federico Trauma",
          fecha: new Date("2024-12-27"),
          cuerpo: "El nuevo queso 'Sapo Megatone' combina texturas suaves con un sabor intenso, rindiendo homenaje a las dos grandes pasiones de Daniel Lengua.",
          importancia: 2
        },
        {
          id: 15,
          titulo: "El trauma de Daniel: perdió su mostacho en Playosa",
          imagen: "danielPlayosa.jpg",
          copete: "Una pérdida que conmocionó a todo el pueblo.",
          autor: "Ana Lengua",
          fecha: new Date("2024-12-30"),
          cuerpo: "Durante un evento en Playosa, Daniel sufrió la pérdida de su famoso mostacho, generando conmoción entre sus seguidores y el pueblo entero.",
          importancia: 1
        },
        {
          id: 16,
          titulo: "Daniel abre la primera escuela de arquitectura con queso",
          imagen: "danielnaroditsky.jpg",
          copete: "El curso estrella: diseñar edificios comestibles.",
          autor: "Oscar Sapo",
          fecha: new Date("2025-01-05"),
          cuerpo: "La escuela de arquitectura de Daniel Lengua ofrece un curso único donde los estudiantes aprenden a diseñar y construir edificios utilizando queso como material.",
          importancia: 5
        },
        {
          id: 17,
          titulo: "Continúa la busqueda del drogon.",
          imagen: "patillas.jpg",
          copete: "Se cree que abandonó su hogar para no tener que laburar en Polichess",
          autor: "Mateo Megatone",
          fecha: new Date("2025-01-10"),
          cuerpo: "Tras un difícil período marcado por traumas personales, Daniel Lengua logró resurgir y alcanzar reconocimiento internacional en diversas disciplinas.",
          importancia: 3
        },
        {
          id: 18,
          titulo: "Preocupación total por Francisco",
          imagen: "franciscoCasais.jpg",
          copete: "El adolescente de 19 años no contesta los mensajes hace días. Algunos creen que la Andreachización ha finalizado y que ahora su alergia al laburo es TOTAL",
          autor: "Bruno Peluquería",
          fecha: new Date("2025-01-15"),
          cuerpo: "En el reciente mundial de sapos, Daniel Lengua volvió a consagrarse campeón con la ayuda de su bigote emblemático y el apoyo del queso local.",
          importancia: 4
        },
        {
          id: 19,
          titulo: "FUMADOR DESAPARECIDO -- DE SER VISTO LLAMAR AL 1141724132",
          imagen: "patillasv2.jpg",
          copete: "Pocos semanas atras Francisco Javier Casais ha sido visto por última vez saliendo de Caix, uno de los boliches más problematicos de la Ciudad de Buenos Aires. Su familia está desesperada. Él, desaparecido.",
          autor: "Victoria Trauma",
          fecha: new Date("2025-01-20"),
          cuerpo: "La obra 'El bigote arquitectónico', creada por Daniel Lengua, combina elementos como sapos y queso en una estructura única ubicada en Playosa.",
          importancia: 5
        }
      ];
    }
    
}
