import React from 'react'

interface JitterControlProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const JitterControl = <T extends { spacingJitter?: number; offsetJitter?: number }>({
  options,
  onNumberChange,
}: JitterControlProps<T>) => {
  return (
    <div className="control-group">
      <h3 className="control-group-title">Organic Effects</h3>
      <label htmlFor="spacing-jitter-slider">
        Spacing Jitter: <span>{options.spacingJitter ?? 0}</span>
      </label>
      <input
        type="range"
        id="spacing-jitter-slider"
        min="0"
        max="50"
        step="1"
        value={options.spacingJitter ?? 0}
        onChange={(e) => onNumberChange('spacingJitter', e.target.value)}
      />

      <label htmlFor="offset-jitter-slider" style={{ marginTop: '10px' }}>
        Offset Jitter: <span>{options.offsetJitter ?? 0}</span>
      </label>
      <input
        type="range"
        id="offset-jitter-slider"
        min="0"
        max="50"
        step="1"
        value={options.offsetJitter ?? 0}
        onChange={(e) => onNumberChange('offsetJitter', e.target.value)}
      />
    </div>
  )
}
