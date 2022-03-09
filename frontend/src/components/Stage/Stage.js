import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MODEL = '/three_assets/stage.glb'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh name="Stage" geometry={nodes.Stage.geometry} material={materials.Stage} userData={{ name: 'Stage' }} />
    </group>
  )
}

useGLTF.preload(MODEL)
