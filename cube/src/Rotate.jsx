import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Rotate() {
  const meshRef = useRef()

  useFrame((state, delta) => {  
      meshRef.current.rotation.x = -state.mouse.y * Math.PI * 0.5
      meshRef.current.rotation.y =  state.mouse.x * Math.PI * 0.5

      console.log(state)
      // meshRef.current.rotation.x = 1.0 + Math.sin(state.clock.elapsedTime) * 0.5
  })

  function Cube({position,size, color}){
    return(
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
    )
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 1]} />
      <Cube position={[0, 0, 0]} size={[1, 1, 1]} color="lightblue" />
    </>
  )
}
