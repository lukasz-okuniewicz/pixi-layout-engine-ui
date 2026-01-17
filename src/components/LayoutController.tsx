'use client'

import React, { useMemo } from 'react'
import { layoutEnum, LayoutName } from 'pixi-layout-engine'
import { LayoutOptions } from '@/lib/layoutEngine'
import { LayoutHelp } from './LayoutHelp'
import { controlKeyMap, layoutControlsConfig } from '@/config/layoutControlsConfig'
import { GapSpacingControl } from '@/components/layout-controls/GapSpacingControl'
import { SimpleSpacingControl } from '@/components/layout-controls/SimpleSpacingControl'
import { AlignItemsControl } from '@/components/layout-controls/AlignItemsControl'
import { JustifyItemsControl } from '@/components/layout-controls/JustifyItemsControl'
import { SizingControl } from './layout-controls/SizingControl'
import { JustifyContentControl } from '@/components/layout-controls/JustifyContentControl'
import { GridFlowControl } from '@/components/layout-controls/GridFlowControl'
import { CircleControl } from '@/components/layout-controls/CircleControl'
import { ColumnsControl } from '@/components/layout-controls/ColumnsControl'
import { DiagonalControl } from '@/components/layout-controls/DiagonalControl'
import { PathControl } from '@/components/layout-controls/PathControl'
import { LayoutTypeControl } from '@/components/layout-controls/LayoutTypeControl'
import { ComponentCountControl } from '@/components/layout-controls/ComponentCountControl'
import { PerimeterControl } from '@/components/layout-controls/PerimeterControl'
import { FlexWrapControl } from '@/components/layout-controls/FlexWrapControl'
import { WaveControl } from '@/components/layout-controls/WaveControl'
import { SpiralControl } from '@/components/layout-controls/SpiralControl'
import { PerspectiveControl } from '@/components/layout-controls/PerspectiveControl'
import { IsometricControl } from '@/components/layout-controls/IsometricControl'
import { TreemapControl } from '@/components/layout-controls/TreemapControl'
import { BubbleControl } from '@/components/layout-controls/BubbleControl'
import { VoronoiControl } from '@/components/layout-controls/VoronoiControl'
import { WordCloudControl } from '@/components/layout-controls/WordCloudControl'
import { CurrentConfigDisplay } from '@/components/layout-controls/CurrentConfigDisplay'
import { GridSpanningControl } from './layout-controls/GridSpanningControl'
import { GridDemoSpanningControl } from '@/components/layout-controls/GridDemoSpanningControl'
import { CirclePackControl } from '@/components/layout-controls/CirclePackControl'
import { CardHandControl } from '@/components/layout-controls/CardHandControl'
import { StackControl } from '@/components/layout-controls/StackControl'
import { PayoutZonesControl } from '@/components/layout-controls/PayoutZonesControl'
import { SpreadExplosionControl } from '@/components/layout-controls/SpreadExplosionControl'
import { PyramidControl } from '@/components/layout-controls/PyramidControl'
import { ReverseControl } from '@/components/layout-controls/ReverseControl'
import { CornerOffsetControl } from '@/components/layout-controls/CornerOffsetControl'
import { ReelsControl } from './layout-controls/ReelsControl'
import { ReelSpinnerControl } from '@/components/layout-controls/ReelSpinnerControl'

export type ExtendedLayoutOptions = LayoutOptions & {
  componentCount?: number
  demoSpan1_col?: number
  demoSpan1_row?: number
  demoSpan2_col?: number
  demoSpan2_row?: number
  origin?: number
}

interface LayoutControllerProps {
  options: ExtendedLayoutOptions
  setOptions: React.Dispatch<React.SetStateAction<ExtendedLayoutOptions>>
}

