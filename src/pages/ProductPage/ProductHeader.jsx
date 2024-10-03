import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect } from 'react'
import Scene from './Scene'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

// A component to set the scene's background
const Background = ({ textureUrl }) => {
  const { scene } = useThree()
  const texture = useTexture(textureUrl)

  useEffect(() => {
    if (texture) {
      scene.background = texture // Set the background texture
    }
  }, [texture, scene])

  return null
}

const ProductHeader = () => {
  return (
    
    <Canvas flat camera={{ fov: 35 }}>
      {/* Add the background texture */}
      <Background textureUrl="https://i.ibb.co/5nQgWCF/video1-ezgif-com-video-to-gif-converter.gif" />

      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          intensity={0.0} // The bloom intensity.
          mipmapBlur={true}
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
    </Canvas>
  )
}

export default ProductHeader
