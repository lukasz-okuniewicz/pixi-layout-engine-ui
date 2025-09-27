import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const ComponentCountControl = <T extends { componentCount?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="component-count-slider">
        Component Count: <span>{options.componentCount}</span>
      </label>
      <input
        type="range"
        id="component-count-slider"
        min="1"
        max="200"
        step="1"
        value={options.componentCount}
        onChange={(e) => onNumberChange('componentCount', e.target.value)}
      />
    </div>
  )
}
