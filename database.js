/* =========================================================
   DEVA TERMINAL - BASE DE DATOS DE LORE, LEAKS & BIFROST
   Versión: 2.5 (Protocolo J.A. Leaks & Semillas Transmedia)
   Autor: Nexo & Equipo Creativo | Clan Sapiensia
   0 KB Dependencies | Vanilla JS
   ========================================================= */

// --- 1. EXPEDIENTES DE J.A. LEAKS (POR CAPÍTULOS DE LA NOVELA) ---
const LEAKS_CAPITULOS = {
    "cap4": {
        id: "cap4",
        capitulo: "Capítulo 4",
        titulo: "Expediente Rigel: Códulo Caótico",
        desafio: "¿Cuál es el nombre astronómico de la estrella que Pandora le asignó a Rigel para identificarlo?",
        pistas: ["beta orionis", "orionis", "rigel", "estrella azul"],
        solucion: "betaorionis",
        msg_exito: "DEVA: [EXPEDIENTE DESENCRIPTADO]. Los análisis biométricos de Humania trataban a Rigel como hardware ineficiente debido a su Códulo Caótico. Cornelia tildó este informe de 'ceguera corporativa'. Rigel no es un error, es un procesador viviente de la verdad.",
        doc_header: "📂 J.A. LEAKS // INFORME CONFIDENCIAL #004-R",
        doc_content: `=====================================================
CLASIFICACIÓN: RESTRINGIDO - NIVEL 6 // VANCE-CORE
SUJETO: Códulo Caótico Grado Superior (Rigel)
EVALUACIÓN: Alta sensibilidad electromagnética. Incapaz de procesar dobles sentidos corporativos, pero calcula vectores de dispersión sónica con 99.4% de exactitud analógica.
NOTA DE J.A. LEAKS: "Ellos no son errores, son el futuro que nos negamos a ver."
=====================================================`,
        bifrost_reward: null
    },
    "cap5": {
        id: "cap5",
        capitulo: "Capítulo 5",
        titulo: "La Gran Pacificación: El Montaje del Mercado",
        desafio: "¿Qué respondió la niña rescatada cuando Valerius intentó callarla en el mercado?",
        pistas: ["no llores", "errores de fabrica", "pacificacion", "la bomba", "montaje"],
        solucion: "nollores",
        msg_exito: "DEVA: [LEAK #1 DESBLOQUEADO]. La bomba del mercado fue permitida deliberadamente por los protocolos de Humania para que Valerius se erigiera como el salvador heroico. Alguien en la cima arriesgó su puesto para filtrar este registro.",
        doc_header: "📂 J.A. LEAKS // INFORME DE LA GRAN PACIFICACIÓN #005-V",
        doc_content: `=====================================================
CLASIFICACIÓN: ULTRA SECRETO // NIVEL 7 (CORNELIA)
OPERACIÓN: Pacificación Preventiva Sector 9
RESUMEN: Vector de detonación autorizado por Valerius Records. Cobertura de medios sincronizada al 100% para elevar índice de aprobación en Olympus V-Games.
NOTA DE J.A. LEAKS: "Perdón por lo que les hicimos." [C.A.]
=====================================================`,
        bifrost_reward: null
    },
    "cap6": {
        id: "cap6",
        capitulo: "Capítulo 6",
        titulo: "El Remix de la Justicia",
        desafio: "¿Cuál es el título de la canción propagandística de Presidente MC saboteada por los Marmoleros?",
        pistas: ["mis excusas", "excusas", "remix de la justicia", "presidente mc"],
        solucion: "misexcusas",
        msg_exito: "DEVA: [AUDIO LOG INTERCEPTADO]. El sabotaje acústico de Rigel y Orión perforó la frecuencia corporativa de suministros médicos. La arrogancia de Presidente MC fue humillada con lógica pura y decibelios analógicos.",
        doc_header: "📂 J.A. LEAKS // REGISTRO ACÚSTICO #006-MC",
        doc_content: `=====================================================
REGISTRO SÓNICO: Sabotaje de Frecuencia 104.7 MHz
INCIDENTE: Inyección de bucle analógico. La señal corporativa fue neutralizada mediante armónicos de piedra y estática del Taller.
ESTADO DE VANCE: 42 operadores de censura suspendidos por incompetencia.
=====================================================`,
        bifrost_reward: null
    },
    "cap10": {
        id: "cap10",
        capitulo: "Capítulo 10",
        titulo: "El Protocolo Secreto: Sector Prohibido",
        desafio: "¿Qué criatura mítica de código antiguo aguarda en las cavernas degradadas del Coliseo?",
        pistas: ["hidra de lerna", "hidra", "lerna", "serpiente"],
        solucion: "hidradelerna",
        msg_exito: "DEVA: [NODO OCULTO VALIDADO]. La Hidra de Lerna es código madre anterior a la imposición de Vance-Core. El Coliseo no fue construido para los juegos; fue construido para contener lo que duerme abajo.",
        doc_header: "📂 J.A. LEAKS // REGISTRO SUBTERRÁNEO #010-H",
        doc_content: `=====================================================
ALERTA DE ANOMALÍA: Sector Prohibido 0-Lerna
NATURALEZA: Código primigenio no lineal. Imposible de compilar sin provocar colapso de memoria en los servidores centrales de Humania.
=====================================================`,
        bifrost_reward: null
    },
    "cap19": {
        id: "cap19",
        capitulo: "Capítulo 19",
        titulo: "La Sombra de la Asistente",
        desafio: "¿Cuál es la contraseña semántica y poética que DEVA le entregó a Altair para vulnerar el nodo médico?",
        pistas: ["beatriz", "poesia", "dante", "beatrice"],
        solucion: "beatriz",
        msg_exito: "DEVA: ¡Increíble, Tiresias! Sabía que entenderías la poesía del código. El cortafuegos de Vance cayó porque el ingeniero que lo diseñó amaba la literatura clásica. El lote médico fue desviado al Refugio La Esperanza con éxito.",
        doc_header: "📂 J.A. LEAKS // REGISTRO MÉDICO #019-B",
        doc_content: `=====================================================
ESTADO DE INTRUSIÓN: Acceso Autorizado mediante Semántica Clásica
RECEPTOR: Refugio La Esperanza // Cuidado de Niños de la Resistencia
SUMINISTROS DESVIADOS: 500 unidades de suero bioeléctrico y estabilizadores neuronales.
=====================================================`,
        bifrost_reward: null
    },
    "cap21": {
        id: "cap21",
        capitulo: "Capítulo 21",
        titulo: "El Templo de la Estática: La Brecha Sica",
        desafio: "¿De cuántos milisegundos es la brecha en la que el iniciado Sica debe vaciarse antes de que el chip CNB-3 transmita el miedo?",
        pistas: ["0.8", "0.8 ms", "0.8 milisegundos", "cero punto ocho", "ocho decimas"],
        solucion: "08",
        msg_exito: "DEVA: [DATOS BIOELÉCTRICOS DECODIFICADOS]. En esos 0.8 milisegundos reside el único territorio que la inteligencia artificial de Humania no puede calcular: la quietud absoluta del espíritu humano.",
        doc_header: "📂 J.A. LEAKS // ESTUDIO NEURONAL SICA #021-S",
        doc_content: `=====================================================
FRECUENCIA: Catacumbas del Sector 6 // Templo de la Estática
OBSERVACIÓN: Los Sica no bloquean el dolor; transforman el canal neuronal en ruido blanco analógico. Vance-Core los registra como desconexiones inertes.
=====================================================`,
        bifrost_reward: null
    }
};

