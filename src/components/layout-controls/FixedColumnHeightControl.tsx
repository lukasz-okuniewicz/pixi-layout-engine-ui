import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface FixedColumnHeightControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const FixedColumnHeightControl: React.FC<FixedColumnHeightControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <label htmlFor="fixed-column-height">
        Column height (scale to fit): <span>{options.fixedColumnHeight ?? 320}</span>
      </label>
      <input
        type="range"
        id="fixed-column-height"
        min="80"
        max="600"
        value={options.fixedColumnHeight ?? 320}
        onChange={(e) => onNumberChange('fixedColumnHeight', e.target.value)}
      />
    </div>
  )
}
