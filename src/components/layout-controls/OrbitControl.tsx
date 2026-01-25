import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface OrbitControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined) => void
}

export const OrbitControl: React.FC<OrbitControlProps> = ({
  options,
  onNumberChange,
  onOptionChange,
}) => {
  return (
    <>
      <div className="control-group">
        <h4>Orbits</h4>
        <div className="sub-control">
          <label htmlFor="orbitRadius">
            Inner Radius: <span>{options.radius ?? 80}</span>
          </label>
          <input
            type="range"
            id="orbitRadius"
            min="20"
            max="300"
            value={options.radius ?? 80}
            onChange={(e) => onNumberChange('radius', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="orbitCount">
            Orbit Count: <span>{options.orbitCount ?? 3}</span>
          </label>
          <input
            type="range"
            id="orbitCount"
            min="1"
            max="8"
            value={options.orbitCount ?? 3}
            onChange={(e) => onNumberChange('orbitCount', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="orbitSpacing">
            Orbit Spacing: <span>{options.orbitSpacing ?? 80}</span>
          </label>
          <input
            type="range"
            id="orbitSpacing"
            min="20"
            max="200"
            value={options.orbitSpacing ?? 80}
            onChange={(e) => onNumberChange('orbitSpacing', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="orbitPhase">
            Phase per Orbit: <span>{options.orbitPhase != null ? options.orbitPhase : 'auto'}°</span>
          </label>
          <input
            type="range"
            id="orbitPhase"
            min="0"
            max="360"
            value={options.orbitPhase ?? 360 / Math.max(1, options.orbitCount ?? 3)}
            onChange={(e) => onNumberChange('orbitPhase', e.target.value)}
          />
          <p className="control-note">Staggers each ring. Auto = 360° ÷ orbit count.</p>
        </div>
        <div className="sub-control">
          <label htmlFor="orbitStartAngle">
            Start Angle: <span>{options.startAngle ?? 0}°</span>
          </label>
          <input
            type="range"
            id="orbitStartAngle"
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
          <label htmlFor="orbitRotateToCenter">
            <input
              id="orbitRotateToCenter"
              type="checkbox"
              checked={!!options.rotateToCenter}
              onChange={(e) => onOptionChange('rotateToCenter', e.target.checked)}
            />
            Rotate to Center
          </label>
        </div>
        {options.rotateToCenter && (
          <div className="sub-control">
            <label htmlFor="orbitRotationOffset">
              Rotation Offset: <span>{options.rotationOffset ?? 0}°</span>
            </label>
            <input
              type="range"
              id="orbitRotationOffset"
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
