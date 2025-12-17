import React from 'react'
import {ExtendedLayoutOptions} from '../LayoutController'

interface CornerOffsetControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const CornerOffsetControl: React.FC<CornerOffsetControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <label htmlFor="corner-offset-slider">
        Corner Offset: <span>{options.cornerOffset || 0}</span>
      </label>
      <input
        type="range"
        id="corner-offset-slider"
        min="-100"
        max="100"
        step="1"
        value={options.cornerOffset || 0}
        onChange={(e) => onNumberChange('cornerOffset', e.target.value)}
      />
      <p className="control-note">
        Explodes (positive) or implodes (negative) the four corners of the grid.
      </p>
    </div>
  )
}