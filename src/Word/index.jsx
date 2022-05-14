import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const Word = ({ children, ...props }) => {
    const color = new THREE.Color()
    const fontProps = { font: '/bu.ttf', fontSize: 1.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': true }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => {
        document.body.style.cursor = 'auto'
      }
    }, [hovered])

    useFrame(({ camera }) => {
      if (ref && ref.current) {
        // @ts-ignore
        ref?.current?.quaternion.copy(camera.quaternion)
        // @ts-ignore
        ref?.current?.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
      }
    })


    // eslint-disable-next-line react/no-children-prop
    return <Text ref={ref}  onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
  }

export {Word}