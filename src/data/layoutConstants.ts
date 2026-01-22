import { layoutEnum } from 'pixi-layout-engine'

export interface HelpContent {
  title: string
  description: string
  settings: Record<string, string>
}

export const layoutHelpData: Record<string, HelpContent> = {
  [layoutEnum.LINE]: {
    title: 'Line Layout',
    description:
      'A universal layout for arranging components in a single, non-wrapping line at any angle. The orientation is primarily controlled by the `Angle` property.',
    settings: {
      Angle:
        'The master orientation control, in degrees. `0` creates a horizontal line, `90` creates a vertical line, and any other value creates a diagonal line.',
      Spacing: 'The pixel gap between each component along the line.',
      'Sizing Mode': "`Auto` uses each component's own size along the main axis. `Fixed` enforces a uniform size.",
      'Is Reversed': 'Reverses the order of components along the line, regardless of the angle.',
      'Align Items':
        'Aligns items on the cross-axis relative to the line. For a horizontal line, this is vertical alignment (top, middle, bottom). For a 45° line, this aligns items perpendicular to that angle.',
    },
  },
  [layoutEnum.SQUARE]: {
    title: 'Square Grid',
    description:
      'The most versatile layout, offering dozens of `Flow Direction` patterns. It can create simple row/column fills, complex spirals, unique structural patterns (like checkerboards or corner-convergence), geometric curves, and even random or data-driven patterns. It also supports an advanced `Item Spanning` mode.',
    settings: {
      Columns: 'Controls the number of columns in the grid.',
      'Sizing Mode': '`Auto` makes cells fit the largest item. `Fixed` uses a set width/height.',
      'Column/Row Gap': 'Sets the space between grid cells.',
      'Flow Direction':
        'Determines the visual pattern used to fill the grid cells. The dropdown contains a vast library of patterns, including: Standard Flows (rows, columns, snake), Corner-Based starts, Algorithmic Patterns (spiral, Hilbert curve), Structural & Symmetric Patterns (checkerboard, gravity-fill, perimeter-first), Artistic flows (random-walk, braid), and Data-Driven flows.',
      'Braid Rows (for Braid Flow)':
        'Controls the number of rows to weave between when using the `braid-flow` pattern.',
      'Block Width/Height (for Block Fill)':
        'Controls the size of the rectangular blocks used by the `block-fill` flow pattern.',
      'Enable Item Spanning':
        'Switches to an advanced mode where components can use `colSpan` and `rowSpan` properties. Most complex flow directions do not apply in this mode.',
      'Corner Offset':
        'Explodes (positive values) or tucks in (negative values) the items at the four corners of the grid. Useful for creating rounded grid appearances or stylistic breaks.',
    },
  },
  [layoutEnum.MASONRY]: {
    title: 'Masonry Layout',
    description:
      'A "Pinterest-style" layout that packs items to minimize vertical gaps. It has rigid columns but no rigid rows. Best used with items of varying heights.',
    settings: {
      'Sizing Mode': 'Must be `Auto` to see the effect, as items need different heights.',
      Columns: 'The number of vertical columns to fill.',
      'Column/Row Gap': 'Space between items vertically and horizontally.',
    },
  },
  [layoutEnum.PERIMETER_GRID]: {
    title: 'Perimeter Grid Layout',
    description:
      'Arranges components along the outer edge of a rectangular grid. Highly customizable for creating borders, frames, or game board tracks.',
    settings: {
      Columns: 'The number of columns in the grid that defines the perimeter path.',
      Rows: 'The number of rows in the grid. This is ignored if `Auto Rows` is checked.',
      'Auto Rows':
        'If checked, automatically calculates the optimal number of rows to fit all items based on the column count.',
      'Start Corner': 'The corner where the layout begins.',
      Direction: 'The direction items are placed around the perimeter (clockwise or counter-clockwise).',
      Distribution:
        '`Even` spreads items to use the whole perimeter. `Packed` places them sequentially from the start point.',
      'Prioritize Corners': 'Places the first items at the four corners. Can be combined with sorting.',
      'Sort Corners By':
        "Sorts items and places the highest/lowest values in the corners first. Can be a property name (like 'value') or a function. Requires 'Prioritize Corners'.",
      Offset: 'Pushes items outwards (positive) or inwards (negative) from the perimeter path.',
      Rotation: "Automatically rotates items to `face-inward` or `face-outward` from the grid's center.",
      'Exclude Corners':
        'If checked, the four corner cells of the grid will be left empty, and items will only be placed along the edges between them.',
    },
  },
  [layoutEnum.FLEX_WRAP]: {
    title: 'Flex Wrap Layout',
    description:
      'Arranges items in rows, similar to CSS flexbox with `flex-wrap: wrap`. When a row exceeds the `Max Width`, items wrap to a new line.',
    settings: {
      'Max Width': 'The maximum width of a line before items wrap to the next.',
      'Justify Content': 'Distributes space along a row (e.g., space-between).',
      'Align Items': 'Aligns items within a row if they have different heights.',
      'Align Content': 'When a `Max Height` is set, this distributes the rows themselves vertically within that space.',
      'Column/Row Gap': 'The space between items.',
    },
  },
  [layoutEnum.CIRCLE]: {
    title: 'Circle Layout',
    description:
      'Distributes components in a circular, arc, spiral, or donut pattern. Offers powerful options for data-driven distribution and organic effects.',
    settings: {
      Radius:
        'The base distance of each component from the center. This acts as the OUTER radius when `Inner Radius` is used. The final distance can be modified by `Spiral Factor` and `Radius Jitter`.',
      'Inner Radius':
        "Creates a donut shape by defining a 'hole' in the middle. Items are placed halfway between the inner and outer radius.",
      'Auto Radius':
        'Calculates the perfect radius to fit all items side-by-side based on their size. When checked, `Pixel Spacing` is used.',
      'Pixel Spacing': 'The gap in pixels between items. This primarily has an effect when `Auto Radius` is enabled.',
      'Start/End Angle':
        'Defines the start and end points of the arrangement in degrees, allowing for partial arcs instead of a full 360° circle.',
      'Angular Spacing':
        'Adds a fixed gap in **degrees** between each component. This provides consistent spacing regardless of the radius.',
      'Justify Arc':
        "Controls the alignment of components within a partial arc. 'Center' will center the group within the defined angles.",
      'Sort By':
        "Sorts components before arranging them around the circle. Use 'Value' to sort by the component's `value` property, or 'Name' by its `name` property.",
      'Sort Direction':
        "Specifies whether the sort order is ascending (e.g., A-Z, 1-10) or descending (Z-A, 10-1). Requires 'Sort By' to be set.",
      'Distribute by Value':
        'Allocates angular space to each component proportionally to its `.value` property, similar to a pie chart distribution.',
      'Spiral Factor':
        'Increases the radius for each successive component, transforming the circle into an outward spiral. A value of 0 creates a perfect circle.',
      'Rotate to Center':
        "Rotates each component to face the layout's center point. The final orientation can be adjusted with 'Rotation Offset'.",
      'Rotation Offset':
        "Adds an extra angle (in degrees) to each component's rotation. Requires 'Rotate to Center' to be active.",
      'Radius Jitter':
        "Adds a random amount to each component's distance from the center, creating a more organic, less perfect look.",
      'Angle Jitter':
        "Adds a random amount to each component's angle on the circle, making the distribution appear less uniform.",
    },
  },
  [layoutEnum.SPIRAL]: {
    title: 'Spiral Layout',
    description: 'Arranges components in an Archimedean spiral, starting from the center and expanding outwards.',
    settings: {
      Separation: 'Controls the distance between the arms of the spiral.',
      Tightness: 'Controls how quickly the spiral expands. Lower values are tighter.',
    },
  },
  [layoutEnum.PHYLLOTAXIS]: {
    title: 'Phyllotaxis (Sunflower) Layout',
    description:
      'A beautiful, organic layout that arranges items in a spiral pattern found in nature, like sunflower seeds. It distributes items very evenly from the center outwards.',
    settings: {
      Spacing: 'Controls the overall density and spread of the pattern.',
    },
  },
  [layoutEnum.WAVE]: {
    title: 'Wave Layout',
    description: 'Places components along a flowing sine wave, creating a smooth, organic line.',
    settings: {
      Amplitude: "The height of the wave's peaks and troughs.",
      Frequency: 'How many waves appear over a distance (the wavelength).',
      Spacing: "The gap between items along the wave's path.",
    },
  },
  [layoutEnum.PATH]: {
    title: 'Path Layout',
    description:
      'Arranges components evenly along a custom SVG path string. This is a highly flexible layout that can create complex curves and shapes.',
    settings: {
      'SVG Path Data': 'The `d` attribute of an SVG path. Use the dropdown for examples or write your own.',
      'Rotate to Path': 'Rotates each component to match the angle of the path at its position.',
    },
  },
  [layoutEnum.PERSPECTIVE]: {
    title: 'Perspective Layout',
    description:
      'Creates a 2.5D illusion of depth by scaling and arranging components as if they are receding towards a vanishing point.',
    settings: {
      'Overall Scale': 'A master control to shrink or enlarge the entire projection to fit the view.',
      'Depth Spacing':
        'Controls how much items shrink and converge with each "row". Values less than 1 recede, values greater than 1 come forward.',
      Columns: 'Number of items per row in the virtual 3D space.',
    },
  },
  [layoutEnum.PYRAMID]: {
    title: 'Pyramid Layout',
    description:
      'Arranges components in tiered rows to form a pyramid or funnel shape. The structure is highly customizable, allowing for horizontal, vertical, and inverted forms.',
    settings: {
      Tiers:
        'An array of numbers defining how many items are in each successive row (e.g., `[1, 2, 3]`). This is the core of the pyramid structure.',
      Direction: 'Sets the orientation of the pyramid: `Up` (standard), `Down` (inverted), `Left`, or `Right`.',
      'Overall Alignment':
        'Positions the entire pyramid structure within its layout bounds. The labels change based on the `Direction` (e.g., Top/Bottom for vertical, Left/Right for horizontal).',
      'Tier Alignment':
        'Aligns each individual tier relative to the widest tier. Use `Left` or `Right` to create right-angled pyramids.',
      'Justify Tier Content':
        'Distributes items within a tier (e.g., `space-between`). Most effective when `Use Actual Sizes` is on.',
      'Row Gap': 'The space between tiers (main axis).',
      'Item Spacing': 'The space between items in the same tier (cross axis).',
      'Use Actual Sizes':
        "If checked, layout is based on each item's true dimensions, creating a more organic fit. If unchecked, all items are treated as a uniform size.",
      'Sort By':
        "Sorts components before placing them into tiers. Can be a property name (like 'value') or a custom function.",
      'Sort Direction':
        'Specifies whether the sort is `Ascending` (smallest values first) or `Descending` (largest values first).',
      'Stagger Offset': 'Applies a progressive offset to each tier, creating a slanted or sheared effect.',
    },
  },
  [layoutEnum.CARD_HAND]: {
    title: 'Card Hand Layout',
    description:
      'A specialized arc layout that arranges and rotates components to simulate a fanned-out hand of cards. The pivot point is at the center of the layout.',
    settings: {
      'Arc Radius': 'The distance from the central pivot point to the center of each card.',
      'Arc Angle': 'The total angle of the fan. A larger angle creates a wider spread.',
    },
  },
  [layoutEnum.STACK]: {
    title: 'Stack Layout',
    description:
      'Places all components at nearly the same position with a slight incremental offset, creating the illusion of a deck of cards, a pile of chips, or a stack of papers.',
    settings: {
      'Offset X/Y': 'The horizontal and vertical pixel offset applied to each subsequent item in the stack.',
      'Offset Rotation':
        'The slight rotation (in degrees) applied to each subsequent item, creating a more natural, messy look.',
    },
  },
  [layoutEnum.PAYOUT_ZONES]: {
    title: 'Payout Zones Layout',
    description:
      'A powerful layout for game boards that places components into predefined rectangular areas ("zones"). Each component must be assigned to a zone via a `zoneName` property. This demo randomly assigns components to the zones defined in the JSON input.',
    settings: {
      'Zones (JSON Array)':
        'Define an array of objects, where each object has a `name` and `bounds` {x, y, width, height}.',
      'Layout Within Zones':
        'Optionally, apply a simple layout (like Square Grid or Bubble) to the components within each zone.',
    },
  },
  [layoutEnum.SPREAD_EXPLOSION]: {
    title: 'Spread Explosion Layout',
    description:
      'Scatters components outwards from a central point. Perfect for a "Big Win!" celebration, a loot drop, or a burst of particles. It blends an ordered spiral with chaos.',
    settings: {
      'Max Radius': 'The maximum distance any item can be scattered from the center.',
      'Spread Factor': 'Controls the density of the underlying spiral. Higher values create a more spread-out pattern.',
      Randomness:
        'Controls the amount of chaos. At 0, items form a perfect spiral. At 1, items are scattered completely randomly within the max radius.',
    },
  },
  [layoutEnum.ISOMETRIC]: {
    title: 'Isometric Layout',
    description: 'Arranges components on a 2.5D isometric grid, useful for games and technical illustrations.',
    settings: {
      'Tile Width/Height': 'Dimensions of the diamond-shaped isometric tile.',
      Columns: 'Number of items per row on the grid.',
    },
  },
  [layoutEnum.WORD_CLOUD]: {
    title: 'Word Cloud Layout',
    description:
      'An iterative layout that packs components of varying sizes into a compact, organic cloud shape. Larger items are placed first, near the center.',
    settings: {
      'Sizing Mode':
        'This layout relies on components having varying pre-set sizes to create the cloud effect. The `value` property is used to sort items (placing larger values first near the center), but it does not automatically resize them.',
      Iterations: 'The number of attempts to place an item. Higher values create a denser cloud.',
      'Spiral Tightness': 'Controls how quickly the placement search moves outwards.',
    },
  },
  [layoutEnum.BUBBLE]: {
    title: 'Bubble (Packed Circles) Layout',
    description:
      'A physics-based layout that clusters components (treated as circles) together. Circle sizes are based on the component `value` property.',
    settings: {
      Iterations: 'How many simulation steps to run. More iterations result in a more stable, tightly packed layout.',
      'Center Strength': 'A "gravity" force that pulls all bubbles towards the center.',
    },
  },
  [layoutEnum.CIRCLE_PACK]: {
    title: 'Circle Packing Layout',
    description:
      'A physics-based layout that packs components (as circles) inside a larger bounding circle. Circle sizes are based on the component `value` property. It produces a tight, organic cluster excellent for showing proportions.',
    settings: {
      'Bounds Radius': 'The radius of the invisible circle that contains all the packed items.',
      Padding: 'The minimum pixel gap to enforce between each packed circle.',
      Iterations: 'How many simulation steps to run. More iterations result in a more stable, tightly packed layout.',
      'Center Strength': 'A "gravity" force that pulls all circles towards the center of the bounding area.',
      'Radius Scale': 'A multiplier to adjust the size of the circles derived from their `value`.',
    },
  },
  [layoutEnum.TREEMAP]: {
    title: 'Treemap Layout',
    description:
      "A space-filling layout that subdivides an area into rectangles. The size of each rectangle is proportional to the component's `value` property.",
    settings: {
      'Width/Height': 'The total dimensions of the area to be filled by the components.',
      'Sizing Mode': 'The layout will override this, as it must control component sizes to work.',
    },
  },
  [layoutEnum.VORONOI]: {
    title: 'Voronoi Layout',
    description:
      "Partitions the space into unique, cellular polygons based on the components' initial positions, then centers each component within its cell. Requires an external library (like d3-delaunay).",
    settings: {
      'Width/Height': 'The dimensions of the area to be partitioned.',
    },
  },
  [layoutEnum.REELS]: {
    title: 'Casino Reels',
    description:
      'Simulates slot machine reels with gravity. Items are grouped into columns. If an item is removed, items above it "fall" down.',
    settings: {
      Columns: 'Number of reels.',
      'Align Items': 'Set to "End" for gravity (items fall to bottom), "Start" for top-down.',
      Stagger: 'Vertical offset per column for a classic slot machine look.',
      'Gap Spacing': 'Space between symbols and between reels.',
    },
  },
  [layoutEnum.REEL_SPINNER]: {
    title: 'Reel Spinner (3D Drum)',
    description:
      'Simulates a 3D rotating cylinder, like a single vertical slot reel. ItemsRecede and scale down as they move away from the center "winning" position.',
    settings: {
      'Spin Degrees': 'The rotation of the drum. Change this to animate the reel spinning.',
      Radius: 'The depth of the drum.',
      'Item Angle Step': 'Degrees of separation between items on the cylinder face.',
      'Depth Scale': 'How much items shrink as they rotate towards the top/bottom edges.',
    },
  },
}