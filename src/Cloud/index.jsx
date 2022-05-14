/* eslint-disable react/no-children-prop */
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Word } from '../Word'

const Cloud = ({ count = 4, radius = 20 }) => {

  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), 'я тeбe кохаю Валюсiчка'])
    return temp
  }, [count, radius])

    
  return (
    <>
      {words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)}
    </>  
  )
}

export { Cloud }