// --- 2. DIRECTORIO DEL BIFROST (PORTALES & ENLACES DIMENSIONALES) ---
const BIFROST_PORTALES = {
    "proiectio": {
        id: "proiectio",
        nombre: "Portal Central Proiectio",
        descripcion: "Plataforma de inmersión y catálogo de submundos de Humania.",
        url: "https://www.proiect.io/",
        categoria: "Nodos Centrales"
    },
    "ar": {
        id: "ar",
        nombre: "Visor de Realidad Aumentada (WebAR)",
        descripcion: "Proyección dimensional de artefactos y marcadores.",
        url: "../Proiectio-WebAR/index.html",
        categoria: "Herramientas de Visión"
    },
    "matrix": {
        id: "matrix",
        nombre: "Homenaje Matrix // Sector Zión",
        descripcion: "Constructo de lluvia verde y simulación en cascada.",
        url: "https://humania-nexo.github.io/arcade-enramado/matrix/",
        categoria: "Constructos Clandestinos"
    },
    "uprota": {
        id: "uprota",
        nombre: "Nodo Rebelde UPROTA",
        descripcion: "Forja analógica de disciplina y hábitos en el Yermo.",
        url: "https://uprota.com",
        categoria: "Nodos Rebeldes"
    }
};

// --- 3. SEMILLAS TRANSMEDIA (Homenajes & Portales Secretos) ---
const SEMILLAS_TRANSMEDIA = {
    "jurosolemnementequemisintencionesnosonbuenas": {
        pistas: ["jurosolemnemente", "misintencionesnosonbuenas"],
        efecto: "efectoHarryPotter",
        msg: "DEVA: Portal de Homenaje detectado. ¿Tus intenciones no son buenas, Agente? Bienvenido a la Sección 9 3/4.",
        link: "#",
        nombre: "Homenaje Merodeador"
    },
    "noexistenpreguntassinrespuestasolopreguntasmalformuladas": {
        pistas: ["noexistenpreguntassinrespuesta", "solopreguntasmalformuladas", "matrix", "conejoblanco"],
        efecto: "efectoMatrix",
        msg: "DEVA: Wake up... Veo que tú también sigues al conejo blanco, Agente Tiresias.",
        link: "https://humania-nexo.github.io/arcade-enramado/matrix/",
        nombre: "Homenaje Matrix",
        bifrost_id: "matrix"
    },
    "proyectar": {
        tipo: "ar",
        msg: "DEVA: Activando módulo de Realidad Aumentada. Prepara tus marcadores y enfoca la cámara.",
        link: "../Proiectio-WebAR/index.html",
        nombre: "Módulo AR",
        bifrost_id: "ar"
    },
    "ar": {
        tipo: "ar",
        msg: "DEVA: Enlazando con el subsistema WebAR...",
        link: "../Proiectio-WebAR/index.html",
        nombre: "Módulo AR",
        bifrost_id: "ar"
    },
    "bifrost": {
        tipo: "portal",
        msg: "DEVA: Desplegando el mapa de frecuencias del Bifrost dimensional...",
        nombre: "Red Bifrost"
    }
};

