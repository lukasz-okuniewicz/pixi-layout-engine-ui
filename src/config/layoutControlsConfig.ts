import {layoutEnum, LayoutName} from 'pixi-layout-engine'
import {ExtendedLayoutOptions} from '@/components/LayoutController'

interface LayoutControlConfig {
  usesSimpleSpacing?: boolean
  isGrid?: boolean
  usesGapSpacing?: boolean
  usesSizing?: boolean
  usesColumns?: boolean
  usesAlignItems?: boolean
  usesJustifyItems?: boolean
  usesJustifyContent?: boolean
  usesGridFlow?: boolean
  isCircle?: boolean
  isPerimeter?: boolean
  isFlexWrap?: boolean
  isWave?: boolean
  isSpiral?: boolean
  isPath?: boolean
  isPerspective?: boolean
  isIsometric?: boolean
  isTreemap?: boolean
  isBubble?: boolean
  isVoronoi?: boolean
  isWordCloud?: boolean
  isDataDriven?: boolean
  isCirclePack?: boolean
  isCardHand?: boolean
  isStack?: boolean
  isPayoutZones?: boolean
  isSpreadExplosion?: boolean
  isPyramid?: boolean
  usesReverse?: boolean
  usesAngleControls?: boolean
  usesCornerOffset?: boolean
}

export const layoutControlsConfig: Record<LayoutName, LayoutControlConfig> = {
  [layoutEnum.LINE]: {
    usesSizing: true,
    usesSimpleSpacing: true,
    usesAlignItems: true,
    usesReverse: true,
    usesAngleControls: true,
  },
  [layoutEnum.SQUARE]: {
    usesGapSpacing: true,
    isGrid: true,
    usesSizing: true,
    usesColumns: true,
    usesAlignItems: true,
    usesJustifyItems: true,
    usesGridFlow: true,
    usesCornerOffset: true,
  },
  [layoutEnum.MASONRY]: {
    usesGapSpacing: true,
    usesColumns: true,
    usesSizing: true,
  },
  [layoutEnum.PERIMETER_GRID]: {
    usesGapSpacing: true,
    usesColumns: true,
    isPerimeter: true,
    usesSizing: true,
    usesCornerOffset: true,
  },
  [layoutEnum.FLEX_WRAP]: {
    usesGapSpacing: true,
    usesSizing: true,
    usesAlignItems: true,
    usesJustifyContent: true,
    isFlexWrap: true,
  },
  [layoutEnum.CIRCLE]: {
    isCircle: true,
    usesSizing: true,
  },
  [layoutEnum.SPIRAL]: {
    isSpiral: true,
    usesSizing: true,
  },
  [layoutEnum.PHYLLOTAXIS]: {
    usesSimpleSpacing: true,
    usesSizing: true,
  },
  [layoutEnum.WAVE]: {
    usesSizing: true,
    usesSimpleSpacing: true,
    isWave: true,
  },
  [layoutEnum.PATH]: {
    isPath: true,
    usesSizing: true,
  },
  [layoutEnum.PERSPECTIVE]: {
    usesColumns: true,
    isPerspective: true,
    usesSizing: true,
  },
  [layoutEnum.ISOMETRIC]: {
    usesColumns: true,
    isIsometric: true,
    usesSizing: true,
  },
  [layoutEnum.WORD_CLOUD]: {
    isWordCloud: true,
    isDataDriven: true,
    usesSizing: true,
  },
  [layoutEnum.BUBBLE]: {
    isBubble: true,
    isDataDriven: true,
    usesSizing: true,
  },
  [layoutEnum.TREEMAP]: {
    isTreemap: true,
    isDataDriven: true,
    usesSizing: true,
  },
  [layoutEnum.VORONOI]: {
    isVoronoi: true,
    isDataDriven: true,
    usesSizing: true,
  },
  [layoutEnum.CIRCLE_PACK]: {
    isDataDriven: true,
    isCirclePack: true,
    usesSizing: true,
  },
  [layoutEnum.CARD_HAND]: {
    isCardHand: true,
    usesSizing: true,
  },
  [layoutEnum.STACK]: {
    isStack: true,
    usesSizing: true,
  },
  [layoutEnum.PAYOUT_ZONES]: {
    isPayoutZones: true,
    usesSizing: true,
  },
  [layoutEnum.SPREAD_EXPLOSION]: {
    isSpreadExplosion: true,
    usesSizing: true,
  },
  [layoutEnum.PYRAMID]: {
    isPyramid: true,
    usesSizing: true,
  },
}

export const controlKeyMap: Record<keyof LayoutControlConfig, (keyof ExtendedLayoutOptions)[]> = {
  usesAngleControls: ['angle'],
  isGrid: ['useGridSpanning', 'demoSpan1_col', 'demoSpan1_row', 'demoSpan2_col', 'demoSpan2_row'],
  usesGridFlow: ['flowDirection', 'lastRowAlign', 'flowReverse'],
  usesColumns: ['columns'],
  usesSimpleSpacing: ['spacing'],
  usesGapSpacing: ['columnGap', 'rowGap'],
  usesSizing: ['sizingMode', 'fixedWidth', 'fixedHeight'],
  usesAlignItems: ['alignItems'],
  usesJustifyItems: ['justifyItems'],
  usesJustifyContent: ['justifyContent', 'maxWidth', 'maxHeight'],
  isCircle: [
    'radius',
    'innerRadius',
    'autoRadius',
    'spacing',
    'startAngle',
    'endAngle',
    'radiusOffsetType',
    'rotateToCenter',
    'radiusOffset',
    'sortBy',
    'sortDirection',
    'distributeByValue',
    'angularSpacing',
    'justifyArc',
    'spiralFactor',
    'rotationOffset',
    'radiusJitter',
    'angleJitter',
  ],
  isFlexWrap: ['maxWidth', 'maxHeight', 'alignContent'],
  isPerimeter: ['prioritizeCorners', 'startCorner', 'distribution', 'cornerSortBy', 'offset', 'rotation'],
  isWave: ['amplitude', 'frequency'],
  isSpiral: ['separation', 'tightness'],
  isPath: ['path', 'rotateToPath'],
  isPerspective: ['depthSpacing', 'scale'],
  isIsometric: ['tileWidth', 'tileHeight'],
  isDataDriven: [],
  isTreemap: ['width', 'height'],
  isBubble: ['iterations', 'centerStrength'],
  isCirclePack: ['boundsRadius', 'padding', 'iterations', 'centerStrength', 'radiusScale'],
  isCardHand: ['arcRadius', 'arcAngle'],
  isStack: ['offsetX', 'offsetY', 'offsetRotation'],
  isVoronoi: ['width', 'height'],
  isWordCloud: ['iterations', 'spiralTightness'],
  isPayoutZones: ['zones', 'zoneLayout'],
  isSpreadExplosion: ['maxRadius', 'spreadFactor', 'randomness'],
  isPyramid: [
    'tiers',
    'rowGap',
    'itemSpacing',
    'alignment',
    'direction',
    'tierAlignment',
    'staggerOffset',
    'useActualSize',
    'justifyTierContent',
    'sortBy',
    'sortDirection',
  ],
  usesReverse: ['isReversed'],
  usesCornerOffset: ['cornerOffset'],
}