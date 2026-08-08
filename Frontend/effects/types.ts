export type EffectCategory = 'camera' | 'cinematic' | 'retro' | string;

export interface VideoEffect {
  id: string;
  name: string;
  category: EffectCategory;
  description: string;
  filterCss?: string;
  transformCss?: string;
  overlayStyle?: React.CSSProperties;
  getDynamicStyle?: (time: number) => {
    filterCss?: string;
    transformCss?: string;
    overlayStyle?: React.CSSProperties;
  };
  icon?: any;
  [key: string]: any;
}

export type EffectModule = VideoEffect;
