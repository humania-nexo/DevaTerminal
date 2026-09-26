/**
 * audio_deva.js — Motor de Audio Procedural para DEVA Terminal (0 KB / Vanilla Web Audio API)
 * SAPIENSIA CLAN • Universo Proiectio
 * Diseño e Ingeniería Sónica: Hertz (Sonidista del Yermo)
 */

class DevaAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.initialized = true;

      const savedMute = localStorage.getItem('deva_audio_muted');
      if (savedMute === 'true') {
        this.isMuted = true;
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    } catch (e) {
      console.warn('Web Audio no disponible en DevaTerminal:', e);
    }
  }

  ensureContext() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.ensureContext();
    this.isMuted = !this.isMuted;
    localStorage.setItem('deva_audio_muted', this.isMuted ? 'true' : 'false');
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.08, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // 1. Click Mecánico de Tecla (Variación Estocástica)
  playKeyClick() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Frecuencia con variación estocástica de +- 15%
    const baseFreq = 1550;
    const jitter = (Math.random() - 0.5) * 300;
    const freq = baseFreq + jitter;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.015);

    gain.gain.setValueAtTime(0.022, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.018);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.02);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 2. Retorno de Carro / Enter de Mainframe
  playEnterKey() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.04);

    gain.gain.setValueAtTime(0.045, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.048);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.05);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 3. Portadora Cuántica & Splash Screen de la Libélula (2.2s)
  playBootSplash() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // A. Desmagnetización CRT inicial (Degauss)
    const degaussOsc = this.ctx.createOscillator();
    const degaussGain = this.ctx.createGain();
    degaussOsc.type = 'sawtooth';
    degaussOsc.frequency.setValueAtTime(140, t);
    degaussOsc.frequency.exponentialRampToValueAtTime(35, t + 0.25);
    degaussGain.gain.setValueAtTime(0.04, t);
    degaussGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

    degaussOsc.connect(degaussGain);
    degaussGain.connect(this.masterGain);
    degaussOsc.start(t);
    degaussOsc.stop(t + 0.32);

    // B. Portadora cuántica (Ring Modulated dual sine)
    const carrierOsc = this.ctx.createOscillator();
    const carrierGain = this.ctx.createGain();
    carrierOsc.type = 'sine';
    carrierOsc.frequency.setValueAtTime(880, t + 0.1);
    carrierOsc.frequency.linearRampToValueAtTime(1760, t + 1.8);
    carrierGain.gain.setValueAtTime(0.0001, t + 0.1);
    carrierGain.gain.linearRampToValueAtTime(0.02, t + 0.6);
    carrierGain.gain.exponentialRampToValueAtTime(0.0001, t + 2.1);

    carrierOsc.connect(carrierGain);
    carrierGain.connect(this.masterGain);
    carrierOsc.start(t + 0.1);
    carrierOsc.stop(t + 2.2);

    carrierOsc.onended = () => {
      degaussOsc.disconnect();
      degaussGain.disconnect();
      carrierOsc.disconnect();
      carrierGain.disconnect();
    };
  }

  // 4. Armónico del Conejo Blanco (528 Hz)
  playWhiteRabbitChime() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(528, t);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.04, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.6);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 5. Desencriptación Exitosa de J.A. Leaks
  playLeakSuccess() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [440, 660, 880, 1320];
    const t = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const st = t + (idx * 0.045);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, st);

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.03, st + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, st + 0.18);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(st);
      osc.stop(st + 0.2);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });
  }

  // 6. Acceso Denegado / Cortafuegos
  playAccessDenied() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.linearRampToValueAtTime(80, t + 0.12);

    gain.gain.setValueAtTime(0.05, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.14);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 7. Salto Dimensional Bifrost (Doppler + Stereo Panning)
  playBifrostWarp() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(1760, t + 0.35);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.05, t + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);

    if (panner) {
      panner.pan.setValueAtTime(-0.8, t);
      panner.pan.linearRampToValueAtTime(0.8, t + 0.4);
      osc.connect(gain);
      gain.connect(panner);
      panner.connect(this.masterGain);
    } else {
      osc.connect(gain);
      gain.connect(this.masterGain);
    }

    osc.start(t);
    osc.stop(t + 0.48);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
      if (panner) panner.disconnect();
    };
  }

  // 8. Semilla Transmedia: Lluvia Digital Matrix
  playMatrixCascade() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const st = t + (i * 0.05);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const randomFreq = 800 + Math.random() * 2400;

      osc.type = 'square';
      osc.frequency.setValueAtTime(randomFreq, st);
      osc.frequency.exponentialRampToValueAtTime(300, st + 0.04);

      gain.gain.setValueAtTime(0.018, st);
      gain.gain.exponentialRampToValueAtTime(0.0001, st + 0.045);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(st);
      osc.stop(st + 0.05);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    }
  }

  // 9. Semilla Transmedia: Drone Gravitacional Gargantúa (Interestelar)
  playGargantuaDrone() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(36, t);
    osc.frequency.linearRampToValueAtTime(42, t + 1.2);
    osc.frequency.linearRampToValueAtTime(36, t + 2.4);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.06, t + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 2.6);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 10. Semilla Transmedia: Campana Mística del Merodeador (Crónicas)
  playMarauderChime() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const freqs = [587.33, 880, 1318.51]; // D5, A5, E6
    const t = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      const st = t + (idx * 0.08);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, st);

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.035, st + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, st + 1.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(st);
      osc.stop(st + 1.5);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });
  }
}

// Instancia global
window.devaAudio = new DevaAudioEngine();
