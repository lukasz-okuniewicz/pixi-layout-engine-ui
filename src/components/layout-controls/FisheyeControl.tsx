import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface FisheyeControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const FisheyeControl: React.FC<FisheyeControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <h4>Fisheye / Dock</h4>
      <div className="sub-control">
        <label htmlFor="fisheyeFocus">Focus Index: <span>{options.fisheyeFocus ?? 0}</span></label>
        <input
          type="range"
          id="fisheyeFocus"
          min="0"
          max="24"
          value={options.fisheyeFocus ?? 0}
          onChange={(e) => onNumberChange('fisheyeFocus', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="fisheyeScale">Scale at Focus: <span>{options.fisheyeScale ?? 1.5}</span></label>
        <input
          type="range"
          id="fisheyeScale"
          min="1"
          max="3"
          step="0.1"
          value={options.fisheyeScale ?? 1.5}
          onChange={(e) => onNumberChange('fisheyeScale', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="fisheyeSpread">Spread at Focus: <span>{options.fisheyeSpread ?? 1.8}</span></label>
        <input
          type="range"
          id="fisheyeSpread"
          min="1"
          max="3"
          step="0.1"
          value={options.fisheyeSpread ?? 1.8}
          onChange={(e) => onNumberChange('fisheyeSpread', e.target.value)}
        />
      </div>
    </div>
  )
}
