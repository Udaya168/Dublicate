export type TransitionCategory = 'basic' | 'zoom' | 'swipe';

export interface TransitionItem {
  id: string;
  name: string;
  category: TransitionCategory;
  description: string;
  durationMs?: number;
  renderOverlayStyle?: (progress: number) => {
    fromStyle?: React.CSSProperties;
    toStyle?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
  };
}
