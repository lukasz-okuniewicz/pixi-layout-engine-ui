import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface OriginControlProps {
  options: ExtendedLayoutOptions
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const OriginControl: React.FC<OriginControlProps> = ({ options, onOptionChange }) => {
  return (
    <div className="control-group">
      <label>Layout Origin:</label>
      <select value={options.origin || 'start'} onChange={(e) => onOptionChange('origin', e.target.value)}>
        <option value="start">Start (0,0)</option>
        <option value="center">Center</option>
        <option value="end">End</option>
      </select>
    </div>
  )
}
