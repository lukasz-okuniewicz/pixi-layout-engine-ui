import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const WaveControl = <T extends { amplitude?: number; frequency?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="amplitude-slider">
        Amplitude: <span>{options.amplitude}</span>
      </label>
      <input
        type="range"
        id="amplitude-slider"
        min="0"
        max="200"
        value={options.amplitude}
        onChange={(e) => onNumberChange('amplitude', e.target.value)}
      />
      <label htmlFor="frequency-slider" style={{ marginTop: '10px' }}>
        Frequency: <span>{options.frequency}</span>
      </label>
      <input
        type="range"
        id="frequency-slider"
        min="0.01"
        max="0.5"
        step="0.01"
        value={options.frequency}
        onChange={(e) => onNumberChange('frequency', e.target.value)}
      />
    </div>
  )
}
