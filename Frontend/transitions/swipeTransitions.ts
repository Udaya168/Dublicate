import { TransitionItem } from './types';

export const SWIPE_TRANSITIONS: TransitionItem[] = [
  {
    id: 'swipe-1',
    name: 'Swipe Left',
    category: 'swipe',
    description: 'Incoming clip swipes in from right to left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-2',
    name: 'Swipe Right',
    category: 'swipe',
    description: 'Incoming clip swipes in from left to right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-3',
    name: 'Swipe Up',
    category: 'swipe',
    description: 'Incoming clip swipes in from bottom to top.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${-p * 100}%)` },
      toStyle: { transform: `translateY(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-4',
    name: 'Swipe Down',
    category: 'swipe',
    description: 'Incoming clip swipes in from top to bottom.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${p * 100}%)` },
      toStyle: { transform: `translateY(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-5',
    name: 'Push Left',
    category: 'swipe',
    description: 'Outgoing clip is pushed out to the left by incoming clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-6',
    name: 'Push Right',
    category: 'swipe',
    description: 'Outgoing clip is pushed out to the right by incoming clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-7',
    name: 'Push Up',
    category: 'swipe',
    description: 'Outgoing clip is pushed up by incoming clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${-p * 100}%)` },
      toStyle: { transform: `translateY(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-8',
    name: 'Push Down',
    category: 'swipe',
    description: 'Outgoing clip is pushed down by incoming clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${p * 100}%)` },
      toStyle: { transform: `translateY(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-9',
    name: 'Diagonal Swipe Top-Left',
    category: 'swipe',
    description: 'Diagonal swipe move towards top-left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translate(${-p * 100}%, ${-p * 100}%)` },
      toStyle: { transform: `translate(${(1 - p) * 100}%, ${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-10',
    name: 'Diagonal Swipe Top-Right',
    category: 'swipe',
    description: 'Diagonal swipe move towards top-right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translate(${p * 100}%, ${-p * 100}%)` },
      toStyle: { transform: `translate(${(1 - p) * -100}%, ${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-11',
    name: 'Diagonal Swipe Bottom-Left',
    category: 'swipe',
    description: 'Diagonal swipe move towards bottom-left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translate(${-p * 100}%, ${p * 100}%)` },
      toStyle: { transform: `translate(${(1 - p) * 100}%, ${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-12',
    name: 'Diagonal Swipe Bottom-Right',
    category: 'swipe',
    description: 'Diagonal swipe move towards bottom-right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translate(${p * 100}%, ${p * 100}%)` },
      toStyle: { transform: `translate(${(1 - p) * -100}%, ${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-13',
    name: 'Split Wipe Horizontal',
    category: 'swipe',
    description: 'Split wipe outwards horizontally from center.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { clipPath: `inset(0 ${p * 50}% 0 ${p * 50}%)` },
      toStyle: { opacity: 1 },
    }),
  },
  {
    id: 'swipe-14',
    name: 'Split Wipe Vertical',
    category: 'swipe',
    description: 'Split wipe outwards vertically from center.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { clipPath: `inset(${p * 50}% 0 ${p * 50}% 0)` },
      toStyle: { opacity: 1 },
    }),
  },
  {
    id: 'swipe-15',
    name: 'Door Open Swipe',
    category: 'swipe',
    description: 'Double doors opening horizontally to reveal next clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { clipPath: `inset(0 ${p * 50}% 0 ${p * 50}%)` },
      toStyle: { opacity: p },
    }),
  },
  {
    id: 'swipe-16',
    name: 'Door Close Swipe',
    category: 'swipe',
    description: 'Double doors closing horizontally to cover previous clip.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p },
      toStyle: { clipPath: `inset(0 ${(1 - p) * 50}% 0 ${(1 - p) * 50}%)` },
    }),
  },
  {
    id: 'swipe-17',
    name: 'Band Swipe Left',
    category: 'swipe',
    description: 'Horizontal band strip swipe left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%) scale(${1 - p * 0.1})` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-18',
    name: 'Band Swipe Right',
    category: 'swipe',
    description: 'Horizontal band strip swipe right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%) scale(${1 - p * 0.1})` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-19',
    name: 'Slanted Swipe Left',
    category: 'swipe',
    description: 'Angled slanted swipe move left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%) skewX(-12deg)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%) skewX(-12deg)` },
    }),
  },
  {
    id: 'swipe-20',
    name: 'Slanted Swipe Right',
    category: 'swipe',
    description: 'Angled slanted swipe move right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%) skewX(12deg)` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%) skewX(12deg)` },
    }),
  },
  {
    id: 'swipe-21',
    name: 'Slide Bounce Left',
    category: 'swipe',
    description: 'Slide left transition with elastic spring bounce.',
    renderOverlayStyle: (p: number) => {
      const bounce = Math.sin(p * Math.PI * 1.5) * 8;
      return {
        fromStyle: { transform: `translateX(${-p * 100 + bounce}%)` },
        toStyle: { transform: `translateX(${(1 - p) * 100 - bounce}%)` },
      };
    },
  },
  {
    id: 'swipe-22',
    name: 'Slide Bounce Right',
    category: 'swipe',
    description: 'Slide right transition with elastic spring bounce.',
    renderOverlayStyle: (p: number) => {
      const bounce = Math.sin(p * Math.PI * 1.5) * 8;
      return {
        fromStyle: { transform: `translateX(${p * 100 - bounce}%)` },
        toStyle: { transform: `translateX(${(1 - p) * -100 + bounce}%)` },
      };
    },
  },
  {
    id: 'swipe-23',
    name: 'Slide Bounce Up',
    category: 'swipe',
    description: 'Slide up transition with elastic spring bounce.',
    renderOverlayStyle: (p: number) => {
      const bounce = Math.sin(p * Math.PI * 1.5) * 8;
      return {
        fromStyle: { transform: `translateY(${-p * 100 + bounce}%)` },
        toStyle: { transform: `translateY(${(1 - p) * 100 - bounce}%)` },
      };
    },
  },
  {
    id: 'swipe-24',
    name: 'Slide Bounce Down',
    category: 'swipe',
    description: 'Slide down transition with elastic spring bounce.',
    renderOverlayStyle: (p: number) => {
      const bounce = Math.sin(p * Math.PI * 1.5) * 8;
      return {
        fromStyle: { transform: `translateY(${p * 100 - bounce}%)` },
        toStyle: { transform: `translateY(${(1 - p) * -100 + bounce}%)` },
      };
    },
  },
  {
    id: 'swipe-25',
    name: 'Parallax Slide Left',
    category: 'swipe',
    description: 'Differential speed parallax slide left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 40}%)`, opacity: 1 - p },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-26',
    name: 'Parallax Slide Right',
    category: 'swipe',
    description: 'Differential speed parallax slide right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 40}%)`, opacity: 1 - p },
      toStyle: { transform: `translateX(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-27',
    name: 'Parallax Slide Up',
    category: 'swipe',
    description: 'Differential speed parallax slide up.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${-p * 40}%)`, opacity: 1 - p },
      toStyle: { transform: `translateY(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-28',
    name: 'Parallax Slide Down',
    category: 'swipe',
    description: 'Differential speed parallax slide down.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${p * 40}%)`, opacity: 1 - p },
      toStyle: { transform: `translateY(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-29',
    name: 'Circular Mask Wipe',
    category: 'swipe',
    description: 'Expanding circular radial wipe transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { clipPath: `circle(${(1 - p) * 75}% at 50% 50%)` },
      toStyle: { opacity: p },
    }),
  },
  {
    id: 'swipe-30',
    name: 'Diamond Mask Wipe',
    category: 'swipe',
    description: 'Expanding diamond shape wipe transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { clipPath: `polygon(50% ${p * 50}%, ${100 - p * 50}% 50%, 50% ${100 - p * 50}%, ${p * 50}% 50%)` },
      toStyle: { opacity: p },
    }),
  },
  {
    id: 'swipe-31',
    name: 'Curtain Reveal Left',
    category: 'swipe',
    description: 'Curtain slide left reveal of incoming scene.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%)` },
      toStyle: { opacity: 1 },
    }),
  },
  {
    id: 'swipe-32',
    name: 'Curtain Reveal Right',
    category: 'swipe',
    description: 'Curtain slide right reveal of incoming scene.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%)` },
      toStyle: { opacity: 1 },
    }),
  },
  {
    id: 'swipe-33',
    name: 'Multi-Strip Vertical Blind',
    category: 'swipe',
    description: 'Vertical blind slats swipe transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scaleX(${1 - p})` },
      toStyle: { opacity: p, transform: `scaleX(${p})` },
    }),
  },
  {
    id: 'swipe-34',
    name: 'Multi-Strip Horizontal Blind',
    category: 'swipe',
    description: 'Horizontal blind slats swipe transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { opacity: 1 - p, transform: `scaleY(${1 - p})` },
      toStyle: { opacity: p, transform: `scaleY(${p})` },
    }),
  },
  {
    id: 'swipe-35',
    name: '3D Card Push Left',
    category: 'swipe',
    description: '3D card perspective push to the left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%) rotateY(${p * 30}deg)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%) rotateY(${(1 - p) * -30}deg)` },
    }),
  },
  {
    id: 'swipe-36',
    name: '3D Card Push Right',
    category: 'swipe',
    description: '3D card perspective push to the right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%) rotateY(${p * -30}deg)` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%) rotateY(${(1 - p) * 30}deg)` },
    }),
  },
  {
    id: 'swipe-37',
    name: '3D Page Turn Left',
    category: 'swipe',
    description: 'Book page turn 3D flip to the left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `rotateY(${p * -90}deg)`, transformOrigin: 'left center' },
      toStyle: { transform: `rotateY(${(1 - p) * 90}deg)`, transformOrigin: 'right center' },
    }),
  },
  {
    id: 'swipe-38',
    name: '3D Page Turn Right',
    category: 'swipe',
    description: 'Book page turn 3D flip to the right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `rotateY(${p * 90}deg)`, transformOrigin: 'right center' },
      toStyle: { transform: `rotateY(${(1 - p) * -90}deg)`, transformOrigin: 'left center' },
    }),
  },
  {
    id: 'swipe-39',
    name: 'Diagonal Push Up-Left',
    category: 'swipe',
    description: 'Diagonal push move toward top-left corner.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translate(${-p * 100}%, ${-p * 100}%)` },
      toStyle: { transform: `translate(${(1 - p) * 100}%, ${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-40',
    name: 'Diagonal Push Down-Right',
    category: 'swipe',
    description: 'Diagonal push move toward bottom-right corner.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translate(${p * 100}%, ${p * 100}%)` },
      toStyle: { transform: `translate(${(1 - p) * -100}%, ${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-41',
    name: 'Speed Ramp Swipe Left',
    category: 'swipe',
    description: 'Speed blurred directional swipe left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%)`, filter: `blur(${p * 8}px)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)`, filter: `blur(${(1 - p) * 8}px)` },
    }),
  },
  {
    id: 'swipe-42',
    name: 'Speed Ramp Swipe Right',
    category: 'swipe',
    description: 'Speed blurred directional swipe right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%)`, filter: `blur(${p * 8}px)` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%)`, filter: `blur(${(1 - p) * 8}px)` },
    }),
  },
  {
    id: 'swipe-43',
    name: 'Speed Ramp Swipe Up',
    category: 'swipe',
    description: 'Speed blurred directional swipe up.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${-p * 100}%)`, filter: `blur(${p * 8}px)` },
      toStyle: { transform: `translateY(${(1 - p) * 100}%)`, filter: `blur(${(1 - p) * 8}px)` },
    }),
  },
  {
    id: 'swipe-44',
    name: 'Speed Ramp Swipe Down',
    category: 'swipe',
    description: 'Speed blurred directional swipe down.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateY(${p * 100}%)`, filter: `blur(${p * 8}px)` },
      toStyle: { transform: `translateY(${(1 - p) * -100}%)`, filter: `blur(${(1 - p) * 8}px)` },
    }),
  },
  {
    id: 'swipe-45',
    name: 'Elastic Snap Slide Left',
    category: 'swipe',
    description: 'Snap slide left with high spring tension.',
    renderOverlayStyle: (p: number) => {
      const snap = Math.sin(p * Math.PI * 2) * 5;
      return {
        fromStyle: { transform: `translateX(${-p * 100 + snap}%)` },
        toStyle: { transform: `translateX(${(1 - p) * 100 - snap}%)` },
      };
    },
  },
  {
    id: 'swipe-46',
    name: 'Elastic Snap Slide Right',
    category: 'swipe',
    description: 'Snap slide right with high spring tension.',
    renderOverlayStyle: (p: number) => {
      const snap = Math.sin(p * Math.PI * 2) * 5;
      return {
        fromStyle: { transform: `translateX(${p * 100 - snap}%)` },
        toStyle: { transform: `translateX(${(1 - p) * -100 + snap}%)` },
      };
    },
  },
  {
    id: 'swipe-47',
    name: 'Shutter Blade Swipe',
    category: 'swipe',
    description: 'Camera shutter blade wipe move.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { clipPath: `polygon(0 0, ${100 - p * 100}% 0, ${100 - p * 100}% 100%, 0 100%)` },
      toStyle: { opacity: p },
    }),
  },
  {
    id: 'swipe-48',
    name: 'Smooth Gliding Push Left',
    category: 'swipe',
    description: 'Fluid cinematic push transition to the left.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)` },
    }),
  },
  {
    id: 'swipe-49',
    name: 'Smooth Gliding Push Right',
    category: 'swipe',
    description: 'Fluid cinematic push transition to the right.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * -100}%)` },
    }),
  },
  {
    id: 'swipe-50',
    name: 'Master Cinema Swipe',
    category: 'swipe',
    description: 'Pristine directional push swipe master transition.',
    renderOverlayStyle: (p: number) => ({
      fromStyle: { transform: `translateX(${-p * 100}%)` },
      toStyle: { transform: `translateX(${(1 - p) * 100}%)` },
    }),
  },
];
