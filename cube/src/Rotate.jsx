import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Rotate() {
  const meshRef = useRef()

  useFrame((state, delta) => {  
      meshRef.current.rotation.x += delta
      // meshRef.current.rotation.y += delta * 0.7
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 1]} />

      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    </>
  )
}
