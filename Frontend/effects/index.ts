import { VideoEffect, EffectCategory } from './types';
import { CAMERA_EFFECTS } from './cameraEffects';
import { CINEMATIC_EFFECTS } from './cinematicEffects';
import { RETRO_EFFECTS } from './retroEffects';

export * from './types';
export { CAMERA_EFFECTS } from './cameraEffects';
export { CINEMATIC_EFFECTS } from './cinematicEffects';
export { RETRO_EFFECTS } from './retroEffects';

export const ALL_EFFECTS: VideoEffect[] = [
  ...CAMERA_EFFECTS,
  ...CINEMATIC_EFFECTS,
  ...RETRO_EFFECTS,
];

export const EFFECTS_BY_CATEGORY: Record<EffectCategory, VideoEffect[]> = {
  camera: CAMERA_EFFECTS,
  cinematic: CINEMATIC_EFFECTS,
  retro: RETRO_EFFECTS,
};

export function getEffectById(id: string): VideoEffect | undefined {
  return ALL_EFFECTS.find((e) => e.id === id);
}
