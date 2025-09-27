import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onOptionChange: (key: keyof T, value: string) => void
}

export const AlignItemsControl = <T extends { alignItems?: string }>({
  options,
  onOptionChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="align-items-select">Align Items</label>
      <select
        id="align-items-select"
        value={options.alignItems}
        onChange={(e) => onOptionChange('alignItems', e.target.value)}
      >
        <option value="start">Start</option>
        <option value="center">Center</option>
        <option value="end">End</option>
      </select>
    </div>
  )
}
