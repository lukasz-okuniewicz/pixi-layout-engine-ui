import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface ChipStackControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const ChipStackControl: React.FC<ChipStackControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <h4>Chip Stack</h4>
      <div className="sub-control">
        <label htmlFor="chipStackOffsetX">Offset X: <span>{options.offsetX ?? 0.5}</span></label>
        <input
          type="range"
          id="chipStackOffsetX"
          min="-5"
          max="5"
          step="0.1"
          value={options.offsetX ?? 0.5}
          onChange={(e) => onNumberChange('offsetX', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="chipStackOffsetY">Offset Y: <span>{options.offsetY ?? 2}</span></label>
        <input
          type="range"
          id="chipStackOffsetY"
          min="0"
          max="8"
          step="0.5"
          value={options.chipStackOffsetY ?? options.offsetY ?? 2}
          onChange={(e) => onNumberChange('chipStackOffsetY', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="stackLeaning">Stack Leaning: <span>{options.stackLeaning ?? 0}</span></label>
        <input
          type="range"
          id="stackLeaning"
          min="-4"
          max="4"
          step="0.1"
          value={options.stackLeaning ?? 0}
          onChange={(e) => onNumberChange('stackLeaning', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="chipStackOffsetRotation">Tilt (°): <span>{options.offsetRotation ?? 0.5}</span></label>
        <input
          type="range"
          id="chipStackOffsetRotation"
          min="-5"
          max="5"
          step="0.1"
          value={options.offsetRotation ?? 0.5}
          onChange={(e) => onNumberChange('offsetRotation', e.target.value)}
        />
      </div>
    </div>
  )
}
