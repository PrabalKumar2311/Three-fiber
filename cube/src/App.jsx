import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'

function Cube({ position, size, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Rotating group component
function RotatingGroup() {
  const groupRef = useRef()
  const scroll = useRef(0)

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      scroll.current = window.scrollY * 0.002   // scroll speed multiplier
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate each frame based on scroll value
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scroll.current
      groupRef.current.rotation.x = scroll.current * 0.7  // slight tilt
    }
  })

  return (
    <group ref={groupRef}>
      <Cube position={[1, 0, 0]} size={[1,1,1]} color="green" />
      <Cube position={[-1, 0, 0]} size={[1,1,1]} color="hotpink" />
      <Cube position={[-1, 2, 0]} size={[1,1,1]} color="blue" />
      <Cube position={[1, 2, 0]} size={[1,1,1]} color="orange" />
    </group>
  )
}

export default function App() {
  return (
    <div style={{ height: "200vh" }}> {/* page height so scroll works */}
      <Canvas camera={{ position: [0, 1, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 2, 2]} />
        <RotatingGroup />
      </Canvas>
    </div>
  )
}
