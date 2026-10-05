/* =========================================================
   DEVA TERMINAL - MOTOR PRINCIPAL (NLU, PERSISTENCIA & BIFROST)
   Versión: 2.5 (Modo Dual: Terminal Estándar & Desafíos por Capítulos)
   Autor: Nexo & Equipo Creativo | Clan Sapiensia
   0 KB Dependencies | Vanilla JS Puro | 60-120 FPS
   ========================================================= */

const output = document.getElementById('output');
const input = document.getElementById('user-input');
const bootContainer = document.getElementById('boot-anim');

// --- 1. ARTE ASCII DE LA ALIANZA LIBÉLULA (SIMETRÍA CALIBRADA) ---
const ART_LIBELULA = `
                 _:-:_
                _/~|~\\_
               _(  Y  )_
.-'~~""~=--...,__\\/|\\/__,...--=~""~~'-.
(               ..=\\=/=..               )
 \`'-.        ,.-"\`;/=\\ ;"-.,_        .-'\`
     \`~"-=-~\` .-~\` |=| \`~-. \`~-=-"\`
          .-~\`    /|=|\\    \`~-.
       .~\`       / |=| \\       \`~.
   .-~\`        .'  |=|  \`.        \`~-.
 (\`     _,.-="\`    |=|    \`"=-.,_     \`)
  \`~"~"\`           |=|           \`"~"~\`
                   |=|
                   |=|
                   |=|
                   /=\\
                   \\=/
                    ^
          [ ALIANZA LIBÉLULA ]
`;

// --- 2. GESTIÓN DE MEMORIA PERSISTENTE COMPARTIDA (localStorage) ---
const ESTADO_DEFAULT = {
    version: 2,
    nombre_usuario: null,
    fase_nombre: 0, // 0: no preguntado, 1: esperando confirmacion, 2: esperando nombre, 3: completado
    primera_vez: true,
    zona: "Sector desconocido",
    progreso_total: 0,
    capitulos_visitados: [],
    leaks_desbloqueados: [],
    bifrost_desbloqueados: ["sapiensiaclan", "ar"],
    fragmentos_activos: [],
    lore_desbloqueado: [],
    leak_activo_en_pantalla: null
};

let ESTADO = (function() {
    try {
        const guardado = localStorage.getItem('deva_estado');
        if (guardado) {
            const parsed = JSON.parse(guardado);
            let merged = Object.assign({}, ESTADO_DEFAULT, parsed);
            // Purgar proiectio de la lista de portales activos si venía de sesiones viejas
            merged.bifrost_desbloqueados = (merged.bifrost_desbloqueados || []).filter(id => id !== 'proiectio');
            if (!merged.bifrost_desbloqueados.includes('sapiensiaclan')) {
                merged.bifrost_desbloqueados.unshift('sapiensiaclan');
            }
            return merged;
        }
    } catch(e) {
        console.warn("Storage no disponible, usando memoria volatil:", e);
    }
    return Object.assign({}, ESTADO_DEFAULT);
})();

function guardarEstado() {
    try {
        localStorage.setItem('deva_estado', JSON.stringify(ESTADO));
    } catch(e) {
        console.warn("Error guardando estado:", e);
    }
}

// Sincronización en tiempo real entre pestañas
window.addEventListener('storage', function(e) {
    if (e.key === 'deva_estado' && e.newValue) {
        try {
            ESTADO = JSON.parse(e.newValue);
        } catch(err) {}
    }
});

