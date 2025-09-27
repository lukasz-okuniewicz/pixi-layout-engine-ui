import React, { useState } from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface PyramidControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: any) => void
}

export const PyramidControl: React.FC<PyramidControlProps> = ({ options, onNumberChange, onOptionChange }) => {
  const [tiersText, setTiersText] = useState(JSON.stringify(options.tiers || [1, 2, 3]))
  const [error, setError] = useState('')

  const handleTextChange = (text: string) => {
    setTiersText(text)
    try {
      const parsedTiers = JSON.parse(text)
      if (Array.isArray(parsedTiers) && parsedTiers.every((n) => typeof n === 'number')) {
        onOptionChange('tiers', parsedTiers)
        setError('')
      } else {
        setError('Must be an array of numbers')
      }
    } catch (e) {
      setError('Invalid JSON')
    }
  }

  const getAlignmentLabels = () => {
    const isHorizontal = options.direction === 'left' || options.direction === 'right'
    return isHorizontal
      ? { start: 'Left', center: 'Center', end: 'Right' }
      : { start: 'Top', center: 'Center', end: 'Bottom' }
  }
  const alignmentLabels = getAlignmentLabels()

  return (
    <div className="control-group">
      <label htmlFor="tiers-json">Tiers (e.g., [1, 2, 3]):</label>
      <input
        id="tiers-json"
        type="text"
        value={tiersText}
        onChange={(e) => handleTextChange(e.target.value)}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && (
        <p className="control-note" style={{ color: 'red', marginTop: '4px' }}>
          {error}
        </p>
      )}

      <h4 className="control-heading">Shape & Orientation</h4>
      <div className="sub-control">
        <label htmlFor="direction-select">Direction:</label>
        <select
          id="direction-select"
          value={options.direction || 'up'}
          onChange={(e) => onOptionChange('direction', e.target.value)}
        >
          <option value="up">Up</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="sub-control">
        <label htmlFor="alignment-select">Overall Alignment:</label>
        <select
          id="alignment-select"
          value={options.alignment || 'center'}
          onChange={(e) => onOptionChange('alignment', e.target.value)}
        >
          <option value="top">{alignmentLabels.start}</option>
          <option value="center">{alignmentLabels.center}</option>
          <option value="bottom">{alignmentLabels.end}</option>
        </select>
      </div>
      <div className="sub-control">
        <label htmlFor="tier-alignment-select">Tier Alignment:</label>
        <select
          id="tier-alignment-select"
          value={options.tierAlignment || 'center'}
          onChange={(e) => onOptionChange('tierAlignment', e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="sub-control">
        <label htmlFor="staggerOffset">
          Stagger Offset: <span>{options.staggerOffset}</span>
        </label>
        <input
          type="range"
          id="staggerOffset"
          min="-50"
          max="50"
          step="1"
          value={options.staggerOffset || 0}
          onChange={(e) => onNumberChange('staggerOffset', e.target.value)}
        />
      </div>

      <h4 className="control-heading">Sizing & Spacing</h4>
      <div className="sub-control">
        <label htmlFor="rowGap">
          Row Gap: <span>{options.rowGap}</span>
        </label>
        <input
          type="range"
          id="rowGap"
          min="0"
          max="100"
          step="1"
          value={options.rowGap || 10}
          onChange={(e) => onNumberChange('rowGap', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="itemSpacing">
          Item Spacing: <span>{options.itemSpacing}</span>
        </label>
        <input
          type="range"
          id="itemSpacing"
          min="0"
          max="100"
          step="1"
          value={options.itemSpacing || 10}
          onChange={(e) => onNumberChange('itemSpacing', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="justifyTierContent-select">Justify Tier Content:</label>
        <select
          id="justifyTierContent-select"
          value={options.justifyTierContent || 'center'}
          onChange={(e) => onOptionChange('justifyTierContent', e.target.value)}
        >
          <option value="center">Center</option>
          <option value="start">Start</option>
          <option value="end">End</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
        </select>
      </div>
      <div className="sub-control checkbox-control">
        <label htmlFor="useActualSize">
          <input
            type="checkbox"
            id="useActualSize"
            checked={!!options.useActualSize}
            onChange={(e) => onOptionChange('useActualSize', e.target.checked)}
          />
          Use Actual Sizes
        </label>
      </div>

      <h4 className="control-heading">Ordering</h4>
      <div className="sub-control">
        <label htmlFor="sortBy-select">Sort By:</label>
        <select
          id="sortBy-select"
          value={options.sortBy ? 'value' : 'none'}
          onChange={(e) => onOptionChange('sortBy', e.target.value === 'value' ? 'value' : null)}
        >
          <option value="none">None (Default Order)</option>
          <option value="value">Component Value</option>
        </select>
      </div>
      <div className="sub-control">
        <label htmlFor="sortDirection-select">Sort Direction:</label>
        <select
          id="sortDirection-select"
          value={options.sortDirection || 'asc'}
          onChange={(e) => onOptionChange('sortDirection', e.target.value)}
          disabled={!options.sortBy}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  )
}
