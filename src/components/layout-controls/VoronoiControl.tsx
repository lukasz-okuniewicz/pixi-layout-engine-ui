import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const VoronoiControl = <T extends { width?: number; height?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <p className="control-note">
        <strong>Note:</strong> Voronoi layout requires a `voronoiParser` (like from d3-delaunay) to be provided in your
        code. The layout is seeded from random initial positions.
      </p>
      <label htmlFor="voronoi-width-slider">
        Width: <span>{options.width}</span>
      </label>
      <input
        type="range"
        id="voronoi-width-slider"
        min="200"
        max="1200"
        value={options.width}
        onChange={(e) => onNumberChange('width', e.target.value)}
      />
      <label htmlFor="voronoi-height-slider" style={{ marginTop: '10px' }}>
        Height: <span>{options.height}</span>
      </label>
      <input
        type="range"
        id="voronoi-height-slider"
        min="200"
        max="1200"
        value={options.height}
        onChange={(e) => onNumberChange('height', e.target.value)}
      />
    </div>
  )
}
