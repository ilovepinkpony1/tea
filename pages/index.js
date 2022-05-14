// @ts-nocheck
import styles from '../styles/Home.module.css'
import {  TrackballControls } from '@react-three/drei'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud } from '../src/Cloud'

export default function Home() {
  const ref = useRef()

  return (
    <div className={styles.container}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 50]} />
        <Cloud count={12} radius={30} />
        <TrackballControls />
      </Canvas>
    </div>
  )
}