// --- EFECTOS VISUALES PARA SEMILLAS TRANSMEDIA ---
// Cada función aquí maneja la animación de un homenaje específico.

window.EFECTOS = {
    // 1. Homenaje a The Matrix
    efectoMatrix: async function(entry, printFn, nombreLector) {
        printFn("...", 'system', 0);
        await new Promise(r => setTimeout(r, 500));
        
        const alto = window.innerHeight;
        const ancho = window.innerWidth;
        const numLineas = Math.floor(alto / 16) + 2; 
        const charsPorLinea = Math.floor(ancho / 9); 
        const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        for (let i = 0; i < numLineas; i++) {
            let randomStr = '';
            for(let j=0; j<charsPorLinea; j++) {
                randomStr += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            }
            printFn(`<span style="color: var(--neon-green); text-shadow: 0 0 5px var(--neon-green); opacity: ${0.5 + Math.random()*0.5};">${randomStr}</span>`, 'system', 0);
            await new Promise(r => setTimeout(r, 40));
        }
        
        const msgConNombre = entry.msg.replace(/Agente/gi, nombreLector);
        printFn(msgConNombre, 'success', 8);
        if (entry.link) printFn(`<a href="${entry.link}" target="_blank" class="btn-action">[CRUZAR BIFROST: ZIÓN]</a>`, 'deva', 8);
    },

    // 2. Homenaje a Harry Potter (Ejemplo de que cada uno es único)
    efectoHarryPotter: async function(entry, printFn, nombreLector) {
        printFn("[SISTEMA: DETECTANDO MAGIA ANTIGUA...]", 'system', 50);
        await new Promise(r => setTimeout(r, 1000));
        
        // Un efecto de escritura lenta como si la tinta apareciera en el pergamino
        printFn("<span style='color: #d4af37; font-family: serif; font-size: 1.2em; font-style: italic;'>Los señores Lunático, Colagusano, Canuto y Cornamenta te saludan...</span>", 'system', 50);
        await new Promise(r => setTimeout(r, 1500));
        
        const msgConNombre = entry.msg.replace(/Agente/gi, nombreLector);
        printFn(msgConNombre, 'success', 8);
        if (entry.link) printFn(`<a href="${entry.link}" target="_blank" class="btn-action">[CRUZAR BIFROST: HOGWARTS]</a>`, 'deva', 8);
    },

    // 3. Homenaje a Interstellar (Christopher Nolan)
    efectoInterestelar: async function(entry, printFn, nombreLector) {
        printFn("[SISTEMA: ANOMALÍA GRAVITACIONAL DETECTADA // SECTOR GARGANTÚA]", 'system', 30);
        await new Promise(r => setTimeout(r, 800));
        
        printFn("<span style='color: #f59e0b; font-family: monospace; font-size: 1.05em;'>🌌 \"No entres dócilmente en esa buena noche. Rabia, rabia contra la agonía de la luz.\"</span>", 'system', 40);
        await new Promise(r => setTimeout(r, 1400));
        
        printFn("<span style='color: #38bdf8;'>TARS: Nivel de humor al 75%. Horizonte de sucesos estabilizado, Cooper.</span>", 'deva', 20);
        await new Promise(r => setTimeout(r, 800));
        
        const msgConNombre = entry.msg.replace(/Agente/gi, nombreLector);
        printFn(msgConNombre, 'success', 8);
        if (entry.link) printFn(`<a href="${entry.link}" target="_blank" class="btn-action">[CRUZAR BIFROST: GARGANTÚA // ENDURANCE II]</a>`, 'deva', 8);
    }
};
