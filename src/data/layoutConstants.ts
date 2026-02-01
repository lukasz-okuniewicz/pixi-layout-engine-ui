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
      'Flow Direction Details': `
      • Gravity Fill: Items ripple out from a focal point (center, top-left, etc.).
      • Corner Converge: Items fill from all four corners simultaneously toward the center.
      • Symmetric Outward: Fills the center row first, then expands to rows above and below.
      • Boustrophedon: A 'snake' flow that also flips the item horizontally (scaleX) on reversed rows.
      • Hilbert Curve & Z-Order: Mathematical space-filling curves that maintain spatial locality.
      • Clustered Fill: Uses the 'group' property on components to partition the grid into zones.
      • Interlaced: Fills like a checkerboard (all 'black' cells, then all 'white' cells).
      • Random Walk: Items follow a random contiguous path through the grid.
      • Diamond Fill: Only places items within a diamond-shaped mask.
      `
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
        'Arranges components along the outer edge (perimeter) of a defined rectangular grid. Features sophisticated logic for balancing items across edges, handling incomplete perimeters, and projecting the layout into 2.5D space with 3D perspective.',
    settings: {
      'Columns / Rows': 'Defines the width and height of the grid. If `Auto Rows` is checked, the height is calculated automatically to fit the number of items.',
      'Start Corner': 'The specific corner cell where the layout sequence begins.',
      'Sequence Direction': 'Determines the path of the layout: `Clockwise` or `Counter-Clockwise`.',
      'Priority Edge':
          'Determines which edges are filled first. `Columns` fills the top and bottom edges first; `Rows` fills the left and right edges first. This is most visible when there are not enough items to complete a full circuit.',
      'Overflow Alignment':
          'Controls how items are positioned within their assigned edge. `Start/End` packs items to one side, `Center` groups them in the middle, and `Justify Corners` stretches the items to touch the ends of the edge.',
      'Equal Distribution':
          'If enabled, the engine attempts to balance the number of items evenly across all four edges, regardless of edge length.',
      'Exclude Corners':
          'If checked, the four corner cells are left empty. Items are only placed on the straight edges between corners.',
      'Radial Offset': 'Pushes all items outward (positive) or inward (negative) from the center of the grid.',
      'Corner Push-out':
          'Applies an extra offset specifically to items located in the four corner cells. Useful for creating "exploded" corners or stylistic flourishes.',
      '3D Perspective':
          'A suite of projection tools: `Rotation` spins the entire perimeter; `Tilt` (Perspective Y) squashes the layout for a 2.5D look; `Depth Scale` resizes items based on their Y position; and `Z-Sorting` manages the visual overlap of items.',
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
      'Perspective Y (Tilt)': 'Squashes the circle vertically (e.g., 0.5) to create a 3D "disk" or "ring" look.',
      'Global Rotation': 'Rotates the entire circular arrangement around the center point.',
      'Depth Scale': 'Dynamically scales items based on their "depth" (Y-position). Items at the "back" of the circle shrink, while items at the "front" stay at Max Scale.',
      'Enable Z-Sorting': 'Automatically manages the z-index of components so that items in the "front" of the tilted circle appear above items in the "back".'
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
  [layoutEnum.ORBIT]: {
    title: 'Orbit Layout',
    description:
      'Arranges items on concentric circular orbits (rings), like a solar system. Items are distributed round-robin across orbits. Each orbit is staggered by the phase for a balanced look. Great for character select, power-ups, or orbital menus.',
    settings: {
      Radius: 'The radius of the innermost orbit.',
      'Orbit Count': 'Number of concentric rings.',
      'Orbit Spacing': 'Radial distance between each orbit.',
      'Orbit Phase': 'Angular offset in degrees added per orbit to stagger items. Default is 360° ÷ orbit count.',
      'Start Angle': 'Where the first item on the inner orbit is placed (degrees).',
      'Rotate to Center': 'Rotates each item to point toward the center.',
    },
  },
  [layoutEnum.DNA]: {
    title: 'DNA (Double Helix) Layout',
    description:
      'Arranges items in two intertwining strands, like a DNA double helix. Items alternate between the two strands; each "rung" has one item on each side at the same height. The strands twist as they run vertically. Great for pairs, connections, or a sci‑fi look.',
    settings: {
      Radius: 'Distance of each strand from the centerline.',
      Pitch: 'Vertical distance between rungs (pairs of items).',
      Twist: 'Degrees of rotation per rung—how tightly the helix winds. 360° = one full twist per rung.',
      'Start Angle': 'Initial rotation of the helix (degrees).',
      'Rotate to Center': 'Rotates each item to point toward the centerline.',
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
      'Vertical / Horizontal': 'Toggle between a standard vertical drum (like a slot machine) or a horizontal drum (like a horizontal carousel/conveyor).',
    },
  },
  [layoutEnum.CONCENTRIC_RINGS]: {
    title: 'Concentric Rings',
    description:
      'Objects arranged in multiple circular layers with an option to offset the rotation of each ring (Vault/Radar look).',
    settings: {
      Radius: 'Innermost ring radius.',
      'Ring Count': 'Number of concentric rings.',
      'Ring Spacing': 'Radial distance between rings.',
      'Ring Phase': 'Angular offset in degrees per ring for stagger.',
      'Start Angle': 'Where the first item on the inner ring is placed (degrees).',
      'Rotate to Center': 'Rotates each item toward the center.',
    },
  },
  [layoutEnum.SUNFLOWER]: {
    title: 'Golden Ratio Sunflower (Fermat\'s Spiral)',
    description:
      'Phyllotaxis variation that packs circles of varying sizes (from value) without gaps using the golden angle.',
    settings: {
      Spacing: 'Base density; larger values spread items more.',
      'Radius Scale': 'Multiplier for circle sizes derived from value.',
    },
  },
  [layoutEnum.H_TREE]: {
    title: 'Fractal H-Tree',
    description:
      'Recursive branching layout for tech-tree or organizational visualizations.',
    settings: {
      'Branching Factor': 'Children per node (2 = classic H).',
      'H-Tree Depth': 'Recursion depth.',
      'H-Tree Spacing': 'Distance between branches.',
    },
  },
  [layoutEnum.FISHEYE]: {
    title: 'Fisheye / Apple Dock',
    description:
      'Horizontal layout where the focus item is scaled up and spaced more; others shrink and pack.',
    settings: {
      'Focus Index': 'Index of the item at the focus (0-based).',
      'Scale Factor': 'Max scale at focus (e.g. 1.5).',
      'Spread Factor': 'Spacing multiplier at focus (e.g. 1.8).',
    },
  },
  [layoutEnum.CIRCULAR_FAN]: {
    title: 'Circular Fan (Card Hand)',
    description:
      'Items in an arc with controls for arc curvature and fan angle.',
    settings: {
      'Arc Radius': 'Distance from pivot to items.',
      'Arc Angle': 'Total fan angle in degrees.',
      'Fan Curvature': 'Curvature multiplier (1 = normal arc).',
    },
  },
  [layoutEnum.PERSPECTIVE_STACK]: {
    title: 'Perspective Stack (Cover Flow)',
    description:
      'Simulates 3D depth by scaling and skewing items away from the center.',
    settings: {
      'Center Index': 'Index of the front item.',
      'Skew': 'Horizontal skew for depth effect.',
      'Depth Scale': 'Scale factor per step away from center.',
    },
  },
  [layoutEnum.CIRCLE_PACK_GROUPED]: {
    title: 'Circle Packing (Grouped)',
    description:
      'Like bubble pack but items are clustered into islands by a category property.',
    settings: {
      'Category Property': 'Component property name for group (e.g. category).',
      'Bounds Radius': 'Approximate island spread.',
      Padding: 'Gap between circles.',
      Iterations: 'Simulation steps.',
      'Center Strength': 'Pull toward island center.',
      'Radius Scale': 'Scale for value-based circle size.',
    },
  },
  [layoutEnum.MEGAWAYS]: {
    title: 'Megaways (Variable Grid)',
    description:
      'Variable reel layout where each column can have a different number of symbols. Symbols scale to fit the column height. Reel gap = horizontal; Symbol gap = vertical.',
    settings: {
      'Reel Heights': 'Number of symbols per reel (5–6 reels). Total symbol count is the sum.',
      'Column Height': 'Fixed height per reel column; symbols scale to fit.',
      'Reel gap / Symbol gap': 'Horizontal space between reels and vertical space between symbols.',
    },
  },
  [layoutEnum.DIAMOND_REEL]: {
    title: 'Diamond / Hexagonal Reel',
    description:
      'Staggered reel configuration (e.g. 3-4-5-4-3) for all-ways payout slots. Same reel/symbol gap controls.',
    settings: {
      'Reel Heights': 'Symbols per reel; default 3-4-5-4-3.',
      'Reel gap / Symbol gap': 'Horizontal and vertical spacing.',
    },
  },
  [layoutEnum.KENO_80_GRID]: {
    title: 'Keno 80-Ball Grid',
    description:
      'Precise 8×10 or 10×8 grid for Keno-style games. Supports cell highlighting: specific indices can be visually offset (e.g. outward from center) to mark selected or winning numbers.',
    settings: {
      Columns: 'Number of columns (default 10 for 80-ball).',
      Rows: 'Number of rows (default 8 for 80-ball).',
      'Cell Highlight Indices': 'Array of 0-based indices to offset (e.g. [0, 5, 42]).',
      'Cell Highlight Offset': 'Pixel offset applied to highlighted cells (e.g. outward from center).',
    },
  },
  [layoutEnum.RADIAL_BALL_TUMBLER]: {
    title: 'Radial Ball Tumbler',
    description:
      'Dense, slightly jittered circular cluster simulating balls in a lottery drum. Items are packed in a phyllotaxis pattern; Tumble Intensity adds random offset from the center.',
    settings: {
      Radius: 'Base radius of the cluster.',
      'Tumble Intensity': 'Random jitter/offset in pixels from the nominal position. Higher = more chaotic drum look.',
    },
  },
  [layoutEnum.PRIZE_LADDER]: {
    title: 'Prize Ladder (Tower)',
    description:
      'Vertical layout where items get smaller and closer together toward the top, simulating a Jackpot Tower. Perspective Scale controls how much items shrink and converge.',
    settings: {
      'Perspective Scale': '0 = uniform size and spacing; 1 = strong perspective (top items much smaller and tighter).',
      'Row Gap': 'Base vertical gap between items.',
      'Item Spacing': 'Horizontal spacing when multiple items per tier.',
    },
  },
  [layoutEnum.ROULETTE_BETTING_MAT]: {
    title: 'Roulette Betting Mat',
    description:
      'Grid layout with spanning: a single item can span multiple rows (e.g. "2 to 1" bets) or cells. Uses a default slot template or optional rouletteSlots. Gap, sizing, and alignment apply to the grid.',
    settings: {
      'Column/Row Gap': 'Space between grid cells.',
      'Sizing Mode': 'Auto uses largest child; Fixed uses set width/height per cell.',
      'Align/Justify Items': 'Position items within their (possibly spanned) cell.',
    },
  },
  [layoutEnum.SEMICIRCLE_SEATING]: {
    title: 'Semicircle Player Seating',
    description:
      'Arranges items along the bottom half of an ellipse, facing a central dealer point. Table Curvature controls the ellipse aspect (vertical stretch). Items are rotated to face the center.',
    settings: {
      Radius: 'Horizontal radius of the ellipse.',
      'Table Curvature': 'Ellipse vertical/horizontal ratio. 1 = semicircle; <1 = flatter; >1 = taller arc.',
      'Start/End Angle': 'Arc extent in degrees (default 0–180 for bottom half).',
      'Rotate to Center': 'Each item rotates to face the dealer (center).',
    },
  },
  [layoutEnum.CHIP_STACK]: {
    title: 'Chip Stack (3D Offset)',
    description:
      'Stacks items vertically with a small y offset and slight random x tilt to simulate a physical stack of chips. Z-index is set so the top chip renders last. Stack Leaning adds horizontal tilt per layer.',
    settings: {
      'Offset X/Y': 'Horizontal and vertical pixel offset per layer.',
      'Stack Leaning': 'Horizontal tilt per chip in the stack (positive = lean right).',
      'Tilt (°)': 'Random rotation range per chip for a natural look.',
    },
  },
}

export const keno80GridDefaults = {
  columns: 10,
  rows: 8,
  columnGap: 4,
  rowGap: 4,
}