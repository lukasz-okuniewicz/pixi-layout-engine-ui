import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const ColumnsControl = <T extends { columns?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="columns-slider">
        Columns: <span>{options.columns}</span>
      </label>
      <input
        type="range"
        id="columns-slider"
        min="1"
        max="15"
        value={options.columns}
        onChange={(e) => onNumberChange('columns', e.target.value)}
      />
    </div>
  )
}
