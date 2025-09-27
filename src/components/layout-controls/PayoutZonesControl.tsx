import React, {useState} from 'react'
import {ExtendedLayoutOptions} from '../LayoutController'
import {layoutEnum} from 'pixi-layout-engine'

const defaultZones = JSON.stringify(
  [
    { name: 'main_bet', bounds: { x: -200, y: 0, width: 400, height: 100 } },
    { name: 'side_bet_1', bounds: { x: -200, y: -100, width: 190, height: 80 } },
    { name: 'side_bet_2', bounds: { x: 10, y: -100, width: 190, height: 80 } },
  ],
  null,
  2,
)

interface PayoutZonesControlProps {
  options: ExtendedLayoutOptions
  onOptionChange: (key: keyof ExtendedLayoutOptions, value: any) => void
}

export const PayoutZonesControl: React.FC<PayoutZonesControlProps> = ({ options, onOptionChange }) => {
  const [zoneText, setZoneText] = useState(JSON.stringify(options.zones, null, 2) || defaultZones)
  const [error, setError] = useState('')

  const handleTextChange = (text: string) => {
    setZoneText(text)
    try {
      const parsedZones = JSON.parse(text)
      onOptionChange('zones', parsedZones)
      setError('')
    } catch (e) {
      setError('Invalid JSON')
    }
  }

  return (
    <div className="control-group">
      <label htmlFor="zones-json">Zones (JSON Array):</label>
      <textarea
        id="zones-json"
        rows={8}
        value={zoneText}
        onChange={(e) => handleTextChange(e.target.value)}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && (
        <p className="control-note" style={{ color: 'red' }}>
          {error}
        </p>
      )}

      <div className="sub-control" style={{ marginTop: '10px' }}>
        <label htmlFor="zone-layout-select">Layout Within Zones (Optional):</label>
        <select
          id="zone-layout-select"
          value={options.zoneLayout || ''}
          onChange={(e) => onOptionChange('zoneLayout', e.target.value)}
        >
          <option value="">Random (Default)</option>
          <option value={layoutEnum.SQUARE}>Square Grid</option>
          <option value={layoutEnum.BUBBLE}>Bubble</option>
          <option value={layoutEnum.PHYLLOTAXIS}>Phyllotaxis</option>
        </select>
      </div>
    </div>
  )
}
