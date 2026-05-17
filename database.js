// --- SEMILLAS TRANSMEDIA (Homenajes y portales externos) ---
const SEMILLAS_TRANSMEDIA = {
    "jurosolemnementequemisintencionesnosonbuenas": {
        pistas: ["jurosolemnemente", "misintencionesnosonbuenas"],
        efecto: "efectoHarryPotter",
        msg: "DEVA: Portal de Homenaje detectado. ¿Mis intenciones no son buenas, Agente? Bienvenido a la Sección 9 3/4.",
        link: "#", // Enlace al homenaje
        nombre: "Homenaje Merodeador"
    },
    "noexistenpreguntassinrespuestasolopreguntasmalformuladas": {
        pistas: ["noexistenpreguntassinrespuesta", "solopreguntasmalformuladas"],
        efecto: "efectoMatrix",
        msg: "DEVA: Wake up... Digo, veo que tú también sigues al conejo blanco, Agente.",
        link: "#", // Enlace al homenaje de Matrix
        nombre: "Homenaje Matrix"
    },
    "proyectar": {
        tipo: "ar",
        msg: "DEVA: Activando módulo de Realidad Aumentada. Prepara los marcadores.",
        link: "../Proiectio-WebAR/index.html",
        nombre: "Módulo AR"
    }
};

// --- PALABRAS GEMELAS Y CLAVES DE LORE INTERNO ---
const PALABRAS_GEMELAS = {
    "romuloremo": {
        fragmentos: ["romulo", "remo"],
        msg: "DEVA: [RESONANCIA GEMELA CONFIRMADA]. Informe Sica-001 desbloqueado. Los fundadores no eran hermanos de sangre, sino de código. Remo fue el primer 'Códulo Caótico' registrado por Humania.",
        reward: "[VER ARCHIVO: ORIGEN_SICA.PDF]",
        nombre: "Verdad de los Fundadores"
    },
    "cenizatitan": {
        fragmentos: ["ceniza", "titan"],
        msg: "DEVA: [RESONANCIA GEMELA CONFIRMADA]. Elías Vance. Burócrata de día, Titán de la Ceniza de noche. La purga ha comenzado.",
        reward: "[VER ARCHIVO: PROTOCOLO_PURGA]",
        nombre: "Identidad de Vance"
    },
    "solaris": {
        fragmentos: ["solaris"],
        msg: "DEVA: Voltaje químico validado. El Proyecto Solaris es más que una bebida; es el combustible de la cúpula Boreas.",
        reward: "[REGISTRO: VANCE_EXPERIMENTO]",
        nombre: "Proyecto Solaris"
    },
    "vive": {
        fragmentos: ["vive"],
        msg: "DEVA: El mensaje de la resistencia. 'VIVE' es la única palabra que el sistema no puede procesar como variable binaria.",
        reward: "[FICHA_PERSONAJE: MARTA]",
        nombre: "Ficha Resistencia"
    }
};
