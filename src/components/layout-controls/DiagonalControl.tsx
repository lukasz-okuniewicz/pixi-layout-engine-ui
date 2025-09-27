import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const DiagonalControl = <T extends { angle?: number }>({ options, onNumberChange }: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="angle-slider">
        Angle: <span>{options.angle}</span>°
      </label>{' '}
      <input
        type="range"
        id="angle-slider"
        min="0"
        max="360"
        value={options.angle}
        onChange={(e) => onNumberChange('angle', e.target.value)}
      />
    </div>
  )
}
