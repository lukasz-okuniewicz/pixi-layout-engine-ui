import { LayoutName, LayoutOptions as LO } from 'pixi-layout-engine'

/**
 * Defines the complete set of options available for all layouts.
 */
export interface LayoutOptions extends LO {
  layoutName?: LayoutName
  radiusOffsetType?: 'none' | 'wave' | 'spiral_in' | 'random'
  componentCount?: number
  cornerOffset?: number
  perspectiveY?: number
  depthScale?: number
  enableZIndex?: boolean
  globalRotation?: number;
  maxScale?: number;
  stagger?: number;
  refill?: boolean;
  spinDegrees?: number;
  itemAngleStep?: number;
  perspective?: number;
  excludeCorners?: boolean;
  orbitCount?: number;
  orbitSpacing?: number;
  orbitPhase?: number;
  dnaPitch?: number;
  dnaTwist?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'clockwise' | 'counter-clockwise';
  priorityDirection?: 'columns' | 'rows';
  overflowAlignment?: 'start' | 'center' | 'end' | 'justify-corners';
  equalDistribution?: boolean;
  ringCount?: number;
  ringSpacing?: number;
  ringPhase?: number;
  branchingFactor?: number;
  hTreeDepth?: number;
  hTreeSpacing?: number;
  fisheyeFocus?: number;
  fisheyeScale?: number;
  fisheyeSpread?: number;
  fanCurvature?: number;
  coverFlowCenter?: number;
  coverFlowSkew?: number;
  coverFlowDepth?: number;
  categoryProperty?: string;
  reelHeights?: number[];
  fixedColumnHeight?: number;
  jitter?: number;
  tumbleIntensity?: number;
  perspectiveScale?: number;
  cellHighlightIndices?: number[];
  cellHighlightOffset?: number;
  stretchStrength?: number | { x: number; y: number };
  stretchX?: number;
  stretchY?: number;
}
