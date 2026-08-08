import { TransitionItem, TransitionCategory } from './types';
import { BASIC_TRANSITIONS } from './basicTransitions';
import { ZOOM_TRANSITIONS } from './zoomTransitions';
import { SWIPE_TRANSITIONS } from './swipeTransitions';

export * from './types';
export { BASIC_TRANSITIONS } from './basicTransitions';
export { ZOOM_TRANSITIONS } from './zoomTransitions';
export { SWIPE_TRANSITIONS } from './swipeTransitions';

export const ALL_TRANSITIONS: TransitionItem[] = [
  ...BASIC_TRANSITIONS,
  ...ZOOM_TRANSITIONS,
  ...SWIPE_TRANSITIONS,
];

export const TRANSITIONS_BY_CATEGORY: Record<TransitionCategory, TransitionItem[]> = {
  basic: BASIC_TRANSITIONS,
  zoom: ZOOM_TRANSITIONS,
  swipe: SWIPE_TRANSITIONS,
};

export function getTransitionById(id: string): TransitionItem | undefined {
  return ALL_TRANSITIONS.find((t) => t.id === id);
}
