import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface StackControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const StackControl: React.FC<StackControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <div className="sub-control">
        <label htmlFor="offsetX">
          Offset X: <span>{options.offsetX}</span>
        </label>
        <input
          type="range"
          id="offsetX"
          min="-5"
          max="5"
          step="0.1"
          value={options.offsetX || 0.5}
          onChange={(e) => onNumberChange('offsetX', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="offsetY">
          Offset Y: <span>{options.offsetY}</span>
        </label>
        <input
          type="range"
          id="offsetY"
          min="-5"
          max="5"
          step="0.1"
          value={options.offsetY || 0.5}
          onChange={(e) => onNumberChange('offsetY', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="offsetRotation">
          Offset Rotation (°): <span>{options.offsetRotation}</span>
        </label>
        <input
          type="range"
          id="offsetRotation"
          min="-5"
          max="5"
          step="0.1"
          value={options.offsetRotation || 0}
          onChange={(e) => onNumberChange('offsetRotation', e.target.value)}
        />
      </div>
    </div>
  )
}
