interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
  slotLabels?: boolean
}

export const GapSpacingControl = <T extends { columnGap?: number; rowGap?: number; spacing?: number }>({
  options,
  onNumberChange,
  slotLabels = false,
}: SpacingControlsProps<T>) => {
  const colLabel = slotLabels ? 'Reel gap (horizontal)' : 'Column Gap'
  const rowLabel = slotLabels ? 'Symbol gap (vertical)' : 'Row Gap'
  return (
    <div className="control-group">
      <label htmlFor="col-gap-slider">
        {colLabel}: <span>{options.columnGap ?? options.spacing}</span>
      </label>
      <input
        type="range"
        id="col-gap-slider"
        min="0"
        max="100"
        value={options.columnGap ?? options.spacing ?? 0}
        onChange={(e) => onNumberChange('columnGap', e.target.value)}
      />

      <label htmlFor="row-gap-slider" style={{ marginTop: '10px' }}>
        {rowLabel}: <span>{options.rowGap ?? options.spacing}</span>
      </label>
      <input
        type="range"
        id="row-gap-slider"
        min="0"
        max="100"
        value={options.rowGap ?? options.spacing ?? 0}
        onChange={(e) => onNumberChange('rowGap', e.target.value)}
      />
    </div>
  )
}
