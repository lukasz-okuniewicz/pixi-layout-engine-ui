import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const BubbleControl = <T extends { iterations?: number; centerStrength?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="bubble-iterations-slider">
        Iterations: <span>{options.iterations}</span>
      </label>
      <input
        type="range"
        id="bubble-iterations-slider"
        min="10"
        max="300"
        value={options.iterations}
        onChange={(e) => onNumberChange('iterations', e.target.value)}
      />
      <label htmlFor="bubble-strength-slider" style={{ marginTop: '10px' }}>
        Center Strength: <span>{options.centerStrength}</span>
      </label>
      <input
        type="range"
        id="bubble-strength-slider"
        min="0.001"
        max="0.01"
        step="0.001"
        value={options.centerStrength}
        onChange={(e) => onNumberChange('centerStrength', e.target.value)}
      />
    </div>
  )
}
