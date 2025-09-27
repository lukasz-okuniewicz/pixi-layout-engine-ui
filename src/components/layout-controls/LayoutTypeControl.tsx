import React from 'react'
import {layoutEnum, LayoutName} from 'pixi-layout-engine'

interface SpacingControlsProps<T> {
  options: T
  onOptionChange: (key: keyof T, value: string) => void
}

const sortedLayouts = Object.entries(layoutEnum).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

export const LayoutTypeControl = <T extends { layoutName?: string }>({
  options,
  onOptionChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="layout-select">Layout Type</label>
      <select
        id="layout-select"
        value={options.layoutName}
        onChange={(e) => onOptionChange('layoutName', e.target.value as LayoutName)}
      >
        {sortedLayouts.map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  )
}
