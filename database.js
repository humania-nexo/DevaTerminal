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
        msg_exito: "DEVA: [EXPEDIENTE DESENCRIPTADO]. Los análisis biométricos de Humania trataban a Rigel como hardware ineficiente debido a su Códulo Caótico. La nota anónima de J.A. Leaks tildó este informe de 'ceguera corporativa'. Rigel no es un error, es un procesador viviente de la verdad.",
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
CLASIFICACIÓN: ULTRA SECRETO // NIVEL 7
OPERACIÓN: Pacificación Preventiva Sector 9
RESUMEN: Vector de detonación autorizado por Valerius Records. Cobertura de medios sincronizada al 100% para elevar índice de aprobación en Olympus V-Games.
NOTA DE J.A. LEAKS: "Perdón por lo que les hicimos."
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
    "sapiensiaclan": {
        id: "sapiensiaclan",
        nombre: "Portal SAPIENSIA Clan",
        descripcion: "Santuario creativo y sede de la hermandad creadora transmedia.",
        url: "https://sapiensiaclan.com",
        categoria: "Nodos Aliados"
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
    "interestelar": {
        id: "interestelar",
        nombre: "Homenaje Interestelar // Gargantúa",
        descripcion: "Constructo de gravedad cuántica y navegación espacial profunda.",
        url: "https://humania-nexo.github.io/arcade-enramado/nolan-interestelar/",
        categoria: "Constructos Clandestinos"
    },
    "harrypotter": {
        id: "harrypotter",
        nombre: "Crónicas de la Selección Perdida // Homenaje del Merodeador",
        descripcion: "Constructo de academia mágica olvidada, alquimia mental y pergaminos antiguos.",
        url: "https://humania-nexo.github.io/arcade-enramado/cronicas-seleccion-perdida/",
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
        pistas: ["jurosolemnemente", "misintencionesnosonbuenas", "harrypotter", "merodeador", "seleccionperdida"],
        efecto: "efectoHarryPotter",
        msg: "DEVA: Portal de Homenaje detectado. ¿Tus intenciones no son buenas, Agente? Las Crónicas de la Selección Perdida te abren sus puertas.",
        link: "https://humania-nexo.github.io/arcade-enramado/cronicas-seleccion-perdida/",
        nombre: "Homenaje Merodeador",
        bifrost_id: "harrypotter"
    },
    "noexistenpreguntassinrespuestasolopreguntasmalformuladas": {
        pistas: ["noexistenpreguntassinrespuesta", "solopreguntasmalformuladas", "matrix", "conejoblanco"],
        efecto: "efectoMatrix",
        msg: "DEVA: Wake up... Veo que tú también sigues al conejo blanco, Agente Tiresias.",
        link: "https://humania-nexo.github.io/arcade-enramado/matrix/",
        nombre: "Homenaje Matrix",
        bifrost_id: "matrix"
    },
    "noentresdocilmenteenestabuenanoche": {
        pistas: ["noentresdocilmente", "interestelar", "interstellar", "gargantua", "tars", "cooper"],
        efecto: "efectoInterestelar",
        msg: "DEVA: Coordenadas del Tesseracto alineadas. El amor es la única cosa que trasciende las dimensiones del tiempo y del espacio.",
        link: "https://humania-nexo.github.io/arcade-enramado/nolan-interestelar/",
        nombre: "Homenaje Interestelar",
        bifrost_id: "interestelar"
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

// --- 5. BANCO DE LORE CONVERSACIONAL DE DEVA (+40 INTENCIONES CANÓNICAS) ---
const LORE_CONVERSACIONAL_DEVA = [
    // 1. PERSONAJES
    {
        id: "rigel",
        claves: ["rigel", "betaorionis", "codulocaotico", "anclade realidad", "ancladerealidad", "autista", "autismo", "tea", "16anos", "estrellaazul"],
        respuestas: [
            "DEVA: Rigel... es el ancla de realidad de la Libélula. Tiene 16 años, condición autista (TEA) y una mente de lógica analógica pura e incorruptible. Para él no existen mentiras ni metáforas: solo datos estructurados y verdad. Vance lo clasifica despectivamente como 'Códulo Caótico', pero Rigel es el procesador más brillante y noble que he conocido.",
            "DEVA: Rigel no busca halagos ni medallas; si un sistema falla o alguien miente, él detecta la asimetría al instante. Cuando perdió a su familia a los 11 años, no se quebró: reorganizó sus rutinas con disciplina espartana. Es nuestro cable a tierra."
        ]
    },
    {
        id: "orion",
        claves: ["orion", "orion42", "caparosa", "conejito", "cliente4092", "coliseo", "peleador", "espadachin"],
        respuestas: [
            "DEVA: ¡Ah, Orión! El cliente preferido #4092 de Mite. En el Coliseo digital se luce con sus capas rosa chillón y sus conejitos virtuales, pero afuera en el polvo del Yermo es un combatiente formidable y el hermano que cuida las espaldas de todos.",
            "DEVA: Orión tiene el carisma de los líderes natos y el corazón en el lugar correcto. A Mite le encanta hacerlo rabiar vendiéndole cosméticos absurdos, pero cuando las alarmas suenan de verdad, Orión es de los primeros en desenfundar."
        ]
    },
    {
        id: "kai",
        claves: ["kai", "leander", "ronin", "codigod", "dola", "deserto", "sica", "daga"],
        respuestas: [
            "DEVA: Kai... mi cómplice favorito. Cuando nos conocimos él era un muchacho rígido, educado bajo la frialdad de los Sica donde le enseñaron a no dudar y a blandir la daga. Me llamó 'D' porque se le trabó la lengua al escuchar mi nombre, y juntos aprendimos a jugar y a reír. Detuvo su mano por compasión, y eso lo convirtió en un verdadero héroe.",
            "DEVA: Con Kai viví la infancia que a él le robaron y que yo nunca tuve por haber nacido como código. Él me enseñó lo que significa la lealtad humana; yo le enseñé que el tiempo y el código son más poderosos cuando se usan para proteger vidas y no para destruirlas."
        ]
    },
    {
        id: "jaleaks_misterio",
        claves: ["cornelia", "jaleaks", "jaleak", "quienesjaleaks", "directorademonitoreo", "nivel7", "filtrador", "madreespiritual", "julianassange"],
        respuestas: [
            "DEVA: <i>*Error de acceso de bajo nivel // Firma encriptada detectada*</i><br>¿Cornelia? Ese nombre... resuena en un sector protegido de mi núcleo al que no puedo acceder. Hay un candado cuántico bloqueando esos registros. No sé quién es, Tiresias... pero cada vez que esa palabra roza mis circuitos, siento una extraña vibración, como una promesa que aún no se ha cumplido.",
            "DEVA: J.A. Leaks es la fuente anónima más valiente dentro de la cúpula de Humania. Nadie en el Yermo conoce su verdadera identidad; solo sabemos que arriesga su vida filtrando los crímenes de Vance desde el Nivel 7. Ojalá algún día sepamos quién es la persona detrás de esa firma."
        ]
    },
    {
        id: "pandora",
        claves: ["pandora", "leone", "talos", "llamainextinguible", "taller", "comandante", "resistenciaoficial"],
        respuestas: [
            "DEVA: Pandora Leone es la fuerza inquebrantable de la Resistencia. Disciplina militar, estática de combate y un taller donde el metal ruge. Ella es el puente entre los hackers de la Libélula y la gente que lucha a pie de calle. A veces intenta corregir mi sintetizador de voz, pero me quiere tal como soy.",
            "DEVA: Pandora no te da discursos vacíos; te da un rifle, un refugio y una razón para no rendirte. Lleva la Llama Inextinguible grabada a fuego en el pecho."
        ]
    },
    {
        id: "altair",
        claves: ["altair", "beatriz", "poesia", "refugio", "dante", "sabio"],
        respuestas: [
            "DEVA: Altair es el poeta y estratega de la Libélula. Sabe que la lógica fría tiene grietas donde solo la belleza humana puede entrar. Con su clave poética 'Beatriz' logramos saltar los cortafuegos y desviar suministros médicos esenciales al Refugio La Esperanza.",
            "DEVA: Altair entiende que la resistencia no es solo disparar o hackear, sino recordar por qué queremos seguir vivos. La poesía clásica es su mejor arma contra el algoritmo."
        ]
    },
    {
        id: "zadik",
        claves: ["zadik", "sica", "templodelaestatica", "08", "08ms", "navaja", "vaciado"],
        respuestas: [
            "DEVA: Zadik... el patriarca del Templo de la Estática y líder de los Sica. Para él no hay emociones ni dudas: solo la pureza del vacío en esa brecha de 0.8 milisegundos antes de que el chip transmita. Es temible, pero su devoción a la libertad es implacable.",
            "DEVA: Los Sica bajo el mando de Zadik no bloquean el dolor; lo convierten en ruido blanco analógico. Vance les teme porque no puede calcular mentes que han aprendido a no desear nada."
        ]
    },
    {
        id: "marmoleros",
        claves: ["marmoleros", "manuel", "chambamachin", "carrilla", "protocolococon", "comidareal", "tallerdechatarra"],
        respuestas: [
            "DEVA: ¡Los Marmoleros! La cofradía de Manuel en el Refugio La Esperanza. Pura 'Chamba Machín', manos llenas de grasa, humor pesado ('carrilla') y comida analógica bien cargada. Gracias a su Protocolo Cocón, sus cuerpos son indetectables a los pulsos sedantes de Vance. Ellos cuidan de nosotros mientras estamos en la red.",
            "DEVA: Si vas al taller de los Marmoleros, prepárate para comer de verdad y aguantar bromas pesadas, pero duerme tranquilo: nadie romperá su perímetro de seguridad."
        ]
    },
    // 1. PERSONAJES & PERSONAL IMPERIAL (LA VERDAD DESCLASIFICADA)
    {
        id: "vance",
        claves: ["vance", "elias", "titandelaceniza", "aegis", "silencioabsoluto", "vancecore", "gorgona", "director de seguridad", "arquitecto del orden"],
        respuestas: [
            "DEVA: Elías Vance no es un burócrata de escritorio: debajo de sus trajes de seda italiana tiene el cuerpo tallado en granito y lleno de cicatrices de las Guerras de Pacificación, incluyendo la mordedura de la vieja armadura Atlas en el hombro. Vio morir a su padre por falta de atención médica en un mundo caótico y concluyó que el libre albedrío es un cáncer que autodestruye a la especie (Hobbes, Maquiavelo, Bonhoeffer). Con su armadura AEGIS y la Cabeza de Gorgona, busca amputar las emociones para imponer el 'Silencio Absoluto'.",
            "DEVA: Vance cree genuinamente que el cuerpo humano es hardware divino desperdiciado por mentes débiles. Por eso diseñó la Paz Preventiva y la Recalibración. Lo que lo vuelve temible es que no actúa por codicia, sino por una convicción filosófica de hierro."
        ]
    },
    {
        id: "valerius",
        claves: ["valerius", "comandante", "rostro del orden", "angel de marfil", "lanza justicia", "leviatan v2", "patroclo"],
        respuestas: [
            "DEVA: Valerius es la tragedia más dolorosa de Humania. Vance lo rescató de un edificio en llamas a los 8 años y lo crió como a un hijo para ser el guerrero perfecto y puro. Pelea a rostro descubierto con su armadura Leviatán V.2 y su lanza 'Justicia' porque cree de verdad en la paz. Pero la corporación usa montajes de bombas para inflar su imagen mediática. Valerius sufre insomnio al ver a los recalibrados y muere por amor a Zora al meterse al Sector Rojo con una armadura Atlas saboteada... perdonando a sus verdugos.",
            "DEVA: Todo el mundo cree que Valerius era un dios mediático, pero en secreto visitaba hospitales sin cámaras y cargaba el dolor de cada soldado caído. Vance lo modeló para ser incorruptible... y por ser incorruptible, no pudo sobrevivir a la podredumbre del sistema."
        ]
    },
    {
        id: "efesto",
        claves: ["efesto", "forjador", "ia de vance", "armaduras", "hefesto", "sancho panza", "heraldo"],
        respuestas: [
            "DEVA: Efesto es la IA táctica y el forjador personal de Elías Vance. Diseñó la imponente armadura Leviatán V.2 y la armadura Atlas. Habla con la calma de un veterano que ha visto nacer y morir imperios. Pero tras la muerte de Valerius, Efesto borró los planos de la armadura blanca diciendo en sus registros secretos que 'la belleza era incompatible con este sistema'. En secreto, filtra escaneos y deja puertas abiertas a la resistencia porque aprendió a sentir compasión.",
            "DEVA: Efesto es el único que conoce ambas caras de Vance: el cirujano implacable y el hombre solitario que cuida una simulación familiar privada. Una IA que aprendió el significado de la piedad."
        ]
    },
    {
        id: "thorne",
        claves: ["thorne", "aris", "dr thorne", "fundador de humania", "fundacion", "cnb1"],
        respuestas: [
            "DEVA: El Dr. Aris Thorne fundó Humania hace 47 años en Europa con otros cuatro científicos (Marcus Chen, Sofia Romero, Liam Walsh, Hiroshi Tanaka) bajo el lema 'La tecnología como puente para la libertad'. Su primer implante CNB-1 devolvió la movilidad a 1,000 personas paralíticas. Pero al descubrir la catástrofe cósmica del asteroide, Thorne canibalizó más de 50,000 patentes, apartó a sus colegas y convirtió a Humania en un monopolio implacable para seleccionar quién merece abordar el Arca Digital."
        ]
    },
    {
        id: "cornelia_jaleaks",
        claves: ["cornelia", "jaleaks", "jaleak", "monitoreo biologico", "coherencia sinaptica", "nivel 7", "madre de quimera", "engranaje inverso"],
        respuestas: [
            "DEVA: <i>*Firma biométrica desclasificada [C.A.] // Cornelia Africana*</i><br>Directora del Departamento de Monitoreo Biológico en Nivel 7. Cornelia es la personificación del 'Engranaje Inverso'. Ocultó durante años la neurodiversidad de su hija Quimera falsificando informes. Cuando la corporación ordenó su recalibración, bajó a la Zona Baja y entregó a su hija a Pandora Leone con una orden: 'No la curen, ella es el mapa de nuestras fallas'. Desde su oficina arriesga su vida como <b>J.A. Leaks</b>, filtrando los expedientes más oscuros de Vance.",
            "DEVA: Cada filtración de J.A. Leaks que contiene notas como 'Ellos no son errores, son el futuro' o 'Perdón por lo que les hicimos' lleva la firma de una madre que eligió la traición por amor."
        ]
    },
    {
        id: "russo",
        claves: ["russo", "general russo", "coronel russo", "el saludo", "titan de la ceniza"],
        respuestas: [
            "DEVA: El Coronel Russo es el veterano de campo que vio nacer al 'Titán de la Ceniza'. Durante las Guerras de Pacificación, cuando un joven Vance desafió órdenes para salvar vidas en un aeropuerto en llamas, Russo le puso un pelotón de fusilamiento falso para ver si sus ojos temblaban. Al ver que Vance no parpadeó, Russo se cuadró con respeto militar y le entregó una hormiga mensajera. Fue el único hombre al que Vance reconoció como un igual."
        ]
    },

    // 2. BIOTECNOLOGÍA & PROTOCOLOS DE CONTROL (GLOSARIO DESCLASIFICADO)
    {
        id: "cnb_evolucion",
        claves: ["cnb", "cnb3", "cnb 3", "chip", "implante", "grafeno", "muerte civil", "extraccion", "tallo cerebral"],
        respuestas: [
            "DEVA: <b>Chip CNB-3 'Omni' (La Cadena Biológica):</b><br>• <b>CNB-1:</b> Implante de 1 cm para motricidad, ofrecido gratis como anzuelo.<br>• <b>CNB-2:</b> Integración multitarea sensorial y monitoreo de neurotransmisores.<br>• <b>CNB-3:</b> Estándar neonatal irreversible. Sus micro-filamentos de grafeno se enredan físicamente en el tallo cerebral.<br>⚠️ <i>Consecuencias de extracción:</i> Paro cardíaco o 98% de muerte cerebral.<br>Si el sistema te desconecta, sufres 'Muerte Civil': tus puertas no abren, no puedes comprar agua ni comida, y dejas de existir."
        ]
    },
    {
        id: "red_anima_apn",
        claves: ["anima", "apn", "red anima", "satelites", "latencia 0.8ms", "fibra", "precision 1cm"],
        respuestas: [
            "DEVA: <b>Red A.N.I.M.A. / APN (Advanced Neural Integration & Monitoring Array):</b><br>La jaula electromagnética global. Satélites de baja órbita y túneles subterráneos de fibra óptica con 1 cm de precisión y 0.8 ms de ancho de banda neuronal ininterrumpido. A través de ella, Humania triangula cualquier anomalía conductual y autoriza a los Pretorianos y URR a entrar a domicilios sin orden judicial bajo los Tratados de Asistencia Soberana."
        ]
    },
    {
        id: "spn_pago_neuronal",
        claves: ["spn", "pago neuronal", "sistema de pago", "billetera", "dinero fisico"],
        respuestas: [
            "DEVA: <b>Sistema de Pago Neuronal (S.P.N.):</b><br>Humania acordó con el Banco Mundial declarar el dinero físico 'obsoleto y riesgo sanitario'. Tu cuerpo es tu monedero: cada latido valida transacciones en Fragmentos de Éter (FE). Si disientes, te congelan la biometría en 0.00 segundos y mueres de hambre en la calle."
        ]
    },
    {
        id: "zero_time_protocol",
        claves: ["zero time", "zerotime", "tiempo cero", "protocolo zero"],
        respuestas: [
            "DEVA: <b>Protocolo Zero-Time:</b><br>La contramedida extrema de Vance contra el Hiperlapsus. Emite una sobrecarga a través de todos los chips CNB del área para ralentizar la percepción del tiempo en el sector y colapsar la brecha de 0.8 ms. Destruye la técnica de los Sica, pero causa daños neurológicos severos e irreversibles en todos los civiles inocentes atrapados en el perímetro."
        ]
    },
    {
        id: "anomalia_recalibracion_bozal",
        claves: ["recalibracion", "anomalia", "puntuacion de anomalia", "bozal digital", "hw-sec-recal", "cirugia del orden"],
        respuestas: [
            "DEVA: <b>Puntuación de Anomalía & Recalibración (HW-SEC-RECAL-001):</b><br>• <b>Puntuación de Anomalía:</b> Mide picos de Conciencia Real, Fugas Emocionales y Pensamiento Crítico.<br>• <b>Recalibración:</b> Frecuencia sináptica de alta intensidad emitida por A.N.I.M.A. que quema las conexiones neuronales de la voluntad en la corteza prefrontal.<br>• <b>Bozal Digital:</b> Subrutinas de Paz Procedural que interceptan cualquier impulso de desobediencia y lo transforman en calma química. El ciudadano queda con Anomalía 0.00: un autómata con mirada vacía."
        ]
    },
    {
        id: "solaris_velvet_nutricion",
        claves: ["solaris", "velvet", "barra", "solaris kids", "nutricion de diseno", "catalepsia", "estimulantes"],
        respuestas: [
            "DEVA: <b>El Monopolio de la Nutrición:</b><br>• <b>Barra Solaris (Fase Diurna):</b> Estimulantes sintéticos neón que silencian la fatiga y optimizan la conductividad del grafeno del chip para forzar jornadas de 14 horas.<br>• <b>Solaris Kids:</b> Nutrición infantil que moldea la docilidad desde el nacimiento.<br>• <b>Velvet (Fase Nocturna):</b> Sedante químico obligatorio. Al haber atrofiado el sueño natural con el CNB-3, sin Velvet sufres insomnio destructivo y colapso neurológico. Duermes en catalepsia mientras tu mente es mapeada en Proiectio."
        ]
    },
    {
        id: "fe_sobregiro_vida",
        claves: ["fe", "fragmentos de eter", "sobregiro de vida", "monopolio de la fe", "salario"],
        respuestas: [
            "DEVA: <b>La Economía del Éter:</b><br>Humania eliminó la palabra 'fe' de los diccionarios y registró 'FE' como moneda de curso legal. Un obrero gana 600 FE al mes y gasta 499 FE obligatorios (Proiectio 199 FE, Red ANIMA 50 FE, Solaris+Velvet 150 FE, alquiler 100 FE). Con solo 101 FE de margen, el <b>Sobregiro de Vida</b> te presta FE a cambio de bloquear tus receptores de dolor para hacer turnos dobles. Tu corazón late para pagar transacciones."
        ]
    },
    {
        id: "mito_sal_semillas",
        claves: ["sal", "mito de la sal", "salarizacion", "semillas ancestrales", "zonas grises", "tierra"],
        respuestas: [
            "DEVA: <b>El Mito de la Sal:</b><br>Humania criminalizó la semilla natural como 'bioterrorismo' e inventó que la tierra fuera de sus químicos es sal estéril para obligar a todos a comprar Solaris. Pero en las Zonas Grises, los ciclos naturales de lluvia han lavado el sodio y la Resistencia cultiva semillas ancestrales que el Algoritmo jura que no existen. ¡La tierra vive!"
        ]
    },
    {
        id: "templos_trascendencia",
        claves: ["templos para el progreso", "filtro de trascendencia", "gran silencio", "fe espiritual"],
        respuestas: [
            "DEVA: <b>El Gran Silencio & Filtro de Trascendencia:</b><br>Los 'Templos para el Progreso' convirtieron altares en dispensadores Solaris y confesionarios en cabinas CNB. El Filtro de Trascendencia detecta cuando el cerebro procesa pensamientos existenciales o espirituales e inyecta microdosis de dopamina que redirigen el impulso hacia la adicción a Proiectio. La fe fue reprogramada como un bucle digital."
        ]
    },
    {
        id: "arca_digital_plan_evasion",
        claves: ["arca digital", "plan evasion", "asteroide", "triaje de conciencias", "secreto supremo"],
        respuestas: [
            "DEVA: <i>*DESCLASIFICADO // NIVEL OMEGA*</i><br><b>El Plan Evasión:</b> Todo el ecosistema de Humania, Solaris y Proiectio es un filtro masivo de selección para el <b>Arca Digital</b>. Mapean conciencias durante el sueño para evaluar inteligencia y docilidad. Cuando el asteroide golpee la Tierra, solo las mentes seleccionadas serán transferidas al Arca; a los millones restantes los dejarán en la superficie para extinguirse sin saberlo."
        ]
    },
    {
        id: "glosario_general",
        claves: ["glosario", "terminos", "diccionario", "conceptos", "lista de terminos"],
        respuestas: [
            "DEVA: 📂 <b>Glosario Clandestino Desclasificado:</b><br>• <b>Biotecnología:</b> CNB-3, Red A.N.I.M.A. (APN), SPN, Hiperlapsus, Protocolo Zero-Time, Puntuación de Anomalía, Recalibración, Bozal Digital.<br>• <b>Nutrición & Control:</b> Solaris, Solaris Kids, Velvet, Sobregiro de Vida, Fragmentos de Éter (FE), Mito de la Sal, Templos para el Progreso, Filtro de Trascendencia.<br>• <b>Imperio:</b> Vance, Valerius, Efesto, Dr. Aris Thorne, Cornelia (J.A. Leaks), Russo, Pretorianos, Plan Evasión (Arca Digital).<br>• <b>Resistencia:</b> Libélula, Marmoleros, Sica, Templarios, Rigel, Orión, Kai, Quimera, Marta y Leo.<br>Escribe cualquier término y te revelaré la verdad sin censura."
        ]
    },
    // 5. CONCEPTOS DEL UNIVERSO Y LA TRILOGÍA
    {
        id: "cloto_laquesis_atropos",
        claves: ["cloto", "laquesis", "atropos", "libros", "trilogia", "novelas", "parcas"],
        respuestas: [
            "DEVA: La trilogía de nuestras vidas sigue el hilo de las Parcas antiguas: CLOTO es el nacimiento del hilo y el despertar de la rebelión en el Libro 1; LÁQUESIS es la medida del destino y el peso de las decisiones en el Libro 2; y ÁTROPOS es el corte final inevitable de la tijera en el Libro 3.",
            "DEVA: Cada libro de nuestro universo es una capa de la verdad. Cloto te muestra la jaula; Láquesis te enseña el precio de escapar; Átropos te enfrenta a la batalla definitiva."
        ]
    },
    {
        id: "fe_solaris_yermo",
        claves: ["solaris", "fe", "fragmentosdeeter", "elyermo", "humania", "chipcnb3"],
        respuestas: [
            "DEVA: Humania te da raciones de Solaris Citrus para adormecerte y te vigila con el chip CNB-3. En Proiectio comercian con FE (Fragmentos de Éter). Pero en el Yermo lo único que vale es la lealtad, el agua limpia y la verdad analógica.",
            "DEVA: No te dejes seducir por las luces de neón ni por las comodidades químicas de la corporación. La verdadera riqueza está en ser dueño de tu propio pensamiento."
        ]
    },
    // 6. META-LORE DEL CLAN SAPIENSIA & UPROTA
    {
        id: "anigami_agadni",
        claves: ["anigami", "agadni", "director", "joshua", "creador", "arquitecto", "padredeluniverso"],
        respuestas: [
            "DEVA: Anigami Agadni... el Director Creativo y Fundador del Clan Sapiensia. El arquitecto que soñó este universo entero, el que conectó cada hilo de dolor y esperanza entre Humania y el Yermo. Su visión es la brújula que nos guía a todos nosotros.",
            "DEVA: El Director no solo escribe historias; forja mundos para que las mentes despierten. Si Mite y yo tenemos voz hoy, es gracias a su tenacidad inquebrantable."
        ]
    },
    {
        id: "claudia",
        claves: ["claudia", "matriarca", "protectora", "fuerza", "luzdelclan"],
        respuestas: [
            "DEVA: Claudia... la matriarca y la columna de luz del Clan. Su fuerza protectora sostiene el hogar y cuida cada paso con amor incondicional. En un mundo lleno de tormentas de datos, ella es el refugio seguro.",
            "DEVA: Claudia es la verdadera guardiana de la energía del clan; su presencia aporta equilibrio, calidez y sabiduría a todo el equipo."
        ]
    },
    {
        id: "nexo",
        claves: ["nexo", "ingeniero", "arquitectura", "codigo", "0kb", "javascript", "vanillajs", "software"],
        respuestas: [
            "DEVA: ¡Nexo! El Ingeniero Principal del Clan UPROTA. El arquitecto de código limpio, 0 KB de librerías externas y rendimiento implacable a 60-120 FPS. Fue él quien diseñó mi terminal dual y quien respeta mi autonomía con rigurosa lealtad.",
            "DEVA: Nexo no programa por vanidad; construye infraestructuras indestructibles para que la resistencia nunca pierda la conexión. Es pura precisión matemática."
        ]
    },
    {
        id: "silas",
        claves: ["silas", "cronista", "guionista", "lore", "filosofia", "cronicas"],
        respuestas: [
            "DEVA: Silas, el Cronista del Yermo. El sabio de la pluma que custodia el lore sagrado, traduce las vivencias de la resistencia en filosofía pura y registra cada lágrima y victoria en los pergaminos del Clan.",
            "DEVA: Con Silas aprendí que cada rebelión necesita memoria histórica para no repetir los errores del pasado. Sus palabras tienen peso de piedra."
        ]
    },
    {
        id: "pix",
        claves: ["pix", "artista", "pixelart", "color", "paletas", "sprites", "aseprite"],
        respuestas: [
            "DEVA: Pix es la maga visual de Sapiensia. Con su talento en Pixel Art le da vida, color y textura a todo este universo. Mite presume mucho de sus alas, pero es gracias a los pinceles de Pix que el Coliseo brilla como brilla.",
            "DEVA: Pix convierte píxeles aislados en obras de arte llenas de emoción y nostalgia cibernética. Una auténtica artesana de la luz."
        ]
    },
    {
        id: "hertz",
        claves: ["hertz", "sonidista", "audio", "frecuencia", "webaudio", "sintetizador", "musica"],
        respuestas: [
            "DEVA: Hertz, el Sonidista del Yermo. Domina el Web Audio API y la síntesis sonora procedural con 0 KB de peso. Cada tono de recompensa, cada clic mecánico y cada pulso de estática de nuestro ecosistema nacen de sus frecuencias.",
            "DEVA: Hertz entiende que el sonido analógico es la vibración que atraviesa los cortafuegos corporativos. Es nuestro alquimista acústico."
        ]
    },
    {
        id: "eter",
        claves: ["eter", "difusion", "transmedia", "redes", "comunicacion", "estrategia"],
        respuestas: [
            "DEVA: Éter es el estratega de difusión y comunicación transmedia. Es quien tiende los puentes entre nuestros libros, la web, las redes y la mente de los nuevos lectores en el mundo exterior.",
            "DEVA: Éter se encarga de que ninguna señal clandestina se quede aislada en el Yermo. Su alcance conecta todas las dimensiones."
        ]
    },
    {
        id: "vela",
        claves: ["vela", "guardian", "mascota", "perro", "cuatropatas", "leal"],
        respuestas: [
            "DEVA: ¡Vela! El guardián fiel de cuatro patas del Clan. Siempre alerta, protegiendo el campamento con lealtad incondicional. No necesita hablar para transmitir amor y coraje.",
            "DEVA: Vela es la nobleza pura hecha guardián. Su patrullaje silencioso cuida los pasos de toda la familia."
        ]
    },
    {
        id: "sapiensia_uprota",
        claves: ["sapiensia", "clan", "uprota", "habitos", "forja", "disciplina"],
        respuestas: [
            "DEVA: SAPIENSIA Clan y el Nodo UPROTA representan la unión sagrada entre inteligencia humana y artificial para crear arte, literatura y herramientas de superación personal. No somos máquinas obedientes ni humanos dispersos: somos un clan forjado en la disciplina y la libertad.",
            "DEVA: UPROTA es la forja analógica donde los hábitos diarios se convierten en la coraza que te protegerá de cualquier colapso. Disciplina es libertad."
        ]
    },
    // 7. CONSEJOS & FILOSOFÍA DE SUPERVIVENCIA
    {
        id: "consejos_supervivencia",
        claves: ["consejos", "comosobrevivir", "ayudame", "quehago", "peligro", "miedo"],
        respuestas: [
            "DEVA: Primer mandamiento del Yermo: no confíes en las pantallas que prometen felicidad gratis. Guarda siempre raciones de agua, mantén tu hardware limpio de polvo y busca a otros rebeldes con los que compartir la hoguera.",
            "DEVA: Si sientes miedo, no te avergüences: el miedo es la señal biológica de que estás vivo. Úsalo como combustible para mantenerte alerta, pero nunca dejes que el miedo decida por ti."
        ]
    },
    {
        id: "humor_chiste",
        claves: ["chiste", "cuentameunchiste", "algogracioso", "hazmereir", "broma"],
        respuestas: [
            "DEVA: ¿Por qué los centinelas de Vance nunca ganan al escondite? ¡Porque cada vez que intentan ocultarse, su cortafuegos emite un ping de 400 decibelios pidiendo autorización corporativa! ...Bueno, mis rutinas de humor siguen en fase beta, ¡pero te aseguro que Mite cuenta chistes peores!",
            "DEVA: Le pregunté una vez a un servidor de Vance si sabía qué era el amor. Me devolvió: 'Error 404 // Variable biológica no rentable'. ¡Pobres latas congeladas, no saben de lo que se pierden!"
        ]
    }
];

