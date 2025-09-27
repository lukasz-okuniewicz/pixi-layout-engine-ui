import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const TreemapControl = <T extends { width?: number; height?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="treemap-width-slider">
        Width: <span>{options.width}</span>
      </label>
      <input
        type="range"
        id="treemap-width-slider"
        min="200"
        max="1200"
        value={options.width}
        onChange={(e) => onNumberChange('width', e.target.value)}
      />
      <label htmlFor="treemap-height-slider" style={{ marginTop: '10px' }}>
        Height: <span>{options.height}</span>
      </label>
      <input
        type="range"
        id="treemap-height-slider"
        min="200"
        max="1200"
        value={options.height}
        onChange={(e) => onNumberChange('height', e.target.value)}
      />
    </div>
  )
}
