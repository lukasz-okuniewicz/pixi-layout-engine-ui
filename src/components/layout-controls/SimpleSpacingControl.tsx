interface SpacingControlsProps<T> {
  options: T
  onNumberChange: (key: keyof T, value: string) => void
}

export const SimpleSpacingControl = <T extends { spacing?: number }>({
  options,
  onNumberChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="spacing-slider">
        Spacing: <span>{options.spacing}</span>
      </label>
      <input
        type="range"
        id="spacing-slider"
        min="0"
        max="100"
        value={options.spacing}
        onChange={(e) => onNumberChange('spacing', e.target.value)}
      />
    </div>
  )
}