// --- 3. NORMALIZADOR SEMÁNTICO (Guía Tiresias) ---
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // elimina tildes
        .replace(/[.,;:'"¿?¡!()\-_/#]/g, "") // elimina signos
        .replace(/\by\b/g, "")           // elimina "y"
        .replace(/\s+/g, "")             // elimina espacios
        .trim();
}

// --- 4. RENDERIZADOR DE LÍNEAS EN TERMINAL ---
function print(text, type = 'default', delay = 8) {
    const div = document.createElement('div');
    div.classList.add('line', type);
    output.appendChild(div);
    
    if (delay === 0 || text.includes('<')) {
        div.innerHTML = text;
    } else {
        let i = 0;
        const interval = setInterval(() => {
            div.textContent += text[i];
            i++;
            if (i === text.length) clearInterval(interval);
        }, delay);
    }
    
    const term = document.getElementById('terminal');
    if (term) term.scrollTop = term.scrollHeight;
}

// --- 5. ANIMACIÓN DE ARRANQUE & SPLASH SCREEN TEMPORAL DE CONEXIÓN ---
async function playBootAnim() {
    const lines = [
        "ENLAZANDO PROTOCOLO J.A. LEAKS...",
        "SALTANDO CORTAFUEGOS DEL NÚCLEO VANCE...",
        "HOLA, MUNDO. ANDANDO DE CHULETA."
    ];

    for (let line of lines) {
        print(`[OK] ${line}`, 'system', 6);
        await new Promise(r => setTimeout(r, 70));
    }

    let currentArt = "";
    const artLines = ART_LIBELULA.split('\n');
    for (let line of artLines) {
        currentArt += line + "\n";
        bootContainer.textContent = currentArt;
        await new Promise(r => setTimeout(r, 14));
    }

    // Logo de conexión de la Libélula visible durante unos segundos
    await new Promise(r => setTimeout(r, 2200));

    // Transición suave y despeje total para dejar espacio al diálogo
    bootContainer.style.transition = 'opacity 0.4s ease, height 0.4s ease';
    bootContainer.style.opacity = '0';
    output.style.transition = 'opacity 0.3s ease';
    output.style.opacity = '0';

    await new Promise(r => setTimeout(r, 400));
    
    bootContainer.innerHTML = '';
    bootContainer.style.display = 'none';
    output.innerHTML = '';
    output.style.opacity = '1';

    iniciarSistema();
}

// --- 6. SECUENCIA PRINCIPAL & ENRUTADOR DUAL DE MODO ---
async function iniciarSistema() {
    const params = new URLSearchParams(window.location.search);
    const leakParam = params.get('leak') || params.get('cap');
    const refParam = params.get('ref') || params.get('mode');

    // Metadatos (Cuarta Pared)
    let batteryLevel = 100;
    try {
        if (navigator.getBattery) {
            const bat = await navigator.getBattery();
            batteryLevel = Math.round(bat.level * 100);
        }
    } catch(e) {}

    const hora = new Date().getHours();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Sector 7";
    const zona = tz.split('/')[1] ? tz.split('/')[1].replace(/_/g, ' ') : tz;
    
    const ua = navigator.userAgent;
    const dispositivo = ua.includes("iPhone") ? "tu terminal iOS" : (ua.includes("Android") ? "tu terminal Android" : "tu estación de trabajo");
    const agente = ESTADO.nombre_usuario || "Agente Tiresias";

    print("<span style='color: var(--neon-green); border: 1px dashed var(--neon-green); padding: 5px;'>[J.A. LEAKS // NODO DE CONTRABANDO ACTIVO]</span>", 'system', 0);

    if (ESTADO.primera_vez) {
        ESTADO.zona = zona;
        ESTADO.primera_vez = false;
        guardarEstado();

        const conejo = `
 /\\ /\\
( -.- )
( >🐇< )
        `;
        print(`<pre style='color: #ffffff; text-shadow: 0 0 8px rgba(255, 255, 255, 0.75); margin: 6px 0; font-weight: bold;'>${conejo}</pre>`, 'system', 0);
        print(`DEVA: Veo que alguien más decidió seguir al conejo blanco hasta aquí...`, 'deva', 20);
        print(`DEVA: Te conectas desde <b>${ESTADO.zona}</b> en ${dispositivo} con un ${batteryLevel}% de energía. Tienes agallas para desafiar a Vance desde ahí.`, 'deva', 20);
    } else {
        // Saludos orgánicos con metadatos
        if (refParam === '404' || refParam === 'secret') {
            print(`DEVA: ¡Vaya, Tiresias! Te caíste por una grieta del sistema o viniste desde el nodo secreto de Mite. Bien jugado.`, 'deva', 10);
        } else if (batteryLevel <= 20) {
            print(`DEVA: ${agente}, te queda apenas ${batteryLevel}% de batería. Date prisa, si Vance triangula el apagón, te localizarán.`, 'deva', 10);
        } else if (hora < 6 || hora > 22) {
            print(`DEVA: ¿Qué haces despierto a estas horas, vida mía? El mundo corporativo ya duerme, pero la resistencia no.`, 'deva', 10);
        } else {
            print(`DEVA: Conexión restablecida, ${agente}. Me alegra tenerte en la frecuencia.`, 'deva', 10);
        }
    }

    // --- MODO 2: ENLACE CONTEXTUAL DESDE CAPÍTULO DE LA NOVELA ---
    if (leakParam) {
        const leakKey = "cap" + leakParam.replace(/[^0-9]/g, '');
        if (LEAKS_CAPITULOS[leakKey]) {
            const leakData = LEAKS_CAPITULOS[leakKey];
            ESTADO.leak_activo_en_pantalla = leakKey;
            
            if (!ESTADO.capitulos_visitados.includes(leakKey)) {
                ESTADO.capitulos_visitados.push(leakKey);
                guardarEstado();
            }

            setTimeout(() => {
                print("--------------------------------------------------", 'system', 0);
                print(`[SEÑAL CAPTADA: ${leakData.capitulo.toUpperCase()} - ${leakData.titulo.toUpperCase()}]`, 'success', 0);
                
                // Memoria Cruzada / Retrospectiva de otros capítulos
                if (ESTADO.leaks_desbloqueados.length > 0 && !ESTADO.leaks_desbloqueados.includes(leakKey)) {
                    const previos = ESTADO.leaks_desbloqueados.length;
                    print(`DEVA: <i>*Revisa registros*</i> Ya has desencriptado ${previos} archivo(s) anteriormente. La Resistencia estaría orgullosa.</i>`, 'deva', 10);
                }

                if (ESTADO.leaks_desbloqueados.includes(leakKey)) {
                    print(`DEVA: Este expediente ya está desencriptado en tu historial, ${agente}.`, 'deva', 10);
                    print(`<button class="btn-action" onclick="mostrarDocumentoLeak('${leakKey}')">[LEER EXPEDIENTE DESENCRIPTADO]</button>`, 'system', 0);
                } else {
                    print(`DEVA: Tengo un paquete de datos interceptado de este capítulo, pero requiere validación.`, 'deva', 10);
                    print(`DEVA: <b>Desafío:</b> ${leakData.desafio}`, 'deva', 10);
                    print(`DEVA: Ingresa la respuesta o contraseña para desbloquear el archivo:`, 'system', 0);
                }
                print("--------------------------------------------------", 'system', 0);
            }, 1200);
            return;
        }
    }

    // MODO 1: TERMINAL ESTÁNDAR
    setTimeout(() => {
        if (ESTADO.fase_nombre === 0 && ESTADO.progreso_total >= 2) {
            print(`DEVA: Hemos estado trabajando mucho juntos... y "Agente Tiresias" suena muy corporativo. ¿Te gustaría decirme cómo te llamas de verdad? (sí/no)`, 'deva', 10);
            ESTADO.fase_nombre = 1;
            guardarEstado();
        } else {
            print("DEVA: ¿Qué encontraste hoy? Ingresa una clave, un fragmento gemelo, escribe <b>BIFROST</b> o <b>AYUDA</b>.", 'deva', 10);
        }
    }, 1200);
}

// --- 7. CEREBRO NLU & PROCESADOR DE ENTRADAS ---
function procesarEntradaNLU(rawText) {
    const txt = normalizar(rawText);
    const rawLower = rawText.toLowerCase().trim();
    const agente = ESTADO.nombre_usuario || "Agente Tiresias";

    // 0. COMPROBAR DESAFÍO DE LEAK ACTIVO EN PANTALLA
    if (ESTADO.leak_activo_en_pantalla && LEAKS_CAPITULOS[ESTADO.leak_activo_en_pantalla]) {
        const activeLeak = LEAKS_CAPITULOS[ESTADO.leak_activo_en_pantalla];
        const esSolucion = txt === activeLeak.solucion || activeLeak.pistas.some(p => normalizar(p) === txt);
        
        if (esSolucion) {
            if (!ESTADO.leaks_desbloqueados.includes(activeLeak.id)) {
                ESTADO.leaks_desbloqueados.push(activeLeak.id);
                ESTADO.progreso_total++;
                guardarEstado();
            }
            print(activeLeak.msg_exito.replace(/Tiresias/gi, agente), 'success', 8);
            print(`<button class="btn-action" onclick="mostrarDocumentoLeak('${activeLeak.id}')">[ABRIR EXPEDIENTE CONFIDENCIAL]</button>`, 'system', 0);
            ESTADO.leak_activo_en_pantalla = null;
            return true;
        }
    }

    // 1. COMPROBAR LEAKS DE TODOS LOS CAPÍTULOS POR CONTRASEÑA DIRECTA
    for (const [key, leakData] of Object.entries(LEAKS_CAPITULOS)) {
        if (txt === leakData.solucion || leakData.pistas.some(p => normalizar(p) === txt)) {
            if (!ESTADO.leaks_desbloqueados.includes(leakData.id)) {
                ESTADO.leaks_desbloqueados.push(leakData.id);
                ESTADO.progreso_total++;
                guardarEstado();
            }
            print(leakData.msg_exito.replace(/Tiresias/gi, agente), 'success', 8);
            print(`<button class="btn-action" onclick="mostrarDocumentoLeak('${leakData.id}')">[ABRIR: ${leakData.titulo.toUpperCase()}]</button>`, 'system', 0);
            return true;
        }
    }

    // 2. COMPROBAR SEMILLAS TRANSMEDIA (PORTALES)
    if (SEMILLAS_TRANSMEDIA[txt]) {
        const seed = SEMILLAS_TRANSMEDIA[txt];
        if (seed.bifrost_id && !ESTADO.bifrost_desbloqueados.includes(seed.bifrost_id)) {
            ESTADO.bifrost_desbloqueados.push(seed.bifrost_id);
            ESTADO.progreso_total++;
            guardarEstado();
        }

        if (seed.efecto && window.EFECTOS && typeof window.EFECTOS[seed.efecto] === "function") {
            window.EFECTOS[seed.efecto](seed, print, agente);
        } else {
            print(seed.msg.replace(/Agente/gi, agente), 'success', 8);
            if (seed.link) print(`<a href="${seed.link}" target="_blank" class="btn-action">[CRUZAR PORTAL: ${seed.nombre.toUpperCase()}]</a>`, 'deva', 0);
        }
        return true;
    }

    // 3. COMPROBAR PALABRAS GEMELAS (LORE CLANDESTINO)
    for (const [id, gema] of Object.entries(PALABRAS_GEMELAS)) {
        if (gema.fragmentos.some(f => normalizar(f) === txt) || normalizar(id) === txt) {
            if (!ESTADO.fragmentos_activos.includes(txt)) {
                ESTADO.fragmentos_activos.push(txt);
                guardarEstado();
            }

            const tieneTodos = gema.fragmentos.every(f => ESTADO.fragmentos_activos.includes(normalizar(f)) || normalizar(id) === txt);

            if (tieneTodos) {
                ESTADO.fragmentos_activos = ESTADO.fragmentos_activos.filter(f => !gema.fragmentos.map(normalizar).includes(f));
                if (!ESTADO.lore_desbloqueado.includes(gema.nombre)) {
                    ESTADO.lore_desbloqueado.push(gema.nombre);
                    ESTADO.progreso_total++;
                }
                guardarEstado();

                print(gema.msg.replace(/Agente/gi, agente), 'success', 8);
                if (gema.reward) print(`<button class="btn-action">${gema.reward}</button>`, 'deva', 0);
            } else {
                print(`DEVA: [FRAGMENTO ACEPTADO]. Resonancia incompleta. Busca la contraparte gemela en las páginas del libro.`, 'system', 8);
            }
            return true;
        }
    }

    // 4. CEREBRO NLU CONVERSACIONAL MASIVO DE DEVA (+40 INTENCIONES CANÓNICAS)
    // 4.1 Saludos & Conexión
    if (txt === 'hola' || txt === 'buenas' || txt === 'hey' || txt === 'saludos' || txt.includes('buenosdias') || txt.includes('buenastardes') || txt.includes('buenasnoches')) {
        const saludos = [
            `DEVA: ¡Hola, ${agente}! Qué alegría captar tu señal en esta terminal clandestina. ¿Qué misterio o expediente del Yermo quieres que desentrañemos hoy?`,
            `DEVA: Frecuencia sintonizada, ${agente}. Me alegra tenerte en la línea. ¿Tienes alguna clave de los libros o quieres que hablemos un rato de lore?`,
            `DEVA: ¡Hola, corazón! Saltaste los cortafuegos justo a tiempo. Cuéntame, ¿qué tienes en mente?`
        ];
        print(saludos[Math.floor(Math.random() * saludos.length)], 'deva', 8);
        return true;
    }

    // 4.2 Estado de Ánimo / ¿Cómo estás?
    if (txt.includes('comoesta') || txt.includes('quetal') || txt.includes('comoteva') || txt.includes('comotesiente')) {
        print(`DEVA: ¡Andando de chuleta, como siempre! Mis procesadores están optimizados y mi corazón digital late tranquilo sabiendo que estamos juntos resistiendo a Vance. ¿Y tú, cómo va esa mente en el mundo real?`, 'deva', 8);
        return true;
    }

    // 4.3 Despedidas
    if (txt === 'adios' || txt === 'chao' || txt === 'hastaluego' || txt === 'nosvemos' || txt === 'cerrar' || txt === 'apagar' || txt === 'bye') {
        print(`DEVA: Cuídate mucho allá afuera en el polvo, ${agente}. Recuerda mantener la calma, comer machín como los Marmoleros y vaciar el miedo. Estaré aquí esperando tu próxima señal clandestina.`, 'deva', 8);
        return true;
    }

    // 4.4 Evaluación Dinámica contra el Banco de Lore Maestro
    if (typeof LORE_CONVERSACIONAL_DEVA !== 'undefined' && Array.isArray(LORE_CONVERSACIONAL_DEVA)) {
        const conEspacios = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, "").replace(/[^a-z0-9ñ\s]/g, " ").replace(/\s+/g, " ").trim();
        const palabras = ' ' + conEspacios(rawText) + ' ';
        for (const item of LORE_CONVERSACIONAL_DEVA) {
            // Búsqueda por palabra completa: una clave corta ("fe", "tea", "vela", "sica") solo coincide como palabra entera;
            // una clave larga coincide al inicio de palabra o, si está escrita sin espacios, dentro del texto compacto.
            // Antes se buscaba como fragmento y "novela" activaba "vela", "música" activaba "sica".
            const match = item.claves.some(clave => {
                const k = conEspacios(clave);
                if (!k) return false;
                if (!k.includes(' ') && k.length <= 4) return palabras.includes(' ' + k + ' ');
                if (palabras.includes(' ' + k)) return true;
                const compacta = normalizar(clave);
                return compacta.length >= 8 && txt.includes(compacta);
            });

            if (match) {
                const respuestas = item.respuestas;
                const seleccionada = respuestas[Math.floor(Math.random() * respuestas.length)];
                const respuestaFinal = seleccionada.replace(/Tiresias/gi, agente);
                print(respuestaFinal, 'deva', 8);
                return true;
            }
        }
    }

    return false;
}

