interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
  onOptionChange: (key: keyof T, value: string) => void
}

export const SizingControl = <
  T extends { spacing?: number; sizingMode?: string; fixedWidth?: number; fixedHeight?: number },
>({
  options,
  onNumberChange,
  onOptionChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="sizing-mode-select">Sizing Mode</label>
      <select
        id="sizing-mode-select"
        value={options.sizingMode}
        onChange={(e) => onOptionChange('sizingMode', e.target.value as 'auto' | 'fixed')}
      >
        <option value="auto">Auto</option>
        <option value="fixed">Fixed</option>
      </select>
      {options.sizingMode === 'fixed' && (
        <div id="fixed-size-controls">
          <div className="sub-control-group">
            <div>
              <label htmlFor="fixed-width-input">Width</label>
              <input
                type="number"
                id="fixed-width-input"
                value={options.fixedWidth}
                min="10"
                onChange={(e) => onNumberChange('fixedWidth', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fixed-height-input">Height</label>
              <input
                type="number"
                id="fixed-height-input"
                value={options.fixedHeight}
                min="10"
                onChange={(e) => onNumberChange('fixedHeight', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
