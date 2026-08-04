import {
  Sparkles,
  Contrast,
  Palette,
  Sun,
  Sliders,
  Smile,
  Edit2,
  Eye,
  Zap,
  SunDim,
  Sunrise,
  Snowflake,
  Film,
  Camera,
  Tv,
  MoveRight,
  Activity,
  FlipHorizontal,
  FlipVertical,
  Maximize2,
  Grid3X3,
  Moon,
  Droplets,
  Wand2,
  RotateCw,
  Aperture
} from 'lucide-react';
import { EffectModule } from './types';

export const embossEffect: EffectModule = {
  id: 'pro-emboss',
  name: 'Emboss',
  category: 'stylize',
  icon: Sparkles,
  thumbnail: '',
  description: '3D embossed texture depth effect.',
  previewColor: '#a855f7',
  defaultParameters: { intensity: 1 },
  adjustableParameters: [{ name: 'Intensity', key: 'intensity', type: 'number', min: 0.1, max: 3, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${100 + params.intensity * 50}%) grayscale(80%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['emboss']
};

export const invertEffect: EffectModule = {
  id: 'pro-invert',
  name: 'Invert Colors',
  category: 'color',
  icon: Contrast,
  thumbnail: '',
  description: 'Inverts color spectrum for high-contrast look.',
  previewColor: '#ec4899',
  defaultParameters: { amount: 1 },
  adjustableParameters: [{ name: 'Amount', key: 'amount', type: 'number', min: 0, max: 1, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `invert(${params.amount * 100}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['negate']
};

export const duotoneEffect: EffectModule = {
  id: 'pro-duotone',
  name: 'Duotone',
  category: 'color',
  icon: Palette,
  thumbnail: '',
  description: 'Two-tone color grading accents.',
  previewColor: '#06b6d4',
  defaultParameters: { intensity: 1 },
  adjustableParameters: [{ name: 'Intensity', key: 'intensity', type: 'number', min: 0.1, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `sepia(${params.intensity * 80}%) hue-rotate(180deg) contrast(120%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['colorbalance=rs=0.5:gs=-0.2:bs=0.5']
};

export const solarizeEffect: EffectModule = {
  id: 'pro-solarize',
  name: 'Solarize',
  category: 'color',
  icon: Sun,
  thumbnail: '',
  description: 'Solarization tone reversal look.',
  previewColor: '#eab308',
  defaultParameters: { threshold: 0.5 },
  adjustableParameters: [{ name: 'Threshold', key: 'threshold', type: 'number', min: 0.1, max: 1, step: 0.05 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${150 * params.threshold}%) saturate(200%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['curves=solarize']
};

export const tiltShiftEffect: EffectModule = {
  id: 'pro-tilt-shift',
  name: 'Tilt Shift',
  category: 'blur',
  icon: Sliders,
  thumbnail: '',
  description: 'Miniature depth-of-field blur effect.',
  previewColor: '#3b82f6',
  defaultParameters: { blurAmount: 5 },
  adjustableParameters: [{ name: 'Blur Amount', key: 'blurAmount', type: 'number', min: 1, max: 20, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `blur(${params.blurAmount}px)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['boxblur=5:1']
};

export const cartoonEffect: EffectModule = {
  id: 'pro-cartoon',
  name: 'Cartoon Cel',
  category: 'stylize',
  icon: Smile,
  thumbnail: '',
  description: 'Cel-shaded comic styling.',
  previewColor: '#10b981',
  defaultParameters: { strength: 1 },
  adjustableParameters: [{ name: 'Strength', key: 'strength', type: 'number', min: 0.1, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `saturate(${150 * params.strength}%) contrast(${130 * params.strength}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['edgedetect=low=0.1:high=0.4']
};

export const sketchEffect: EffectModule = {
  id: 'pro-sketch',
  name: 'Pencil Sketch',
  category: 'stylize',
  icon: Edit2,
  thumbnail: '',
  description: 'Hand-drawn graphite pencil sketch.',
  previewColor: '#64748b',
  defaultParameters: { contrast: 1.5 },
  adjustableParameters: [{ name: 'Contrast', key: 'contrast', type: 'number', min: 1, max: 3, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `grayscale(100%) contrast(${params.contrast * 100}%) invert(10%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['edgedetect']
};

export const paintEffect: EffectModule = {
  id: 'pro-paint',
  name: 'Oil Paint',
  category: 'creative',
  icon: Palette,
  thumbnail: '',
  description: 'Smooth oil painting texture.',
  previewColor: '#f59e0b',
  defaultParameters: { radius: 3 },
  adjustableParameters: [{ name: 'Radius', key: 'radius', type: 'number', min: 1, max: 10, step: 1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(120%) saturate(140%) blur(${params.radius * 0.3}px)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['paint']
};

export const nightVisionEffect: EffectModule = {
  id: 'pro-night-vision',
  name: 'Night Vision',
  category: 'creative',
  icon: Eye,
  thumbnail: '',
  description: 'Tactical green scope view.',
  previewColor: '#22c55e',
  defaultParameters: { intensity: 1 },
  adjustableParameters: [{ name: 'Intensity', key: 'intensity', type: 'number', min: 0.5, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `sepia(100%) hue-rotate(90deg) saturate(${300 * params.intensity}%) contrast(150%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['hue=h=120:s=3']
};

export const cyberpunkEffect: EffectModule = {
  id: 'pro-cyberpunk',
  name: 'Cyberpunk',
  category: 'creative',
  icon: Zap,
  thumbnail: '',
  description: 'Futuristic neon magenta cyan grade.',
  previewColor: '#d946ef',
  defaultParameters: { neon: 1 },
  adjustableParameters: [{ name: 'Neon Glow', key: 'neon', type: 'number', min: 0.5, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `hue-rotate(280deg) saturate(${200 * params.neon}%) contrast(130%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['hue=h=280:s=2']
};

export const hardLightEffect: EffectModule = {
  id: 'pro-hard-light',
  name: 'Hard Light',
  category: 'light',
  icon: SunDim,
  thumbnail: '',
  description: 'High-contrast directional lighting.',
  previewColor: '#f97316',
  defaultParameters: { intensity: 1 },
  adjustableParameters: [{ name: 'Intensity', key: 'intensity', type: 'number', min: 0.5, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${160 * params.intensity}%) brightness(110%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['eq=contrast=1.5']
};

export const warmEffect: EffectModule = {
  id: 'pro-warm',
  name: 'Warm Sunburst',
  category: 'color',
  icon: Sunrise,
  thumbnail: '',
  description: 'Golden hour warm warmth tint.',
  previewColor: '#f59e0b',
  defaultParameters: { warmth: 1 },
  adjustableParameters: [{ name: 'Warmth', key: 'warmth', type: 'number', min: 0.2, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `sepia(${40 * params.warmth}%) saturate(${120 * params.warmth}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['colorbalance=rh=0.2:gh=0.1:bh=-0.2']
};

export const coldEffect: EffectModule = {
  id: 'pro-cold',
  name: 'Arctic Cold',
  category: 'color',
  icon: Snowflake,
  thumbnail: '',
  description: 'Chilled arctic blue tone cast.',
  previewColor: '#0ea5e9',
  defaultParameters: { chill: 1 },
  adjustableParameters: [{ name: 'Chill', key: 'chill', type: 'number', min: 0.2, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `hue-rotate(190deg) sepia(${30 * params.chill}%) saturate(${110 * params.chill}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['colorbalance=rh=-0.2:gh=0.0:bh=0.3']
};

export const matteEffect: EffectModule = {
  id: 'pro-matte',
  name: 'Filmic Matte',
  category: 'cinematic',
  icon: Film,
  thumbnail: '',
  description: 'Flat matte shadow lift finish.',
  previewColor: '#64748b',
  defaultParameters: { lift: 1 },
  adjustableParameters: [{ name: 'Shadow Lift', key: 'lift', type: 'number', min: 0.5, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${85 * params.lift}%) brightness(${110 * params.lift}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['eq=contrast=0.85:brightness=0.1']
};

export const lomoEffect: EffectModule = {
  id: 'pro-lomo',
  name: 'Lomo Camera',
  category: 'vintage',
  icon: Camera,
  thumbnail: '',
  description: 'Lo-fi saturated vignette style.',
  previewColor: '#e11d48',
  defaultParameters: { vignette: 1 },
  adjustableParameters: [{ name: 'Vignette', key: 'vignette', type: 'number', min: 0.5, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${130 * params.vignette}%) saturate(${150 * params.vignette}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['vignette']
};

export const tvStaticEffect: EffectModule = {
  id: 'pro-tv-static',
  name: 'TV Noise Static',
  category: 'glitch',
  icon: Tv,
  thumbnail: '',
  description: 'Analog television static overlay.',
  previewColor: '#94a3b8',
  defaultParameters: { noiseLevel: 1 },
  adjustableParameters: [{ name: 'Noise Level', key: 'noiseLevel', type: 'number', min: 0.2, max: 2, step: 0.1 }],
  previewRenderer: (ctx, video, _params, _time, canvas) => {
    ctx.save();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.15})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['noise=alls=20:allf=t+u']
};

export const kenBurnsEffect: EffectModule = {
  id: 'pro-ken-burns',
  name: 'Ken Burns',
  category: 'camera',
  icon: MoveRight,
  thumbnail: '',
  description: 'Documentary pan and zoom motion.',
  previewColor: '#6366f1',
  defaultParameters: { zoom: 1.2 },
  adjustableParameters: [{ name: 'Max Zoom', key: 'zoom', type: 'number', min: 1.05, max: 2, step: 0.05 }],
  previewRenderer: (ctx, video, params, time, canvas) => {
    const scale = 1 + (params.zoom - 1) * Math.sin(time % Math.PI);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(scale, scale);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['zoompan=z=\'min(zoom+0.0015,1.5)\':d=125']
};

export const digitalNoiseEffect: EffectModule = {
  id: 'pro-noise',
  name: 'Digital Noise',
  category: 'glitch',
  icon: Activity,
  thumbnail: '',
  description: 'High-frequency digital noise grid.',
  previewColor: '#a855f7',
  defaultParameters: { amount: 1 },
  adjustableParameters: [{ name: 'Amount', key: 'amount', type: 'number', min: 0.1, max: 3, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${100 + params.amount * 20}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['noise=alls=30:allf=t']
};

export const brightnessEffect: EffectModule = {
  id: 'pro-brightness',
  name: 'Brightness',
  category: 'color',
  icon: Sun,
  thumbnail: '',
  description: 'Adjust image brightness levels.',
  previewColor: '#f59e0b',
  defaultParameters: { brightness: 1.2 },
  adjustableParameters: [{ name: 'Brightness', key: 'brightness', type: 'number', min: 0.2, max: 3, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `brightness(${params.brightness * 100}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=brightness=${params.brightness - 1}`]
};

export const contrastEffect: EffectModule = {
  id: 'pro-contrast',
  name: 'Contrast',
  category: 'color',
  icon: Contrast,
  thumbnail: '',
  description: 'Adjust shadow and highlight contrast.',
  previewColor: '#ec4899',
  defaultParameters: { contrast: 1.4 },
  adjustableParameters: [{ name: 'Contrast', key: 'contrast', type: 'number', min: 0.2, max: 3, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `contrast(${params.contrast * 100}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=contrast=${params.contrast}`]
};

export const saturationEffect: EffectModule = {
  id: 'pro-saturation',
  name: 'Saturation',
  category: 'color',
  icon: Palette,
  thumbnail: '',
  description: 'Vibrant color saturation booster.',
  previewColor: '#10b981',
  defaultParameters: { saturation: 1.5 },
  adjustableParameters: [{ name: 'Saturation', key: 'saturation', type: 'number', min: 0, max: 3, step: 0.1 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `saturate(${params.saturation * 100}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`eq=saturation=${params.saturation}`]
};

export const hueRotateEffect: EffectModule = {
  id: 'pro-hue-rotate',
  name: 'Hue Shift',
  category: 'color',
  icon: RotateCw,
  thumbnail: '',
  description: 'Rotate spectrum hue angles.',
  previewColor: '#a855f7',
  defaultParameters: { angle: 90 },
  adjustableParameters: [{ name: 'Angle', key: 'angle', type: 'number', min: 0, max: 360, step: 10 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `hue-rotate(${params.angle}deg)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`hue=h=${params.angle}`]
};

export const flipHorizontalEffect: EffectModule = {
  id: 'pro-flip-h',
  name: 'Flip Horizontal',
  category: 'camera',
  icon: FlipHorizontal,
  thumbnail: '',
  description: 'Mirror image horizontally.',
  previewColor: '#3b82f6',
  defaultParameters: { enabled: true },
  adjustableParameters: [],
  previewRenderer: (ctx, video, _params, _time, canvas) => {
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['hflip']
};

export const flipVerticalEffect: EffectModule = {
  id: 'pro-flip-v',
  name: 'Flip Vertical',
  category: 'camera',
  icon: FlipVertical,
  thumbnail: '',
  description: 'Invert image vertically.',
  previewColor: '#06b6d4',
  defaultParameters: { enabled: true },
  adjustableParameters: [],
  previewRenderer: (ctx, video, _params, _time, canvas) => {
    ctx.save();
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['vflip']
};

export const mosaicEffect: EffectModule = {
  id: 'pro-mosaic',
  name: 'Mosaic Block',
  category: 'distortion',
  icon: Grid3X3,
  thumbnail: '',
  description: 'Censorship pixel block mosaic.',
  previewColor: '#8b5cf6',
  defaultParameters: { size: 10 },
  adjustableParameters: [{ name: 'Block Size', key: 'size', type: 'number', min: 2, max: 30, step: 2 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    const w = Math.max(1, Math.floor(canvas.width / params.size));
    const h = Math.max(1, Math.floor(canvas.height / params.size));
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(video, 0, 0, w, h);
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: (params) => [`scale=iw/${params.size}:ih/${params.size},scale=iw*${params.size}:ih*${params.size}:flags=neighbor`]
};

export const thresholdEffect: EffectModule = {
  id: 'pro-threshold',
  name: 'Black White Threshold',
  category: 'stylize',
  icon: Moon,
  thumbnail: '',
  description: 'High-contrast binary threshold.',
  previewColor: '#64748b',
  defaultParameters: { level: 128 },
  adjustableParameters: [{ name: 'Level', key: 'level', type: 'number', min: 10, max: 245, step: 5 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `grayscale(100%) contrast(${params.level}%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['threshold']
};

export const watercolorEffect: EffectModule = {
  id: 'pro-watercolor',
  name: 'Watercolor Art',
  category: 'creative',
  icon: Wand2,
  thumbnail: '',
  description: 'Fluid artistic watercolor washes.',
  previewColor: '#ec4899',
  defaultParameters: { softness: 2 },
  adjustableParameters: [{ name: 'Softness', key: 'softness', type: 'number', min: 1, max: 5, step: 0.5 }],
  previewRenderer: (ctx, video, params, _time, canvas) => {
    ctx.save();
    ctx.filter = `saturate(160%) blur(${params.softness}px) contrast(110%)`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  },
  ffmpegExportFilter: () => ['boxblur=2']
};