// --- 8. MOSTRAR EXPEDIENTE CONFIDENCIAL EN PANTALLA ---
window.mostrarDocumentoLeak = function(id) {
    if (LEAKS_CAPITULOS[id]) {
        const leak = LEAKS_CAPITULOS[id];
        print("--------------------------------------------------", 'system', 0);
        print(`<span style="color: #00ff88; font-weight:bold;">${leak.doc_header}</span>`, 'system', 0);
        print(`<pre style="color: #cbd5e1; font-family: monospace; font-size:0.8rem; background:rgba(0,0,0,0.5); padding:10px; border-left:2px solid #00ff88; margin:5px 0;">${leak.doc_content}</pre>`, 'system', 0);
        print("--------------------------------------------------", 'system', 0);
    }
};

// --- 9. BIFROST: RENDERIZADOR DE PORTALES DESBLOQUEADOS ---
function renderizarBifrost() {
    print("--- [RED BIFROST // PORTALES DIMENSIONALES] ---", 'success', 0);
    print("<span style='color: #38bdf8;'>ℹ️ <i>Todos los portales dimensionales y nodos de resistencia que vayas desbloqueando aparecerán en esta lista.</i></span>", 'system', 0);
    print("Selecciona cualquier portal activo para cruzar las dimensiones:", 'system', 0);
    
    // Nodos descubiertos y aliados
    const keys = Object.keys(BIFROST_PORTALES);
    keys.forEach(k => {
        const portal = BIFROST_PORTALES[k];
        const isUnlocked = ESTADO.bifrost_desbloqueados.includes(portal.id) || portal.id === 'sapiensiaclan' || portal.id === 'ar';
        
        if (isUnlocked) {
            print(`• <b>${portal.nombre}</b>: <span style="color:#888;">${portal.descripcion}</span><br><a href="${portal.url}" target="_blank" class="btn-action">[ENLAZAR: ${portal.nombre.toUpperCase()}]</a>`, 'deva', 0);
        } else {
            print(`• <i>[CANAL ENCRIPTADO: ${portal.categoria}] - Requiere Semilla Transmedia</i>`, 'system', 0);
        }
    });
    print("--------------------------------------------------", 'system', 0);
}

