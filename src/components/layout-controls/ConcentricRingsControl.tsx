import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface ConcentricRingsControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined) => void
}

export const ConcentricRingsControl: React.FC<ConcentricRingsControlProps> = ({
  options,
  onNumberChange,
  onOptionChange,
}) => {
  return (
    <>
      <div className="control-group">
        <h4>Rings</h4>
        <div className="sub-control">
          <label htmlFor="concentricRadius">Inner Radius: <span>{options.radius ?? 80}</span></label>
          <input
            type="range"
            id="concentricRadius"
            min="20"
            max="300"
            value={options.radius ?? 80}
            onChange={(e) => onNumberChange('radius', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="ringCount">Ring Count: <span>{options.ringCount ?? 3}</span></label>
          <input
            type="range"
            id="ringCount"
            min="1"
            max="8"
            value={options.ringCount ?? 3}
            onChange={(e) => onNumberChange('ringCount', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="ringSpacing">Ring Spacing: <span>{options.ringSpacing ?? 80}</span></label>
          <input
            type="range"
            id="ringSpacing"
            min="20"
            max="200"
            value={options.ringSpacing ?? 80}
            onChange={(e) => onNumberChange('ringSpacing', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="ringPhase">Phase per Ring: <span>{options.ringPhase ?? 0}°</span></label>
          <input
            type="range"
            id="ringPhase"
            min="0"
            max="360"
            value={options.ringPhase ?? 0}
            onChange={(e) => onNumberChange('ringPhase', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="concentricStartAngle">Start Angle: <span>{options.startAngle ?? 0}°</span></label>
          <input
            type="range"
            id="concentricStartAngle"
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
          <label htmlFor="concentricRotateToCenter">
            <input
              id="concentricRotateToCenter"
              type="checkbox"
              checked={!!options.rotateToCenter}
              onChange={(e) => onOptionChange('rotateToCenter', e.target.checked)}
            />
            Rotate to Center
          </label>
        </div>
        {options.rotateToCenter && (
          <div className="sub-control">
            <label htmlFor="concentricRotationOffset">Rotation Offset: <span>{options.rotationOffset ?? 0}°</span></label>
            <input
              type="range"
              id="concentricRotationOffset"
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
