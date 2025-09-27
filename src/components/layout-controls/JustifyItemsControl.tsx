interface SpacingControlsProps<T> {
  options: T
  onOptionChange: (key: keyof T, value: string) => void
}

export const JustifyItemsControl = <T extends { justifyItems?: any }>({
  options,
  onOptionChange,
}: SpacingControlsProps<T>) => {
  return (
    <div className="control-group">
      <label htmlFor="justify-items-select">Justify Items</label>
      <select
        id="justify-items-select"
        value={options.justifyItems}
        onChange={(e) => onOptionChange('justifyItems', e.target.value)}
      >
        <option value="start">Start</option>
        <option value="center">Center</option>
        <option value="end">End</option>
      </select>
    </div>
  )
}
