import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface ReelsControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const ReelsControl: React.FC<ReelsControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <label htmlFor="stagger-slider">
        Column Stagger: <span>{options.stagger || 0}</span>
      </label>
      <input
        type="range"
        id="stagger-slider"
        min="0"
        max="100"
        value={options.stagger || 0}
        onChange={(e) => onNumberChange('stagger', e.target.value)}
      />
      <p className="control-note">Offsets each reel vertically.</p>
    </div>
  )
}