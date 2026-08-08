import { TransitionItem } from './types';

export const BASIC_TRANSITIONS: TransitionItem[] = [
  {
    id: 'basic-1',
    name: 'Cross Dissolve',
    category: 'basic',
    description: 'Classic smooth crossfade between outgoing and incoming clips.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
    }),
  },
  {
    id: 'basic-2',
    name: 'Fade to Black',
    category: 'basic',
    description: 'Smooth dip to complete black before fading into next clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: p < 0.5 ? 1 - p * 2 : 0 },
      toStyle: { opacity: p >= 0.5 ? (p - 0.5) * 2 : 0 },
      overlayStyle: {
        background: '#000000',
        opacity: p < 0.5 ? p * 2 : (1 - p) * 2,
      },
    }),
  },
  {
    id: 'basic-3',
    name: 'Fade to White',
    category: 'basic',
    description: 'Luminous dip to pure white before revealing next scene.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: p < 0.5 ? 1 - p * 2 : 0 },
      toStyle: { opacity: p >= 0.5 ? (p - 0.5) * 2 : 0 },
      overlayStyle: {
        background: '#ffffff',
        opacity: p < 0.5 ? p * 2 : (1 - p) * 2,
      },
    }),
  },
  {
    id: 'basic-4',
    name: 'Flash Impact',
    category: 'basic',
    description: 'High-brightness white flash strobe at transition midpoint.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#ffffff',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 4),
      },
    }),
  },
  {
    id: 'basic-5',
    name: 'Color Blend Amber',
    category: 'basic',
    description: 'Warm golden amber tint crossfade transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `sepia(${p * 50}%)` },
      toStyle: { opacity: p, filter: `sepia(${(1 - p) * 50}%)` },
    }),
  },
  {
    id: 'basic-6',
    name: 'Soft Opacity Ramp',
    category: 'basic',
    description: 'Ultra-gentle S-curve opacity ramp.',
    renderOverlayStyle: (p: number) => {
      const easeP = p * p * (3 - 2 * p);
      return {
        fromStyle: { opacity: 1 - easeP },
        toStyle: { opacity: easeP },
      };
    },
  },
  {
    id: 'basic-7',
    name: 'Exposure Overburn',
    category: 'basic',
    description: 'Overexposed film burn bloom fading into next clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 200}%)` },
      toStyle: { opacity: p, filter: `brightness(${100 + (1 - p) * 200}%)` },
    }),
  },
  {
    id: 'basic-8',
    name: 'High Contrast Snap',
    category: 'basic',
    description: 'Punchy high contrast transition with sharp midpoint.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `contrast(${100 + p * 100}%)` },
      toStyle: { opacity: p, filter: `contrast(${100 + (1 - p) * 100}%)` },
    }),
  },
  {
    id: 'basic-9',
    name: 'Brightness Dip',
    category: 'basic',
    description: 'Temporary darkening dip between clips.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 - p * 80}%)` },
      toStyle: { opacity: p, filter: `brightness(${20 + p * 80}%)` },
    }),
  },
  {
    id: 'basic-10',
    name: 'Radial Vignette Fade',
    category: 'basic',
    description: 'Closing vignette shadow fading smoothly into new clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        boxShadow: `inset 0 0 ${p * 200}px rgba(0,0,0,0.9)`,
      },
    }),
  },
  {
    id: 'basic-11',
    name: 'Blur Defocus Blend',
    category: 'basic',
    description: 'Outgoing clip defocuses before incoming clip sharpens into focus.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `blur(${p * 12}px)` },
      toStyle: { opacity: p, filter: `blur(${(1 - p) * 12}px)` },
    }),
  },
  {
    id: 'basic-12',
    name: 'Desaturate Fade',
    category: 'basic',
    description: 'Grayscale desaturation midpoint transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `grayscale(${p * 100}%)` },
      toStyle: { opacity: p, filter: `grayscale(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'basic-13',
    name: 'Sepia Dip',
    category: 'basic',
    description: 'Vintage sepia brown wash transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `sepia(${p * 100}%)` },
      toStyle: { opacity: p, filter: `sepia(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'basic-14',
    name: 'Dark Edge Dissolve',
    category: 'basic',
    description: 'Edge shadow dissolve with subtle vignette flare.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 - p * 30}%)` },
      toStyle: { opacity: p, filter: `brightness(${70 + p * 30}%)` },
    }),
  },
  {
    id: 'basic-15',
    name: 'Invert Flash Cut',
    category: 'basic',
    description: 'Strobe negative color inversion at transition midpoint.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: p > 0.4 && p < 0.6 ? 'invert(100%)' : 'none' },
      toStyle: { opacity: p, filter: p > 0.4 && p < 0.6 ? 'invert(100%)' : 'none' },
    }),
  },
  {
    id: 'basic-16',
    name: 'Invert Soft Fade',
    category: 'basic',
    description: 'Smooth inverted color gradient crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `invert(${p * 50}%)` },
      toStyle: { opacity: p, filter: `invert(${(1 - p) * 50}%)` },
    }),
  },
  {
    id: 'basic-17',
    name: 'Hue Shift Fade',
    category: 'basic',
    description: 'Rainbow hue spectrum rotation during dissolve.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `hue-rotate(${p * 180}deg)` },
      toStyle: { opacity: p, filter: `hue-rotate(${(1 - p) * -180}deg)` },
    }),
  },
  {
    id: 'basic-18',
    name: 'Cyan Dip',
    category: 'basic',
    description: 'Cool cyan lighting flash transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#06b6d4',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 3) * 0.4,
      },
    }),
  },
  {
    id: 'basic-19',
    name: 'Magenta Blend',
    category: 'basic',
    description: 'Neon magenta backlight crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#ec4899',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 3) * 0.4,
      },
    }),
  },
  {
    id: 'basic-20',
    name: 'Amber Sunset Dip',
    category: 'basic',
    description: 'Warm golden sunset lighting transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#f59e0b',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 3) * 0.4,
      },
    }),
  },
  {
    id: 'basic-21',
    name: 'Monochrome Shadow Fade',
    category: 'basic',
    description: 'Deep black and white shadow crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `grayscale(${p * 100}%) contrast(${100 + p * 40}%)` },
      toStyle: { opacity: p, filter: `grayscale(${(1 - p) * 100}%) contrast(${140 - p * 40}%)` },
    }),
  },
  {
    id: 'basic-22',
    name: 'Highlight Bloom Blend',
    category: 'basic',
    description: 'Soft lighting leak bloom crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 50}%) blur(${p * 4}px)` },
      toStyle: { opacity: p, filter: `brightness(${150 - p * 50}%) blur(${(1 - p) * 4}px)` },
    }),
  },
  {
    id: 'basic-23',
    name: 'Shadow Lift Cut',
    category: 'basic',
    description: 'Lifted matte shadow transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 20}%) contrast(${100 - p * 30}%)` },
      toStyle: { opacity: p, filter: `brightness(${120 - p * 20}%) contrast(${70 + p * 30}%)` },
    }),
  },
  {
    id: 'basic-24',
    name: 'Cross Dissolve Curved',
    category: 'basic',
    description: 'Non-linear smooth exponential opacity dissolve.',
    renderOverlayStyle: (p: number) => {
      const curve = Math.pow(p, 1.5);
      return {
        fromStyle: { opacity: 1 - curve },
        toStyle: { opacity: curve },
      };
    },
  },
  {
    id: 'basic-25',
    name: 'Quick Flash Snap',
    category: 'basic',
    description: 'Ultra-fast 100ms camera flash snap transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#ffffff',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 8),
      },
    }),
  },
  {
    id: 'basic-26',
    name: 'Slow Black Hold',
    category: 'basic',
    description: 'Extended black pause before next clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: p < 0.4 ? 1 - p * 2.5 : 0 },
      toStyle: { opacity: p > 0.6 ? (p - 0.6) * 2.5 : 0 },
      overlayStyle: {
        background: '#000000',
        opacity: p < 0.4 ? p * 2.5 : p > 0.6 ? (1 - p) * 2.5 : 1,
      },
    }),
  },
  {
    id: 'basic-27',
    name: 'White Studio Glow',
    category: 'basic',
    description: 'High-end studio light wash dissolve.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 80}%)` },
      toStyle: { opacity: p, filter: `brightness(${180 - p * 80}%)` },
    }),
  },
  {
    id: 'basic-28',
    name: 'Soft Color Defocus',
    category: 'basic',
    description: 'Soft color defocus blur crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `blur(${p * 15}px) saturate(${100 + p * 50}%)` },
      toStyle: { opacity: p, filter: `blur(${(1 - p) * 15}px) saturate(${150 - p * 50}%)` },
    }),
  },
  {
    id: 'basic-29',
    name: 'Film Burn Overexposure',
    category: 'basic',
    description: 'Analog film end-of-reel light burn overexposure.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 150}%) sepia(${p * 40}%)` },
      toStyle: { opacity: p, filter: `brightness(${250 - p * 150}%) sepia(${(1 - p) * 40}%)` },
    }),
  },
  {
    id: 'basic-30',
    name: 'Contrast Punch Fade',
    category: 'basic',
    description: 'Sharpened contrast punch crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `contrast(${100 + p * 80}%)` },
      toStyle: { opacity: p, filter: `contrast(${180 - p * 80}%)` },
    }),
  },
  {
    id: 'basic-31',
    name: 'Soft Feathered Vignette Dip',
    category: 'basic',
    description: 'Vignette feathered border darkening cut.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        boxShadow: `inset 0 0 ${p * 180}px rgba(0,0,0,0.85)`,
      },
    }),
  },
  {
    id: 'basic-32',
    name: 'Vivid Saturation Pop',
    category: 'basic',
    description: 'Hyper-saturated color boost crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `saturate(${100 + p * 120}%)` },
      toStyle: { opacity: p, filter: `saturate(${220 - p * 120}%)` },
    }),
  },
  {
    id: 'basic-33',
    name: 'Equal Opacity Overlap',
    category: 'basic',
    description: 'Balanced linear crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
    }),
  },
  {
    id: 'basic-34',
    name: 'Dreamy Soft Focus',
    category: 'basic',
    description: 'Romantic soft-focus glow crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `blur(${p * 8}px) brightness(${100 + p * 20}%)` },
      toStyle: { opacity: p, filter: `blur(${(1 - p) * 8}px) brightness(${120 - p * 20}%)` },
    }),
  },
  {
    id: 'basic-35',
    name: 'Golden Sunset Wash',
    category: 'basic',
    description: 'Amber golden hour wash dissolve.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `sepia(${p * 60}%) saturate(${100 + p * 50}%)` },
      toStyle: { opacity: p, filter: `sepia(${(1 - p) * 60}%) saturate(${150 - p * 50}%)` },
    }),
  },
  {
    id: 'basic-36',
    name: 'Icy Blue Chill Dip',
    category: 'basic',
    description: 'Cold winter cyan-blue flash transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `hue-rotate(${p * 90}deg)` },
      toStyle: { opacity: p, filter: `hue-rotate(${(1 - p) * 90}deg)` },
    }),
  },
  {
    id: 'basic-37',
    name: 'Emerald Matrix Dip',
    category: 'basic',
    description: 'Deep green matrix flash transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `hue-rotate(${p * 60}deg)` },
      toStyle: { opacity: p, filter: `hue-rotate(${(1 - p) * 60}deg)` },
    }),
  },
  {
    id: 'basic-38',
    name: 'Crimson Red Cut',
    category: 'basic',
    description: 'Dramatic deep red lighting flash.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#dc2626',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 3) * 0.45,
      },
    }),
  },
  {
    id: 'basic-39',
    name: 'Soft Vintage Sepia Cut',
    category: 'basic',
    description: 'Antique sepia brown crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `sepia(${p * 70}%)` },
      toStyle: { opacity: p, filter: `sepia(${(1 - p) * 70}%)` },
    }),
  },
  {
    id: 'basic-40',
    name: 'Commercial Bright Wash',
    category: 'basic',
    description: 'Ultra-clean commercial brightness dissolve.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 60}%)` },
      toStyle: { opacity: p, filter: `brightness(${160 - p * 60}%)` },
    }),
  },
  {
    id: 'basic-41',
    name: 'Dark Room Photo Cut',
    category: 'basic',
    description: 'Red darkroom safelight transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#991b1b',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 3) * 0.5,
      },
    }),
  },
  {
    id: 'basic-42',
    name: 'Neon Purple Glow Cut',
    category: 'basic',
    description: 'Synthwave purple glow transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#a855f7',
        opacity: Math.max(0, 1 - Math.abs(p - 0.5) * 3) * 0.4,
      },
    }),
  },
  {
    id: 'basic-43',
    name: 'Solarize Inversion Flash',
    category: 'basic',
    description: 'Midpoint solarization color inversion cut.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `invert(${Math.sin(p * Math.PI) * 80}%)` },
      toStyle: { opacity: p, filter: `invert(${Math.sin(p * Math.PI) * 80}%)` },
    }),
  },
  {
    id: 'basic-44',
    name: 'Lifted Matte Fade',
    category: 'basic',
    description: 'Soft lifted charcoal shadow crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 + p * 15}%) contrast(${100 - p * 20}%)` },
      toStyle: { opacity: p, filter: `brightness(${115 - p * 15}%) contrast(${80 + p * 20}%)` },
    }),
  },
  {
    id: 'basic-45',
    name: 'Warm Film Light Leak',
    category: 'basic',
    description: 'Analog camera corner light leak crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: 'radial-gradient(circle at 90% 10%, rgba(245,158,11,0.4) 0%, transparent 60%)',
        opacity: Math.sin(p * Math.PI),
      },
    }),
  },
  {
    id: 'basic-46',
    name: 'Cool Slate Gray Cut',
    category: 'basic',
    description: 'Muted cool slate gray color crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `saturate(${100 - p * 50}%)` },
      toStyle: { opacity: p, filter: `saturate(${50 + p * 50}%)` },
    }),
  },
  {
    id: 'basic-47',
    name: 'Soft Lens Flare Leak',
    category: 'basic',
    description: 'Gentle lens flare glare transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: 'radial-gradient(circle at 20% 20%, rgba(254,240,138,0.4) 0%, transparent 50%)',
        opacity: Math.sin(p * Math.PI),
      },
    }),
  },
  {
    id: 'basic-48',
    name: 'Strobe White Pulse Dip',
    category: 'basic',
    description: 'Double white flash strobe transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
      overlayStyle: {
        background: '#ffffff',
        opacity: Math.abs(Math.sin(p * Math.PI * 2)) * 0.6,
      },
    }),
  },
  {
    id: 'basic-49',
    name: 'Velvet Midnight Fade',
    category: 'basic',
    description: 'Rich dark velvet shadow crossfade.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, filter: `brightness(${100 - p * 50}%)` },
      toStyle: { opacity: p, filter: `brightness(${50 + p * 50}%)` },
    }),
  },
  {
    id: 'basic-50',
    name: 'Master Clean Dissolve',
    category: 'basic',
    description: 'Universal pristine professional crossfade transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { opacity: p },
    }),
  },
];
