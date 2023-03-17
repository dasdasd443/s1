import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
    //   onClick={(event) => setActive(!active)}
    //   onPointerOver={(event) => setHover(true)}
    //   onPointerOut={(event) => setHover(false)}
      >
      <sphereBufferGeometry args={[3, 32, 16]} />
    
      <meshStandardMaterial wireframe color={0x494949} />
    </mesh>
  )
}

function Ball() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    )
}

export default Ball;