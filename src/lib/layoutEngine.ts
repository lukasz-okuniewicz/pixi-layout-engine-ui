import {LayoutName, LayoutOptions as LO} from 'pixi-layout-engine'

/**
 * Defines the complete set of options available for all layouts.
 */
export interface LayoutOptions extends LO {
  layoutName?: LayoutName
  radiusOffsetType?: 'none' | 'wave' | 'spiral_in' | 'random'
  componentCount?: number
}
