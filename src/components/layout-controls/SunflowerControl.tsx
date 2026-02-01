import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface SunflowerControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const SunflowerControl: React.FC<SunflowerControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <h4>Sunflower (Fermat&apos;s Spiral)</h4>
      <div className="sub-control">
        <label htmlFor="sunflowerSpacing">Spacing: <span>{options.spacing ?? 8}</span></label>
        <input
          type="range"
          id="sunflowerSpacing"
          min="2"
          max="20"
          value={options.spacing ?? 8}
          onChange={(e) => onNumberChange('spacing', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="sunflowerRadiusScale">Radius Scale: <span>{options.radiusScale ?? 1}</span></label>
        <input
          type="range"
          id="sunflowerRadiusScale"
          min="0.5"
          max="3"
          step="0.1"
          value={options.radiusScale ?? 1}
          onChange={(e) => onNumberChange('radiusScale', e.target.value)}
        />
      </div>
    </div>
  )
}
