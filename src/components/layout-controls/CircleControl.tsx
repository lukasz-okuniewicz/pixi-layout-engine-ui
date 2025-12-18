import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface CircleControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: any) => void
}

export const CircleControl: React.FC<CircleControlProps> = ({ options, onNumberChange, onOptionChange }) => {
  const isFullCircle = Math.abs((options.endAngle || 360) - (options.startAngle || 0)) >= 359.9

  return (
    <>
      <div className="control-group">
        <h4>Basic Controls</h4>
        <div className="sub-control">
          <label htmlFor="radius">
            Radius: <span>{options.radius}</span>
          </label>
          <input
            type="range"
            id="radius-slider"
            min="50"
            max="500"
            value={options.radius}
            onChange={(e) => onNumberChange('radius', e.target.value)}
            disabled={options.autoRadius}
          />
        </div>

        <div className="sub-control checkbox-control">
          <label htmlFor="autoRadius">
            <input
              id="autoRadius"
              type="checkbox"
              checked={options.autoRadius || false}
              onChange={(e) => onOptionChange('autoRadius', e.target.checked)}
            />
            Auto Radius
          </label>
        </div>

        {options.autoRadius && (
          <div className="sub-control">
            <label htmlFor="circleSpacing">
              Pixel Spacing: <span>{options.spacing || 0}</span>
            </label>
            <input
              type="range"
              id="circleSpacing"
              min="0"
              max="100"
              value={options.spacing || 0}
              onChange={(e) => onNumberChange('spacing', e.target.value)}
            />
          </div>
        )}

        <div className="sub-control">
          <label htmlFor="innerRadius">
            Inner Radius: <span>{options.innerRadius || 0}</span>
          </label>
          <input
            type="range"
            id="innerRadius"
            min="0"
            max="360"
            value={options.innerRadius || 0}
            onChange={(e) => onNumberChange('innerRadius', e.target.value)}
          />
        </div>
      </div>

      <div className="control-group">
        <h4>Arc & Angle Controls</h4>
        <div className="sub-control">
          <label htmlFor="startAngle">
            Start Angle: <span>{options.startAngle || 0}</span>
          </label>
          <input
            type="range"
            id="startAngle"
            min="0"
            max="360"
            value={options.startAngle || 0}
            onChange={(e) => onNumberChange('startAngle', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="endAngle">
            End Angle: <span>{options.endAngle || 360}</span>
          </label>
          <input
            type="range"
            id="endAngle"
            min="0"
            max="360"
            value={options.endAngle || 360}
            onChange={(e) => onNumberChange('endAngle', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="angularSpacing">
            Angular Spacing: <span>{options.angularSpacing || 0}°</span>
          </label>
          <input
            type="range"
            id="angularSpacing"
            min="0"
            max="90"
            value={options.angularSpacing || 0}
            onChange={(e) => onNumberChange('angularSpacing', e.target.value)}
          />
        </div>
      </div>

      <div className="control-group">
        <h4>Distribution & Sorting</h4>
        <div className="sub-control">
          <label htmlFor="sortBy">Sort By</label>
          <select
            id="sortBy"
              // @ts-ignore
            value={options.sortBy || 'null'}
            onChange={(e) => onOptionChange('sortBy', e.target.value === 'null' ? null : e.target.value)}
          >
            <option value="null">None</option>
            <option value="value">Value</option>
            <option value="name">Name</option>
          </select>
        </div>

        {options.sortBy && (
          <div className="sub-control">
            <label htmlFor="sortDirection">Direction</label>
            <select
              id="sortDirection"
              value={options.sortDirection || 'asc'}
              onChange={(e) => onOptionChange('sortDirection', e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        )}

        <div className="sub-control checkbox-control">
          <label htmlFor="distributeByValue">
            <input
              id="distributeByValue"
              type="checkbox"
              checked={options.distributeByValue || false}
              onChange={(e) => onOptionChange('distributeByValue', e.target.checked)}
            />
            Distribute by Value
          </label>
        </div>

        {!isFullCircle && (
          <div className="sub-control">
            <label htmlFor="justifyArc">Justify Arc</label>
            <select
              id="justifyArc"
              value={options.justifyArc || 'start'}
              onChange={(e) => onOptionChange('justifyArc', e.target.value)}
            >
              <option value="start">Start</option>
              <option value="center">Center</option>
            </select>
          </div>
        )}
      </div>

      <div className="control-group">
        <h4>3D Perspective & Rotation</h4>

        {/* NEW SLIDER */}
        <div className="sub-control">
          <label htmlFor="globalRotation">
            Carousel Rotation: <span>{options.globalRotation || 0}°</span>
          </label>
          <input
            type="range"
            id="globalRotation"
            min="0"
            max="360"
            value={options.globalRotation || 0}
            onChange={(e) => onNumberChange('globalRotation', e.target.value)}
          />
        </div>

        <div className="sub-control">
          <label htmlFor="perspectiveY">
            Tilt (Y-Squash): <span>{options.perspectiveY ?? 1}</span>
          </label>
          <input
            type="range"
            id="perspectiveY"
            min="0.1"
            max="1"
            step="0.05"
            value={options.perspectiveY ?? 1}
            onChange={(e) => onNumberChange('perspectiveY', e.target.value)}
          />
        </div>

        <div className="sub-control">
          <label htmlFor="depthScale">
            Depth Scale: <span>{options.depthScale ?? 0}</span>
          </label>
          <input
            type="range"
            id="depthScale"
            min="0"
            max="1"
            step="0.05"
            value={options.depthScale ?? 0}
            onChange={(e) => onNumberChange('depthScale', e.target.value)}
          />
        </div>

        <div className="sub-control checkbox-control">
          <label htmlFor="enableZIndex">
            <input
              id="enableZIndex"
              type="checkbox"
              checked={options.enableZIndex || false}
              onChange={(e) => onOptionChange('enableZIndex', e.target.checked)}
            />
            Sort Z-Index by Depth
          </label>
        </div>
      </div>

      <div className="control-group">
        <h4>Shape & Form</h4>
        <div className="sub-control">
          <label htmlFor="spiralFactor">
            Spiral Factor: <span>{options.spiralFactor || 0}</span>
          </label>
          <input
            type="range"
            id="spiralFactor"
            min="0"
            max="20"
            step="0.5"
            value={options.spiralFactor || 0}
            onChange={(e) => onNumberChange('spiralFactor', e.target.value)}
          />
        </div>
        <div className="sub-control checkbox-control">
          <label htmlFor="rotateToCenter">
            <input
              id="rotateToCenter"
              type="checkbox"
              checked={options.rotateToCenter || false}
              onChange={(e) => onOptionChange('rotateToCenter', e.target.checked)}
            />
            Rotate to Center
          </label>
        </div>

        {options.rotateToCenter && (
          <div className="sub-control">
            <label htmlFor="rotationOffset">
              Rotation Offset: <span>{options.rotationOffset || 0}°</span>
            </label>
            <input
              type="range"
              id="rotationOffset"
              min="-180"
              max="180"
              value={options.rotationOffset || 0}
              onChange={(e) => onNumberChange('rotationOffset', e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="control-group">
        <h4>Organic Effects</h4>
        <div className="sub-control">
          <label htmlFor="radiusJitter">
            Radius Jitter: <span>{options.radiusJitter || 0}</span>
          </label>
          <input
            type="range"
            id="radiusJitter"
            min="0"
            max="100"
            value={options.radiusJitter || 0}
            onChange={(e) => onNumberChange('radiusJitter', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="angleJitter">
            Angle Jitter: <span>{options.angleJitter || 0}°</span>
          </label>
          <input
            type="range"
            id="angleJitter"
            min="0"
            max="45"
            value={options.angleJitter || 0}
            onChange={(e) => onNumberChange('angleJitter', e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
