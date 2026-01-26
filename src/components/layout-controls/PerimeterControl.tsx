import React from 'react'

type PerimeterOptions = {
  excludeCorners?: boolean
  equalDistribution?: boolean
  startCorner?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  direction?: 'clockwise' | 'counter-clockwise'
  offset?: number
  rows?: number
  autoRows?: boolean
  globalRotation?: number
  perspectiveY?: number
  depthScale?: number
  enableZIndex?: boolean
  priorityDirection?: 'columns' | 'rows'
  overflowAlignment?: 'start' | 'center' | 'end' | 'justify-corners'
  cornerOffset?: number
}

interface PerimeterControlProps<T extends PerimeterOptions> {
  options: T
  onOptionChange: (key: keyof T, value: string | number | boolean) => void
}

export const PerimeterControl = <T extends PerimeterOptions>({ options, onOptionChange }: PerimeterControlProps<T>) => {
  return (
      <div className="control-group-grid">
        {/* 1. Path & Sequencing */}
        <div className="control-group full-width" style={{ borderBottom: '1px solid #444', marginBottom: '1rem', paddingBottom: '1rem' }}>
          <h4>Path & Flow</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label>Start Corner</label>
              <select
                  value={options.startCorner || 'top-left'}
                  onChange={(e) => onOptionChange('startCorner', e.target.value)}
              >
                <option value="top-left">Top Left</option>
                <option value="top-right">Top Right</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
              </select>
            </div>
            <div>
              <label>Sequence Direction</label>
              <select
                  value={options.direction || 'clockwise'}
                  onChange={(e) => onOptionChange('direction', e.target.value)}
              >
                <option value="clockwise">Clockwise</option>
                <option value="counter-clockwise">Counter-Clockwise</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2. Grid Geometry */}
        <div className="control-group">
          <label className="checkbox-label">
            <input
                type="checkbox"
                checked={!!options.autoRows}
                onChange={(e) => onOptionChange('autoRows', e.target.checked)}
            />
            Auto-Calculate Rows
          </label>

          {!options.autoRows && (
              <div style={{ marginTop: '10px' }}>
                <label>Rows: {options.rows || 3}</label>
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={options.rows || 3}
                    onChange={(e) => onOptionChange('rows', parseInt(e.target.value))}
                />
              </div>
          )}
        </div>

        {/* 3. Alignment & Distribution */}
        <div className="control-group">
          <label>Priority Edge</label>
          <select
              value={options.priorityDirection || 'columns'}
              onChange={(e) => onOptionChange('priorityDirection', e.target.value)}
          >
            <option value="columns">Columns (Top/Bottom fill first)</option>
            <option value="rows">Rows (Left/Right fill first)</option>
          </select>

          <label style={{ marginTop: '10px' }}>Overflow Alignment</label>
          <select
              value={options.overflowAlignment || 'start'}
              onChange={(e) => onOptionChange('overflowAlignment', e.target.value)}
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="justify-corners">Justify Corners</option>
          </select>

          <label className="checkbox-label" style={{ marginTop: '10px' }}>
            <input
                type="checkbox"
                checked={!!options.equalDistribution}
                onChange={(e) => onOptionChange('equalDistribution', e.target.checked)}
            />
            Equal Distribution
          </label>

          <label className="checkbox-label">
            <input
                type="checkbox"
                checked={!!options.excludeCorners}
                onChange={(e) => onOptionChange('excludeCorners', e.target.checked)}
            />
            Exclude Corners
          </label>
        </div>

        {/* 4. Offsets */}
        <div className="control-group">
          <label>Radial Offset ({options.offset || 0})</label>
          <input
              type="range"
              min="-200"
              max="200"
              value={options.offset || 0}
              onChange={(e) => onOptionChange('offset', parseFloat(e.target.value))}
          />

          <label style={{ marginTop: '10px' }}>Corner Push-out ({options.cornerOffset || 0})</label>
          <input
              type="range"
              min="-100"
              max="100"
              value={options.cornerOffset || 0}
              onChange={(e) => onOptionChange('cornerOffset', parseFloat(e.target.value))}
          />
        </div>

        {/* 5. 3D Perspective */}
        <div
            className="control-group full-width"
            style={{ marginTop: '1rem', borderTop: '1px solid #444', paddingTop: '1rem' }}
        >
          <h4>3D Perspective</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label>Global Rotation ({options.globalRotation || 0}°)</label>
              <input
                  type="range"
                  min="0"
                  max="360"
                  value={options.globalRotation || 0}
                  onChange={(e) => onOptionChange('globalRotation', parseFloat(e.target.value))}
              />

              <label className="checkbox-label" style={{ marginTop: 15 }}>
                <input
                    type="checkbox"
                    checked={!!options.enableZIndex}
                    onChange={(e) => onOptionChange('enableZIndex', e.target.checked)}
                />
                Enable Z-Sorting
              </label>
            </div>

            <div>
              <label>Perspective Tilt ({options.perspectiveY ?? 1})</label>
              <input
                  type="range"
                  min="0.1"
                  max="1.5"
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
            </div>
          </div>
        </div>
      </div>
  )
}