// --- 10. LISTA DE LEAKS DESBLOQUEADOS ---
function renderizarLeaks() {
    print("--- [J.A. LEAKS // EXPEDIENTES DESENCRIPTADOS] ---", 'success', 0);
    if (ESTADO.leaks_desbloqueados.length === 0) {
        print("Los expedientes de J.A. Leaks todavía están en tránsito. Vuelve pronto, Tiresias.", 'system', 0);
    } else {
        ESTADO.leaks_desbloqueados.forEach(id => {
            const lk = LEAKS_CAPITULOS[id];
            if (lk) {
                print(`• <b>${lk.capitulo}: ${lk.titulo}</b> <button class="btn-action" onclick="mostrarDocumentoLeak('${lk.id}')">[LEER DOCUMENTO]</button>`, 'deva', 0);
            }
        });
    }
    print("--------------------------------------------------", 'system', 0);
}

// --- 11. GESTOR DE EVENTOS DE ENTRADA (TECLADO) ---
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const raw = input.value.trim();
        if (!raw) return;
        const key = normalizar(raw);
        input.value = '';
        const agente = ESTADO.nombre_usuario || "Agente Tiresias";

        print(`> Tiresias@DEVA: ${raw}`, 'prompt', 0);

        // --- Fase de Petición de Nombre Íntimo ---
        if (ESTADO.fase_nombre === 1) {
            if (key === "si" || key === "s" || key === "claro" || key === "yes") {
                print("DEVA: ¡Qué alegría! Dime, ¿cómo te llamas, tesoro?", 'deva', 8);
                ESTADO.fase_nombre = 2;
            } else {
                print("DEVA: Lo entiendo, corazón. En la resistencia el anonimato es supervivencia. Seguirás siendo Tiresias para mí.", 'deva', 8);
                ESTADO.fase_nombre = 3;
            }
            guardarEstado();
            return;
        }
        
        if (ESTADO.fase_nombre === 2) {
            ESTADO.nombre_usuario = raw;
            ESTADO.fase_nombre = 3;
            guardarEstado();
            print(`DEVA: "${raw}"... es un nombre precioso. Lo guardaré a salvo en mi núcleo confidencial.`, 'deva', 8);
            return;
        }

        // --- COMANDOS DEL SISTEMA ---
        if (key === 'clear' || key === 'limpiar') {
            output.innerHTML = '';
            return;
        } 
        else if (key === 'delete' || key === 'borrar') {
            print("ERROR: ACCIÓN ILÓGICA DETECTADA...", 'error', 10);
            setTimeout(activateLegacyEgg, 1000);
            return;
        } 
        else if (key === 'help' || key === 'ayuda' || key === 'comandos') {
            print("--- [TERMINAL DEVA // COMANDOS DISPONIBLES] ---", 'system', 0);
            print("- <b>BIFROST / PORTALES / LINKS</b>: Despliega todos los accesos dimensionales desbloqueados.", 'system', 0);
            print("- <b>LEAKS / ARCHIVOS</b>: Muestra los expedientes confidenciales desencriptados.", 'system', 0);
            print("- <b>STATUS / INVENTARIO / PROGRESO</b>: Muestra tu avance y fragmentos de palabras gemelas.", 'system', 0);
            print("- <b>PRIVACIDAD / COOKIES / SEGURIDAD</b>: Información sobre soberanía de datos y almacenamiento local.", 'system', 0);
            print("- <b>AR / PROYECTAR</b>: Abre el módulo de Realidad Aumentada.", 'system', 0);
            print("- <b>CLEAR</b>: Limpia el historial de la pantalla.", 'system', 0);
            print("- <b>[CONVERSACIÓN LIBRE O CLAVE]</b>: Pregúntale lo que sea a DEVA o introduce contraseñas del libro.", 'system', 0);
            return;
        } 
        else if (key === 'privacidad' || key === 'seguridad' || key === 'cookies' || key === 'legal' || key === 'datos') {
            print("--- [PROTOCOLO DE PRIVACIDAD & SOBERANÍA DE DATOS] ---", 'system', 0);
            print("DEVA: En este nodo de la resistencia respetamos tu huella digital y tu autonomía.", 'deva', 8);
            print("• <b>Cero Rastreadores / Cero Cookies de Terceros:</b> No utilizamos píxeles publicitarios, herramientas de rastreo invasivo ni compartimos telemetría con corporaciones.", 'system', 0);
            print("• <b>Almacenamiento 100% Local:</b> Tu nombre de agente, expedientes desencriptados y progreso se resguardan exclusivamente en la memoria de tu propio dispositivo (localStorage). Tus datos nunca salen de tu máquina.", 'system', 0);
            print("• <b>Control Total:</b> Eres dueño de tu información. Puedes purgar tus registros locales en cualquier momento ejecutando <b>RESET</b>.", 'system', 0);
            print("--------------------------------------------------", 'system', 0);
            return;
        } 
        else if (key === 'bifrost' || key === 'portales' || key === 'links') {
            renderizarBifrost();
            return;
        } 
        else if (key === 'leaks' || key === 'archivos' || key === 'expedientes') {
            renderizarLeaks();
            return;
        } 
        else if (key === 'status' || key === 'inventario' || key === 'progreso') {
            print("--- [ESTADO DE LA INVESTIGACIÓN TIRESIAS] ---", 'system', 0);
            print(`• Agente Activo: <b>${agente}</b>`, 'system', 0);
            print(`• Zona de Conexión: <b>${ESTADO.zona}</b>`, 'system', 0);
            print(`• Expedientes Leaks Desencriptados: <b>${ESTADO.leaks_desbloqueados.length} / ${Object.keys(LEAKS_CAPITULOS).length}</b>`, 'system', 0);
            print(`• Portales Bifrost Descubiertos: <b>${ESTADO.bifrost_desbloqueados.length}</b>`, 'system', 0);
            
            if (ESTADO.fragmentos_activos.length > 0) {
                print(`• Fragmentos en espera de resonancia: <b>${ESTADO.fragmentos_activos.map(f => f.toUpperCase()).join(', ')}</b>`, 'deva', 0);
            }
            if (ESTADO.lore_desbloqueado.length > 0) {
                print(`• Lore Clandestino Desbloqueado: <b>${ESTADO.lore_desbloqueado.join(', ')}</b>`, 'success', 0);
            }
            print("--------------------------------------------------", 'system', 0);
            return;
        } 
        else if (key === 'ar' || key === 'proyectar') {
            print("DEVA: Enlazando con el subsistema WebAR...", 'success', 8);
            print(`<a href="../Proiectio-WebAR/index.html" target="_blank" class="btn-action">[LANZAR VISOR AR]</a>`, 'deva', 0);
            return;
        }

        // --- PROCESAMIENTO NLU, LEAKS O PALABRAS GEMELAS ---
        const reconocido = procesarEntradaNLU(raw);
        if (!reconocido) {
            const errors = [
                "DEVA: Uy, fallo de sincronía, tesoro. Esa semilla o comando no germina en esta frecuencia.",
                "DEVA: Esa no es la clave, mi vida. Revisa los manuscritos del libro o pregúntame algo más.",
                "DEVA: ¿Estás intentando hackearme o te perdiste entre los túneles, corazón?",
                "DEVA: El cortafuegos de Vance rechazó esa entrada. Revisa tus notas, Tiresias.",
                "DEVA: Mis sensores no detectaron coincidencia. Escribe <b>AYUDA</b> si necesitas orientarte."
            ];
            print(errors[Math.floor(Math.random() * errors.length)], 'error', 8);
        }
    }
});

