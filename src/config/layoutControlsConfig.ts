import { layoutEnum, LayoutName } from 'pixi-layout-engine'
import { ExtendedLayoutOptions } from '@/components/LayoutController'

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
  isOrbit?: boolean
  isDna?: boolean
  isReelSpinner?: boolean
  isConcentricRings?: boolean
  isSunflower?: boolean
  isHTree?: boolean
  isFisheye?: boolean
  isCircularFan?: boolean
  isPerspectiveStack?: boolean
  isCirclePackGrouped?: boolean
  isMegaways?: boolean
  isDiamondReel?: boolean
  usesReelHeights?: boolean
  isKeno80Grid?: boolean
  isRadialBallTumbler?: boolean
  isPrizeLadder?: boolean
  isRouletteBettingMat?: boolean
  isSemicircleSeating?: boolean
  isChipStack?: boolean
}

export const layoutControlsConfig: Partial<Record<LayoutName, LayoutControlConfig>> = {
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
  [layoutEnum.ORBIT]: {
    isOrbit: true,
    usesSizing: true,
  },
  [layoutEnum.DNA]: {
    isDna: true,
    usesSizing: true,
  },
  [layoutEnum.REEL_SPINNER]: {
    usesSizing: true,
    isReelSpinner: true,
    usesJustifyContent: true,
  },
  [layoutEnum.CONCENTRIC_RINGS]: {
    usesSizing: true,
    isConcentricRings: true,
  },
  [layoutEnum.SUNFLOWER]: {
    usesSizing: true,
    isDataDriven: true,
    isSunflower: true,
  },
  [layoutEnum.H_TREE]: {
    usesSizing: true,
    isHTree: true,
  },
  [layoutEnum.FISHEYE]: {
    usesSizing: true,
    isFisheye: true,
  },
  [layoutEnum.CIRCULAR_FAN]: {
    usesSizing: true,
    isCircularFan: true,
  },
  [layoutEnum.PERSPECTIVE_STACK]: {
    usesSizing: true,
    isPerspectiveStack: true,
  },
  [layoutEnum.CIRCLE_PACK_GROUPED]: {
    usesSizing: true,
    isDataDriven: true,
    isCirclePackGrouped: true,
  },
  [layoutEnum.MEGAWAYS]: {
    usesGapSpacing: true,
    usesSizing: true,
    usesReelHeights: true,
    isMegaways: true,
  },
  [layoutEnum.DIAMOND_REEL]: {
    usesGapSpacing: true,
    usesSizing: true,
    usesReelHeights: true,
    isDiamondReel: true,
  },
  [layoutEnum.KENO_80_GRID]: {
    usesGapSpacing: true,
    usesSizing: true,
    isKeno80Grid: true,
  },
  [layoutEnum.RADIAL_BALL_TUMBLER]: {
    usesSizing: true,
    isRadialBallTumbler: true,
  },
  [layoutEnum.PRIZE_LADDER]: {
    usesSizing: true,
    isPrizeLadder: true,
  },
  [layoutEnum.ROULETTE_BETTING_MAT]: {
    usesGapSpacing: true,
    usesSizing: true,
    usesAlignItems: true,
    usesJustifyItems: true,
    isRouletteBettingMat: true,
  },
  [layoutEnum.SEMICIRCLE_SEATING]: {
    usesSizing: true,
    isSemicircleSeating: true,
  },
  [layoutEnum.CHIP_STACK]: {
    usesSizing: true,
    isChipStack: true,
  },
}

export const controlKeyMap: Record<keyof LayoutControlConfig, (keyof ExtendedLayoutOptions)[]> = {
  usesAngleControls: ['angle'],
  isGrid: ['useGridSpanning', 'demoSpan1_col', 'demoSpan1_row', 'demoSpan2_col', 'demoSpan2_row'],
  usesGridFlow: ['flowDirection', 'lastRowAlign', 'flowReverse', 'blockWidth', 'blockHeight', 'honeycombOrientation'],
  usesColumns: ['columns'],
  usesSimpleSpacing: ['spacing'],
  usesGapSpacing: ['columnGap', 'rowGap', 'spacing'],
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
    'perspectiveY',
    'depthScale',
    'maxScale',
    'enableZIndex',
    'globalRotation',
  ],
  isFlexWrap: ['maxWidth', 'maxHeight', 'alignContent'],
  isPerimeter: [
    'prioritizeCorners',
    'excludeCorners',
    'startCorner',
    'distribution',
    'cornerSortBy',
    'offset',
    'rotation',
    'globalRotation',
    'perspectiveY',
    'depthScale',
    'enableZIndex',
    'autoRows',
    'rows',
    'direction',
    'priorityDirection',
    'overflowAlignment',
    'equalDistribution',
    'cornerOffset'
  ],
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
  isOrbit: ['radius', 'orbitCount', 'orbitSpacing', 'orbitPhase', 'startAngle', 'rotateToCenter', 'rotationOffset'],
  isDna: ['radius', 'dnaPitch', 'dnaTwist', 'startAngle', 'rotateToCenter', 'rotationOffset'],
  isReelSpinner: ['spinDegrees', 'radius', 'itemAngleStep', 'depthScale', 'width', 'height', 'stretchX', 'stretchY' ],
  isConcentricRings: ['radius', 'ringCount', 'ringSpacing', 'ringPhase', 'startAngle', 'rotateToCenter', 'rotationOffset'],
  isSunflower: ['spacing', 'radiusScale'],
  isHTree: ['branchingFactor', 'hTreeDepth', 'hTreeSpacing'],
  isFisheye: ['fisheyeFocus', 'fisheyeScale', 'fisheyeSpread'],
  isCircularFan: ['arcRadius', 'arcAngle', 'fanCurvature'],
  isPerspectiveStack: ['coverFlowCenter', 'coverFlowSkew', 'coverFlowDepth'],
  isCirclePackGrouped: ['categoryProperty', 'boundsRadius', 'padding', 'iterations', 'centerStrength', 'radiusScale'],
  usesReelHeights: ['reelHeights'],
  isMegaways: ['fixedColumnHeight'],
  isDiamondReel: [],
  isKeno80Grid: ['columns', 'rows', 'cellHighlightIndices', 'cellHighlightOffset'],
  isRadialBallTumbler: ['radius', 'tumbleIntensity'],
  isPrizeLadder: ['perspectiveScale', 'rowGap', 'itemSpacing'],
  isRouletteBettingMat: ['columnGap', 'rowGap', 'sizingMode', 'fixedWidth', 'fixedHeight', 'alignItems', 'justifyItems'],
  isSemicircleSeating: ['radius', 'tableCurvature', 'startAngle', 'endAngle', 'rotateToCenter'],
  isChipStack: ['offsetX', 'offsetY', 'offsetRotation', 'stackLeaning', 'chipStackOffsetY'],
}