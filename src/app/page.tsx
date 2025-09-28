'use client'

import {useState} from 'react'
import dynamic from 'next/dynamic'
import {LayoutController} from '@/components/LayoutController'
import {LayoutOptions} from '@/lib/layoutEngine'
import {layoutEnum} from 'pixi-layout-engine'

const PixiCanvas = dynamic(() => import('@/components/PixiCanvas').then((mod) => mod.PixiCanvas), {
  ssr: false,
})

export default function Home() {
  const [options, setOptions] = useState<LayoutOptions>({
    layoutName: layoutEnum.SQUARE,
    spacing: 40,
    componentCount: 40,
    sizingMode: 'auto',
    fixedWidth: 50,
    fixedHeight: 50,
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    flowDirection: 'default',
    lastRowAlign: 'start',
    flowReverse: false,
    radius: 150,
    startAngle: 0,
    endAngle: 360,
    radiusOffsetType: 'none',
    rotateToCenter: false,
    scale: 1,
    columns: 5,
    prioritizeCorners: false,
    angle: 45,
    amplitude: 50,
    frequency: 0.01,
    offsetX: 1.5,
    offsetY: 1.5,
    offsetRotation: 0,
    separation: 20,
    tightness: 0.5,
    tiers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    rowGap: 10,
    itemSpacing: 10,
    autoRows: true,
    rows: 3,
    path: 'M200,300 L400,50 L600,300 L800,550 L1000,300',
    rotateToPath: true,
    honeycombOrientation: 'pointy-top',
    depthSpacing: 0.85,
    tileWidth: 80,
    tileHeight: 40,
    width: 800,
    height: 600,
    iterations: 300,
    centerStrength: 0.002,
    spiralTightness: 1.3,
    zones: [
      { name: 'main_bet', bounds: { x: -400, y: 0, width: 400, height: 100 } },
      { name: 'side_bet_1', bounds: { x: -400, y: -200, width: 190, height: 80 } },
      { name: 'side_bet_2', bounds: { x: 200, y: -200, width: 190, height: 80 } },
    ],
  })

  return (
    <main>
      <LayoutController options={options} setOptions={setOptions} />
      <PixiCanvas options={options} />
    </main>
  )
}