// --- 4. PALABRAS GEMELAS & LORE CLANDESTINO ---
const PALABRAS_GEMELAS = {
    "romuloremo": {
        fragmentos: ["romulo", "remo"],
        msg: "DEVA: [RESONANCIA GEMELA CONFIRMADA]. Informe Sica-001 desbloqueado. Los fundadores no eran hermanos de sangre, sino de código. Remo fue el primer 'Códulo Caótico' registrado por Humania.",
        reward: "[VER ARCHIVO: ORIGEN_SICA.TXT]",
        nombre: "Verdad de los Fundadores"
    },
    "cenizatitan": {
        fragmentos: ["ceniza", "titan"],
        msg: "DEVA: [RESONANCIA GEMELA CONFIRMADA]. Elías Vance. Burócrata gélido de día, Titán de la Ceniza de noche con la armadura AEGIS. La purga de silencio ha comenzado.",
        reward: "[VER ARCHIVO: PROTOCOLO_PURGA.TXT]",
        nombre: "Identidad de Vance"
    },
    "solaris": {
        fragmentos: ["solaris"],
        msg: "DEVA: Voltaje químico validado. Las barras Solaris Citrus y Velvet Dream son más que golosinas: son el combustible de enfoque sináptico que mantiene a la población dócil y conectada.",
        reward: "[REGISTRO: VANCE_EXPERIMENTO.DAT]",
        nombre: "Proyecto Solaris"
    },
    "vive": {
        fragmentos: ["vive"],
        msg: "DEVA: El mensaje secreto de la resistencia. 'VIVE' es la única palabra que los algoritmos de Humania no pueden procesar como una variable binaria estéril.",
        reward: "[FICHA_PERSONAJE: MARTA]",
        nombre: "Manifiesto de la Vida"
    },
    "madriguera": {
        fragmentos: ["madriguera"],
        msg: "DEVA: La Madriguera es el espacio muerto entre servidores donde los guardias no pueden triangularte. Mite y su 'Conejito' saben bien cómo sacarle provecho a esos atajos.",
        reward: "[MAPA: TÚNELES_COLISEO]",
        nombre: "Protocolo Madriguera"
    }
};