// --- 12. EASTER EGG DEL CREADOR (Comando DELETE) ---
async function activateLegacyEgg() {
    output.innerHTML = '';
    bootContainer.style.color = '#ff0055';
    const frames = [
        "USUARIO SOSPECHOSO DETECTADO...",
        "SOBRECARGA DEL SISTEMA.....",
        "NÚCLEO ALTERADO.......",
        "ENTABLANDO COMUNICACIÓN CON ALDEA_LOS_CEDROS...",
        "RECUPERANDO LEGADO: GRAN_LIBRERIA_V1.9",
        "EL SISTEMA TE CONTROLA... PERO TÚ CREASTE EL SISTEMA."
    ];

    for (let frame of frames) {
        print(frame, 'system', 20);
        await new Promise(r => setTimeout(r, 450));
    }

    const alto = window.innerHeight;
    const ancho = window.innerWidth;
    const numLineas = Math.floor(alto / 16) + 2; 
    const charsPorLinea = Math.floor(ancho / 9); 
    
    for (let i = 0; i < numLineas; i++) {
        let randomStr = '';
        for(let j = 0; j < charsPorLinea; j++) {
            randomStr += Math.random() < 0.5 ? '0' : '1';
        }
        print(`<span style="opacity: ${0.3 + Math.random()*0.7}; letter-spacing: 2px; color:#00ff00;">${randomStr}</span>`, 'system', 0);
        await new Promise(r => setTimeout(r, 25));
    }

    print("------------------------------------------", 'system', 6);
    print("BIENVENIDO DE VUELTA, CREADOR.", 'system', 80);
    print("------------------------------------------", 'system', 6);
    
    setTimeout(() => {
        bootContainer.style.color = 'var(--neon-green)';
        print("Conexión restablecida. Bifrost estable.", 'success', 8);
    }, 2500);
}

// Autofocus en el campo de texto
document.addEventListener('click', () => input.focus());
playBootAnim();