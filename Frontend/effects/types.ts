export type EffectCategory =
  | 'camera'
  | 'blur'
  | 'glitch'
  | 'cinematic'
  | 'distortion'
  | 'motion'
  | 'light'
  | 'noise'
  | 'retro'
  | 'color'
  | 'vintage'
  | 'stylize'
  | 'creative';

export interface EffectModule {
  id: string;
  name: string;
  category: EffectCategory;
  icon: any;
  thumbnail: string;
  description: string;
  previewColor?: string;
  defaultParameters: Record<string, any>;
  adjustableParameters: Array<{
    name: string;
    key: string;
    type: 'number' | 'boolean' | 'select';
    min?: number;
    max?: number;
    step?: number;
    options?: string[];
  }>;
  previewRenderer: (
    ctx: CanvasRenderingContext2D,
    video: HTMLVideoElement,
    params: Record<string, any>,
    time: number,
    canvas: HTMLCanvasElement
  ) => void;
  ffmpegExportFilter: (params: Record<string, any>) => string[];
  shaderCode?: string;
}
