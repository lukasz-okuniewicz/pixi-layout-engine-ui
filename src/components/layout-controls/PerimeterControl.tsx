import React from 'react'

type PerimeterOptions = {
  prioritizeCorners?: boolean
  startCorner?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  direction?: 'clockwise' | 'counter-clockwise'
  distribution?: 'even' | 'packed'
  rotation?: 'none' | 'face-outward' | 'face-inward'
  offset?: number
  rows?: number
  autoRows?: boolean
  globalRotation?: number
  perspectiveY?: number
  depthScale?: number
  enableZIndex?: boolean
}

interface PerimeterControlProps<T extends PerimeterOptions> {
  options: any
  onOptionChange: (key: keyof T, value: string | number | boolean) => void
}

export const PerimeterControl = <T extends PerimeterOptions>({ options, onOptionChange }: PerimeterControlProps<T>) => {
  return (
    <div className="control-group-grid">
      <div className="control-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="auto-rows-checkbox"
            checked={!!options.autoRows}
            onChange={(e) => onOptionChange('autoRows', e.target.checked)}
          />
          Auto-Calculate Rows
        </label>
      </div>

      {!options.autoRows && (
        <div className="control-group">
          <label>Rows: {options.rows}</label>
          <input
            type="range"
            min="1"
            max="20"
            value={options.rows || 3}
            onChange={(e) => onOptionChange('rows', parseFloat(e.target.value))}
          />
        </div>
      )}

      <div
        className="control-group full-width"
        style={{ marginTop: '1rem', borderTop: '1px solid #444', paddingTop: '1rem' }}
      >
        <h4>3D Perspective</h4>

        <label>Rotation ({options.globalRotation || 0}°)</label>
        <input
          type="range"
          min="0"
          max="360"
          value={options.globalRotation || 0}
          onChange={(e) => onOptionChange('globalRotation', parseFloat(e.target.value))}
        />

        <label style={{ marginTop: 10 }}>Tilt (Y) ({options.perspectiveY ?? 1})</label>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.05"
          value={options.perspectiveY ?? 1}
          onChange={(e) => onOptionChange('perspectiveY', parseFloat(e.target.value))}
        />

        <label style={{ marginTop: 10 }}>Depth Scale ({options.depthScale ?? 0})</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={options.depthScale ?? 0}
          onChange={(e) => onOptionChange('depthScale', parseFloat(e.target.value))}
        />

        <label className="checkbox-label" style={{ marginTop: 10 }}>
          <input
            type="checkbox"
            checked={!!options.enableZIndex}
            onChange={(e) => onOptionChange('enableZIndex', e.target.checked)}
          />
          Sort Z-Index by Depth
        </label>
      </div>

      <div className="control-group">
        <label htmlFor="offset-range">Offset ({options.offset || 0})</label>
        <input
          type="range"
          id="offset-range"
          min="-100"
          max="100"
          step="1"
          value={options.offset || 0}
          onChange={(e) => onOptionChange('offset', parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}