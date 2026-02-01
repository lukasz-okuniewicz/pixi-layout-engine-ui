import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface HTreeControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const HTreeControl: React.FC<HTreeControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <h4>H-Tree</h4>
      <div className="sub-control">
        <label htmlFor="branchingFactor">Branching Factor: <span>{options.branchingFactor ?? 2}</span></label>
        <input
          type="range"
          id="branchingFactor"
          min="2"
          max="6"
          value={options.branchingFactor ?? 2}
          onChange={(e) => onNumberChange('branchingFactor', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="hTreeDepth">Depth: <span>{options.hTreeDepth ?? 4}</span></label>
        <input
          type="range"
          id="hTreeDepth"
          min="1"
          max="6"
          value={options.hTreeDepth ?? 4}
          onChange={(e) => onNumberChange('hTreeDepth', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="hTreeSpacing">Spacing: <span>{options.hTreeSpacing ?? 80}</span></label>
        <input
          type="range"
          id="hTreeSpacing"
          min="20"
          max="200"
          value={options.hTreeSpacing ?? 80}
          onChange={(e) => onNumberChange('hTreeSpacing', e.target.value)}
        />
      </div>
    </div>
  )
}
