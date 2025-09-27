import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface JustifyContentControlProps {
  options: ExtendedLayoutOptions
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | boolean) => void
}

export const JustifyContentControl: React.FC<JustifyContentControlProps> = ({ options, onOptionChange }) => {
  return (
    <div className="control-group">
      <label>Justify Content:</label>
      <select
        value={options.justifyContent || 'start'}
        onChange={(e) => onOptionChange('justifyContent', e.target.value)}
      >
        <option value="start">Start</option>
        <option value="center">Center</option>
        <option value="end">End</option>
        <option value="space-between">Space Between</option>
        <option value="space-around">Space Around</option>
      </select>

      <p className="control-note">Justification apply when a Max Width/Height creates extra space.</p>
    </div>
  )
}
