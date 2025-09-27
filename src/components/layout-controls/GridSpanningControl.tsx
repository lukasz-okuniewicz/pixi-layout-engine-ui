import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface GridSpanningControlProps {
  options: ExtendedLayoutOptions
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: boolean) => void
}

export const GridSpanningControl: React.FC<GridSpanningControlProps> = ({ options, onOptionChange }) => {
  return (
    <div className="control-group">
      <div className="checkbox-control">
        <label htmlFor="useGridSpanning">
          <input
            id="useGridSpanning"
            type="checkbox"
            checked={options.useGridSpanning || false}
            onChange={(e) => onOptionChange('useGridSpanning', e.target.checked)}
          />
          Enable Item Spanning
        </label>
      </div>
      <p className="control-note">
        When enabled, components with `colSpan` or `rowSpan` properties will occupy multiple grid cells. This uses a
        more advanced algorithm.
      </p>
    </div>
  )
}
