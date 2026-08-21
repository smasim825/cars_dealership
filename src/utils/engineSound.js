// Web Audio API Supercar Engine Rev Synthesizer
let audioCtx = null;

export function playEngineRev(engineType = 'V12') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Master Gain
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.01, now);
    masterGain.gain.linearRampToValueAtTime(0.25, now + 0.15);
    masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.6);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
    masterGain.connect(audioCtx.destination);

    // Filter for exhaust tone resonance
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(2200, now + 0.7);
    filter.frequency.exponentialRampToValueAtTime(400, now + 2.0);
    filter.connect(masterGain);

    // Base Frequency depending on Engine type
    const baseFreq = engineType.includes('Electric') ? 110 : engineType.includes('V12') ? 85 : 70;

    // Multi-Harmonic Oscillators for roaring engine tone
    const harmonics = [1, 1.5, 2.5, 3.8];
    harmonics.forEach((h, idx) => {
      const osc = audioCtx.createOscillator();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      
      const startF = baseFreq * h;
      const peakF = startF * 3.4;
      const endF = startF * 1.1;

      osc.frequency.setValueAtTime(startF, now);
      osc.frequency.exponentialRampToValueAtTime(peakF, now + 0.65);
      osc.frequency.exponentialRampToValueAtTime(endF, now + 2.1);

      const oscGain = audioCtx.createGain();
      oscGain.gain.value = 1 / (idx + 1);

      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start(now);
      osc.stop(now + 2.2);
    });

  } catch (e) {
    // Audio Context failed or blocked by browser autoplay policy
  }
}
