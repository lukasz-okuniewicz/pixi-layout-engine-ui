import React from 'react'
import { ExtendedLayoutOptions } from '../LayoutController'

interface ReelHeightsControlProps {
  options: ExtendedLayoutOptions
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: string | number | boolean | undefined | number[]) => void
  reelCount?: number
}

const DEFAULT_REEL_HEIGHTS = [4, 4, 4, 4, 4]

export const ReelHeightsControl: React.FC<ReelHeightsControlProps> = ({
  options,
  onOptionChange,
  reelCount = 6,
}) => {
  const heights = options.reelHeights ?? DEFAULT_REEL_HEIGHTS
  const padded = heights.length >= reelCount ? heights : [...heights, ...Array(reelCount - heights.length).fill(4)]
  const displayHeights = padded.slice(0, reelCount)

  const setReelHeight = (index: number, value: number) => {
    const next = [...displayHeights]
    next[index] = Math.max(1, Math.min(8, value))
    onOptionChange('reelHeights', next)
  }

  return (
    <div className="control-group">
      <label>Reel heights (symbols per reel)</label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        {displayHeights.map((h, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <label htmlFor={`reel-${i}`} style={{ minWidth: '1.5em', fontSize: '12px' }}>
              {i + 1}
            </label>
            <input
              type="number"
              id={`reel-${i}`}
              min={1}
              max={8}
              value={h}
              style={{ width: '44px' }}
              onChange={(e) => setReelHeight(i, parseInt(e.target.value, 10) || 1)}
            />
          </div>
        ))}
      </div>
      <p className="control-note" style={{ marginTop: '6px' }}>
        Total symbols: {displayHeights.reduce((a, b) => a + b, 0)}
      </p>
    </div>
  )
}
