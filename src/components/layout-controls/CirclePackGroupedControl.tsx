import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface CirclePackGroupedControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined) => void
}

export const CirclePackGroupedControl: React.FC<CirclePackGroupedControlProps> = ({
  options,
  onNumberChange,
  onOptionChange,
}) => {
  return (
    <div className="control-group">
      <h4>Circle Pack (Grouped)</h4>
      <div className="sub-control">
        <label htmlFor="categoryProperty">Category Property:</label>
        <input
          type="text"
          id="categoryProperty"
          value={options.categoryProperty ?? 'category'}
          onChange={(e) => onOptionChange('categoryProperty', e.target.value || undefined)}
          placeholder="category"
        />
      </div>
      <div className="sub-control">
        <label htmlFor="groupedBoundsRadius">Island Radius: <span>{options.boundsRadius ?? 150}</span></label>
        <input
          type="range"
          id="groupedBoundsRadius"
          min="50"
          max="300"
          value={options.boundsRadius ?? 150}
          onChange={(e) => onNumberChange('boundsRadius', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="groupedPadding">Padding: <span>{options.padding ?? 5}</span></label>
        <input
          type="range"
          id="groupedPadding"
          min="0"
          max="30"
          value={options.padding ?? 5}
          onChange={(e) => onNumberChange('padding', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="groupedIterations">Iterations: <span>{options.iterations ?? 80}</span></label>
        <input
          type="range"
          id="groupedIterations"
          min="20"
          max="150"
          value={options.iterations ?? 80}
          onChange={(e) => onNumberChange('iterations', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="groupedCenterStrength">Center Strength: <span>{options.centerStrength ?? 0.02}</span></label>
        <input
          type="range"
          id="groupedCenterStrength"
          min="0"
          max="0.1"
          step="0.01"
          value={options.centerStrength ?? 0.02}
          onChange={(e) => onNumberChange('centerStrength', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="groupedRadiusScale">Radius Scale: <span>{options.radiusScale ?? 5}</span></label>
        <input
          type="range"
          id="groupedRadiusScale"
          min="1"
          max="15"
          value={options.radiusScale ?? 5}
          onChange={(e) => onNumberChange('radiusScale', e.target.value)}
        />
      </div>
    </div>
  )
}
