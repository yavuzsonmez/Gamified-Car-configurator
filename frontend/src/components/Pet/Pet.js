import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MODEL = '/three_assets/pet.glb'

export default function Pet({ character, position }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)
  return (
    <group ref={group} position={position} dispose={null}>
      { character.pet === "cat" && <mesh name="cat" geometry={nodes.cat.geometry} material={materials.cat} userData={{ name: 'cat' }} /> }
      { character.pet === "dog" && <mesh name="dog" geometry={nodes.dog.geometry} material={materials.dog} userData={{ name: 'dog' }} /> }
    </group>
  )
}

useGLTF.preload(MODEL)
