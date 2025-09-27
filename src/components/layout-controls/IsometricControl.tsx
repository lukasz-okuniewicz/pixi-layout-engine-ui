import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const IsometricControl = <T extends { tileWidth?: number; tileHeight?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="tile-width-slider">
        Tile Width: <span>{options.tileWidth}</span>
      </label>
      <input
        type="range"
        id="tile-width-slider"
        min="20"
        max="200"
        value={options.tileWidth}
        onChange={(e) => onNumberChange('tileWidth', e.target.value)}
      />
      <label htmlFor="tile-height-slider" style={{ marginTop: '10px' }}>
        Tile Height: <span>{options.tileHeight}</span>
      </label>
      <input
        type="range"
        id="tile-height-slider"
        min="10"
        max="100"
        value={options.tileHeight}
        onChange={(e) => onNumberChange('tileHeight', e.target.value)}
      />
    </div>
  )
}
