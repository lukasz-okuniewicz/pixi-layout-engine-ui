'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as PIXI from 'pixi.js'
import { applyLayout, layoutEnum } from 'pixi-layout-engine'
import { svgPathProperties as SvgPathProperties } from 'svg-path-properties'
import type { ExtendedLayoutOptions } from './LayoutController'
import { Delaunay } from 'd3-delaunay'

interface AnimatedLayoutComponent extends PIXI.Graphics {
  reelIndex?: number
  targetX?: number
  targetY?: number
  value?: number
  isNew?: boolean
  layoutId?: number
}

const radiusOffsetFunctions: Record<string, (c: any, i: number) => number> = {
  none: () => 0,
  wave: (c, i) => Math.sin(i * 0.5) * 20,
  spiral_in: (c, i) => -i * 2,
  random: () => (Math.random() - 0.5) * 30,
}

export const PixiCanvas: React.FC<{ options: ExtendedLayoutOptions }> = ({ options }) => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<PIXI.Application | null>(null)
  const containerRef = useRef<PIXI.Container | null>(null)
  const maskRef = useRef<PIXI.Graphics | null>(null) // Ref for the clipping window
  const componentsRef = useRef<AnimatedLayoutComponent[]>([])
  const prevOptions = useRef<Partial<ExtendedLayoutOptions>>({})

  const [isPixiReady, setIsPixiReady] = useState(false)

  // 1. Initialize PIXI
  useEffect(() => {
    let isCancelled = false
    const init = async () => {
      if (!canvasRef.current) return
      const app = new PIXI.Application()
      globalThis.__PIXI_APP__ = app
      await app.init({ resizeTo: window, background: '#2c3e50', antialias: true })

      if (isCancelled) {
        app.destroy(true, { children: true })
        return
      }

      appRef.current = app
      canvasRef.current.appendChild(app.canvas)

      const container = new PIXI.Container()
      containerRef.current = container
      app.stage.addChild(container)

      setIsPixiReady(true)
    }
    init()
    return () => {
      isCancelled = true
      appRef.current?.destroy(true, { children: true })
    }
  }, [])

  // 2. Animation Ticker (LERP)
  useEffect((): any => {
    if (!isPixiReady || !appRef.current) return
    const ticker = (t: PIXI.Ticker) => {
      componentsRef.current.forEach((c) => {
        if (c.targetX !== undefined && c.targetY !== undefined) {
          const speed = 0.15 * t.deltaTime
          c.x += (c.targetX - c.x) * speed
          c.y += (c.targetY - c.y) * speed
        }
      })
    }
    appRef.current.ticker.add(ticker)
    return () => appRef.current?.ticker.remove(ticker)
  }, [isPixiReady])

  // 3. Helper: Create Symbols
  const createSymbol = (index: number, reelIdx: number) => {
    const colors = [0xde3249, 0xf5b642, 0x69c4a0, 0x2472a4, 0x8663a6]
    const componentValue = Math.random() * 100 + 20
    const gfx = new PIXI.Graphics() as AnimatedLayoutComponent

    let width: number, height: number
    if (options.sizingMode === 'fixed') {
      width = options.fixedWidth || 50
      height = options.fixedHeight || 50
    } else {
      const isCloud = [layoutEnum.WORD_CLOUD, layoutEnum.BUBBLE, layoutEnum.TREEMAP].includes(options.layoutName as any)
      if (isCloud) {
        const baseSize = 30
        width = baseSize + (componentValue / 120) * 70
        height = width
      } else {
        width = 30 + Math.random() * 40
        height = 30 + Math.random() * 40
      }
    }

    if (options.layoutName === layoutEnum.CIRCLE_PACK) {
      const radius = Math.sqrt(componentValue) * (options.radiusScale || 2)
      gfx.circle(0, 0, radius).fill(colors[index % colors.length])
    } else {
      gfx.rect(0, 0, width, height).fill(colors[index % colors.length])
      gfx.pivot.set(width / 2, height / 2)
    }

    const text = new PIXI.Text({
      text: `${index}`,
      style: { fill: 0xffffff, fontSize: 18, fontWeight: 'bold' },
    })
    text.anchor.set(0.5)
    text.position.set(
      options.layoutName === layoutEnum.CIRCLE_PACK ? 0 : width / 2,
      options.layoutName === layoutEnum.CIRCLE_PACK ? 0 : height / 2,
    )
    gfx.addChild(text)

    gfx.reelIndex = reelIdx
    gfx.value = componentValue
    gfx.layoutId = index // Used for stable sorting in Reel Spinner
    gfx.isNew = true
    return gfx
  }

  // 4. Main Layout Application
  const applyCurrentLayout = () => {
    if (!containerRef.current || !appRef.current || componentsRef.current.length === 0) return
    const container = containerRef.current
    const app = appRef.current

    // Snapshot current positions for LERPing
    const startPositions = new Map<AnimatedLayoutComponent, { x: number; y: number }>()
    componentsRef.current.forEach((c) => {
      startPositions.set(c, { x: c.x, y: c.y })
    })

    // Seed Voronoi
    if (options.layoutName === layoutEnum.VORONOI) {
      componentsRef.current.forEach((c) => {
        if (c.x === 0 && c.y === 0) {
          c.x = (Math.random() - 0.5) * app.screen.width
          c.y = (Math.random() - 0.5) * app.screen.height
        }
      })
    }

    const engineOptions: any = {
      ...options,
      radiusOffset: radiusOffsetFunctions[options.radiusOffsetType || 'none'],
      pathParser: options.layoutName === layoutEnum.PATH ? SvgPathProperties : undefined,
      voronoiParser: options.layoutName === layoutEnum.VORONOI ? Delaunay : undefined,
    }

    // Call Layout Engine
    applyLayout(container, engineOptions)

    // Stage Centering
    container.position.set(app.screen.width / 2, app.screen.height / 2)

    // Strictly layouts that stay centered on the origin (0,0)
    const originCenteredLayouts = [
      layoutEnum.CIRCLE,
      layoutEnum.SPIRAL,
      layoutEnum.PHYLLOTAXIS,
      layoutEnum.BUBBLE,
      layoutEnum.WORD_CLOUD,
      layoutEnum.CIRCLE_PACK,
      layoutEnum.ORBIT,
      layoutEnum.DNA,
      layoutEnum.REEL_SPINNER,
    ]

    if (originCenteredLayouts.includes(options.layoutName as any)) {
      container.pivot.set(0, 0)
    } else {
      const bounds = container.getLocalBounds()
      container.pivot.set(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2)
    }

    // --- MASKING / CLIPPING LOGIC ---
    if (options.layoutName === layoutEnum.REEL_SPINNER) {
      if (!maskRef.current) {
        maskRef.current = new PIXI.Graphics()
        app.stage.addChild(maskRef.current)
        container.mask = maskRef.current
      }

      const m = maskRef.current
      const winW = options.width || 200
      const winH = options.height || 400

      m.clear()
        .rect(-winW / 2, -winH / 2, winW, winH)
        .fill(0xffffff)

      // Keep mask aligned with container screen position
      m.position.set(container.x, container.y)
    } else {
      // Clean up mask if switching to other layouts
      if (maskRef.current) {
        container.mask = null
        maskRef.current.destroy()
        maskRef.current = null
      }
    }

    // Update Targets for Animation
    componentsRef.current.forEach((c) => {
      const destX = c.x
      const destY = c.y
      const start = startPositions.get(c)

      if (c.isNew) {
        c.targetX = destX
        c.targetY = destY
        c.x = destX
        c.y = destY
        c.isNew = false
      } else if (start) {
        c.targetX = destX
        c.targetY = destY
        c.x = start.x
        c.y = start.y
      }
    })
  }

  // 5. Watch for option changes
  useEffect(() => {
    if (!isPixiReady) return

    const hasChanged = (key: keyof ExtendedLayoutOptions) => options[key] !== prevOptions.current[key]

    const needsRecreation =
      hasChanged('sizingMode') ||
      hasChanged('fixedWidth') ||
      hasChanged('fixedHeight') ||
      hasChanged('componentCount') ||
      hasChanged('layoutName') ||
      hasChanged('radiusScale')

    if (needsRecreation || componentsRef.current.length === 0) {
      containerRef.current!.removeChildren()
      const comps: AnimatedLayoutComponent[] = []
      const count = options.componentCount || 20
      const cols = options.columns || 5

      for (let i = 0; i < count; i++) {
        const sym = createSymbol(i, i % cols)
        comps.push(sym)
        containerRef.current!.addChild(sym)
      }
      componentsRef.current = comps
      prevOptions.current = { ...options }
    }

    applyCurrentLayout()

    // Event Handlers for Symbol Popping / Avalanche
    const handlePop = () => {
      if (componentsRef.current.length === 0) return
      const idx = Math.floor(Math.random() * componentsRef.current.length)
      const removed = componentsRef.current[idx]
      const reelIdx = removed.reelIndex ?? 0
      componentsRef.current.splice(idx, 1)
      removed.destroy()

      if (options.refill) {
        const newSym = createSymbol(Math.floor(Math.random() * 1000), reelIdx)
        componentsRef.current.push(newSym)
        containerRef.current?.addChild(newSym)
      }
      applyCurrentLayout()
    }

    const onResize = () => applyCurrentLayout()
    window.addEventListener('pop-symbol', handlePop)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('pop-symbol', handlePop)
      window.removeEventListener('resize', onResize)
    }
  }, [options, isPixiReady])

  return <div ref={canvasRef} className="fixed inset-0 w-full h-full" />
}