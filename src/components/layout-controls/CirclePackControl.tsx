import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface CirclePackControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const CirclePackControl: React.FC<CirclePackControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <div className="sub-control">
        <label htmlFor="boundsRadius">
          Bounds Radius: <span>{options.boundsRadius}</span>
        </label>
        <input
          type="range"
          id="boundsRadius"
          min="50"
          max="500"
          value={options.boundsRadius || 300}
          onChange={(e) => onNumberChange('boundsRadius', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="padding">
          Padding: <span>{options.padding}</span>
        </label>
        <input
          type="range"
          id="padding"
          min="0"
          max="20"
          value={options.padding || 2}
          onChange={(e) => onNumberChange('padding', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="iterations">
          Iterations: <span>{options.iterations}</span>
        </label>
        <input
          type="range"
          id="iterations"
          min="10"
          max="300"
          value={options.iterations || 100}
          onChange={(e) => onNumberChange('iterations', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="centerStrength">
          Center Strength: <span>{options.centerStrength}</span>
        </label>
        <input
          type="range"
          id="centerStrength"
          min="0"
          max="0.1"
          step="0.005"
          value={options.centerStrength || 0.01}
          onChange={(e) => onNumberChange('centerStrength', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="radiusScale">Radius Scale:</label>
        <input
          id="radiusScale"
          type="number"
          min="0.1"
          step="0.1"
          placeholder="2"
          value={options.radiusScale || ''}
          onChange={(e) => onNumberChange('radiusScale', e.target.value)}
        />
      </div>
    </div>
  )
}
