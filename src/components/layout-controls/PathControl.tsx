import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onOptionChange: (key: keyof T, value: string | boolean) => void
}

export const PathControl = <T extends { path?: string; rotateToPath?: boolean }>({
  options,
  onOptionChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="path-select">Example Paths</label>
      <select
        id="path-select"
        onChange={(e) => onOptionChange('path', e.target.value)}
        value={options.path || 'M 0 100 A 100 100 0 0 1 200 100'}
      >
        <option value="M 0 100 A 100 100 0 0 1 200 100">Arc</option>
        <option value="M20,20 C20,100 200,100 200,20">Cubic Bezier</option>
        <option value="M10,80 Q95,10 180,80">Quadratic Bezier</option>
        <option value="M25 25 L 175 25 L 175 175 L 25 175 Z">Square</option>
      </select>
      <label htmlFor="path-input" style={{ marginTop: '10px' }}>
        SVG Path Data
      </label>
      <textarea
        id="path-input"
        rows={3}
        value={options.path}
        onChange={(e) => onOptionChange('path', e.target.value)}
        placeholder='e.g., "M10 10 H 90 V 90 H 10 Z"'
      />
      <label className="checkbox-label" style={{ marginTop: '10px' }}>
        <input
          type="checkbox"
          id="rotate-to-path-checkbox"
          checked={!!options.rotateToPath}
          onChange={(e) => onOptionChange('rotateToPath', e.target.checked)}
        />
        Rotate to Path
      </label>
    </div>
  )
}
