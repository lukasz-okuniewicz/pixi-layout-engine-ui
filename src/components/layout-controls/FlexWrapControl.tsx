import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface FlexWrapControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const FlexWrapControl: React.FC<FlexWrapControlProps> = ({ options, onNumberChange, onOptionChange }) => {
  return (
    <div className="control-group">
      <div className="sub-control">
        <label htmlFor="flexMaxWidth">Max Width:</label>
        <input
          id="flexMaxWidth"
          type="number"
          value={options.maxWidth || ''}
          placeholder="(optional)"
          onChange={(e) => onNumberChange('maxWidth', e.target.value)}
        />
      </div>

      <div className="sub-control">
        <label htmlFor="flexMaxHeight">Max Height:</label>
        <input
          id="flexMaxHeight"
          type="number"
          value={options.maxHeight || ''}
          placeholder="(optional)"
          onChange={(e) => onNumberChange('maxHeight', e.target.value)}
        />
      </div>

      <div className="sub-control">
        <label htmlFor="alignContent">Align Content:</label>
        <select
          id="alignContent"
          value={options.alignContent || 'start'}
          onChange={(e) => onOptionChange('alignContent', e.target.value)}
        >
          <option value="start">Start</option>
          <option value="center">Center</option>
          <option value="end">End</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
          <option value="stretch">Stretch</option>
        </select>
      </div>
    </div>
  )
}
