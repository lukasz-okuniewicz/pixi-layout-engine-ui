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
        <>
          <div className="control-group">
            <label htmlFor="offset-range">
              Rows <span>{options.rows}</span>
            </label>
            <input
              type="range"
              id="offset-rows"
              min="1"
              max="100"
              step="1"
              value={options.rows || 5}
              onChange={(e) => onOptionChange('rows', parseFloat(e.target.value))}
            />
          </div>
        </>
      )}

      <div className="control-group">
        <label htmlFor="start-corner-select">Start Corner</label>
        <select
          id="start-corner-select"
          value={options.startCorner || 'top-left'}
          onChange={(e) => onOptionChange('startCorner', e.target.value)}
        >
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-right">Bottom Right</option>
          <option value="bottom-left">Bottom Left</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="direction-select">Direction</label>
        <select
          id="direction-select"
          value={options.direction || 'clockwise'}
          onChange={(e) => onOptionChange('direction', e.target.value)}
        >
          <option value="clockwise">Clockwise</option>
          <option value="counter-clockwise">Counter-Clockwise</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="distribution-select">Distribution</label>
        <select
          id="distribution-select"
          value={options.distribution || 'even'}
          onChange={(e) => onOptionChange('distribution', e.target.value)}
        >
          <option value="even">Evenly Spaced</option>
          <option value="packed">Packed Together</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="rotation-select">Rotation</label>
        <select
          id="rotation-select"
          value={options.rotation || 'none'}
          onChange={(e) => onOptionChange('rotation', e.target.value)}
        >
          <option value="none">None</option>
          <option value="face-outward">Face Outward</option>
          <option value="face-inward">Face Inward</option>
        </select>
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

      <div className="control-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="prioritize-corners-checkbox"
            checked={!!options.prioritizeCorners}
            onChange={(e) => onOptionChange('prioritizeCorners', e.target.checked)}
          />
          Prioritize Corners
        </label>
      </div>
    </div>
  )
}
