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
}
