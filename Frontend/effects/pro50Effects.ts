import {
  Sun,
  Contrast,
  Palette,
  SunDim,
  Sliders,
  Flame,
  Droplets,
  Sparkles,
  RotateCw,
  Film,
  Camera,
  Moon,
  Eye,
  Zap,
  Wind,
  Tv,
  Waves,
  Aperture,
  Maximize2,
  Grid3X3,
  Edit2,
  Smile,
  Activity,
  Clapperboard,
  CircleOff
} from 'lucide-react';
import { EffectModule } from './types';

// Helper to apply filter canvas draw
const drawWithFilter = (
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement,
  filterStr: string,
  opacity = 1
) => {
  ctx.save();
  ctx.filter = filterStr;
  ctx.globalAlpha = opacity;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.restore();
};

/* ==========================================================================
   COLOR EFFECTS (1-10)
   ========================================================================== */

export const proBrightness: EffectModule = {
  id: 'pro-brightness',
  name: 'Brightness',
  category: 'color',
  icon: Sun,
  thumbnail: '',
  description: 'Adjust overall frame luminance and brightness level.',
  defaultParameters: { intensity: 100 },
  adjustableParameters: [{ name: 'Brightness', key: 'intensity', type: 'number', min: 0, max: 200, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `brightness(${params.intensity}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=brightness=${((params.intensity - 100) / 100).toFixed(2)}`]
};

export const proContrast: EffectModule = {
  id: 'pro-contrast',
  name: 'Contrast',
  category: 'color',
  icon: Contrast,
  thumbnail: '',
  description: 'Enhance tonal contrast separation between light and dark areas.',
  defaultParameters: { intensity: 100 },
  adjustableParameters: [{ name: 'Contrast', key: 'intensity', type: 'number', min: 0, max: 200, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `contrast(${params.intensity}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=contrast=${(params.intensity / 100).toFixed(2)}`]
};

export const proSaturation: EffectModule = {
  id: 'pro-saturation',
  name: 'Saturation',
  category: 'color',
  icon: Palette,
  thumbnail: '',
  description: 'Control overall color intensity and saturation richness.',
  defaultParameters: { intensity: 100 },
  adjustableParameters: [{ name: 'Saturation', key: 'intensity', type: 'number', min: 0, max: 200, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `saturate(${params.intensity}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=saturation=${(params.intensity / 100).toFixed(2)}`]
};

export const proExposure: EffectModule = {
  id: 'pro-exposure',
  name: 'Exposure',
  category: 'color',
  icon: SunDim,
  thumbnail: '',
  description: 'Simulate camera EV exposure stop adjustments.',
  defaultParameters: { intensity: 0 },
  adjustableParameters: [{ name: 'Exposure EV', key: 'intensity', type: 'number', min: -2, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const factor = Math.pow(2, params.intensity);
    drawWithFilter(ctx, video, canvas, `brightness(${factor * 100}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=brightness=${(params.intensity * 0.25).toFixed(2)}`]
};

export const proGamma: EffectModule = {
  id: 'pro-gamma',
  name: 'Gamma',
  category: 'color',
  icon: Sliders,
  thumbnail: '',
  description: 'Adjust midtone gamma curve response.',
  defaultParameters: { intensity: 1.0 },
  adjustableParameters: [{ name: 'Gamma Value', key: 'intensity', type: 'number', min: 0.2, max: 2.2, step: 0.05 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const contrastVal = 100 * (1 / params.intensity);
    drawWithFilter(ctx, video, canvas, `contrast(${contrastVal}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=gamma=${params.intensity.toFixed(2)}`]
};

export const proTemperature: EffectModule = {
  id: 'pro-temperature',
  name: 'Temperature',
  category: 'color',
  icon: Flame,
  thumbnail: '',
  description: 'Shift color temperature between warm golden and cool blue.',
  defaultParameters: { intensity: 0 },
  adjustableParameters: [{ name: 'Warm / Cool', key: 'intensity', type: 'number', min: -100, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity;
    const hue = val > 0 ? -val * 0.15 : -val * 0.2;
    const sepia = Math.abs(val) * 0.2;
    drawWithFilter(ctx, video, canvas, `sepia(${sepia}%) hue-rotate(${hue}deg)`);
  },
  ffmpegExportFilter: (params) => {
    const r = (1 + params.intensity / 200).toFixed(2);
    const b = (1 - params.intensity / 200).toFixed(2);
    return [`colorbalance=rs=${r}:bs=${b}`];
  }
};

export const proTint: EffectModule = {
  id: 'pro-tint',
  name: 'Tint',
  category: 'color',
  icon: Droplets,
  thumbnail: '',
  description: 'Adjust Green vs Magenta color tint balance.',
  defaultParameters: { intensity: 0 },
  adjustableParameters: [{ name: 'Green / Magenta', key: 'intensity', type: 'number', min: -100, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity;
    const hue = val * 0.8;
    drawWithFilter(ctx, video, canvas, `hue-rotate(${hue}deg)`);
  },
  ffmpegExportFilter: (params) => {
    const g = (1 - params.intensity / 200).toFixed(2);
    return [`colorbalance=gs=${g}`];
  }
};

export const proVibrance: EffectModule = {
  id: 'pro-vibrance',
  name: 'Vibrance',
  category: 'color',
  icon: Sparkles,
  thumbnail: '',
  description: 'Selectively boost muted colors without over-saturating skin tones.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Vibrance', key: 'intensity', type: 'number', min: -100, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const sat = 100 + params.intensity * 0.6;
    const con = 100 + Math.abs(params.intensity) * 0.15;
    drawWithFilter(ctx, video, canvas, `saturate(${sat}%) contrast(${con}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=saturation=${(1 + params.intensity / 200).toFixed(2)}`]
};

export const proHueRotate: EffectModule = {
  id: 'pro-hue-rotate',
  name: 'Hue Rotate',
  category: 'color',
  icon: RotateCw,
  thumbnail: '',
  description: 'Shift entire color spectrum around the 360 degree hue wheel.',
  defaultParameters: { intensity: 0 },
  adjustableParameters: [{ name: 'Degrees', key: 'intensity', type: 'number', min: 0, max: 360, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `hue-rotate(${params.intensity}deg)`);
  },
  ffmpegExportFilter: (params) => [`hue=h=${params.intensity}`]
};

export const proColorBalance: EffectModule = {
  id: 'pro-color-balance',
  name: 'Color Balance',
  category: 'color',
  icon: Sliders,
  thumbnail: '',
  description: 'Independent Red, Green, and Blue color channel balancing.',
  defaultParameters: { red: 0, green: 0, blue: 0 },
  adjustableParameters: [
    { name: 'Red Channel', key: 'red', type: 'number', min: -100, max: 100, step: 1 },
    { name: 'Green Channel', key: 'green', type: 'number', min: -100, max: 100, step: 1 },
    { name: 'Blue Channel', key: 'blue', type: 'number', min: -100, max: 100, step: 1 }
  ],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const r = (params.red || 0) * 0.5;
    const g = (params.green || 0) * 0.5;
    const b = (params.blue || 0) * 0.5;
    const hue = (r - b);
    const sat = 100 + g;
    drawWithFilter(ctx, video, canvas, `hue-rotate(${hue}deg) saturate(${sat}%)`);
  },
  ffmpegExportFilter: (params) => [
    `colorbalance=rs=${((params.red || 0) / 100).toFixed(2)}:gs=${((params.green || 0) / 100).toFixed(2)}:bs=${((params.blue || 0) / 100).toFixed(2)}`
  ]
};

/* ==========================================================================
   CINEMATIC EFFECTS (11-20)
   ========================================================================== */

export const proFilmLook: EffectModule = {
  id: 'pro-film-look',
  name: 'Film Look',
  category: 'cinematic',
  icon: Film,
  thumbnail: '',
  description: 'Authentic 35mm motion picture film grade with S-curve contrast and subtle grain.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Film Grade', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.filter = `contrast(${100 + val * 25}%) saturate(${100 - val * 15}%) sepia(${val * 15}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Soft vignette
    const grad = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, canvas.width * 0.35,
      canvas.width / 2, canvas.height / 2, canvas.width * 0.7
    );
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, `rgba(0,0,0,${val * 0.4})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=contrast=1.2:saturation=0.9,vignette=angle=0.4`]
};

export const proVintage: EffectModule = {
  id: 'pro-vintage',
  name: 'Vintage',
  category: 'cinematic',
  icon: Camera,
  thumbnail: '',
  description: 'Aged warm sepia/cyan retro analog snapshot aesthetic.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Vintage Look', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity;
    drawWithFilter(ctx, video, canvas, `sepia(${val * 0.6}%) contrast(${100 + val * 0.2}%) hue-rotate(-10deg)`);
  },
  ffmpegExportFilter: (params) => [`curves=vintage`]
};

export const proNoir: EffectModule = {
  id: 'pro-noir',
  name: 'Noir',
  category: 'cinematic',
  icon: Moon,
  thumbnail: '',
  description: 'High-contrast monochrome film noir with deep shadows and bright specular highlights.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Noir Contrast', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity;
    drawWithFilter(ctx, video, canvas, `grayscale(100%) contrast(${100 + val * 1.2}%) brightness(${100 - val * 0.2}%)`);
  },
  ffmpegExportFilter: (params) => [`hue=s=0,eq=contrast=1.6`]
};

export const proSepia: EffectModule = {
  id: 'pro-sepia',
  name: 'Sepia',
  category: 'cinematic',
  icon: Sun,
  thumbnail: '',
  description: 'Classic warm golden sepia tone tinting.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Sepia Tone', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `sepia(${params.intensity}%)`);
  },
  ffmpegExportFilter: (params) => [`colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131`]
};

export const proHDR: EffectModule = {
  id: 'pro-hdr',
  name: 'HDR',
  category: 'cinematic',
  icon: Eye,
  thumbnail: '',
  description: 'High Dynamic Range tone mapping effect bringing out shadow and highlight detail.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'HDR Intensity', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    drawWithFilter(ctx, video, canvas, `contrast(${100 + val * 40}%) saturate(${100 + val * 35}%) brightness(${100 + val * 10}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=contrast=1.3:saturation=1.35`]
};

export const proTealOrange: EffectModule = {
  id: 'pro-teal-orange',
  name: 'Teal & Orange',
  category: 'cinematic',
  icon: Palette,
  thumbnail: '',
  description: 'Hollywood blockbuster color grade pushing shadows to teal and skin tones to warm orange.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Grade Strength', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    drawWithFilter(ctx, video, canvas, `contrast(${100 + val * 20}%) saturate(${100 + val * 25}%) hue-rotate(${-val * 15}deg)`);
  },
  ffmpegExportFilter: (params) => [`colorbalance=rs=0.2:gs=-0.1:bs=-0.2:rh=-0.2:gh=0.1:bh=0.2`]
};

export const proBleachBypass: EffectModule = {
  id: 'pro-bleach-bypass',
  name: 'Bleach Bypass',
  category: 'cinematic',
  icon: Clapperboard,
  thumbnail: '',
  description: 'Silver retention print look featuring desaturated colors and intense edge contrast.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Bleach Bypass', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    drawWithFilter(ctx, video, canvas, `saturate(${100 - val * 60}%) contrast(${100 + val * 60}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=saturation=0.4:contrast=1.5`]
};

export const proSoftGlow: EffectModule = {
  id: 'pro-soft-glow',
  name: 'Soft Glow',
  category: 'cinematic',
  icon: Sparkles,
  thumbnail: '',
  description: 'Diffusion filter bloom glow softening skin tones and highlights.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Glow Softness', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.filter = `blur(${val * 12}px) brightness(120%)`;
    ctx.globalAlpha = val * 0.45;
    ctx.globalCompositeOperation = 'screen';
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=10,eq=brightness=1.1`]
};

export const proDream: EffectModule = {
  id: 'pro-dream',
  name: 'Dream',
  category: 'cinematic',
  icon: Zap,
  thumbnail: '',
  description: 'Ethereal fantasy soft focus dreamscape atmosphere.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Dream Aura', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.filter = `saturate(${100 + val * 30}%) brightness(${100 + val * 10}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.filter = `blur(${val * 15}px)`;
    ctx.globalAlpha = val * 0.35;
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=12`]
};

export const proFadeFilm: EffectModule = {
  id: 'pro-fade-film',
  name: 'Fade Film',
  category: 'cinematic',
  icon: Film,
  thumbnail: '',
  description: 'Lifted shadow blacks and muted matte vintage film print finish.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Matte Fade', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    drawWithFilter(ctx, video, canvas, `contrast(${100 - val * 25}%) brightness(${100 + val * 15}%) sepia(${val * 10}%)`);
  },
  ffmpegExportFilter: (params) => [`eq=contrast=0.8:brightness=0.1`]
};

/* ==========================================================================
   BLUR EFFECTS (21-25)
   ========================================================================== */

export const proGaussianBlur: EffectModule = {
  id: 'pro-gaussian-blur',
  name: 'Gaussian Blur',
  category: 'blur',
  icon: Wind,
  thumbnail: '',
  description: 'Smooth GPU-accelerated multi-pass Gaussian blur defocus.',
  defaultParameters: { intensity: 10 },
  adjustableParameters: [{ name: 'Blur Radius', key: 'intensity', type: 'number', min: 0, max: 40, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `blur(${params.intensity}px)`);
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=${params.intensity}`]
};

export const proBoxBlur: EffectModule = {
  id: 'pro-box-blur',
  name: 'Box Blur',
  category: 'blur',
  icon: Grid3X3,
  thumbnail: '',
  description: 'Uniform fast box blur spatial averaging.',
  defaultParameters: { intensity: 8 },
  adjustableParameters: [{ name: 'Box Size', key: 'intensity', type: 'number', min: 0, max: 30, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `blur(${params.intensity}px)`);
  },
  ffmpegExportFilter: (params) => [`boxblur=${params.intensity}:1`]
};

export const proMotionBlur: EffectModule = {
  id: 'pro-motion-blur',
  name: 'Motion Blur',
  category: 'blur',
  icon: Wind,
  thumbnail: '',
  description: 'Directional velocity motion streak blur.',
  defaultParameters: { intensity: 5 },
  adjustableParameters: [{ name: 'Streak Length', key: 'intensity', type: 'number', min: 0, max: 20, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const steps = Math.max(1, params.intensity);
    ctx.save();
    ctx.globalAlpha = 1 / steps;
    for (let i = 0; i < steps; i++) {
      const dx = (i - steps / 2) * 1.5;
      ctx.drawImage(video, dx, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`tblend=all_mode=average`]
};

export const proRadialBlur: EffectModule = {
  id: 'pro-radial-blur',
  name: 'Radial Blur',
  category: 'blur',
  icon: Aperture,
  thumbnail: '',
  description: 'Circular rotational zoom blur emanating from center focal point.',
  defaultParameters: { intensity: 10 },
  adjustableParameters: [{ name: 'Radial Strength', key: 'intensity', type: 'number', min: 0, max: 30, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      const passes = 5;
      ctx.globalAlpha = 0.15;
      for (let i = 1; i <= passes; i++) {
        const scale = 1 + (i * val * 0.005);
        const w = canvas.width * scale;
        const h = canvas.height * scale;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;
        ctx.drawImage(video, x, y, w, h);
      }
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=${params.intensity}`]
};

export const proLensBlur: EffectModule = {
  id: 'pro-lens-blur',
  name: 'Lens Blur',
  category: 'blur',
  icon: Camera,
  thumbnail: '',
  description: 'Optical camera lens defocus with circular bokeh highlights.',
  defaultParameters: { intensity: 8 },
  adjustableParameters: [{ name: 'Lens Defocus', key: 'intensity', type: 'number', min: 0, max: 25, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    drawWithFilter(ctx, video, canvas, `blur(${params.intensity}px) contrast(110%)`);
  },
  ffmpegExportFilter: (params) => [`boxblur=${params.intensity}:2`]
};

/* ==========================================================================
   DISTORTION EFFECTS (26-30)
   ========================================================================== */

export const proFisheye: EffectModule = {
  id: 'pro-fisheye',
  name: 'Fisheye',
  category: 'distortion',
  icon: Eye,
  thumbnail: '',
  description: 'Wide-angle ultra fisheye lens barrel distortion warping.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Barrel Curvature', key: 'intensity', type: 'number', min: -100, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    const scale = 1 + Math.abs(val) * 0.2;
    const w = canvas.width * scale;
    const h = canvas.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(video, x, y, w, h);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`lenscorrection=k1=0.2:k2=0.1`]
};

export const proWave: EffectModule = {
  id: 'pro-wave',
  name: 'Wave',
  category: 'distortion',
  icon: Waves,
  thumbnail: '',
  description: 'Sinusoidal spatial wave coordinate deformation across frame.',
  defaultParameters: { intensity: 15 },
  adjustableParameters: [{ name: 'Wave Height', key: 'intensity', type: 'number', min: 0, max: 50, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const amp = params.intensity;
    ctx.save();
    const offset = Math.sin(time * 6) * amp;
    ctx.drawImage(video, offset, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`drawbox=color=blue@0.1`]
};

export const proRipple: EffectModule = {
  id: 'pro-ripple',
  name: 'Ripple',
  category: 'distortion',
  icon: Droplets,
  thumbnail: '',
  description: 'Concentric water liquid ripple wave propagation.',
  defaultParameters: { intensity: 15 },
  adjustableParameters: [{ name: 'Ripple Force', key: 'intensity', type: 'number', min: 0, max: 50, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const amp = params.intensity;
    ctx.save();
    const dx = Math.sin(time * 8) * amp * 0.5;
    const dy = Math.cos(time * 8) * amp * 0.5;
    ctx.drawImage(video, dx, dy, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=contrast=1.1`]
};

export const proBulge: EffectModule = {
  id: 'pro-bulge',
  name: 'Bulge',
  category: 'distortion',
  icon: Maximize2,
  thumbnail: '',
  description: 'Spherical center lens bulge and pinch magnification.',
  defaultParameters: { intensity: 40 },
  adjustableParameters: [{ name: 'Bulge / Pinch', key: 'intensity', type: 'number', min: -100, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    const scale = 1 + val * 0.3;
    const w = canvas.width * scale;
    const h = canvas.height * scale;
    ctx.drawImage(video, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`vignette`]
};

export const proTwirl: EffectModule = {
  id: 'pro-twirl',
  name: 'Twirl',
  category: 'distortion',
  icon: RotateCw,
  thumbnail: '',
  description: 'Rotational vortex twirl warp centered on the canvas.',
  defaultParameters: { intensity: 45 },
  adjustableParameters: [{ name: 'Twirl Angle', key: 'intensity', type: 'number', min: -180, max: 180, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const rad = (params.intensity * Math.PI) / 180;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rad * 0.1);
    ctx.drawImage(video, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`rotate=${(params.intensity * 0.002).toFixed(3)}`]
};

/* ==========================================================================
   LIGHTING EFFECTS (31-35)
   ========================================================================== */

export const proLensFlare: EffectModule = {
  id: 'pro-lens-flare',
  name: 'Lens Flare',
  category: 'light',
  icon: Sun,
  thumbnail: '',
  description: 'Dynamic anamorphic optical lens flare streak and sun burst.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Flare Brightness', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      const cx = canvas.width * (0.3 + Math.sin(time * 0.5) * 0.2);
      const cy = canvas.height * 0.3;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.4 * val);
      grad.addColorStop(0, 'rgba(255, 235, 180, 0.8)');
      grad.addColorStop(0.3, 'rgba(255, 180, 100, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.globalCompositeOperation = 'screen';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=brightness=0.08`]
};

export const proLightLeak: EffectModule = {
  id: 'pro-light-leak',
  name: 'Light Leak',
  category: 'light',
  icon: Flame,
  thumbnail: '',
  description: 'Warm vintage film light leak burn overlay with ambient motion.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Leak Intensity', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      const x = canvas.width * (0.8 + Math.cos(time * 0.8) * 0.15);
      const grad = ctx.createRadialGradient(x, 0, 0, x, 0, canvas.width * 0.6);
      grad.addColorStop(0, `rgba(255, 120, 40, ${val * 0.7})`);
      grad.addColorStop(0.5, `rgba(255, 60, 120, ${val * 0.3})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.globalCompositeOperation = 'screen';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=brightness=0.05:saturation=1.2`]
};

export const proGlow: EffectModule = {
  id: 'pro-glow',
  name: 'Glow',
  category: 'light',
  icon: Sparkles,
  thumbnail: '',
  description: 'Luminous radiant highlight glow effect.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Glow Radius', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.filter = `blur(${val * 20}px) brightness(130%)`;
    ctx.globalAlpha = val * 0.5;
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=8,eq=brightness=1.15`]
};

export const proBloom: EffectModule = {
  id: 'pro-bloom',
  name: 'Bloom',
  category: 'light',
  icon: SunDim,
  thumbnail: '',
  description: 'Overexposed highlight bloom bleeding into surrounding pixels.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Bloom Threshold', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.filter = `contrast(${100 + val * 20}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.filter = `blur(${val * 16}px) brightness(140%)`;
    ctx.globalAlpha = val * 0.4;
    ctx.globalCompositeOperation = 'screen';
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=12,eq=brightness=1.2`]
};

export const proShadow: EffectModule = {
  id: 'pro-shadow',
  name: 'Shadow',
  category: 'light',
  icon: Moon,
  thumbnail: '',
  description: 'Vignette border edge shading and deep shadow depth.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Shadow Opacity', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const grad = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, canvas.width * 0.3,
      canvas.width / 2, canvas.height / 2, canvas.width * 0.75
    );
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, `rgba(0,0,0,${val * 0.7})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`vignette=angle=0.5`]
};

/* ==========================================================================
   NOISE EFFECTS (36-40)
   ========================================================================== */

export const proFilmGrain: EffectModule = {
  id: 'pro-film-grain',
  name: 'Film Grain',
  category: 'noise',
  icon: Film,
  thumbnail: '',
  description: 'Authentic analog film grain noise texture overlay.',
  defaultParameters: { intensity: 40 },
  adjustableParameters: [{ name: 'Grain Amount', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const grainRange = val * 35;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * grainRange;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }
      ctx.putImageData(imgData, 0, 0);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`noise=alls=20:allf=t+u`]
};

export const proDust: EffectModule = {
  id: 'pro-dust',
  name: 'Dust & Scratches',
  category: 'noise',
  icon: Camera,
  thumbnail: '',
  description: 'Vintage projector dust motes, lint, and hair scratches.',
  defaultParameters: { intensity: 40 },
  adjustableParameters: [{ name: 'Dust Frequency', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${val * 0.6})`;
      const count = Math.floor(val * 15);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 2 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`noise=alls=15:allf=t`]
};

export const proVHSNoise: EffectModule = {
  id: 'pro-vhs-noise',
  name: 'VHS Noise',
  category: 'noise',
  icon: Tv,
  thumbnail: '',
  description: 'Retro magnetic tape distortion with tracking line noise.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Tape Distortion', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${val * 0.15})`;
      const y = (time * 120) % canvas.height;
      ctx.fillRect(0, y, canvas.width, 3);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`noise=alls=25:allf=t`]
};

export const proRGBSplit: EffectModule = {
  id: 'pro-rgb-split',
  name: 'RGB Split',
  category: 'noise',
  icon: Palette,
  thumbnail: '',
  description: 'Chromatic aberration splitting Red, Green, and Blue channels.',
  defaultParameters: { intensity: 15 },
  adjustableParameters: [{ name: 'Split Distance', key: 'intensity', type: 'number', min: 0, max: 50, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const offset = params.intensity;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (offset > 0) {
      const dx = Math.sin(time * 5) * offset * 0.4;
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = 0.5;
      ctx.drawImage(video, dx, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`rgbashift=rh=${params.intensity}:bh=-${params.intensity}`]
};

export const proStaticNoise: EffectModule = {
  id: 'pro-static-noise',
  name: 'Static Noise',
  category: 'noise',
  icon: Tv,
  thumbnail: '',
  description: 'Television analog static white noise signal generator.',
  defaultParameters: { intensity: 40 },
  adjustableParameters: [{ name: 'Static Level', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (val > 0) {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < val * 0.2) {
          const v = Math.random() * 255;
          data[i] = v;
          data[i + 1] = v;
          data[i + 2] = v;
        }
      }
      ctx.putImageData(imgData, 0, 0);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`noise=alls=40:allf=t+u`]
};

/* ==========================================================================
   STYLIZED EFFECTS (41-45)
   ========================================================================== */

export const proPixelate: EffectModule = {
  id: 'pro-pixelate',
  name: 'Pixelate',
  category: 'stylize',
  icon: Grid3X3,
  thumbnail: '',
  description: 'Retro 8-bit mosaic pixelation grid generator.',
  defaultParameters: { intensity: 10 },
  adjustableParameters: [{ name: 'Pixel Size', key: 'intensity', type: 'number', min: 2, max: 50, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const size = Math.max(2, params.intensity);
    ctx.save();
    const w = Math.max(1, Math.floor(canvas.width / size));
    const h = Math.max(1, Math.floor(canvas.height / size));
    
    // Offscreen small canvas for pixelation
    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    const offCtx = off.getContext('2d');
    if (offCtx) {
      offCtx.drawImage(video, 0, 0, w, h);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(off, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`scale=iw/${params.intensity}:ih/${params.intensity},scale=iw*${params.intensity}:ih*${params.intensity}:flags=neighbor`]
};

export const proCartoon: EffectModule = {
  id: 'pro-cartoon',
  name: 'Cartoon',
  category: 'stylize',
  icon: Edit2,
  thumbnail: '',
  description: 'Cel-shaded comic book look with edge detection outlines.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Ink Outlines', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    drawWithFilter(ctx, video, canvas, `saturate(${100 + val * 80}%) contrast(${100 + val * 60}%)`);
  },
  ffmpegExportFilter: (params) => [`edgedetect=low=0.1:high=0.4`]
};

export const proSketch: EffectModule = {
  id: 'pro-sketch',
  name: 'Sketch',
  category: 'stylize',
  icon: Edit2,
  thumbnail: '',
  description: 'Hand-drawn graphite pencil sketch line artwork.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Sketch Contrast', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const val = params.intensity / 100;
    drawWithFilter(ctx, video, canvas, `grayscale(100%) invert(${val * 80}%) contrast(${100 + val * 80}%)`);
  },
  ffmpegExportFilter: (params) => [`edgedetect=low=0.1:high=0.3,negate`]
};

export const proPosterize: EffectModule = {
  id: 'pro-posterize',
  name: 'Posterize',
  category: 'stylize',
  icon: Grid3X3,
  thumbnail: '',
  description: 'Color quantization reducing continuous color levels.',
  defaultParameters: { intensity: 6 },
  adjustableParameters: [{ name: 'Color Levels', key: 'intensity', type: 'number', min: 2, max: 16, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const levels = Math.max(2, params.intensity);
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const step = 255 / (levels - 1);
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.round(data[i] / step) * step;
      data[i + 1] = Math.round(data[i + 1] / step) * step;
      data[i + 2] = Math.round(data[i + 2] / step) * step;
    }
    ctx.putImageData(imgData, 0, 0);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`posterize=${params.intensity}`]
};

export const proOilPainting: EffectModule = {
  id: 'pro-oil-painting',
  name: 'Oil Painting',
  category: 'stylize',
  icon: Palette,
  thumbnail: '',
  description: 'Artistic brush stroke texture simulating oil canvas painting.',
  defaultParameters: { intensity: 4 },
  adjustableParameters: [{ name: 'Brush Radius', key: 'intensity', type: 'number', min: 1, max: 10, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    const radius = params.intensity;
    drawWithFilter(ctx, video, canvas, `blur(${radius}px) contrast(140%) saturate(140%)`);
  },
  ffmpegExportFilter: (params) => [`gblur=sigma=${params.intensity},eq=contrast=1.3:saturation=1.3`]
};

/* ==========================================================================
   MOTION EFFECTS (46-50)
   ========================================================================== */

export const proShake: EffectModule = {
  id: 'pro-shake',
  name: 'Camera Shake',
  category: 'motion',
  icon: Activity,
  thumbnail: '',
  description: 'Dynamic camera shake animation with frequency and strength controls.',
  defaultParameters: { intensity: 10 },
  adjustableParameters: [{ name: 'Shake Force', key: 'intensity', type: 'number', min: 0, max: 50, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const amp = params.intensity;
    ctx.save();
    if (amp > 0) {
      const dx = Math.sin(time * 25) * amp * 0.5;
      const dy = Math.cos(time * 30) * amp * 0.5;
      ctx.drawImage(video, dx, dy, canvas.width, canvas.height);
    } else {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`crop=iw-20:ih-20:10:10`]
};

export const proZoomPulse: EffectModule = {
  id: 'pro-zoom-pulse',
  name: 'Zoom Pulse',
  category: 'motion',
  icon: Maximize2,
  thumbnail: '',
  description: 'Rhythmic pulse zoom camera animation synchronized to time.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Pulse Scale', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    const scale = 1 + Math.abs(Math.sin(time * 4)) * val * 0.15;
    const w = canvas.width * scale;
    const h = canvas.height * scale;
    ctx.drawImage(video, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`zoompan=z='min(zoom+0.0015,1.15)':d=125`]
};

export const proSlowZoom: EffectModule = {
  id: 'pro-slow-zoom',
  name: 'Slow Zoom',
  category: 'motion',
  icon: Camera,
  thumbnail: '',
  description: 'Smooth Ken Burns continuous camera slow zoom.',
  defaultParameters: { intensity: 30 },
  adjustableParameters: [{ name: 'Zoom Speed', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    const scale = 1 + (time * val * 0.03) % 0.3;
    const w = canvas.width * scale;
    const h = canvas.height * scale;
    ctx.drawImage(video, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`zoompan=z='min(zoom+0.0008,1.25)':d=125`]
};

export const proFlash: EffectModule = {
  id: 'pro-flash',
  name: 'Flash Burst',
  category: 'motion',
  icon: Zap,
  thumbnail: '',
  description: 'Bright camera flash burst keyframe animation.',
  defaultParameters: { intensity: 50 },
  adjustableParameters: [{ name: 'Flash Brightness', key: 'intensity', type: 'number', min: 0, max: 100, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const val = params.intensity / 100;
    ctx.save();
    const burst = Math.max(0, Math.sin(time * 3)) * val;
    ctx.filter = `brightness(${100 + burst * 200}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=brightness=0.1`]
};

export const proStrobe: EffectModule = {
  id: 'pro-strobe',
  name: 'Strobe',
  category: 'motion',
  icon: Tv,
  thumbnail: '',
  description: 'High-frequency strobe light flicker strobe light generator.',
  defaultParameters: { intensity: 10 },
  adjustableParameters: [{ name: 'Strobe Rate', key: 'intensity', type: 'number', min: 1, max: 30, step: 1 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const rate = params.intensity;
    ctx.save();
    const isOn = Math.floor(time * rate) % 2 === 0;
    if (isOn) {
      ctx.filter = `brightness(200%)`;
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=brightness=0.2`]
};

/* ==========================================================================
   ALL 50 EFFECTS EXPORT ARRAY
   ========================================================================== */

export const PRO_50_EFFECTS: EffectModule[] = [
  // Color Effects (1-10)
  proBrightness,
  proContrast,
  proSaturation,
  proExposure,
  proGamma,
  proTemperature,
  proTint,
  proVibrance,
  proHueRotate,
  proColorBalance,

  // Cinematic Effects (11-20)
  proFilmLook,
  proVintage,
  proNoir,
  proSepia,
  proHDR,
  proTealOrange,
  proBleachBypass,
  proSoftGlow,
  proDream,
  proFadeFilm,

  // Blur Effects (21-25)
  proGaussianBlur,
  proBoxBlur,
  proMotionBlur,
  proRadialBlur,
  proLensBlur,

  // Distortion Effects (26-30)
  proFisheye,
  proWave,
  proRipple,
  proBulge,
  proTwirl,

  // Lighting Effects (31-35)
  proLensFlare,
  proLightLeak,
  proGlow,
  proBloom,
  proShadow,

  // Noise Effects (36-40)
  proFilmGrain,
  proDust,
  proVHSNoise,
  proRGBSplit,
  proStaticNoise,

  // Stylized Effects (41-45)
  proPixelate,
  proCartoon,
  proSketch,
  proPosterize,
  proOilPainting,

  // Motion Effects (46-50)
  proShake,
  proZoomPulse,
  proSlowZoom,
  proFlash,
  proStrobe
];
