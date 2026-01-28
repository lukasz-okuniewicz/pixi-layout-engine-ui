### pixi-layout-engine-ui by [@lukasz-okuniewicz](http://github.com/lukasz-okuniewicz)

# About This Project

The **pixi-layout-engine-ui** is an interactive web application designed to showcase the capabilities of the **pixi-layout-engine** library. This testbed provides a comprehensive, user-friendly interface to explore and experiment with 25+ distinct layout algorithms in real-time.

The core engine can programmatically arrange collections of objects into a wide variety of patterns, perfect for games, data visualizations, and dynamic user interfaces. This UI serves as both a powerful demonstration of the engine's features and a practical tool for designers and developers to discover and prototype the perfect arrangement for their needs before integrating the engine into their own projects.

---

## 🎯 Project Purpose

This application serves multiple purposes:

1. **Interactive Documentation**: Provides a live, interactive way to understand how each layout algorithm works
2. **Prototyping Tool**: Allows designers and developers to experiment with different layouts and parameters before implementation
3. **Feature Showcase**: Demonstrates the full range of capabilities of the pixi-layout-engine library
4. **Learning Resource**: Helps users understand layout concepts through visual, real-time feedback
5. **Testing Ground**: Provides a controlled environment to test layout behaviors and edge cases

---

## ✨ Key Features

### Comprehensive Layout Library

Explore a huge range of layouts, including:

- **Linear & Grid**: Horizontal, Vertical, Square, Staggered, Masonry, and Flex-Wrap
- **Circular & Spiral**: Circle, Spiral, Phyllotaxis, and Wave
- **Algorithmic & Data-Driven**: Treemap, Bubble Pack, Voronoi, and Word Cloud
- **Specialty**: Path, Isometric, Perspective, Honeycomb, Orbit, DNA, and Reel Spinner

### Real-Time Interactivity

- **Instant Updates**: All controls update the canvas immediately, providing instant visual feedback
- **Live Parameter Tuning**: Adjust spacing, columns, radius, angles, and more using intuitive sliders and inputs
- **Dynamic Component Count**: Change the number of components on the fly to see how layouts adapt
- **Smooth Animations**: Components smoothly transition between layout states using interpolation

### Advanced Controls

- **Layout-Specific Controls**: Each layout type exposes only the relevant controls for that layout
- **Contextual Help**: Built-in help system explains each layout and its parameters
- **Configuration Display**: View the current configuration as JSON for easy copying
- **Responsive Design**: Works seamlessly on desktop and tablet devices

### Decoupled Architecture

The testbed demonstrates how the core layout logic is completely separate from the rendering layer (PixiJS), making the engine portable to other graphics libraries.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

