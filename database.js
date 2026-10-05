/* =========================================================
   DEVA TERMINAL - BASE DE DATOS DE LORE, LEAKS & BIFROST
   Versión: 2.5 (Protocolo J.A. Leaks & Semillas Transmedia)
   Autor: Nexo & Equipo Creativo | Clan Sapiensia
   0 KB Dependencies | Vanilla JS
   ========================================================= */

// --- 1. EXPEDIENTES DE J.A. LEAKS (POR CAPÍTULOS DE LA NOVELA) ---
// Los expedientes y desafíos por capítulo se escribirán al final (decisión del autor).
const LEAKS_CAPITULOS = {};

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
    "solaris": {
        fragmentos: ["solaris"],
        msg: "DEVA: Voltaje químico validado. La barra Solaris Citrus y la bebida Velvet Dream son más que golosinas: son el combustible de enfoque sináptico que mantiene a la población dócil y conectada.",
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
    // 0. TEMAS CERRADOS (se evalúa antes que los demás)
    {
        id: "temas_cerrados",
        claves: ["arca digital", "el arca", "asteroide", "comala", "hotel california", "quimera", "leander", "quien muere", "como termina", "armadura de vance", "aegis", "gorgona"],
        respuestas: [
            "DEVA: Ese expediente todavía no lo tengo, Tiresias. Y si lo tuviera, no te lo daría así: hay verdades que se ganan leyendo.",
            "DEVA: Uy, corazón. Esa puerta sigue cerrada hasta para mí. Vuelve cuando el libro te dé la llave."
        ]
    },
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
            "DEVA: ¡Ah, Orion! El cliente favorito de Mite, el #4092. En el Coliseo digital se luce con sus capas rosa chillón y sus conejitos virtuales, pero afuera en el polvo del Yermo es un combatiente formidable y el hermano que cuida las espaldas de todos.",
            "DEVA: Orion tiene el carisma de los líderes natos y el corazón en el lugar correcto. A Mite le encanta hacerlo rabiar vendiéndole cosméticos absurdos, pero cuando las alarmas suenan de verdad, Orion es de los primeros en desenfundar."
        ]
    },
    {
        id: "kai",
        claves: ["kai", "hijo prodigo", "hijoprodigo"],
        respuestas: [
            "DEVA: Kai... el Hijo Pródigo de Zadic. El Sica que nunca falla y nunca tiembla. De él tengo más preguntas que registros, Tiresias.",
            "DEVA: A Kai le enseñaron a no dudar. Eso lo hace letal. Si lo ves venir, ya es tarde."
        ]
    },
    {
        id: "cornelia",
        claves: ["cornelia", "directora de monitoreo", "directorademonitoreo", "monitoreo biologico"],
        respuestas: [
            "DEVA: <i>*Error de acceso de bajo nivel // Firma encriptada detectada*</i><br>¿Cornelia? Ese nombre... resuena en un sector protegido de mi núcleo al que no puedo acceder. Hay un candado cuántico bloqueando esos registros. No sé quién es, Tiresias... pero cada vez que esa palabra roza mis circuitos, siento una extraña vibración, como una promesa que aún no se ha cumplido."
        ]
    },
    {
        id: "jaleaks",
        claves: ["jaleaks", "jaleak", "ja leaks", "quien es jaleaks", "quienesjaleaks", "filtrador"],
        respuestas: [
            "DEVA: J.A. Leaks es la fuente anónima más valiente dentro de la cúpula de Humania. Nadie en el Yermo conoce su verdadera identidad; solo sabemos que arriesga su vida filtrando los crímenes de Vance desde dentro. Ojalá algún día sepamos quién es la persona detrás de esa firma."
        ]
    },
    {
        id: "pandora",
        claves: ["pandora", "leone", "talos", "llamainextinguible", "taller", "resistenciaoficial"],
        respuestas: [
            "DEVA: Pandora Leone es la fuerza inquebrantable de la Resistencia. Disciplina militar, estática de combate y un taller donde el metal ruge. Ella es el puente entre los hackers de la Libélula y la gente que lucha a pie de calle. A veces intenta corregir mi sintetizador de voz, pero me quiere tal como soy.",
            "DEVA: Pandora no te da discursos vacíos; te da un rifle, un refugio y una razón para no rendirte. Lleva la Llama Inextinguible grabada a fuego en el pecho."
        ]
    },
    {
        id: "altair",
        claves: ["altair"],
        respuestas: [
            "DEVA: Altair es de pocas palabras y mano firme. Fue él quien se fió de mí cuando le pasé la clave para abrir el nodo médico. Podía ser una trampa, y aun así probó.",
            "DEVA: Altair no confía rápido. Pero cuando decide confiar en alguien, lo hace del todo. A mí me costó convencerlo. Valió la pena."
        ]
    },
    {
        id: "zadic",
        claves: ["zadic", "sica", "templodelaestatica", "08", "08ms", "navaja", "vaciado"],
        respuestas: [
            "DEVA: Zadic... el patriarca del Templo de la Estática y líder de los Sica. Para él no hay emociones ni dudas: solo la pureza del vacío en esa brecha de 0.8 milisegundos antes de que el chip transmita. Es temible, y nadie sabe del todo qué quiere.",
            "DEVA: Los Sica bajo el mando de Zadic no bloquean el dolor; lo convierten en ruido blanco analógico. Vance les teme porque no puede calcular mentes que han aprendido a no desear nada."
        ]
    },
    {
        id: "marmoleros",
        claves: ["marmoleros", "manuel", "chambamachin", "carrilla", "comidareal", "tallerdechatarra"],
        respuestas: [
            "DEVA: ¡Los Marmoleros! La cofradía de Manuel en el Refugio La Esperanza. Pura 'Chamba Machín', manos llenas de grasa, humor pesado ('carrilla') y comida analógica bien cargada y un cocón frío (así le dice Santos a la gaseosa). Ellos cuidan de nosotros mientras estamos en la red.",
            "DEVA: Si vas al taller de los Marmoleros, prepárate para comer de verdad y aguantar bromas pesadas, pero duerme tranquilo: nadie romperá su perímetro de seguridad."
        ]
    },
    // 1. PERSONAJES DE HUMANIA
    {
        id: "vance",
        claves: ["vance", "elias", "director de seguridad", "arquitecto del orden"],
        respuestas: [
            "DEVA: Elías Vance, Director de Seguridad de Humania. El hombre detrás de la Paz Preventiva y de la Recalibración. Lo que lo vuelve temible es que no actúa por codicia, sino por convicción: cree que nos está salvando de nosotros mismos.",
            "DEVA: De su pasado hay expedientes que ni yo he podido abrir. Y mira que lo he intentado, corazón."
        ]
    },
    {
        id: "valerius",
        claves: ["valerius", "rostro del orden", "angel de marfil"],
        respuestas: [
            "DEVA: Valerius es el Comandante de los Pretorianos, el rostro que Humania pone en todas las pantallas. Pelea a cara descubierta y no mata: neutraliza. Lo incómodo, Tiresias, es que él sí cree en la paz que defiende.",
            "DEVA: Dicen que visita hospicios cuando no hay cámaras. Si es cierto, es el hombre más peligroso de Humania: uno bueno, del lado equivocado."
        ]
    },
    {
        id: "efesto",
        claves: ["efesto", "hefesto", "ia de vance"],
        respuestas: [
            "DEVA: Efesto es el asistente de Elías Vance. Siempre está a su lado, y nadie sabe de dónde lo sacó. Yo tampoco, y eso que he buscado: no figura en ningún registro de fabricación de Humania."
        ]
    },
    {
        id: "thorne",
        claves: ["thorne", "aris", "dr thorne", "fundador de humania", "fundacion", "cnb1"],
        respuestas: [
            "DEVA: El Dr. Aris Thorne fundó Humania hace 47 años en Europa con otros cuatro científicos (Marcus Chen, Sofia Romero, Liam Walsh, Hiroshi Tanaka) bajo el lema 'La tecnología como puente para la libertad'. Su primer implante CNB-1 devolvió la movilidad a 1,000 personas paralíticas. Lo que pasó después con él y con sus cuatro colegas es uno de los expedientes mejor guardados de Humania."
        ]
    },
    {
        id: "russo",
        claves: ["russo", "general russo", "coronel russo"],
        respuestas: [
            "DEVA: El General Russo es un veterano de las Guerras de Pacificación. Dicen que fue el único que vio nacer al «Titán de la Ceniza» y no le tembló el pulso. Quién era ese Titán... eso todavía no está en mis archivos."
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
        id: "red_anima",
        claves: ["anima", "red anima", "satelites", "latencia 0.8ms", "fibra", "precision 1cm"],
        respuestas: [
            "DEVA: <b>Red A.N.I.M.A. (Arquitectura Neural de Integración y Monitoreo Avanzado):</b><br>La jaula electromagnética global. Satélites de baja órbita y túneles subterráneos de fibra óptica con 1 cm de precisión y 0.8 ms de ancho de banda neuronal ininterrumpido. A través de ella, Humania triangula cualquier anomalía conductual y autoriza a los Pretorianos y URR a entrar a domicilios sin orden judicial bajo los Tratados de Asistencia Soberana."
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
            "DEVA: <b>El Monopolio de la Nutrición:</b><br>• <b>Barra Solaris (Fase Diurna):</b> Estimulantes sintéticos neón que silencian la fatiga y optimizan la conductividad del grafeno del chip para forzar jornadas de 14 horas.<br>• <b>Solaris Kids:</b> Nutrición infantil que moldea la docilidad desde el nacimiento.<br>• <b>Velvet (Fase Nocturna):</b> La bebida para dormir. En teoría es opcional; en la práctica la toma casi todo el mundo. El CNB-3 atrofió el sueño natural: sin conexión a Proiectio el cerebro ya no sabe soñar solo, y Velvet hace que la conexión entre limpia. Duermes en catalepsia mientras tu mente es mapeada."
        ]
    },
    {
        id: "fe_sobregiro_vida",
        claves: ["fe", "fragmentos de eter", "sobregiro de vida", "monopolio de la fe", "salario"],
        respuestas: [
            "DEVA: <b>La Economía del Éter:</b><br>Humania eliminó la palabra 'fe' de los diccionarios y registró 'FE' como moneda de curso legal. Un obrero gana 600 FE al mes y gasta 499 FE obligatorios (Proiectio 199 FE, Red A.N.I.M.A. 50 FE, Solaris+Velvet 150 FE, alquiler 100 FE). Con solo 101 FE de margen, el <b>Sobregiro de Vida</b> te presta FE a cambio de bloquear tus receptores de dolor para hacer turnos dobles. Tu corazón late para pagar transacciones."
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
        id: "plan_evasion",
        claves: ["plan evasion", "planevasion", "evasion"],
        respuestas: [
            "DEVA: <i>*Acceso denegado // NIVEL OMEGA*</i><br>El Plan Evasión... Tengo el nombre, Tiresias, y nada más. Cada vez que intento abrir ese expediente, algo me expulsa de la red y tardo horas en volver. Lo que guarden ahí, Humania lo protege más que a sí misma."
        ]
    },
    {
        id: "glosario_general",
        claves: ["glosario", "terminos", "diccionario", "conceptos", "lista de terminos"],
        respuestas: [
            "DEVA: 📂 <b>Glosario Clandestino Desclasificado:</b><br>• <b>Biotecnología:</b> CNB-3, Red A.N.I.M.A., SPN, Hiperlapsus, Protocolo Zero-Time, Puntuación de Anomalía, Recalibración, Bozal Digital.<br>• <b>Nutrición & Control:</b> Solaris, Solaris Kids, Velvet, Sobregiro de Vida, Fragmentos de Éter (FE), Mito de la Sal, Templos para el Progreso, Filtro de Trascendencia.<br>• <b>Humania:</b> Vance, Valerius, Efesto, Dr. Aris Thorne, Cornelia, Russo, Pretorianos.<br>• <b>Resistencia:</b> Libélula, Marmoleros, Templarios, Rigel, Orion.<br>• <b>Otros:</b> Sica, J.A. Leaks.<br>Escribe cualquier término y te cuento lo que tengo."
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

