import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface CardHandControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const CardHandControl: React.FC<CardHandControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <div className="sub-control">
        <label htmlFor="arcRadius">
          Arc Radius: <span>{options.arcRadius}</span>
        </label>
        <input
          type="range"
          id="arcRadius"
          min="100"
          max="800"
          value={options.arcRadius || 300}
          onChange={(e) => onNumberChange('arcRadius', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="arcAngle">
          Arc Angle: <span>{options.arcAngle}</span>
        </label>
        <input
          type="range"
          id="arcAngle"
          min="0"
          max="180"
          value={options.arcAngle || 45}
          onChange={(e) => onNumberChange('arcAngle', e.target.value)}
        />
      </div>
    </div>
  )
}