You can check your versions by running:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/lukasz-okuniewicz/pixi-layout-engine-ui.git
cd pixi-layout-engine-ui
```

2. **Install dependencies:**
```bash
npm install
```

This will install all required dependencies including:
- Next.js 15 (React framework)
- React 19 (UI library)
- PixiJS 8 (WebGL renderer)
- TypeScript (type safety)
- Tailwind CSS 4 (styling)
- pixi-layout-engine (core layout library)
- d3-delaunay (for Voronoi layout)
- svg-path-properties (for Path layout)

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

The development server supports hot module replacement (HMR), so any changes you make to the code will automatically refresh in the browser.

### Building for Production

To build a static export of the application for deployment:

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Optimize and bundle all assets
- Generate static HTML files
- Create an `out` directory with the production build

The output will be in the `out` directory, ready for deployment to any static hosting service such as:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static file server

### Running Production Build Locally

After building, you can test the production build locally:

```bash
npm run build
npm start
```

This starts a production server on [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15** - React framework with static export support
  - Server-side rendering capabilities
  - Automatic code splitting
  - Optimized production builds
  - Static site generation

- **React 19** - Modern UI library
  - Hooks-based architecture
  - Component composition
  - Efficient re-rendering

- **TypeScript 5** - Type-safe JavaScript
  - Full type coverage
  - Enhanced IDE support
  - Compile-time error checking

- **PixiJS 8** - High-performance 2D WebGL renderer
  - GPU-accelerated rendering
  - Hardware-accelerated graphics
  - Optimized for performance

- **Tailwind CSS 4** - Utility-first CSS framework
  - Rapid UI development
  - Responsive design utilities
  - Customizable theme

### Dependencies

- **pixi-layout-engine** (2.12.0) - Core layout engine library
- **d3-delaunay** (6.0.4) - Voronoi diagram calculations
- **svg-path-properties** (2.0.0) - SVG path parsing and manipulation

### Development Tools

- **@biomejs/biome** (2.2.4) - Fast linter and formatter
- **Prettier** (3.6.2) - Code formatting
- **TypeScript** - Type checking and compilation

---

## 📁 Project Structure

```
pixi-layout-engine-ui/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions CI/CD
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Main page component
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico        # Site favicon
│   ├── components/            # React components
│   │   ├── layout-controls/   # Individual control components
│   │   │   ├── AlignItemsControl.tsx
│   │   │   ├── BubbleControl.tsx
│   │   │   ├── CardHandControl.tsx
│   │   │   ├── CircleControl.tsx
│   │   │   ├── CirclePackControl.tsx
│   │   │   ├── ColumnsControl.tsx
│   │   │   ├── ComponentCountControl.tsx
│   │   │   ├── CurrentConfigDisplay.tsx
│   │   │   ├── DnaControl.tsx
│   │   │   ├── FlexWrapControl.tsx
│   │   │   ├── GapSpacingControl.tsx
│   │   │   ├── GridFlowControl.tsx
│   │   │   ├── GridSpanningControl.tsx
│   │   │   ├── IsometricControl.tsx
│   │   │   ├── JitterControl.tsx
│   │   │   ├── JustifyContentControl.tsx
│   │   │   ├── JustifyItemsControl.tsx
│   │   │   ├── LayoutTypeControl.tsx
│   │   │   ├── OrbitControl.tsx
│   │   │   ├── OriginControl.tsx
│   │   │   ├── PathControl.tsx
│   │   │   ├── PayoutZonesControl.tsx
│   │   │   ├── PerimeterControl.tsx
│   │   │   ├── PerspectiveControl.tsx
│   │   │   ├── PyramidControl.tsx
│   │   │   ├── ReelSpinnerControl.tsx
│   │   │   ├── ReverseControl.tsx
│   │   │   ├── SimpleSpacingControl.tsx
│   │   │   ├── SizingControl.tsx
│   │   │   ├── SpiralControl.tsx
│   │   │   ├── SpreadExplosionControl.tsx
│   │   │   ├── StackControl.tsx
│   │   │   ├── TreemapControl.tsx
│   │   │   ├── VoronoiControl.tsx
│   │   │   ├── WaveControl.tsx
│   │   │   └── WordCloudControl.tsx
│   │   ├── LayoutController.tsx    # Main control panel component
│   │   ├── LayoutHelp.tsx          # Help/documentation component
│   │   └── PixiCanvas.tsx          # PixiJS canvas wrapper
│   ├── config/
│   │   └── layoutControlsConfig.ts # Configuration for which controls show per layout
│   ├── data/
│   │   └── layoutConstants.ts     # Layout-specific constants and defaults
│   └── lib/
│       └── layoutEngine.ts         # Wrapper/adapter for layout engine
├── .gitignore                     # Git ignore rules
├── .prettierrc.js                 # Prettier configuration
├── biome.json                     # Biome linter configuration
├── CNAME                          # GitHub Pages custom domain
├── LICENSE                        # License file
├── next.config.ts                 # Next.js configuration
├── package.json                   # Project dependencies and scripts
├── postcss.config.mjs             # PostCSS configuration
├── README.md                      # This file
└── tsconfig.json                  # TypeScript configuration
```

---

## 🏗️ Architecture Overview

### Component Architecture

The application follows a component-based architecture with clear separation of concerns:

#### Main Components

1. **`page.tsx`** - Root page component
   - Manages global application state
   - Coordinates between LayoutController and PixiCanvas
   - Handles layout options state

2. **`LayoutController.tsx`** - Control panel component
   - Renders the left sidebar with all controls
   - Dynamically shows/hides controls based on selected layout
   - Manages user input and updates layout options
   - Displays current configuration

3. **`PixiCanvas.tsx`** - PixiJS rendering component
   - Initializes PixiJS application
   - Creates and manages display objects
   - Applies layouts using pixi-layout-engine
   - Handles smooth animations between layout changes
   - Manages component lifecycle

4. **`LayoutHelp.tsx`** - Help/documentation component
   - Displays contextual help for each layout
   - Shows layout descriptions and use cases
   - Provides parameter explanations

#### Control Components

Each layout-specific control is a separate component in `layout-controls/`:
- **Reusable**: Each control can be used by multiple layouts
- **Type-safe**: Full TypeScript support
- **Focused**: Each control handles one aspect of layout configuration

### State Management

The application uses React's built-in state management:

- **Local State**: Component-specific state using `useState`
- **Shared State**: Layout options passed via props from `page.tsx`
- **Derived State**: Computed values using `useMemo` for performance

### Rendering Pipeline

1. **User Input**: User adjusts controls in LayoutController
2. **State Update**: Options state updates in page.tsx
3. **Layout Calculation**: PixiCanvas receives new options
4. **Layout Application**: pixi-layout-engine calculates positions
5. **Animation**: Components smoothly interpolate to new positions
6. **Rendering**: PixiJS renders the updated scene

### Performance Optimizations

- **Memoization**: Expensive calculations cached with `useMemo`
- **Debouncing**: Layout updates debounced for smooth animations
- **Efficient Re-renders**: Components only re-render when necessary
- **GPU Acceleration**: PixiJS uses WebGL for hardware acceleration
- **Object Pooling**: Reuses display objects when possible

---

## 🎨 User Interface

### Control Panel

The left sidebar contains all layout controls:

- **Layout Type Selector**: Dropdown to choose from 25+ layouts
- **Component Count**: Slider to adjust number of components
- **Layout-Specific Controls**: Dynamically shown based on selected layout
- **Configuration Display**: JSON view of current settings
- **Help Button**: Toggle contextual help

### Canvas Area

The main canvas displays:
- **Layout Visualization**: Real-time rendering of the selected layout
- **Interactive Components**: Colored rectangles representing layout items
- **Smooth Animations**: Interpolated transitions between layouts
- **Responsive Sizing**: Adapts to window size

### Styling

The UI uses a dark theme optimized for visual clarity:
- **Dark Background**: Reduces eye strain during extended use
- **High Contrast**: Clear distinction between UI elements
- **Accent Colors**: Color-coded controls for easy identification
- **Responsive Design**: Adapts to different screen sizes

---

## 🔧 Development Workflow

### Running in Development Mode

```bash
npm run dev
```

This starts the Next.js development server with:
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- Source maps for debugging
- Detailed error messages

### Code Quality

#### Linting

```bash
npm run lint
```

Uses Biome for fast linting and formatting. Catches:
- Syntax errors
- Type errors
- Code style issues
- Potential bugs

#### Formatting

```bash
npm run format
```

Automatically formats code according to project standards.

### Adding New Layout Controls

1. **Create Control Component**: Add a new file in `src/components/layout-controls/`
2. **Update Config**: Add layout-specific flags in `src/config/layoutControlsConfig.ts`
3. **Import in Controller**: Add import and usage in `LayoutController.tsx`
4. **Add Help Text**: Update `LayoutHelp.tsx` with layout documentation

### Testing Layouts

1. Select a layout from the dropdown
2. Adjust parameters using controls
3. Observe real-time updates on canvas
4. Test edge cases (0 components, very large values, etc.)
5. Verify animations are smooth

---

## 📊 Layout Control System

### Dynamic Control Display

The application uses a configuration-driven approach to show/hide controls:

```typescript
// Each layout has a configuration object
layoutControlsConfig[layoutEnum.SQUARE] = {
  usesGapSpacing: true,
  usesColumns: true,
  usesGridFlow: true,
  // ... other flags
}
```

### Control Categories

Controls are organized into logical groups:

1. **General Controls**: Spacing, sizing, alignment (used by many layouts)
2. **Grid Controls**: Columns, rows, gaps, flow direction (grid layouts)
3. **Circle Controls**: Radius, angles, jitter (circular layouts)
4. **Data Controls**: Value-based settings (data-driven layouts)
5. **Layout-Specific**: Unique controls for each layout type

### Control Components

Each control is a self-contained React component:
- **Props**: Receives current value and onChange handler
- **Validation**: Ensures values are within valid ranges
- **Feedback**: Shows current value and allows adjustment
- **Accessibility**: Proper labels and keyboard support

---

## 🎮 Usage Guide

### Basic Usage

1. **Select a Layout**: Choose from the dropdown at the top
2. **Adjust Parameters**: Use sliders and inputs to modify layout properties
3. **Change Component Count**: Adjust the number of components to see how layouts scale
4. **View Configuration**: Click to see the current JSON configuration
5. **Get Help**: Click the help button for layout-specific documentation

### Advanced Features

#### Copying Configuration

1. Click the "Show Config" button
2. Copy the JSON configuration
3. Use it directly in your code with `applyLayout()`

#### Testing Responsive Layouts

1. Select a layout that supports responsive options
2. Adjust portrait/landscape overrides
3. Test different orientations

#### Animation Testing

1. Change layout parameters rapidly
2. Observe smooth interpolations
3. Test with different component counts

---

## 🚢 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

1. Build the project: `npm run build`
2. Push the `out` directory to the `gh-pages` branch
3. GitHub Pages will serve the static files

The `CNAME` file allows custom domain configuration.

### Other Static Hosts

The build output is a standard static site and can be deployed to:
- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Connect GitHub repository for automatic deployments
- **AWS S3**: Upload `out` folder contents to S3 bucket
- **Any Static Host**: The `out` folder contains all necessary files

### Build Configuration

The `next.config.ts` file is configured for static export:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
}
```

