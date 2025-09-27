import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface GridDemoSpanningControlProps {
  options: ExtendedLayoutOptions
  onNumberChange: (key: keyof ExtendedLayoutOptions, value: string) => void
}

export const GridDemoSpanningControl: React.FC<GridDemoSpanningControlProps> = ({ options, onNumberChange }) => {
  return (
    <div className="control-group">
      <label className="group-label">Demo Spans (for specific items)</label>
      <div className="sub-control-pair">
        <div className="sub-control">
          <label htmlFor="demoSpan1_col">
            1st Item Col Span: <span>{options.demoSpan1_col || 1}</span>
          </label>
          <input
            type="range"
            id="demoSpan1_col"
            min="1"
            max="10"
            value={options.demoSpan1_col || 1}
            onChange={(e) => onNumberChange('demoSpan1_col', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="demoSpan1_row">
            1st Item Row Span: <span>{options.demoSpan1_row || 1}</span>
          </label>
          <input
            type="range"
            id="demoSpan1_row"
            min="1"
            max="10"
            value={options.demoSpan1_row || 1}
            onChange={(e) => onNumberChange('demoSpan1_row', e.target.value)}
          />
        </div>
      </div>
      <div className="sub-control-pair">
        <div className="sub-control">
          <label htmlFor="demoSpan2_col">
            4th Item Col Span: <span>{options.demoSpan2_col || 1}</span>
          </label>
          <input
            type="range"
            id="demoSpan2_col"
            min="1"
            max="10"
            value={options.demoSpan2_col || 1}
            onChange={(e) => onNumberChange('demoSpan2_col', e.target.value)}
          />
        </div>
        <div className="sub-control">
          <label htmlFor="demoSpan2_row">
            4th Item Row Span: <span>{options.demoSpan2_row || 1}</span>
          </label>
          <input
            type="range"
            id="demoSpan2_row"
            min="1"
            max="10"
            value={options.demoSpan2_row || 1}
            onChange={(e) => onNumberChange('demoSpan2_row', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
