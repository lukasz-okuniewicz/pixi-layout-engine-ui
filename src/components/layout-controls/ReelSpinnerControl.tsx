import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface ReelSpinnerControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: any) => void
}

export const ReelSpinnerControl: React.FC<ReelSpinnerControlProps> = ({ options, onNumberChange, onOptionChange }) => {
  return (
    <div className="control-group">
      <div className="sub-control">
        <label htmlFor="spinDegrees">
          Spin Rotation: <span>{options.spinDegrees || 0}°</span>
        </label>
        <input
          type="range"
          id="spinDegrees"
          min="-360"
          max="360"
          value={options.spinDegrees || 0}
          onChange={(e) => onNumberChange('spinDegrees', e.target.value)}
        />
      </div>

      <div className="sub-control">
        <label htmlFor="reelRadius">
          Drum Radius: <span>{options.radius || 200}</span>
        </label>
        <input
          type="range"
          id="reelRadius"
          min="50"
          max="500"
          value={options.radius || 200}
          onChange={(e) => onNumberChange('radius', e.target.value)}
        />
      </div>

      <div className="sub-control">
        <label htmlFor="itemAngleStep">
          Item Angle Step: <span>{options.itemAngleStep || 30}°</span>
        </label>
        <input
          type="range"
          id="itemAngleStep"
          min="10"
          max="90"
          value={options.itemAngleStep || 30}
          onChange={(e) => onNumberChange('itemAngleStep', e.target.value)}
        />
      </div>

      <div className="sub-control">
        <label htmlFor="depthScale">
          Edge Depth Scale: <span>{options.depthScale || 0.5}</span>
        </label>
        <input
          type="range"
          id="depthScale"
          min="0"
          max="1"
          step="0.05"
          value={options.depthScale || 0.5}
          onChange={(e) => onNumberChange('depthScale', e.target.value)}
        />
      </div>

        <div className="sub-control checkbox-control">
            <label htmlFor="reelAlphaFade">
                <input
                    id="reelAlphaFade"
                    type="checkbox"
                    checked={!!options.reelAlphaFade}
                    onChange={(e) => onOptionChange('reelAlphaFade', e.target.checked)}
                />
                Enable Alpha Fade
            </label>
        </div>

        <div className="sub-control">
            <label htmlFor="stretchX">
                Stretch X (Width): <span>{options.stretchX || 0}</span>
            </label>
            <input
                type="range"
                id="stretchX"
                min="0"
                max="1"
                step="0.01"
                value={options.stretchX || 0}
                onChange={(e) => onNumberChange('stretchX', e.target.value)}
            />
        </div>

        <div className="sub-control">
            <label htmlFor="stretchY">
                Stretch Y (Height): <span>{options.stretchY || 0}</span>
            </label>
            <input
                type="range"
                id="stretchY"
                min="0"
                max="1"
                step="0.01"
                value={options.stretchY || 0}
                onChange={(e) => onNumberChange('stretchY', e.target.value)}
            />
        </div>

        <p className="control-note">Stretch squashes symbols at the top/bottom curves.</p>

      <div className="sub-control">
        <label>
          Window Width: <span>{options.width || 200}</span>
        </label>
        <input
          type="range"
          min="50"
          max="1000"
          value={options.width || 200}
          onChange={(e) => onNumberChange('width', e.target.value)}
        />
      </div>

      <div className="sub-control">
        <label>
          Window Height: <span>{options.height || 400}</span>
        </label>
        <input
          type="range"
          min="50"
          max="1000"
          value={options.height || 400}
          onChange={(e) => onNumberChange('height', e.target.value)}
        />
      </div>
    </div>
  )
}