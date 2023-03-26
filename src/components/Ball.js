import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += (delta / 20)))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <sphereBufferGeometry args={[3, 32, 16]} />
    
      <meshStandardMaterial wireframe color={0x494949} />
    </mesh>
  )
}

function Ball() {
    return (
        <Canvas>
            <group position={[0,0,0]}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box/>
            </group>
        </Canvas>
    )
}

export default Ball;