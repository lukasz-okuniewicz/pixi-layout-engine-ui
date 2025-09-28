import React from 'react'

interface SpacingControlsProps<T> {
  options: T
  onOptionChange: (key: keyof T, value: string | boolean | number) => void
}

const flowDescriptions: Record<string, string> = {
  default: 'Standard left-to-right, top-to-bottom grid fill.',
  snake: 'Fills rows in alternating directions (left-to-right, then right-to-left).',
  column: 'Fills the grid column by column instead of row by row.',
  'column-snake': 'Fills columns in alternating directions (top-to-bottom, then bottom-to-top).',
  'top-right-start': 'Starts at the top-right corner and fills row by row towards the left.',
  'top-right-start-snake': 'Starts at the top-right corner and snakes downwards.',
  'bottom-left-start': 'Starts at the bottom-left corner and fills row by row upwards.',
  'bottom-left-start-snake': 'Starts at the bottom-left corner and snakes upwards.',
  'bottom-right-start': 'Starts at the bottom-right corner, filling upwards and towards the left.',
  'bottom-right-start-snake': 'Starts at the bottom-right corner and snakes upwards towards the left.',
  'spiral-out': 'Starts at the grid center and spirals outwards to fill the space.',
  'spiral-in': 'Starts at the outer edges and spirals inwards towards the center.',
  'diagonal-fill': 'Fills the grid along cascading anti-diagonal lines.',
  'z-order': "Fills quadrants in a recursive 'Z' shape, a classic space-filling curve.",
  'hilbert-curve': 'Uses a continuous, U-shaped fractal curve to fill the grid, preserving locality.',
  'perimeter-first': 'Populates the outer border of the grid first, then fills the interior.',
  'interlaced-fill': 'Fills the grid like a checkerboard (all "black" squares, then all "white" squares).',
  'symmetric-outward': 'Fills the grid symmetrically from the center row outwards.',
  'gravity-fill': 'Fills cells based on their distance from a gravity point, like an expanding ripple.',
  'random-walk': 'Places items along a random, unpredictable path through the grid cells.',
  boustrophedon: 'A snake-like path that also mirrors components on reversed rows for a stylistic effect.',
  'braid-flow': 'Weaves items back and forth between the first few rows, creating a wide, shallow pattern.',
  'block-fill':
    'Fills the grid in small rectangular blocks (e.g., 2x2), creating a clustered, tiled effect. Block size is configurable below.',
  'corner-converge': 'Starts filling from all four corners simultaneously, with paths converging at the center.',
  'diamond-fill': 'Fills cells in a standard flow, but only within a diamond-shaped area in the center of the grid.',
  'value-weighted': 'A modifier that sorts items by `value` before applying the selected pattern.',
  'clustered-fill': 'Partitions the grid into regions based on a `group` property on each component.',
  honeycomb: 'Arranges items in a hexagonal pattern. Cell size is derived from the largest component and spacing.',
}

export const GridFlowControl = <
  T extends {
    flowDirection?: string
    lastRowAlign?: string
    flowReverse?: boolean
    blockWidth?: number
    blockHeight?: number
    honeycombOrientation?: string
  },
