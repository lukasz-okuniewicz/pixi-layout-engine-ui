import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface SemicircleSeatingControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined) => void
}

export const SemicircleSeatingControl: React.FC<SemicircleSeatingControlProps> = ({
  options,
  onNumberChange,
  onOptionChange,
}) => {
  return (
    <div className="control-group">
      <h4>Semicircle Seating</h4>
      <div className="sub-control">
        <label htmlFor="semicircleRadius">Radius: <span>{options.radius ?? 200}</span></label>
        <input
          type="range"
          id="semicircleRadius"
          min="80"
          max="500"
          value={options.radius ?? 200}
          onChange={(e) => onNumberChange('radius', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="tableCurvature">Table Curvature: <span>{options.tableCurvature ?? 1}</span></label>
        <input
          type="range"
          id="tableCurvature"
          min="0.3"
          max="2"
          step="0.1"
          value={options.tableCurvature ?? 1}
          onChange={(e) => onNumberChange('tableCurvature', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="semicircleStartAngle">Start Angle (°): <span>{options.startAngle ?? 0}</span></label>
        <input
          type="range"
          id="semicircleStartAngle"
          min="-180"
          max="180"
          value={options.startAngle ?? 0}
          onChange={(e) => onNumberChange('startAngle', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="semicircleEndAngle">End Angle (°): <span>{options.endAngle ?? 180}</span></label>
        <input
          type="range"
          id="semicircleEndAngle"
          min="-180"
          max="360"
          value={options.endAngle ?? 180}
          onChange={(e) => onNumberChange('endAngle', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={!!options.rotateToCenter}
            onChange={(e) => onOptionChange('rotateToCenter', e.target.checked)}
          />
          Rotate to center (face dealer)
        </label>
      </div>
    </div>
  )
}
