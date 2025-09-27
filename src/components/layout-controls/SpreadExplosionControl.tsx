import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface SpreadExplosionControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const SpreadExplosionControl: React.FC<SpreadExplosionControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <div className="sub-control">
        <label htmlFor="maxRadius">
          Max Radius: <span>{options.maxRadius}</span>
        </label>
        <input
          type="range"
          id="maxRadius"
          min="50"
          max="800"
          step="10"
          value={options.maxRadius || 300}
          onChange={(e) => onNumberChange('maxRadius', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="spreadFactor">
          Spread Factor: <span>{options.spreadFactor}</span>
        </label>
        <input
          type="range"
          id="spreadFactor"
          min="1"
          max="50"
          step="1"
          value={options.spreadFactor || 15}
          onChange={(e) => onNumberChange('spreadFactor', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="randomness">
          Randomness: <span>{options.randomness}</span>
        </label>
        <input
          type="range"
          id="randomness"
          min="0"
          max="1"
          step="0.05"
          value={options.randomness || 0.5}
          onChange={(e) => onNumberChange('randomness', e.target.value)}
        />
      </div>
    </div>
  )
}
