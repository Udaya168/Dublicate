import { smoothZoom } from './camera/smoothZoom';
import { hyperZoom } from './camera/hyperZoom';
import { beatShake } from './camera/beatShake';
import { cameraFlash } from './camera/cameraFlash';
import { speedRamp } from './camera/speedRamp';
import { gaussianBlur } from './blur/gaussianBlur';
import { motionBlur } from './blur/motionBlur';
import { zoomBlur } from './blur/zoomBlur';
import { dreamBlur } from './blur/dreamBlur';
import { rgbSplit } from './glitch/rgbSplit';
import { chromaticAberration } from './glitch/chromaticAberration';
import { vhs } from './glitch/vhs';
import { crtScreen } from './glitch/crtScreen';
import { filmGrain } from './cinematic/filmGrain';
import { dustOverlay } from './cinematic/dustOverlay';
import { filmBurn } from './cinematic/filmBurn';
import { lightLeak } from './cinematic/lightLeak';
import { glow } from './cinematic/glow';
import { bloom } from './cinematic/bloom';
import { vintageFilm } from './cinematic/vintageFilm';
import { cinematicLUT } from './cinematic/cinematicLUT';
import { blackWhite } from './cinematic/blackWhite';
import { sepia } from './cinematic/sepia';
import { ripple } from './distortion/ripple';
import { heatWave } from './distortion/heatWave';
import { waveDistortion } from './distortion/waveDistortion';
import { fisheye } from './distortion/fisheye';
import { pixelate } from './distortion/pixelate';
import { mirror } from './distortion/mirror';
import { kaleidoscope } from './distortion/kaleidoscope';

export { type EffectModule } from './types';

const effectsRegistry: Record<string, any> = {
    'pro-smooth-zoom': smoothZoom,
  'pro-hyper-zoom': hyperZoom,
  'pro-beat-shake': beatShake,
  'pro-camera-flash': cameraFlash,
  'pro-speed-ramp': speedRamp,
  'pro-gaussian-blur': gaussianBlur,
  'pro-motion-blur': motionBlur,
  'pro-zoom-blur': zoomBlur,
  'pro-dream-blur': dreamBlur,
  'pro-rgb-split': rgbSplit,
  'pro-chromatic-aberration': chromaticAberration,
  'pro-vhs': vhs,
  'pro-crt-screen': crtScreen,
  'pro-film-grain': filmGrain,
  'pro-dust-overlay': dustOverlay,
  'pro-film-burn': filmBurn,
  'pro-light-leak': lightLeak,
  'pro-glow': glow,
  'pro-bloom': bloom,
  'pro-vintage-film': vintageFilm,
  'pro-cinematic-lut': cinematicLUT,
  'pro-black-white': blackWhite,
  'pro-sepia': sepia,
  'pro-ripple': ripple,
  'pro-heat-wave': heatWave,
  'pro-wave-distortion': waveDistortion,
  'pro-fisheye': fisheye,
  'pro-pixelate': pixelate,
  'pro-mirror': mirror,
  'pro-kaleidoscope': kaleidoscope,
};

export const getEffectModule = (id: string) => {
  return effectsRegistry[id] || null;
};

export const getEffectsByCategory = (category: string) => {
  return Object.values(effectsRegistry).filter(eff => eff.category === category);
};

export const getAllProEffects = () => {
  return Object.values(effectsRegistry);
};
