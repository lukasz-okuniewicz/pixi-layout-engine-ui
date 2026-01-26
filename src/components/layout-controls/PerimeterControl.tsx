import React from 'react'

// Define the keys that THIS component specifically handles
type PerimeterKey =
    | 'excludeCorners' | 'equalDistribution' | 'startCorner'
    | 'direction' | 'offset' | 'rows' | 'autoRows'
    | 'globalRotation' | 'perspectiveY' | 'depthScale'
    | 'enableZIndex' | 'priorityDirection' | 'overflowAlignment'
    | 'cornerOffset';

interface PerimeterControlProps<T> {
  options: T;
  // This allows the function to accept any key that exists in T
  onOptionChange: (key: keyof T, value: any) => void;
}

// We use <T extends Record<string, any>> to allow any object shape
export const PerimeterControl = <T extends Record<string, any>>({
                                                                  options,
                                                                  onOptionChange
                                                                }: PerimeterControlProps<T>) => {

  // Helper to cast keys correctly for the change handler
  const handleChange = (key: PerimeterKey, value: any) => {
    onOptionChange(key as unknown as keyof T, value);
  };

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
                  onChange={(e) => handleChange('startCorner', e.target.value)}
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
                  value={(options.direction === 'clockwise' || options.direction === 'counter-clockwise')
                      ? options.direction
                      : 'clockwise'}
                  onChange={(e) => handleChange('direction', e.target.value)}
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
                onChange={(e) => handleChange('autoRows', e.target.checked)}
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
                    onChange={(e) => handleChange('rows', parseInt(e.target.value))}
                />
              </div>
          )}
        </div>

        {/* 3. Alignment & Distribution */}
        <div className="control-group">
          <label>Priority Edge</label>
          <select
              value={options.priorityDirection || 'columns'}
              onChange={(e) => handleChange('priorityDirection', e.target.value)}
          >
            <option value="columns">Columns (Top/Bottom fill first)</option>
            <option value="rows">Rows (Left/Right fill first)</option>
          </select>

          <label style={{ marginTop: '10px' }}>Overflow Alignment</label>
          <select
              value={options.overflowAlignment || 'start'}
              onChange={(e) => handleChange('overflowAlignment', e.target.value)}
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
                onChange={(e) => handleChange('equalDistribution', e.target.checked)}
            />
            Equal Distribution
          </label>

          <label className="checkbox-label">
            <input
                type="checkbox"
                checked={!!options.excludeCorners}
                onChange={(e) => handleChange('excludeCorners', e.target.checked)}
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
              onChange={(e) => handleChange('offset', parseFloat(e.target.value))}
          />

          <label style={{ marginTop: '10px' }}>Corner Push-out ({options.cornerOffset || 0})</label>
          <input
              type="range"
              min="-100"
              max="100"
              value={options.cornerOffset || 0}
              onChange={(e) => handleChange('cornerOffset', parseFloat(e.target.value))}
          />
        </div>

        {/* 5. 3D Perspective */}
        <div className="control-group full-width" style={{ marginTop: '1rem', borderTop: '1px solid #444', paddingTop: '1rem' }}>
          <h4>3D Perspective</h4>
            <div className="control-group">
              <label>Rotation ({options.globalRotation || 0}°)</label>
              <input
                  type="range"
                  min="0"
                  max="360"
                  value={options.globalRotation || 0}
                  onChange={(e) => handleChange('globalRotation', parseFloat(e.target.value))}
              />
              <label className="checkbox-label" style={{ marginTop: 15 }}>
                <input
                    type="checkbox"
                    checked={!!options.enableZIndex}
                    onChange={(e) => handleChange('enableZIndex', e.target.checked)}
                />
                Enable Z-Sorting
              </label>
            <div>
              <label>Tilt ({options.perspectiveY ?? 1})</label>
              <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.05"
                  value={options.perspectiveY ?? 1}
                  onChange={(e) => handleChange('perspectiveY', parseFloat(e.target.value))}
              />
              <label style={{ marginTop: 10 }}>Depth Scale ({options.depthScale ?? 0})</label>
              <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={options.depthScale ?? 0}
                  onChange={(e) => handleChange('depthScale', parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
  )
}