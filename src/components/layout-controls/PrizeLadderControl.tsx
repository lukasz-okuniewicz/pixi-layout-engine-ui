import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface PrizeLadderControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const PrizeLadderControl: React.FC<PrizeLadderControlProps> = ({
  options,
  onNumberChange,
}) => (
  <div className="control-group">
    <h3 className="control-group-title">Prize Ladder (Tower)</h3>
    <label htmlFor="perspective-scale-slider">
      Perspective Scale: <span>{options.perspectiveScale ?? 0.6}</span>
    </label>
    <input
      type="range"
      id="perspective-scale-slider"
      min="0"
      max="1"
      step="0.05"
      value={options.perspectiveScale ?? 0.6}
      onChange={(e) => onNumberChange('perspectiveScale', e.target.value)}
    />
    <label htmlFor="prize-row-gap" style={{ marginTop: '10px' }}>
      Row Gap: <span>{options.rowGap ?? 8}</span>
    </label>
    <input
      type="range"
      id="prize-row-gap"
      min="0"
      max="30"
      step="1"
      value={options.rowGap ?? 8}
      onChange={(e) => onNumberChange('rowGap', e.target.value)}
    />
    <label htmlFor="prize-item-spacing" style={{ marginTop: '10px' }}>
      Item Spacing: <span>{options.itemSpacing ?? 6}</span>
    </label>
    <input
      type="range"
      id="prize-item-spacing"
      min="0"
      max="30"
      step="1"
      value={options.itemSpacing ?? 6}
      onChange={(e) => onNumberChange('itemSpacing', e.target.value)}
    />
  </div>
)
