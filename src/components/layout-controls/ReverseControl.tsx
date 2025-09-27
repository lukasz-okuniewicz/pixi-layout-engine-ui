import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface ReverseControlProps {
  options: ExtendedLayoutOptions
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: any) => void
}

export const ReverseControl: React.FC<ReverseControlProps> = ({ options, onOptionChange }) => {
  const isChecked = options.isReversed || false

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOptionChange('isReversed', e.target.checked)
  }

  return (
    <div className="control-group">
      <label htmlFor="isReversed" className="toggle-label">
        <input type="checkbox" id="isReversed" checked={isChecked} onChange={handleChange} />
        Reverse Direction
      </label>
    </div>
  )
}