This ensures all pages are pre-rendered as static HTML.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Issues

If you find a bug or have a feature request:
1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Code Style

- Follow existing code patterns
- Use TypeScript for all new code
- Add comments for complex logic
- Keep components focused and reusable
- Write self-documenting code

---

## 📝 Scripts Reference

### Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production static site
- `npm start` - Start production server (after build)
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

### Build Process

1. **TypeScript Compilation**: `.ts` and `.tsx` files compiled to JavaScript
2. **Next.js Build**: Pages and components processed
3. **Static Export**: All pages exported as static HTML
4. **Asset Optimization**: Images and assets optimized
5. **Bundle Optimization**: Code split and minified

---

## 🔍 Troubleshooting

### Common Issues

#### Port Already in Use

If port 3000 is already in use:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

#### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Try building again: `npm run build`

#### TypeScript Errors

If you see TypeScript errors:
1. Ensure all dependencies are installed: `npm install`
2. Check `tsconfig.json` is correct
3. Restart your IDE/editor

#### PixiJS Not Rendering

If the canvas is blank:
1. Check browser console for errors
2. Verify WebGL is supported in your browser
3. Check that PixiJS initialized correctly
4. Ensure components are being created

---

## 📚 Additional Resources

### Documentation

- **Engine Documentation**: See [pixi-layout-engine README](../pixi-layout-engine/README.md)
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **PixiJS Docs**: https://pixijs.com
- **TypeScript Docs**: https://www.typescriptlang.org/docs

### Related Projects

- **pixi-layout-engine**: Core layout engine library
- **PixiJS**: 2D WebGL renderer
- **Next.js**: React framework

### Community

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas

---

## 📄 License

This project is licensed under the GNU General Public License v2.0 - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [pixi-layout-engine](https://github.com/lukasz-okuniewicz/pixi-layout-engine)
- Powered by [PixiJS](https://pixijs.com)
- Framework by [Next.js](https://nextjs.org)
- Thanks to all contributors and users of the layout engine

---

## 🎮 Live Demo

Try it out here: [pixi-layout-engine Live Editor](https://lukasz-okuniewicz.github.io/pixi-layout-engine-ui/)

The live demo is always up-to-date with the latest features and layouts. Use it to:
- Explore all available layouts
- Test different parameters
- Copy configuration code
- Understand layout behaviors
- Prototype your own layouts

---

For questions, issues, or contributions, please visit the [GitHub repository](https://github.com/lukasz-okuniewicz/pixi-layout-engine-ui).
