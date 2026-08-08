import { TransitionItem } from './types';

export const ZOOM_TRANSITIONS: TransitionItem[] = [
  {
    id: 'zoom-1',
    name: 'Zoom In Punch',
    category: 'zoom',
    description: 'Outgoing clip zooms in while incoming clip zooms from center.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8})` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})` },
    }),
  },
  {
    id: 'zoom-2',
    name: 'Zoom Out Pull',
    category: 'zoom',
    description: 'Outgoing clip zooms out while incoming clip expands to full size.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4})` },
      toStyle: { opacity: p, transform: `scale(${1.4 - p * 0.4})` },
    }),
  },
  {
    id: 'zoom-3',
    name: 'Spin Zoom Clockwise',
    category: 'zoom',
    description: 'Clockwise rotating zoom transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) rotate(${p * 180}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotate(${(1 - p) * -180}deg)` },
    }),
  },
  {
    id: 'zoom-4',
    name: 'Spin Zoom Counter-Clockwise',
    category: 'zoom',
    description: 'Counter-clockwise rotating zoom transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) rotate(${p * -180}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotate(${(1 - p) * 180}deg)` },
    }),
  },
  {
    id: 'zoom-5',
    name: 'Punch In Explosion',
    category: 'zoom',
    description: 'Extreme rapid zoom punch explosion.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.5})` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6})` },
    }),
  },
  {
    id: 'zoom-6',
    name: 'Push Out Shrink',
    category: 'zoom',
    description: 'Shrinking scale reveal of incoming clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.6})` },
      toStyle: { opacity: p, transform: `scale(${1.8 - p * 0.8})` },
    }),
  },
  {
    id: 'zoom-7',
    name: 'Corner Zoom Top-Left',
    category: 'zoom',
    description: 'Zoom scaling anchored at top-left corner.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.7})`, transformOrigin: 'top left' },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, transformOrigin: 'top left' },
    }),
  },
  {
    id: 'zoom-8',
    name: 'Corner Zoom Top-Right',
    category: 'zoom',
    description: 'Zoom scaling anchored at top-right corner.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.7})`, transformOrigin: 'top right' },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, transformOrigin: 'top right' },
    }),
  },
  {
    id: 'zoom-9',
    name: 'Corner Zoom Bottom-Left',
    category: 'zoom',
    description: 'Zoom scaling anchored at bottom-left corner.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.7})`, transformOrigin: 'bottom left' },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, transformOrigin: 'bottom left' },
    }),
  },
  {
    id: 'zoom-10',
    name: 'Corner Zoom Bottom-Right',
    category: 'zoom',
    description: 'Zoom scaling anchored at bottom-right corner.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.7})`, transformOrigin: 'bottom right' },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, transformOrigin: 'bottom right' },
    }),
  },
  {
    id: 'zoom-11',
    name: 'Spiral Zoom In',
    category: 'zoom',
    description: 'Spinning spiral inward zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8}) rotate(${p * 270}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6}) rotate(${(1 - p) * -270}deg)` },
    }),
  },
  {
    id: 'zoom-12',
    name: 'Spiral Zoom Out',
    category: 'zoom',
    description: 'Spinning spiral outward zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.5}) rotate(${p * -270}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.6 - p * 0.6}) rotate(${(1 - p) * 270}deg)` },
    }),
  },
  {
    id: 'zoom-13',
    name: 'Elastic Bounce Zoom',
    category: 'zoom',
    description: 'Spring-loaded elastic scale bounce.',
    renderOverlayStyle: (p: number) => {
      const spring = Math.sin(p * Math.PI * 1.5) * 0.2;
      return {
        fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4 + spring})` },
        toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3 - spring})` },
      };
    },
  },
  {
    id: 'zoom-14',
    name: 'Anamorphic Stretch Zoom X',
    category: 'zoom',
    description: 'Horizontal widescreen anamorphic zoom stretch.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8}, ${1 - p * 0.3})` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5}, ${1.3 - p * 0.3})` },
    }),
  },
  {
    id: 'zoom-15',
    name: 'Anamorphic Stretch Zoom Y',
    category: 'zoom',
    description: 'Vertical cinema anamorphic zoom stretch.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3}, ${1 + p * 0.8})` },
      toStyle: { opacity: p, transform: `scale(${1.3 - p * 0.3}, ${0.5 + p * 0.5})` },
    }),
  },
  {
    id: 'zoom-16',
    name: 'Pulse Burst Zoom',
    category: 'zoom',
    description: 'Rhythmic strobe pulse scale zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + Math.sin(p * Math.PI * 3) * 0.15})` },
      toStyle: { opacity: p, transform: `scale(${0.8 + Math.sin(p * Math.PI * 3) * 0.15})` },
    }),
  },
  {
    id: 'zoom-17',
    name: 'Center Shatter Zoom',
    category: 'zoom',
    description: 'Center explosive scale zoom transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.2})`, filter: `blur(${p * 6}px)` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, filter: `blur(${(1 - p) * 6}px)` },
    }),
  },
  {
    id: 'zoom-18',
    name: 'Vortex Spin 360',
    category: 'zoom',
    description: 'Full 360 degree vortex spin scale transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6}) rotate(${p * 360}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6}) rotate(${(1 - p) * -360}deg)` },
    }),
  },
  {
    id: 'zoom-19',
    name: 'Blur Zoom Punch',
    category: 'zoom',
    description: 'Speed blur zoom punch with radial motion blur.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.9})`, filter: `blur(${p * 10}px)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4})`, filter: `blur(${(1 - p) * 10}px)` },
    }),
  },
  {
    id: 'zoom-20',
    name: 'Reverse Spin Zoom Out',
    category: 'zoom',
    description: 'Reversed spin rotation zoom pull-out.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4}) rotate(${p * -180}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.5 - p * 0.5}) rotate(${(1 - p) * 180}deg)` },
    }),
  },
  {
    id: 'zoom-21',
    name: 'Dynamic Scale Push',
    category: 'zoom',
    description: 'Continuous smooth camera push scale.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4})` },
      toStyle: { opacity: p, transform: `scale(${0.8 + p * 0.2})` },
    }),
  },
  {
    id: 'zoom-22',
    name: 'Zoom Blur Radial Out',
    category: 'zoom',
    description: 'Radial blur zoom pull-out transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3})`, filter: `blur(${p * 8}px)` },
      toStyle: { opacity: p, transform: `scale(${1.4 - p * 0.4})`, filter: `blur(${(1 - p) * 8}px)` },
    }),
  },
  {
    id: 'zoom-23',
    name: 'Focus Rack Zoom',
    category: 'zoom',
    description: 'Rack focus shift with simultaneous zoom scale.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})`, filter: `blur(${p * 8}px)` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3})`, filter: `blur(${(1 - p) * 8}px)` },
    }),
  },
  {
    id: 'zoom-24',
    name: 'Twister Zoom Fast',
    category: 'zoom',
    description: 'Ultra-fast twister spin scale punch.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.1}) rotate(${p * 540}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.3 + p * 0.7}) rotate(${(1 - p) * -540}deg)` },
    }),
  },
  {
    id: 'zoom-25',
    name: 'Hyper Zoom Speed',
    category: 'zoom',
    description: 'Hyperspeed warp zoom in transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + Math.pow(p, 2) * 2})` },
      toStyle: { opacity: p, transform: `scale(${0.3 + p * 0.7})` },
    }),
  },
  {
    id: 'zoom-26',
    name: 'Micro Rhythm Zoom',
    category: 'zoom',
    description: 'Subtle rhythmic beat zoom transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.2})` },
      toStyle: { opacity: p, transform: `scale(${0.9 + p * 0.1})` },
    }),
  },
  {
    id: 'zoom-27',
    name: 'Double Spin Zoom 720',
    category: 'zoom',
    description: 'Double 720 degree rotation zoom transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8}) rotate(${p * 720}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6}) rotate(${(1 - p) * -720}deg)` },
    }),
  },
  {
    id: 'zoom-28',
    name: 'Warp Tunnel Scale',
    category: 'zoom',
    description: 'Perspective warp tunnel scale transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.3}) rotate(${p * 45}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6}) rotate(${(1 - p) * -45}deg)` },
    }),
  },
  {
    id: 'zoom-29',
    name: 'Macro Zoom Punch',
    category: 'zoom',
    description: 'Extreme close-up macro scale zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.8})` },
      toStyle: { opacity: p, transform: `scale(${0.2 + p * 0.8})` },
    }),
  },
  {
    id: 'zoom-30',
    name: 'Outward Bloom Zoom',
    category: 'zoom',
    description: 'Zoom pull out with soft illumination bloom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4})`, filter: `brightness(${100 + p * 50}%)` },
      toStyle: { opacity: p, transform: `scale(${1.5 - p * 0.5})`, filter: `brightness(${150 - p * 50}%)` },
    }),
  },
  {
    id: 'zoom-31',
    name: 'Tilt-Shift Scale Zoom',
    category: 'zoom',
    description: 'Selective tilt-shift focus scale transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4})`, filter: `contrast(${100 + p * 30}%)` },
      toStyle: { opacity: p, transform: `scale(${0.8 + p * 0.2})`, filter: `contrast(${130 - p * 30}%)` },
    }),
  },
  {
    id: 'zoom-32',
    name: 'Diagonal Zoom Push',
    category: 'zoom',
    description: 'Diagonal scale push from top-left to bottom-right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6}) translate(${p * 20}px, ${p * 20}px)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) translate(${(1 - p) * -20}px, ${(1 - p) * -20}px)` },
    }),
  },
  {
    id: 'zoom-33',
    name: 'Diagonal Zoom Pull',
    category: 'zoom',
    description: 'Diagonal scale pull from bottom-right to top-left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.4}) translate(${p * -20}px, ${p * -20}px)` },
      toStyle: { opacity: p, transform: `scale(${1.4 - p * 0.4}) translate(${(1 - p) * 20}px, ${(1 - p) * 20}px)` },
    }),
  },
  {
    id: 'zoom-34',
    name: 'Bounce Overshoot Scale',
    category: 'zoom',
    description: 'Spring overshoot bounce scale transition.',
    renderOverlayStyle: (p: number) => {
      const bounce = Math.sin(p * Math.PI * 2) * 0.15;
      return {
        fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4 + bounce})` },
        toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3 - bounce})` },
      };
    },
  },
  {
    id: 'zoom-35',
    name: 'Snap Zoom In Fast',
    category: 'zoom',
    description: 'Instant aggressive snap zoom in.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.4})` },
      toStyle: { opacity: p, transform: `scale(${0.4 + p * 0.6})` },
    }),
  },
  {
    id: 'zoom-36',
    name: 'Snap Zoom Out Fast',
    category: 'zoom',
    description: 'Instant aggressive snap zoom pull-out.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.5})` },
      toStyle: { opacity: p, transform: `scale(${1.6 - p * 0.6})` },
    }),
  },
  {
    id: 'zoom-37',
    name: 'Orbital Path Spin Zoom',
    category: 'zoom',
    description: 'Orbital path rotation with zoom scaling.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5}) rotate(${p * 120}deg) translate(${p * 15}px, ${p * 15}px)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotate(${(1 - p) * -120}deg) translate(${(1 - p) * -15}px, ${(1 - p) * -15}px)` },
    }),
  },
  {
    id: 'zoom-38',
    name: 'Horizon Widescreen Zoom',
    category: 'zoom',
    description: 'Widescreen horizontal scale stretch zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8}, 1)` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5}, 1)` },
    }),
  },
  {
    id: 'zoom-39',
    name: 'Vertical Tall Widescreen Zoom',
    category: 'zoom',
    description: 'Vertical tall scale stretch zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(1, ${1 + p * 0.8})` },
      toStyle: { opacity: p, transform: `scale(1, ${0.5 + p * 0.5})` },
    }),
  },
  {
    id: 'zoom-40',
    name: 'Kinetic Energy Zoom',
    category: 'zoom',
    description: 'High kinetic energy scale burst.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.9})` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})` },
    }),
  },
  {
    id: 'zoom-41',
    name: 'Rotational Whip Zoom',
    category: 'zoom',
    description: 'Rotational whip motion with zoom scale blur.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.7}) rotate(${p * 90}deg)`, filter: `blur(${p * 6}px)` },
      toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4}) rotate(${(1 - p) * -90}deg)`, filter: `blur(${(1 - p) * 6}px)` },
    }),
  },
  {
    id: 'zoom-42',
    name: 'Pendulum Swing Zoom',
    category: 'zoom',
    description: 'Swinging pendulum rotation scale zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4}) rotate(${Math.sin(p * Math.PI) * 12}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3}) rotate(${Math.sin((1 - p) * Math.PI) * -12}deg)` },
    }),
  },
  {
    id: 'zoom-43',
    name: '3D Flip Scale In',
    category: 'zoom',
    description: '3D Y-axis flip rotation scaling in.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.4}) rotateY(${p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.7 + p * 0.3}) rotateY(${(1 - p) * -90}deg)` },
    }),
  },
  {
    id: 'zoom-44',
    name: '3D Flip Scale Out',
    category: 'zoom',
    description: '3D X-axis flip rotation scaling out.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.3}) rotateX(${p * 90}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.4 - p * 0.4}) rotateX(${(1 - p) * -90}deg)` },
    }),
  },
  {
    id: 'zoom-45',
    name: 'Vortex Tunnel Pull Out',
    category: 'zoom',
    description: 'Spiral vortex pull-out scale transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 - p * 0.5}) rotate(${p * -360}deg)` },
      toStyle: { opacity: p, transform: `scale(${1.6 - p * 0.6}) rotate(${(1 - p) * 360}deg)` },
    }),
  },
  {
    id: 'zoom-46',
    name: 'Elastic Spring Snap',
    category: 'zoom',
    description: 'Ultra-responsive spring scale snap.',
    renderOverlayStyle: (p: number) => {
      const spring = Math.sin(p * Math.PI * 2) * 0.1;
      return {
        fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.6 + spring})` },
        toStyle: { opacity: p, transform: `scale(${0.6 + p * 0.4 - spring})` },
      };
    },
  },
  {
    id: 'zoom-47',
    name: 'Smooth Slider Glide Zoom',
    category: 'zoom',
    description: 'Smooth slider glide with subtle forward zoom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.3}) translateX(${p * -30}px)` },
      toStyle: { opacity: p, transform: `scale(${0.8 + p * 0.2}) translateX(${(1 - p) * 30}px)` },
    }),
  },
  {
    id: 'zoom-48',
    name: 'Strobe Pulse Scale Burst',
    category: 'zoom',
    description: 'Strobe light with intense scale pulse.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.8})`, filter: `brightness(${100 + Math.sin(p * Math.PI * 4) * 40}%)` },
      toStyle: { opacity: p, transform: `scale(${0.5 + p * 0.5})`, filter: `brightness(${140 - Math.sin(p * Math.PI * 4) * 40}%)` },
    }),
  },
  {
    id: 'zoom-49',
    name: 'Whirlpool Zoom Spin',
    category: 'zoom',
    description: 'Fast whirlpool twisting zoom scale.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 1.2}) rotate(${p * 450}deg)` },
      toStyle: { opacity: p, transform: `scale(${0.3 + p * 0.7}) rotate(${(1 - p) * -450}deg)` },
    }),
  },
  {
    id: 'zoom-50',
    name: 'Master Cinema Zoom',
    category: 'zoom',
    description: 'Ultimate cinematic smooth zoom transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scale(${1 + p * 0.5})` },
      toStyle: { opacity: p, transform: `scale(${0.75 + p * 0.25})` },
    }),
  },
];
