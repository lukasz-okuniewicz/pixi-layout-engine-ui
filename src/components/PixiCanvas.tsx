'use client'

import React, {useEffect, useRef, useState} from 'react'
import * as PIXI from 'pixi.js'
import {applyLayout, LayoutComponent, layoutEnum, LayoutOptions as EngineOptions} from 'pixi-layout-engine'
import {svgPathProperties as SvgPathProperties} from 'svg-path-properties'
import type {ExtendedLayoutOptions} from './LayoutController'
import {Delaunay} from 'd3-delaunay'

interface PixiCanvasProps {
  options: ExtendedLayoutOptions
}

const radiusOffsetFunctions: Record<string, (c: LayoutComponent, i: number) => number> = {
  none: () => 0,
  wave: (c, i) => Math.sin(i * 0.5) * 20,
  spiral_in: (c, i) => -i * 2,
  random: () => (Math.random() - 0.5) * 30,
}

export const PixiCanvas: React.FC<PixiCanvasProps> = ({ options }) => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<PIXI.Application | null>(null)
  const containerRef = useRef<PIXI.Container | null>(null)
  const borderRef = useRef<PIXI.Graphics | null>(null)
  const componentsRef = useRef<LayoutComponent[]>([])
  const prevSizingOptions = useRef<Partial<ExtendedLayoutOptions>>({})

  const [isPixiReady, setIsPixiReady] = useState(false)

  useEffect(() => {
    let isCancelled = false

    const initPixi = async () => {
      if (!canvasRef.current) return

      const app = new PIXI.Application()
      // @ts-ignore
      globalThis.__PIXI_APP__ = app

      await app.init({
        resizeTo: window,
        background: '#2c3e50',
        antialias: true,
      })

      if (isCancelled) {
        app.destroy(true, true)
        return
      }

      appRef.current = app
      canvasRef.current.appendChild(app.canvas)

      const container = new PIXI.Container()
      const border = new PIXI.Graphics()
      containerRef.current = container
      borderRef.current = border

      app.stage.addChild(container)
      app.stage.addChild(border)

      setIsPixiReady(true)
    }

    initPixi()

    return () => {
      isCancelled = true
      if (appRef.current) {
        appRef.current.destroy(true, { children: true })
        appRef.current = null
      }
      setIsPixiReady(false)
    }
  }, [])

  useEffect(() => {
    if (!isPixiReady || !appRef.current || !containerRef.current || !borderRef.current) {
      return
    }

    const app = appRef.current
    const container = containerRef.current
    const border = borderRef.current

    const applyCurrentLayout = () => {
      if (!appRef.current || !containerRef.current || componentsRef.current.length === 0) {
        return
      }
      const finalOptions: EngineOptions = {
        ...options,
        radiusOffset: radiusOffsetFunctions[options.radiusOffsetType || 'none'],
      }
      if (options.layoutName === layoutEnum.PATH) {
        finalOptions.pathParser = SvgPathProperties
      }
      if (options.layoutName === layoutEnum.VORONOI) {
        finalOptions.voronoiParser = Delaunay
        componentsRef.current.forEach((c) => {
          c.position.set((Math.random() - 0.5) * app.screen.width, (Math.random() - 0.5) * app.screen.height)
        })
      }

      applyLayout(container, finalOptions)

      container.pivot.x -= app.screen.width / 2
      container.pivot.y -= app.screen.height / 2

      border.clear()
      const zeroPivotLayouts = [
        'circle',
        'spiral',
        'phyllotaxis',
        'perspective',
        'isometric',
        'bubble',
        'word-cloud',
        'diagonal',
        'voronoi',
        'circle-pack',
      ]
      if (options.layoutName && zeroPivotLayouts.includes(options.layoutName)) {
        app.stage.pivot.set(0, 0)
      }
    }

    const createComponents = (sizingOpts: ExtendedLayoutOptions) => {
      container.removeChildren()
      const newComponents: LayoutComponent[] = []
      const {
        sizingMode,
        fixedWidth,
        fixedHeight,
        componentCount,
        layoutName,
        demoSpan1_col,
        demoSpan1_row,
        demoSpan2_col,
        demoSpan2_row,
        radiusScale,
        zones,
      } = sizingOpts
      const colors = [0xde3249, 0xf5b642, 0x69c4a0, 0x2472a4, 0x8663a6]

      for (let i = 0; i < (componentCount || 40); i++) {
        const componentValue = Math.random() * 100 + 20
        const gfx = new PIXI.Graphics()

        const text = new PIXI.Text({
          text: `${i}`,
          style: new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            stroke: { color: 0x000000, width: 4, join: 'round' },
            align: 'center',
          }),
        })
        text.anchor.set(0.5)

        if (layoutName === layoutEnum.CIRCLE_PACK) {
          const radius = Math.sqrt(componentValue) * (radiusScale || 2)
          gfx.circle(0, 0, radius).fill(colors[i % colors.length])
          text.position.set(0, 0)
        } else {
          let width: number, height: number
          if (sizingMode === 'fixed') {
            width = fixedWidth || 50
            height = fixedHeight || 50
          } else {
            if (
              layoutName === layoutEnum.WORD_CLOUD ||
              layoutName === layoutEnum.BUBBLE ||
              layoutName === layoutEnum.TREEMAP
            ) {
              const baseSize = 30
              const scaleFactor = componentValue / 120
              width = baseSize + scaleFactor * 70
              height = width
            } else {
              width = 30 + Math.random() * 40
              height = 30 + Math.random() * 40
            }
          }
          gfx.rect(0, 0, width, height).fill(colors[i % colors.length])

          text.position.set(width / 2, height / 2)

          gfx.pivot.set(width / 2, height / 2)
        }

        gfx.addChild(text)

        const component = gfx as LayoutComponent
        component.value = componentValue

        if (layoutName === layoutEnum.PAYOUT_ZONES && zones && zones.length > 0) {
          const randomZoneIndex = i % zones.length
          component.zoneName = zones[randomZoneIndex].name
        }

        if (layoutName === layoutEnum.SQUARE) {
          if (i === 0) {
            component.colSpan = demoSpan1_col || 1
            component.rowSpan = demoSpan1_row || 1
          } else if (i === 3) {
            component.colSpan = demoSpan2_col || 1
            component.rowSpan = demoSpan2_row || 1
          }
        }
        newComponents.push(component)
        container.addChild(gfx)
      }
      componentsRef.current = newComponents
    }

    const hasChanged = (key: keyof ExtendedLayoutOptions) => options[key] !== prevSizingOptions.current[key]

    const needsRecreation =
      hasChanged('sizingMode') ||
      hasChanged('fixedWidth') ||
      hasChanged('fixedHeight') ||
      hasChanged('componentCount') ||
      hasChanged('layoutName') ||
      hasChanged('demoSpan1_col') ||
      hasChanged('demoSpan1_row') ||
      hasChanged('demoSpan2_col') ||
      hasChanged('demoSpan2_row') ||
      hasChanged('boundsRadius') ||
      hasChanged('padding') ||
      hasChanged('iterations') ||
      hasChanged('centerStrength') ||
      hasChanged('radiusScale')

    if (needsRecreation || componentsRef.current.length === 0) {
      createComponents(options)
      prevSizingOptions.current = { ...options }
    }

    applyCurrentLayout()
    const handleResize = () => applyCurrentLayout()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [options, isPixiReady])

  return <div ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: 'full', height: 'full' }} />
}
