import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface RadialBallTumblerControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const RadialBallTumblerControl: React.FC<RadialBallTumblerControlProps> = ({
  options,
  onNumberChange,
}) => (
  <div className="control-group">
    <h3 className="control-group-title">Radial Ball Tumbler</h3>
    <label htmlFor="tumbler-radius">
      Radius: <span>{options.radius ?? 120}</span>
    </label>
    <input
      type="range"
      id="tumbler-radius"
      min="40"
      max="300"
      step="5"
      value={options.radius ?? 120}
      onChange={(e) => onNumberChange('radius', e.target.value)}
    />
    <label htmlFor="tumble-intensity" style={{ marginTop: '10px' }}>
      Tumble Intensity: <span>{options.tumbleIntensity ?? 0}</span>
    </label>
    <input
      type="range"
      id="tumble-intensity"
      min="0"
      max="40"
      step="1"
      value={options.tumbleIntensity ?? 0}
      onChange={(e) => onNumberChange('tumbleIntensity', e.target.value)}
    />
  </div>
)
