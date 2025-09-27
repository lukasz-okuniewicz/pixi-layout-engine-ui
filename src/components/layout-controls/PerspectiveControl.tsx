import React from 'react'

interface PerspectiveOptions {
  depthSpacing?: number
  scale?: number
}

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const PerspectiveControl = <T extends PerspectiveOptions>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="perspective-scale-slider">
        Overall Scale: <span>{options.scale}</span>
      </label>
      <input
        type="range"
        id="perspective-scale-slider"
        min="0.1"
        max="2"
        step="0.05"
        value={options.scale || 0.5}
        onChange={(e) => onNumberChange('scale', e.target.value)}
      />

      <label htmlFor="depth-spacing-slider" style={{ marginTop: '10px' }}>
        Depth Spacing: <span>{options.depthSpacing}</span>
      </label>
      <input
        type="range"
        id="depth-spacing-slider"
        min="0.5"
        max="1.5"
        step="0.01"
        value={options.depthSpacing || 0.8}
        onChange={(e) => onNumberChange('depthSpacing', e.target.value)}
      />
      <p className="control-note">Note: Vanishing point is the center of the layout.</p>
    </div>
  )
}
