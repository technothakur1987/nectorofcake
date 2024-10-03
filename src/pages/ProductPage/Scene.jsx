import { useTexture } from '@react-three/drei'
import React,{useRef} from 'react'
import mergedimage from '../../assets/mergedimage.png'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'



const Scene = () => {
  let sceneRef = useRef(null)

    let tex  =useTexture(mergedimage)
    useFrame((state, delta)=>{
      console.log(typeof delta)
      console.log(typeof sceneRef.current.rotation.y)
         sceneRef.current.rotation.y += delta
    })
    
  return (
    <group rotation={[0, 1.4, 0.2]}>
    <mesh ref={sceneRef} >
        <cylinderGeometry args={[2, 2, 1, 60, 60, true]}/>
        <meshStandardMaterial map={tex}  transparent side={THREE.DoubleSide}/>
    </mesh>
    </group>  
  )
}

export default Scene