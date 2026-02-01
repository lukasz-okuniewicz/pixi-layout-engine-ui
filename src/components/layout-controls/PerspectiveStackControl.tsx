import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface PerspectiveStackControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const PerspectiveStackControl: React.FC<PerspectiveStackControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <h4>Cover Flow</h4>
      <div className="sub-control">
        <label htmlFor="coverFlowCenter">Center Index: <span>{options.coverFlowCenter ?? 0}</span></label>
        <input
          type="range"
          id="coverFlowCenter"
          min="0"
          max="24"
          value={options.coverFlowCenter ?? 0}
          onChange={(e) => onNumberChange('coverFlowCenter', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="coverFlowSkew">Skew: <span>{options.coverFlowSkew ?? 0.3}</span></label>
        <input
          type="range"
          id="coverFlowSkew"
          min="0"
          max="1"
          step="0.05"
          value={options.coverFlowSkew ?? 0.3}
          onChange={(e) => onNumberChange('coverFlowSkew', e.target.value)}
        />
      </div>
      <div className="sub-control">
        <label htmlFor="coverFlowDepth">Depth Scale: <span>{options.coverFlowDepth ?? 0.85}</span></label>
        <input
          type="range"
          id="coverFlowDepth"
          min="0.5"
          max="1"
          step="0.05"
          value={options.coverFlowDepth ?? 0.85}
          onChange={(e) => onNumberChange('coverFlowDepth', e.target.value)}
        />
      </div>
    </div>
  )
}
