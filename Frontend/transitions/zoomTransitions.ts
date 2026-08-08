import { TransitionItem } from './types';

export const ZOOM_TRANSITIONS: TransitionItem[] = [
  {
    id: 'zoom-1',
    name: 'Zoom In Push',
    category: 'zoom',
    description: 'Smooth camera push-in zoom into next scene.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4})` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3})` },
    }),
  },
  {
    id: 'zoom-2',
    name: 'Zoom Out Pull',
    category: 'zoom',
    description: 'Camera pulls backward revealing wider view.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3})` },
      toStyle: { opacity: p, transform: `scale(${1.3 - p * 0.3})` },
    }),
  },
  {
    id: 'zoom-3',
    name: 'Hyper Speed Zoom In',
    category: 'zoom',
    description: 'Rapid ultra-fast forward zoom transition.',
    durationMs: 650,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 2.0})`, filter: `blur(${p * 15}px)` },
      toStyle: { opacity: p, transform: `scale(${0.3 + p * 0.7})`, filter: `blur(${(1 - p) * 15}px)` },
    }),
  },
  {
    id: 'zoom-4',
    name: 'Spin Zoom In Clockwise',
    category: 'zoom',
    description: 'Clockwise rotating zoom into next clip.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6}) rotate(${p * 180}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5}) rotate(${(p - 1) * 180}deg)` },
    }),
  },
  {
    id: 'zoom-5',
    name: 'Spin Zoom Out Counter-CW',
    category: 'zoom',
    description: 'Counter-clockwise spinning pull-out zoom.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4}) rotate(${-p * 180}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.5 - p * 0.5}) rotate(${(1 - p) * 180}deg)` },
    }),
  },
  {
    id: 'zoom-6',
    name: 'Bounce Punch Zoom',
    category: 'zoom',
    description: 'Dynamic spring bounce impact zoom.',
    durationMs: 750,
    renderOverlayStyle: (p: number) => {
      const bounce = Math.sin(p * Math.PI) * 0.25;
      return {
        fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.3 + bounce})` },
        toStyle: { opacity: p, transform: `scale(${0.8 + p * 0.2 - bounce})` },
      };
    },
  },
  {
    id: 'zoom-7',
    name: 'Elastic Zoom Out',
    category: 'zoom',
    description: 'Elastic rubber band snapping zoom pull.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => {
      const elastic = Math.sin(p * Math.PI * 2) * 0.15;
      return {
        fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3 + elastic})` },
        toStyle: { opacity: p, transform: `scale(${1.2 - p * 0.2 + elastic})` },
      };
    },
  },
  {
    id: 'zoom-8',
    name: 'Crash Zoom In',
    category: 'zoom',
    description: 'High-impact aggressive crash zoom forward.',
    durationMs: 600,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + Math.pow(p, 2) * 3.0})`, filter: `blur(${p * 20}px)` },
      toStyle: { opacity: p, transform: `scale(${0.2 + p * 0.8})`, filter: `blur(${(1 - p) * 20}px)` },
    }),
  },
  {
    id: 'zoom-9',
    name: 'Crash Zoom Out',
    category: 'zoom',
    description: 'High-impact aggressive crash zoom pull-back.',
    durationMs: 600,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - Math.pow(p, 2) * 0.6})`, filter: `blur(${p * 20}px)` },
      toStyle: { opacity: p, transform: `scale(${2.5 - p * 1.5})`, filter: `blur(${(1 - p) * 20}px)` },
    }),
  },
  {
    id: 'zoom-10',
    name: 'Whip Zoom Punch',
    category: 'zoom',
    description: 'Whip motion blur zoom transition.',
    durationMs: 700,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.2})`, filter: `blur(${p * 25}px)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6})`, filter: `blur(${(1 - p) * 25}px)` },
    }),
  },
  {
    id: 'zoom-11',
    name: 'Spiral Vortex In',
    category: 'zoom',
    description: 'Swirling 360-degree spiral zoom in.',
    durationMs: 900,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8}) rotate(${p * 360}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6}) rotate(${(p - 1) * 360}deg)` },
    }),
  },
  {
    id: 'zoom-12',
    name: 'Spiral Vortex Out',
    category: 'zoom',
    description: 'Swirling 360-degree spiral zoom out.',
    durationMs: 900,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.5}) rotate(${-p * 360}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.8 - p * 0.8}) rotate(${(1 - p) * 360}deg)` },
    }),
  },
  {
    id: 'zoom-13',
    name: 'Dolly Zoom Vertigo In',
    category: 'zoom',
    description: 'Classic Hitchcock Vertigo optical distortion in.',
    durationMs: 950,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})`, filter: `contrast(${100 + p * 50}%)` },
      toStyle: { opacity: p, transform: `scale(${1.4 - p * 0.4})`, filter: `contrast(${150 - p * 50}%)` },
    }),
  },
  {
    id: 'zoom-14',
    name: 'Dolly Zoom Vertigo Out',
    category: 'zoom',
    description: 'Reverse Hitchcock Vertigo distortion pull.',
    durationMs: 950,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4})`, filter: `contrast(${100 + p * 50}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})`, filter: `contrast(${150 - p * 50}%)` },
    }),
  },
  {
    id: 'zoom-15',
    name: 'Zoom Tilt Top-Left',
    category: 'zoom',
    description: 'Angled zoom pushing toward top-left corner.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) translate(${-p * 15}%, ${-p * 15}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(1 - p) * 15}%, ${(1 - p) * 15}%)` },
    }),
  },
  {
    id: 'zoom-16',
    name: 'Zoom Tilt Top-Right',
    category: 'zoom',
    description: 'Angled zoom pushing toward top-right corner.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) translate(${p * 15}%, ${-p * 15}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(p - 1) * 15}%, ${(1 - p) * 15}%)` },
    }),
  },
  {
    id: 'zoom-17',
    name: 'Zoom Tilt Bottom-Left',
    category: 'zoom',
    description: 'Angled zoom pushing toward bottom-left corner.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) translate(${-p * 15}%, ${p * 15}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(1 - p) * 15}%, ${(p - 1) * 15}%)` },
    }),
  },
  {
    id: 'zoom-18',
    name: 'Zoom Tilt Bottom-Right',
    category: 'zoom',
    description: 'Angled zoom pushing toward bottom-right corner.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) translate(${p * 15}%, ${p * 15}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(p - 1) * 15}%, ${(p - 1) * 15}%)` },
    }),
  },
  {
    id: 'zoom-19',
    name: 'Double Pulse Zoom',
    category: 'zoom',
    description: 'Rhythmic double zoom pulse impact cut.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => {
      const pulse = Math.sin(p * Math.PI * 3) * 0.15;
      return {
        fromStyle: { opacity: 1 - p, transform: `scale(${1 + pulse})` },
        toStyle: { opacity: p, transform: `scale(${1 + pulse})` },
      };
    },
  },
  {
    id: 'zoom-20',
    name: 'RGB Split Zoom In',
    category: 'zoom',
    description: 'Chromatic aberration RGB split zooming forward.',
    durationMs: 750,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6})`, filter: `drop-shadow(${p * 10}px 0 red) drop-shadow(${-p * 10}px 0 blue)` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})` },
    }),
  },
  {
    id: 'zoom-21',
    name: 'RGB Split Zoom Out',
    category: 'zoom',
    description: 'Chromatic aberration RGB split zooming backward.',
    durationMs: 750,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4})`, filter: `drop-shadow(${p * 10}px 0 cyan) drop-shadow(${-p * 10}px 0 magenta)` },
      toStyle: { opacity: p, transform: `scale(${1.4 - p * 0.4})` },
    }),
  },
  {
    id: 'zoom-22',
    name: 'Warp Speed Tunnel Zoom',
    category: 'zoom',
    description: 'Sci-fi hyper-drive warp tunnel zoom.',
    durationMs: 700,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 2.5})`, filter: `blur(${p * 30}px) brightness(${100 + p * 100}%)` },
      toStyle: { opacity: p, transform: `scale(${0.2 + p * 0.8})`, filter: `blur(${(1 - p) * 30}px)` },
    }),
  },
  {
    id: 'zoom-23',
    name: 'Snap Zoom Glitch',
    category: 'zoom',
    description: 'Digital video glitch accompanied by instant zoom snap.',
    durationMs: 650,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8}) skewX(${Math.sin(p * 20) * 10}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6})` },
    }),
  },
  {
    id: 'zoom-24',
    name: 'Focal Lens Bloom Zoom',
    category: 'zoom',
    description: 'Soft camera lens bloom during zoom push.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4})`, filter: `brightness(${100 + Math.sin(p * Math.PI) * 80}%) blur(${Math.sin(p * Math.PI) * 10}px)` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3})` },
    }),
  },
  {
    id: 'zoom-25',
    name: 'Parallax Layer Zoom Push',
    category: 'zoom',
    description: 'Multi-depth 3D parallax zoom forward.',
    durationMs: 900,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) perspective(500px) rotateX(${p * 15}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) perspective(500px) rotateX(${(1 - p) * -15}deg)` },
    }),
  },
  {
    id: 'zoom-26',
    name: 'Parallax Layer Zoom Pull',
    category: 'zoom',
    description: 'Multi-depth 3D parallax zoom backward.',
    durationMs: 900,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3}) perspective(500px) rotateY(${p * 15}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.3 - p * 0.3}) perspective(500px) rotateY(${(1 - p) * -15}deg)` },
    }),
  },
  {
    id: 'zoom-27',
    name: 'Horizontal Stretch Zoom',
    category: 'zoom',
    description: 'Anamorphic lens horizontal stretch zoom.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scaleX(${1 + p * 0.8}) scaleY(${1 - p * 0.2})` },
      toStyle: { opacity: p, transform: `scaleX(${0.4 + p * 0.6}) scaleY(${1.2 - p * 0.2})` },
    }),
  },
  {
    id: 'zoom-28',
    name: 'Vertical Stretch Zoom',
    category: 'zoom',
    description: 'Anamorphic lens vertical stretch zoom.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scaleY(${1 + p * 0.8}) scaleX(${1 - p * 0.2})` },
      toStyle: { opacity: p, transform: `scaleY(${0.4 + p * 0.6}) scaleX(${1.2 - p * 0.2})` },
    }),
  },
  {
    id: 'zoom-29',
    name: 'Spherical Lens Zoom Push',
    category: 'zoom',
    description: 'Fish-eye spherical lens curvature zoom.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6})`, borderRadius: `${p * 50}%` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, borderRadius: `${(1 - p) * 50}%` },
    }),
  },
  {
    id: 'zoom-30',
    name: 'Kinetic Punch Impact',
    category: 'zoom',
    description: 'High energy action video punch zoom cut.',
    durationMs: 650,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.7})` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})` },
    }),
  },
  {
    id: 'zoom-31',
    name: 'Zoom Rotate 90 deg CW',
    category: 'zoom',
    description: 'Quarter turn 90 degree rotating zoom in.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) rotate(${p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotate(${(p - 1) * 90}deg)` },
    }),
  },
  {
    id: 'zoom-32',
    name: 'Zoom Rotate 90 deg CCW',
    category: 'zoom',
    description: 'Quarter turn 90 degree counter-clockwise zoom.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) rotate(${-p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotate(${(1 - p) * 90}deg)` },
    }),
  },
  {
    id: 'zoom-33',
    name: 'Slow Motion Zoom Push',
    category: 'zoom',
    description: 'Long subtle gradual cinematic zoom push.',
    durationMs: 1200,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.2})` },
      toStyle: { opacity: p, transform: `scale(${0.9 + p * 0.1})` },
    }),
  },
  {
    id: 'zoom-34',
    name: 'Slow Motion Zoom Pull',
    category: 'zoom',
    description: 'Long subtle gradual cinematic zoom pull.',
    durationMs: 1200,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.15})` },
      toStyle: { opacity: p, transform: `scale(${1.15 - p * 0.15})` },
    }),
  },
  {
    id: 'zoom-35',
    name: 'Zoom Blur Dissolve',
    category: 'zoom',
    description: 'Motion blur trail combined with zoom in.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})`, filter: `blur(${p * 12}px)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})`, filter: `blur(${(1 - p) * 12}px)` },
    }),
  },
  {
    id: 'zoom-36',
    name: 'Vignette Zoom Darkening',
    category: 'zoom',
    description: 'Zoom in while dark edge vignette closes in.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4})` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3})` },
      overlayStyle: { boxShadow: `inset 0 0 ${Math.sin(p * Math.PI) * 120}px rgba(0,0,0,0.85)` },
    }),
  },
  {
    id: 'zoom-37',
    name: 'Gold Flare Zoom Punch',
    category: 'zoom',
    description: 'Warm gold lens flare bursts during zoom.',
    durationMs: 800,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})` },
      overlayStyle: { backgroundColor: '#f59e0b', opacity: Math.sin(p * Math.PI) * 0.5 },
    }),
  },
  {
    id: 'zoom-38',
    name: 'Cyber Cyan Zoom Flash',
    category: 'zoom',
    description: 'Futuristic cyan color flash on zoom cut.',
    durationMs: 750,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})` },
      overlayStyle: { backgroundColor: '#06b6d4', opacity: Math.sin(p * Math.PI) * 0.5 },
    }),
  },
  {
    id: 'zoom-39',
    name: 'Prism Split Zoom In',
    category: 'zoom',
    description: 'Multi-refraction optical prism split zoom.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6})`, filter: `contrast(130%) hue-rotate(${p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})` },
    }),
  },
  {
    id: 'zoom-40',
    name: '3D Flip Zoom In',
    category: 'zoom',
    description: 'Perspective 3D plane flip zooming forward.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) rotateY(${p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotateY(${(1 - p) * -90}deg)` },
    }),
  },
  {
    id: 'zoom-41',
    name: '3D Flip Zoom Out',
    category: 'zoom',
    description: 'Perspective 3D plane flip zooming backward.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3}) rotateX(${p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.3 - p * 0.3}) rotateX(${(1 - p) * -90}deg)` },
    }),
  },
  {
    id: 'zoom-42',
    name: 'Zoom Shutter Pulse',
    category: 'zoom',
    description: 'Camera mechanical shutter pulse zoom.',
    durationMs: 700,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4})`, filter: `brightness(${100 - Math.sin(p * Math.PI * 2) * 50}%)` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3})` },
    }),
  },
  {
    id: 'zoom-43',
    name: 'Optical Blur Zoom Push',
    category: 'zoom',
    description: 'High-end cinema lens blur zoom move.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})`, filter: `blur(${p * 18}px)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})`, filter: `blur(${(1 - p) * 18}px)` },
    }),
  },
  {
    id: 'zoom-44',
    name: 'Zoom In Center Punch',
    category: 'zoom',
    description: 'Clean center target punch zoom transition.',
    durationMs: 750,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.45})` },
      toStyle: { opacity: p, transform: `scale(${0.65 + p * 0.35})` },
    }),
  },
  {
    id: 'zoom-45',
    name: 'Zoom Out Center Pull',
    category: 'zoom',
    description: 'Clean center target pull-back zoom.',
    durationMs: 750,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.35})` },
      toStyle: { opacity: p, transform: `scale(${1.35 - p * 0.35})` },
    }),
  },
  {
    id: 'zoom-46',
    name: 'Diagonal Zoom Top-Left to Bottom-Right',
    category: 'zoom',
    description: 'Diagonal directional pan zoom movement.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) translate(${p * 20}%, ${p * 20}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(p - 1) * 20}%, ${(p - 1) * 20}%)` },
    }),
  },
  {
    id: 'zoom-47',
    name: 'Diagonal Zoom Bottom-Left to Top-Right',
    category: 'zoom',
    description: 'Diagonal ascending directional pan zoom.',
    durationMs: 850,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) translate(${p * 20}%, ${-p * 20}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(p - 1) * 20}%, ${(1 - p) * 20}%)` },
    }),
  },
  {
    id: 'zoom-48',
    name: 'Subtle Micro Zoom Push',
    category: 'zoom',
    description: 'Minimalist subtle micro camera nudge.',
    durationMs: 700,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.15})` },
      toStyle: { opacity: p, transform: `scale(${0.9 + p * 0.1})` },
    }),
  },
  {
    id: 'zoom-49',
    name: 'Subtle Micro Zoom Pull',
    category: 'zoom',
    description: 'Minimalist subtle micro camera pull.',
    durationMs: 700,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.12})` },
      toStyle: { opacity: p, transform: `scale(${1.12 - p * 0.12})` },
    }),
  },
  {
    id: 'zoom-50',
    name: 'Master Cinema Zoom Push',
    category: 'zoom',
    description: 'Ultimate master cinema optical zoom transition.',
    durationMs: 950,
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})`, filter: `contrast(${100 + Math.sin(p * Math.PI) * 20}%)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})`, filter: `contrast(${100 + Math.sin(p * Math.PI) * 20}%)` },
    }),
  },
];
