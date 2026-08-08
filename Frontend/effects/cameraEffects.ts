import { VideoEffect } from './types';

export const CAMERA_EFFECTS: VideoEffect[] = [
  {
    id: 'cam-1',
    name: 'Action Cam Shake',
    category: 'camera',
    description: 'High-intensity action camera vibration and jitter.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 25) * 6}px, ${Math.cos(t * 30) * 6}px) scale(1.04)`,
    }),
  },
  {
    id: 'cam-2',
    name: 'Handheld Drift',
    category: 'camera',
    description: 'Subtle organic handheld camera sway and drift.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 2) * 4}px, ${Math.cos(t * 1.5) * 4}px) rotate(${Math.sin(t) * 0.8}deg)`,
    }),
  },
  {
    id: 'cam-3',
    name: 'Smooth Push-In',
    category: 'camera',
    description: 'Continuous smooth forward zoom move.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.02 + (Math.sin(t * 1.2) + 1) * 0.05})`,
    }),
  },
  {
    id: 'cam-4',
    name: 'Slow Pull-Out',
    category: 'camera',
    description: 'Gentle backward camera pull revealing wider scene.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.1 - (Math.sin(t * 1.2) + 1) * 0.05})`,
    }),
  },
  {
    id: 'cam-5',
    name: 'Corner Tilt Left',
    category: 'camera',
    description: 'Dutch angle camera tilt favoring left side.',
    transformCss: 'rotate(-4deg) scale(1.05)',
  },
  {
    id: 'cam-6',
    name: 'Corner Tilt Right',
    category: 'camera',
    description: 'Dutch angle camera tilt favoring right side.',
    transformCss: 'rotate(4deg) scale(1.05)',
  },
  {
    id: 'cam-7',
    name: 'Dynamic Zoom Pulse',
    category: 'camera',
    description: 'Rhythmic camera pulse matching beat.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1 + Math.abs(Math.sin(t * 4)) * 0.08})`,
    }),
  },
  {
    id: 'cam-8',
    name: 'Lens Shake Heavy',
    category: 'camera',
    description: 'Heavy sudden camera impact shake.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 40) * 9}px, ${Math.cos(t * 45) * 9}px)`,
    }),
  },
  {
    id: 'cam-9',
    name: 'Vertigo Zoom',
    category: 'camera',
    description: 'Dolly zoom perspective distortion effect.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.05 + Math.sin(t * 2) * 0.1}) rotate(${Math.sin(t) * 1}deg)`,
      filterCss: `contrast(${100 + Math.sin(t * 2) * 15}%)`,
    }),
  },
  {
    id: 'cam-10',
    name: 'Macro Focus Pull',
    category: 'camera',
    description: 'Dynamic depth of field focus rack movement.',
    getDynamicStyle: (t: number) => ({
      filterCss: `blur(${Math.abs(Math.sin(t * 1.5)) * 3}px)`,
    }),
  },
  {
    id: 'cam-11',
    name: 'Snap Zoom In',
    category: 'camera',
    description: 'Rapid aggressive punch zoom on target.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.15 + (Math.sin(t * 6) > 0 ? 0.1 : 0)})`,
    }),
  },
  {
    id: 'cam-12',
    name: 'Snap Zoom Out',
    category: 'camera',
    description: 'Rapid pull-back camera snap.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.02 + (Math.cos(t * 6) > 0 ? 0.08 : 0)})`,
    }),
  },
  {
    id: 'cam-13',
    name: 'Dutch Angle Dynamic',
    category: 'camera',
    description: 'Continuously swaying Dutch tilt camera.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotate(${Math.sin(t * 1.8) * 5}deg) scale(1.06)`,
    }),
  },
  {
    id: 'cam-14',
    name: 'Crane Up Move',
    category: 'camera',
    description: 'Simulated vertical crane rising camera angle.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translateY(${Math.sin(t * 1.5) * -12}px) scale(1.03)`,
    }),
  },
  {
    id: 'cam-15',
    name: 'Crane Down Move',
    category: 'camera',
    description: 'Simulated vertical crane lowering camera angle.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translateY(${Math.sin(t * 1.5) * 12}px) scale(1.03)`,
    }),
  },
  {
    id: 'cam-16',
    name: 'Earthquake Shake',
    category: 'camera',
    description: 'Violent multi-axis camera rumble.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 50) * 12}px, ${Math.cos(t * 55) * 12}px) rotate(${Math.sin(t * 30) * 2}deg)`,
    }),
  },
  {
    id: 'cam-17',
    name: 'Steady Cam Drift',
    category: 'camera',
    description: 'Ultra-smooth floating stabilizer motion.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 0.8) * 6}px, ${Math.cos(t * 0.6) * 6}px)`,
    }),
  },
  {
    id: 'cam-18',
    name: 'Horizon Sway',
    category: 'camera',
    description: 'Gentle ocean-like rolling camera movement.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotate(${Math.sin(t * 1.2) * 3}deg) scale(1.04)`,
    }),
  },
  {
    id: 'cam-19',
    name: 'Orbit Wobble',
    category: 'camera',
    description: 'Circular orbital camera floating path.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.cos(t * 2) * 8}px, ${Math.sin(t * 2) * 8}px) scale(1.03)`,
    }),
  },
  {
    id: 'cam-20',
    name: 'Parallax Pan Left',
    category: 'camera',
    description: 'Horizontal tracking camera pan to the left.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translateX(${Math.sin(t * 1.5) * -15}px) scale(1.05)`,
    }),
  },
  {
    id: 'cam-21',
    name: 'Parallax Pan Right',
    category: 'camera',
    description: 'Horizontal tracking camera pan to the right.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translateX(${Math.sin(t * 1.5) * 15}px) scale(1.05)`,
    }),
  },
  {
    id: 'cam-22',
    name: 'Lens Breathing',
    category: 'camera',
    description: 'Focal length expanding and contracting rhythmically.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.02 + Math.sin(t * 3) * 0.04})`,
      filterCss: `blur(${Math.abs(Math.sin(t * 3)) * 0.8}px)`,
    }),
  },
  {
    id: 'cam-23',
    name: 'Whip Pan Left',
    category: 'camera',
    description: 'Fast energetic horizontal pan blur left.',
    getDynamicStyle: (t: number) => {
      const p = Math.sin(t * 4);
      return {
        transformCss: `translateX(${p * -20}px) scale(1.06)`,
        filterCss: `blur(${Math.abs(p) * 2}px)`,
      };
    },
  },
  {
    id: 'cam-24',
    name: 'Whip Pan Right',
    category: 'camera',
    description: 'Fast energetic horizontal pan blur right.',
    getDynamicStyle: (t: number) => {
      const p = Math.sin(t * 4);
      return {
        transformCss: `translateX(${p * 20}px) scale(1.06)`,
        filterCss: `blur(${Math.abs(p) * 2}px)`,
      };
    },
  },
  {
    id: 'cam-25',
    name: 'Whip Tilt Up',
    category: 'camera',
    description: 'Rapid upward camera whip gesture.',
    getDynamicStyle: (t: number) => {
      const p = Math.sin(t * 4);
      return {
        transformCss: `translateY(${p * -18}px) scale(1.06)`,
        filterCss: `blur(${Math.abs(p) * 2}px)`,
      };
    },
  },
  {
    id: 'cam-26',
    name: 'Whip Tilt Down',
    category: 'camera',
    description: 'Rapid downward camera whip gesture.',
    getDynamicStyle: (t: number) => {
      const p = Math.sin(t * 4);
      return {
        transformCss: `translateY(${p * 18}px) scale(1.06)`,
        filterCss: `blur(${Math.abs(p) * 2}px)`,
      };
    },
  },
  {
    id: 'cam-27',
    name: 'Camera Roll Counter-Clockwise',
    category: 'camera',
    description: 'Continuous slow counter-clockwise rotation.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotate(${((t * 15) % 360) * -1}deg) scale(1.12)`,
    }),
  },
  {
    id: 'cam-28',
    name: 'Camera Roll Clockwise',
    category: 'camera',
    description: 'Continuous slow clockwise rotation.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotate(${(t * 15) % 360}deg) scale(1.12)`,
    }),
  },
  {
    id: 'cam-29',
    name: 'Bouncing Cam Walk',
    category: 'camera',
    description: 'Walking footsteps camera bounce simulation.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 6) * 3}px, ${Math.abs(Math.sin(t * 12)) * -6}px)`,
    }),
  },
  {
    id: 'cam-30',
    name: 'Fast Zoom Burst',
    category: 'camera',
    description: 'Strobe-like zoom pulse explosion.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1 + (t % 0.5 < 0.1 ? 0.12 : 0)})`,
    }),
  },
  {
    id: 'cam-31',
    name: 'Gentle Sway',
    category: 'camera',
    description: 'Soft tripod head fluid panning sway.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t) * 5}px, 0px)`,
    }),
  },
  {
    id: 'cam-32',
    name: 'Target Lock Zoom',
    category: 'camera',
    description: 'Dynamic zoom centering into focal region.',
    transformCss: 'scale(1.18)',
  },
  {
    id: 'cam-33',
    name: 'Smooth Glide',
    category: 'camera',
    description: 'Floating slider camera motion across frame.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 0.9) * 12}px, ${Math.cos(t * 0.9) * 4}px)`,
    }),
  },
  {
    id: 'cam-34',
    name: 'Swivel Spin Left',
    category: 'camera',
    description: '3D-like panning swivel towards left edge.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotateY(${Math.sin(t * 2) * 10}deg) scale(1.05)`,
    }),
  },
  {
    id: 'cam-35',
    name: 'Swivel Spin Right',
    category: 'camera',
    description: '3D-like panning swivel towards right edge.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotateY(${Math.sin(t * 2) * -10}deg) scale(1.05)`,
    }),
  },
  {
    id: 'cam-36',
    name: 'Focus Zoom Flash',
    category: 'camera',
    description: 'Quick focus zoom with soft brightness bloom.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.02 + Math.abs(Math.sin(t * 3)) * 0.08})`,
      filterCss: `brightness(${100 + Math.abs(Math.sin(t * 3)) * 20}%)`,
    }),
  },
  {
    id: 'cam-37',
    name: 'Pendulum Swing',
    category: 'camera',
    description: 'Swinging overhead camera perspective movement.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotate(${Math.sin(t * 2.5) * 4}deg) translateY(${Math.cos(t * 2.5) * 4}px) scale(1.05)`,
    }),
  },
  {
    id: 'cam-38',
    name: 'Spin Zoom Vortex',
    category: 'camera',
    description: 'Twisting vortex camera rotation with zoom.',
    getDynamicStyle: (t: number) => ({
      transformCss: `rotate(${Math.sin(t * 3) * 8}deg) scale(${1.05 + Math.sin(t * 3) * 0.05})`,
    }),
  },
  {
    id: 'cam-39',
    name: 'Diagonal Tracking Drift',
    category: 'camera',
    description: 'Diagonal slider movement from top-left to bottom-right.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 1.5) * 10}px, ${Math.sin(t * 1.5) * 10}px) scale(1.04)`,
    }),
  },
  {
    id: 'cam-40',
    name: 'Micro Jitter',
    category: 'camera',
    description: 'Subtle high-frequency digital camera micro-vibration.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${(Math.random() - 0.5) * 3}px, ${(Math.random() - 0.5) * 3}px)`,
    }),
  },
  {
    id: 'cam-41',
    name: 'Hyper Pan Fast',
    category: 'camera',
    description: 'Ultra-fast horizontal streak camera pan.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translateX(${Math.sin(t * 8) * 25}px) scale(1.08)`,
      filterCss: `blur(${Math.abs(Math.sin(t * 8)) * 3}px)`,
    }),
  },
  {
    id: 'cam-42',
    name: 'Heavy Handheld Impact',
    category: 'camera',
    description: 'Strong impact recoil camera shake.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 35) * 10}px, ${Math.cos(t * 30) * 10}px) scale(${1.04 + Math.sin(t * 20) * 0.03})`,
    }),
  },
  {
    id: 'cam-43',
    name: 'Dolly Punch In',
    category: 'camera',
    description: 'Dramatic dolly camera forward punch.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.08 + Math.sin(t * 2) * 0.06})`,
    }),
  },
  {
    id: 'cam-44',
    name: 'Dolly Pull Back',
    category: 'camera',
    description: 'Dramatic dolly camera backward movement.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.08 - Math.sin(t * 2) * 0.06})`,
    }),
  },
  {
    id: 'cam-45',
    name: 'Shutter Bounce',
    category: 'camera',
    description: 'Camera shutter vibration pulse.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translateY(${Math.sin(t * 20) * 3}px) scale(1.02)`,
    }),
  },
  {
    id: 'cam-46',
    name: 'Kinetic Push Burst',
    category: 'camera',
    description: 'High-energy kinetic push zoom move.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.05 + Math.abs(Math.sin(t * 5)) * 0.1})`,
    }),
  },
  {
    id: 'cam-47',
    name: 'Lens Bounce Back',
    category: 'camera',
    description: 'Spring-loaded camera recoil bounce.',
    getDynamicStyle: (t: number) => ({
      transformCss: `scale(${1.03 + Math.sin(t * 10) * 0.04}) rotate(${Math.cos(t * 10) * 1}deg)`,
    }),
  },
  {
    id: 'cam-48',
    name: 'Overhead Float',
    category: 'camera',
    description: 'Drifting top-down aerial camera floating motion.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.cos(t * 1.2) * 7}px, ${Math.sin(t * 1.2) * 7}px) rotate(${Math.sin(t * 0.8) * 1.5}deg)`,
    }),
  },
  {
    id: 'cam-49',
    name: 'Tilt-Shift Miniature Focus',
    category: 'camera',
    description: 'Top and bottom selective focus blur creating miniature look.',
    filterCss: 'contrast(125%) saturate(140%)',
    overlayStyle: {
      boxShadow: 'inset 0 40px 30px -10px rgba(0,0,0,0.6), inset 0 -40px 30px -10px rgba(0,0,0,0.6)',
    },
  },
  {
    id: 'cam-50',
    name: 'Cinema Stabilized Glide',
    category: 'camera',
    description: 'High-end gimbal camera movement stabilization.',
    getDynamicStyle: (t: number) => ({
      transformCss: `translate(${Math.sin(t * 0.5) * 3}px, ${Math.cos(t * 0.4) * 3}px) scale(1.02)`,
    }),
  },
];
