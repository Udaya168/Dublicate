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

// CAMERA PACK (31-40)
import { dynamicZoom } from './camera/dynamicZoom';
import { snapZoom } from './camera/snapZoom';
import { elasticZoom } from './camera/elasticZoom';
import { pulseZoom } from './camera/pulseZoom';
import { cinematicZoom } from './camera/cinematicZoom';
import { dollyZoom } from './camera/dollyZoom';
import { cameraPush } from './camera/cameraPush';
import { cameraPull } from './camera/cameraPull';
import { orbitCamera } from './camera/orbitCamera';
import { handheldCamera } from './camera/handheldCamera';

// MOTION PACK (41-50)
import { float } from './motion/float';
import { drift } from './motion/drift';
import { swing } from './motion/swing';
import { bounce } from './motion/bounce';
import { jello } from './motion/jello';
import { wobble } from './motion/wobble';
import { elasticMotion } from './motion/elasticMotion';
import { freezeFrame } from './motion/freezeFrame';
import { ghostTrail } from './motion/ghostTrail';
import { echoMotion } from './motion/echoMotion';

// LIGHT PACK (51-60)
import { goldenGlow } from './light/goldenGlow';
import { neonGlow } from './light/neonGlow';
import { aurora } from './light/aurora';
import { softLight } from './light/softLight';
import { spotlight } from './light/spotlight';
import { lensFlare } from './light/lensFlare';
import { rainbowLight } from './light/rainbowLight';
import { prism } from './light/prism';
import { reflection } from './light/reflection';
import { halo } from './light/halo';

// DISTORTION PACK (61-70)
import { bulge } from './distortion/bulge';
import { pinch } from './distortion/pinch';
import { twirl } from './distortion/twirl';
import { swirl } from './distortion/swirl';
import { glass } from './distortion/glass';
import { crystal } from './distortion/crystal';
import { liquid } from './distortion/liquid';
import { melt } from './distortion/melt';
import { stretch } from './distortion/stretch';
import { tunnel } from './distortion/tunnel';

// RETRO PACK (71-80)
import { super8Film } from './retro/super8Film';
import { sixteenMmFilm } from './retro/sixteenMmFilm';
import { oldCamera } from './retro/oldCamera';
import { tapeNoise } from './retro/tapeNoise';
import { analogTV } from './retro/analogTV';
import { silentMovie } from './retro/silentMovie';
import { retroCamera } from './retro/retroCamera';
import { dustScratches } from './retro/dustScratches';
import { homeVideo } from './retro/homeVideo';
import { disposableCamera } from './retro/disposableCamera';

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

  // CAMERA PACK (31-40)
  'pro-dynamic-zoom': dynamicZoom,
  'pro-snap-zoom': snapZoom,
  'pro-elastic-zoom': elasticZoom,
  'pro-pulse-zoom': pulseZoom,
  'pro-cinematic-zoom': cinematicZoom,
  'pro-dolly-zoom': dollyZoom,
  'pro-camera-push': cameraPush,
  'pro-camera-pull': cameraPull,
  'pro-orbit-camera': orbitCamera,
  'pro-handheld-camera': handheldCamera,

  // MOTION PACK (41-50)
  'pro-float': float,
  'pro-drift': drift,
  'pro-swing': swing,
  'pro-bounce': bounce,
  'pro-jello': jello,
  'pro-wobble': wobble,
  'pro-elastic-motion': elasticMotion,
  'pro-freeze-frame': freezeFrame,
  'pro-ghost-trail': ghostTrail,
  'pro-echo-motion': echoMotion,

  // LIGHT PACK (51-60)
  'pro-golden-glow': goldenGlow,
  'pro-neon-glow': neonGlow,
  'pro-aurora': aurora,
  'pro-soft-light': softLight,
  'pro-spotlight': spotlight,
  'pro-lens-flare': lensFlare,
  'pro-rainbow-light': rainbowLight,
  'pro-prism': prism,
  'pro-reflection': reflection,
  'pro-halo': halo,

  // DISTORTION PACK (61-70)
  'pro-bulge': bulge,
  'pro-pinch': pinch,
  'pro-twirl': twirl,
  'pro-swirl': swirl,
  'pro-glass': glass,
  'pro-crystal': crystal,
  'pro-liquid': liquid,
  'pro-melt': melt,
  'pro-stretch': stretch,
  'pro-tunnel': tunnel,

  // RETRO PACK (71-80)
  'pro-super8-film': super8Film,
  'pro-16mm-film': sixteenMmFilm,
  'pro-old-camera': oldCamera,
  'pro-tape-noise': tapeNoise,
  'pro-analog-tv': analogTV,
  'pro-silent-movie': silentMovie,
  'pro-retro-camera': retroCamera,
  'pro-dust-scratches': dustScratches,
  'pro-home-video': homeVideo,
  'pro-disposable-camera': disposableCamera,
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