>({
  options,
  onOptionChange,
}: SpacingControlsProps<T>) => {
  const flowKey = options.flowDirection || 'default'
  let description = ''

  if (flowDescriptions[flowKey]) {
    description = flowDescriptions[flowKey]
  } else if (flowKey.startsWith('gravity-fill')) {
    description = flowDescriptions['gravity-fill']
  } else if (flowKey.startsWith('value-weighted')) {
    description = flowDescriptions['value-weighted']
  } else {
    description = 'Select a flow to see its description.'
  }

  const isValueWeightedSelected = flowKey.startsWith('value-weighted')
  const isClusteredFillSelected = flowKey === 'clustered-fill'
  const isBoustrophedonSelected = flowKey === 'boustrophedon'
  const isBlockFillSelected = flowKey === 'block-fill'
  const isHoneycombSelected = flowKey === 'honeycomb'

  return (
    <div className="control-group">
      <label htmlFor="flow-direction-select">Flow Direction</label>
      <select
        id="flow-direction-select"
        value={flowKey}
        onChange={(e) => onOptionChange('flowDirection', e.target.value)}
      >
        <optgroup label="Standard Flows">
          <option value="default">Default (Row)</option>
          <option value="snake">Snake (Row)</option>
          <option value="column">Column</option>
          <option value="column-snake">Column Snake</option>
        </optgroup>
        <optgroup label="Corner-Based Flows">
          <option value="top-right-start">Top Right Start (Row)</option>
          <option value="top-right-start-snake">Top Right Start (Row Snake)</option>
          <option value="bottom-left-start">Bottom Left Start (Row)</option>
          <option value="bottom-left-start-snake">Bottom Left Start (Row Snake)</option>
          <option value="bottom-right-start">Bottom Right Start (Row)</option>
          <option value="bottom-right-start-snake">Bottom Right Start (Row Snake)</option>
        </optgroup>
        <optgroup label="Algorithmic Patterns">
          <option value="spiral-out">Spiral Out</option>
          <option value="spiral-in">Spiral In</option>
          <option value="diagonal-fill">Diagonal Fill</option>
          <option value="z-order">Z-Order (Morton Curve)</option>
          <option value="hilbert-curve">Hilbert Curve</option>
        </optgroup>
        <optgroup label="Structural &amp; Symmetric">
          <option value="perimeter-first">Perimeter First</option>
          <option value="interlaced-fill">Interlaced (Checkerboard)</option>
          <option value="symmetric-outward">Symmetric Outward</option>
          <option value="corner-converge">Corner Converge</option>
          <option value="diamond-fill">Diamond Fill</option>
          <option value="gravity-fill-center">Gravity Fill (Center)</option>
          <option value="gravity-fill-top-left">Gravity Fill (Top Left)</option>
          <option value="gravity-fill-bottom">Gravity Fill (Bottom)</option>
          <option value="block-fill">Block Fill</option>
          <option value="honeycomb">Honeycomb</option>
        </optgroup>
        <optgroup label="Artistic &amp; Unconventional">
          <option value="random-walk">Random Walk</option>
          <option value="boustrophedon">Boustrophedon</option>
          <option value="braid-flow">Braid Flow</option>
        </optgroup>
        <optgroup label="Data-Driven Flows">
          <option value="value-weighted-default">Value-Weighted (Default)</option>
          <option value="value-weighted-snake">Value-Weighted (Snake)</option>
          <option value="value-weighted-spiral-out">Value-Weighted (Spiral Out)</option>
          <option value="clustered-fill">Clustered Fill</option>
        </optgroup>
      </select>

      {isBlockFillSelected && (
        <div className="control-group" style={{ paddingLeft: '15px', borderLeft: '2px solid #555', marginTop: '10px' }}>
          <label htmlFor="block-width">Block Width</label>
          <input
            type="number"
            id="block-width"
            value={options.blockWidth || 2}
            min="1"
            onChange={(e) => onOptionChange('blockWidth', parseInt(e.target.value, 10))}
          />
          <label htmlFor="block-height">Block Height</label>
          <input
            type="number"
            id="block-height"
            value={options.blockHeight || 2}
            min="1"
            onChange={(e) => onOptionChange('blockHeight', parseInt(e.target.value, 10))}
          />
        </div>
      )}

      <div className="help-text-block" style={{ marginTop: '5px', fontSize: '12px', color: '#ccc' }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>{description}</p>

        {isValueWeightedSelected && (
          <p style={{ margin: '5px 0 0' }}>
            <strong>Note:</strong> Requires components to have a `value` property for sorting.
          </p>
        )}
        {isClusteredFillSelected && (
          <p style={{ margin: '5px 0 0' }}>
            <strong>Note:</strong> Requires components to have a `group` property for clustering.
          </p>
        )}
        {isBoustrophedonSelected && (
          <p style={{ margin: '5px 0 0' }}>
            <strong>Note:</strong> This flow mirrors components on reversed rows. Best if components have a `scale`
            property.
          </p>
        )}
        {isHoneycombSelected && (
          <div
            className="control-group"
            style={{ paddingLeft: '15px', borderLeft: '2px solid #555', marginTop: '10px' }}
          >
            <label htmlFor="honeycombOrientation">Orientation</label>
            <select
              id="honeycombOrientation"
              value={options.honeycombOrientation || 'pointy-top'}
              onChange={(e) => onOptionChange('honeycombOrientation', e.target.value)}
            >
              <option value="pointy-top">Pointy Top</option>
              <option value="flat-top">Flat Top</option>
            </select>
          </div>
        )}
      </div>

      {!isHoneycombSelected && (
        <>
          <label htmlFor="last-row-align-select" style={{ marginTop: '10px' }}>
            Last Row Align
          </label>
          <select
            id="last-row-align-select"
            value={options.lastRowAlign}
            onChange={(e) => onOptionChange('lastRowAlign', e.target.value)}
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
          </select>
        </>
      )}
      <label className="checkbox-label">
        <input
          type="checkbox"
          id="flow-reverse-checkbox"
          checked={options.flowReverse}
          onChange={(e) => onOptionChange('flowReverse', e.target.checked)}
        />
        Flow Reverse
      </label>
    </div>
  )
}
