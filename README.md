### pixi-layout-engine-ui by 
[@lukasz-okuniewicz](http://github.com/lukasz-okuniewicz)

# About This Project
The 2D Layout Engine Testbed is an interactive web application designed to showcase the capabilities of a versatile 2D layout engine. The core engine can programmatically arrange collections of objects into a wide variety of patterns, perfect for games, data visualizations, and dynamic user interfaces.

This testbed provides a user-friendly interface to:
- **Instantly switch** between more than 20 distinct layout algorithms.
- **Dynamically tune** layout parameters like spacing, columns, radius, and angles using sliders and inputs.
- **Visualize the results in real-time**, gaining an intuitive understanding of how each algorithm works.

It serves as both a powerful demonstration of the engine's features and a practical tool for designers and developers to discover and prototype the perfect arrangement for their needs before integrating the engine into their own projects.

## Key Features Showcased:
- **Comprehensive Layout Library**: Explore a huge range of layouts, including:
  - **Linear & Grid**: Horizontal, Vertical, Square, Staggered, Masonry, and Flex-Wrap.
  - **Circular & Spiral**: Circle, Spiral, Phyllotaxis, and Wave.
  - **Algorithmic & Data-Driven**: Treemap, Bubble Pack, Voronoi, and Word Cloud.
  - **Specialty**: Path, Isometric, Perspective, and Honeycomb.
- **Real-Time Interactivity**: All controls update the canvas immediately, providing instant visual feedback.
- **Decoupled Engine**: The testbed demonstrates how the core layout logic is separate from the rendering layer (PixiJS), making the engine portable to other graphics libraries.
- **Modern Tech Stack**: Built with TypeScript for robust, type-safe code and PixiJS for high-performance, GPU-accelerated rendering.

Editor for: [pixi-layout-engine](https://github.com/lukasz-okuniewicz/pixi-layout-engine)

How to use:
```
npm install pixi-layout-engine-ui
```

then:
```
npm start

http://localhost:3000/
```

Demo: [pixi-layout-engine](https://lukasz-okuniewicz.github.io/pixi-layout-engine-ui/)
