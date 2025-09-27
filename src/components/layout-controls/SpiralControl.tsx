import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const SpiralControl = <T extends { separation?: number; tightness?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="separation-slider">
        Separation: <span>{options.separation}</span>
      </label>
      <input
        type="range"
        id="separation-slider"
        min="5"
        max="100"
        value={options.separation}
        onChange={(e) => onNumberChange('separation', e.target.value)}
      />
      <label htmlFor="tightness-slider" style={{ marginTop: '10px' }}>
        Tightness: <span>{options.tightness}</span>
      </label>
      <input
        type="range"
        id="tightness-slider"
        min="0.1"
        max="5"
        step="0.1"
        value={options.tightness}
        onChange={(e) => onNumberChange('tightness', e.target.value)}
      />
    </div>
  )
}
