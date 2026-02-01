import React, { useState } from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'
import { keno80GridDefaults } from '@/data/layoutConstants'

interface Keno80GridControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: any) => void
}

export const Keno80GridControl: React.FC<Keno80GridControlProps> = ({
  options,
  onNumberChange,
  onOptionChange,
}) => {
  const indices = options.cellHighlightIndices ?? []
  const [indicesText, setIndicesText] = useState(JSON.stringify(indices))
  const [error, setError] = useState('')

  const handleIndicesChange = (text: string) => {
    setIndicesText(text)
    try {
      const parsed = JSON.parse(text)
      if (Array.isArray(parsed) && parsed.every((n) => typeof n === 'number')) {
        onOptionChange('cellHighlightIndices', parsed)
        setError('')
      } else {
        setError('Must be array of numbers')
      }
    } catch {
      setError('Invalid JSON')
    }
  }

  return (
    <div className="control-group">
      <h3 className="control-group-title">Keno 80-Ball Grid</h3>
      <label htmlFor="keno-columns">Columns:</label>
      <input
        id="keno-columns"
        type="number"
        min="1"
        max="20"
        value={options.columns ?? keno80GridDefaults.columns}
        onChange={(e) => onNumberChange('columns', e.target.value)}
      />
      <label htmlFor="keno-rows" style={{ marginTop: '8px' }}>Rows:</label>
      <input
        id="keno-rows"
        type="number"
        min="1"
        max="20"
        value={options.rows ?? keno80GridDefaults.rows}
        onChange={(e) => onNumberChange('rows', e.target.value)}
      />
      <label htmlFor="cell-highlight-offset" style={{ marginTop: '8px' }}>
        Cell Highlight Offset: <span>{options.cellHighlightOffset ?? 0}</span>
      </label>
      <input
        type="range"
        id="cell-highlight-offset"
        min="0"
        max="30"
        step="1"
        value={options.cellHighlightOffset ?? 0}
        onChange={(e) => onNumberChange('cellHighlightOffset', e.target.value)}
      />
      <label htmlFor="cell-highlight-indices" style={{ marginTop: '8px' }}>Cell Highlight Indices (JSON):</label>
      <input
        id="cell-highlight-indices"
        type="text"
        value={indicesText}
        onChange={(e) => handleIndicesChange(e.target.value)}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && <p className="control-note" style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
