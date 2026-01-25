import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface DnaControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined) => void
}

export const DnaControl: React.FC<DnaControlProps> = ({
  options,
  onNumberChange,
  onOptionChange,
}) => {
  return (
    <>
      <div className="control-group">
        <h4>Helix</h4>
        <div className="sub-control">
          <label htmlFor="dnaRadius">
            Radius: <span>{options.radius ?? 100}</span>
          </label>
          <input
            type="range"
            id="dnaRadius"
            min="30"
            max="250"
            value={options.radius ?? 100}
            onChange={(e) => onNumberChange('radius', e.target.value)}
          />
          <p className="control-note">Distance of each strand from the centerline.</p>
        </div>
        <div className="sub-control">
          <label htmlFor="dnaPitch">
            Pitch: <span>{options.dnaPitch ?? 60}</span>
          </label>
          <input
            type="range"
            id="dnaPitch"
            min="20"
            max="150"
            value={options.dnaPitch ?? 60}
            onChange={(e) => onNumberChange('dnaPitch', e.target.value)}
          />
          <p className="control-note">Vertical distance between rungs (pairs of items).</p>
        </div>
        <div className="sub-control">
          <label htmlFor="dnaTwist">
            Twist: <span>{options.dnaTwist ?? 60}°</span>
          </label>
          <input
            type="range"
            id="dnaTwist"
            min="0"
            max="180"
            value={options.dnaTwist ?? 60}
            onChange={(e) => onNumberChange('dnaTwist', e.target.value)}
          />
          <p className="control-note">Degrees of rotation per rung. 360° = one full twist per rung.</p>
        </div>
        <div className="sub-control">
          <label htmlFor="dnaStartAngle">
            Start Angle: <span>{options.startAngle ?? 0}°</span>
          </label>
          <input
            type="range"
            id="dnaStartAngle"
            min="0"
            max="360"
            value={options.startAngle ?? 0}
            onChange={(e) => onNumberChange('startAngle', e.target.value)}
          />
        </div>
      </div>
      <div className="control-group">
        <h4>Rotation</h4>
        <div className="sub-control checkbox-control">
          <label htmlFor="dnaRotateToCenter">
            <input
              id="dnaRotateToCenter"
              type="checkbox"
              checked={!!options.rotateToCenter}
              onChange={(e) => onOptionChange('rotateToCenter', e.target.checked)}
            />
            Rotate to Center
          </label>
        </div>
        {options.rotateToCenter && (
          <div className="sub-control">
            <label htmlFor="dnaRotationOffset">
              Rotation Offset: <span>{options.rotationOffset ?? 0}°</span>
            </label>
            <input
              type="range"
              id="dnaRotationOffset"
              min="-180"
              max="180"
              value={options.rotationOffset ?? 0}
              onChange={(e) => onNumberChange('rotationOffset', e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  )
}
