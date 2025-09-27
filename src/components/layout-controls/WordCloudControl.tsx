import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const WordCloudControl = <T extends { iterations?: number; spiralTightness?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="wordcloud-iterations-slider">
        Placement Tries: <span>{options.iterations}</span>
      </label>
      <input
        type="range"
        id="wordcloud-iterations-slider"
        min="50"
        max="500"
        value={options.iterations}
        onChange={(e) => onNumberChange('iterations', e.target.value)}
      />
      <label htmlFor="wordcloud-tightness-slider" style={{ marginTop: '10px' }}>
        Spiral Tightness: <span>{options.spiralTightness}</span>
      </label>
      <input
        type="range"
        id="wordcloud-tightness-slider"
        min="0.1"
        max="2"
        step="0.1"
        value={options.spiralTightness}
        onChange={(e) => onNumberChange('spiralTightness', e.target.value)}
      />
    </div>
  )
}