export const LayoutController: React.FC<LayoutControllerProps> = ({ options, setOptions }) => {
  const handleOptionChange = (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined) => {
    setOptions((prev) => ({ ...prev, [key]: value }))
  }

  const handleNumberChange = (key: keyof ExtendedLayoutOptions, value: string) => {
    const num = parseFloat(value)
    handleOptionChange(key, isNaN(num) ? undefined : num)
  }

  const config = options.layoutName ? layoutControlsConfig[options.layoutName as LayoutName] : {}
  const isHoneycombFlow = options.layoutName === layoutEnum.SQUARE && options.flowDirection === 'honeycomb'

  const relevantOptions = useMemo(() => {
    if (!options.layoutName) return {}

    const relevant: { [key: string]: any } = {}

    for (const controlKey in config) {
      if (config[controlKey as keyof typeof config]) {
        const optionKeys = controlKeyMap[controlKey as keyof typeof controlKeyMap] || []
        for (const key of optionKeys) {
          relevant[key] = options[key as keyof ExtendedLayoutOptions]
        }
      }
    }

    const finalConfig: Partial<ExtendedLayoutOptions> & { layoutName: LayoutName } = {
      layoutName: options.layoutName,
      ...relevant,
    }

    const { demoSpan1_col, demoSpan1_row, demoSpan2_col, demoSpan2_row, ...displayConfig } = finalConfig

    return displayConfig
  }, [options, config])

  return (
    <div id="ui-panel">
      <LayoutTypeControl options={options} onOptionChange={handleOptionChange} />
      <LayoutHelp layoutName={options.layoutName || ''} />
      <ComponentCountControl options={options} onNumberChange={handleNumberChange} />

      {config.usesSizing && (
        <SizingControl options={options} onNumberChange={handleNumberChange} onOptionChange={handleOptionChange} />
      )}
      {config.usesSimpleSpacing && <SimpleSpacingControl options={options} onNumberChange={handleNumberChange} />}
      {config.usesGapSpacing && <GapSpacingControl options={options} onNumberChange={handleNumberChange} />}

      {config.usesAngleControls && <DiagonalControl options={options} onNumberChange={handleNumberChange} />}

      {config.usesAlignItems && <AlignItemsControl options={options} onOptionChange={handleOptionChange} />}
      {config.usesJustifyContent && <JustifyContentControl options={options} onOptionChange={handleOptionChange} />}

      {config.usesJustifyItems && <JustifyItemsControl options={options} onOptionChange={handleOptionChange} />}

      {config.usesReverse && <ReverseControl options={options} onOptionChange={handleOptionChange} />}

      {config.isPyramid && (
        <PyramidControl options={options} onNumberChange={handleNumberChange} onOptionChange={handleOptionChange} />
      )}
      {config.usesGridFlow && <GridFlowControl options={options} onOptionChange={handleOptionChange} />}

      {config.usesCornerOffset && !isHoneycombFlow && (
        <CornerOffsetControl options={options} onNumberChange={handleNumberChange} />
      )}

      {config.isCircle && (
        <CircleControl options={options} onNumberChange={handleNumberChange} onOptionChange={handleOptionChange} />
      )}
      {config.isGrid && !isHoneycombFlow && (
        <GridSpanningControl options={options} onOptionChange={handleOptionChange} />
      )}
      {config.isGrid && !isHoneycombFlow && options.useGridSpanning && (
        <GridDemoSpanningControl options={options} onNumberChange={handleNumberChange} />
      )}
      {config.usesColumns && <ColumnsControl options={options} onNumberChange={handleNumberChange} />}
      {config.isPerimeter && <PerimeterControl options={options} onOptionChange={handleOptionChange} />}
      {config.isFlexWrap && (
        <FlexWrapControl options={options} onNumberChange={handleNumberChange} onOptionChange={handleOptionChange} />
      )}
      {config.isWave && <WaveControl options={options} onNumberChange={handleNumberChange} />}
      {config.isSpiral && <SpiralControl options={options} onNumberChange={handleNumberChange} />}
      {config.isPath && <PathControl options={options} onOptionChange={handleOptionChange} />}
      {config.isPerspective && <PerspectiveControl options={options} onNumberChange={handleNumberChange} />}
      {config.isIsometric && <IsometricControl options={options} onNumberChange={handleNumberChange} />}
      {config.isDataDriven && (
        <div className="control-group">
          <p className="control-note">
            <strong>Note:</strong> This layout uses a `value` property on each component to determine its size.
            Component sizes are randomized for this demo.
          </p>
        </div>
      )}
      {config.isTreemap && <TreemapControl options={options} onNumberChange={handleNumberChange} />}
      {config.isBubble && <BubbleControl options={options} onNumberChange={handleNumberChange} />}
      {config.isCirclePack && <CirclePackControl options={options} onNumberChange={handleNumberChange} />}
      {config.isCardHand && <CardHandControl options={options} onNumberChange={handleNumberChange} />}
      {config.isStack && <StackControl options={options} onNumberChange={handleNumberChange} />}
      {config.isSpreadExplosion && <SpreadExplosionControl options={options} onNumberChange={handleNumberChange} />}
      {config.isPayoutZones && <PayoutZonesControl options={options} onOptionChange={handleOptionChange} />}
      {config.isVoronoi && <VoronoiControl options={options} onNumberChange={handleNumberChange} />}
      {config.isWordCloud && <WordCloudControl options={options} onNumberChange={handleNumberChange} />}

      {config.isReels && <ReelsControl options={options} onNumberChange={handleNumberChange} />}

      {config.isReelSpinner && <ReelSpinnerControl options={options} onNumberChange={handleNumberChange} />}

      <>
        <div className="control-group">
          <h4>Gravity Test</h4>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('pop-symbol'))}
            style={{
              padding: '8px',
              background: '#e06c75',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            💥 Pop Random Symbol
          </button>
          <p className="control-note">Removes a symbol to see others fall down.</p>
        </div>

        <div className="control-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={!!options.refill}
              onChange={(e) => handleOptionChange('refill', e.target.checked)}
            />
            Refill Symbols (Avalanche)
          </label>
        </div>
      </>

      <CurrentConfigDisplay config={relevantOptions} />
    </div>
  )
}