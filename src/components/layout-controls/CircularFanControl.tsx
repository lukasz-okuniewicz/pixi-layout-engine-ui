import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface CircularFanControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const CircularFanControl: React.FC<CircularFanControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <h4>Circular Fan</h4>
      <div className="sub-control">
        <label htmlFor="circularFanRadius">Arc Radius: <span>{options.arcRadius ?? 300}</span></label>
        <input
          type="range"
          id="circularFanRadius"
          min="100"
          max="800"
          value={options.arcRadius ?? 300}
          onChange={(e) => onNumberChange('arcRadius', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="circularFanAngle">Fan Angle: <span>{options.arcAngle ?? 60}°</span></label>
        <input
          type="range"
          id="circularFanAngle"
          min="0"
          max="180"
          value={options.arcAngle ?? 60}
          onChange={(e) => onNumberChange('arcAngle', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="fanCurvature">Arc Curvature: <span>{options.fanCurvature ?? 1}</span></label>
        <input
          type="range"
          id="fanCurvature"
          min="0.2"
          max="2"
          step="0.1"
          value={options.fanCurvature ?? 1}
          onChange={(e) => onNumberChange('fanCurvature', e.target.value)}
        />
      </div>
    </div>
  )
}
