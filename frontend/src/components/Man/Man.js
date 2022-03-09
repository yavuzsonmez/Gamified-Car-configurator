import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MODEL = '/three_assets/man.glb'

export default function Man({ character, position }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)

  materials.skin.color = {r: 0.2, g: 0.2, b: 0}
  return (
    <group ref={group} position={position} dispose={null}>
      <mesh
        name="man_body"
        geometry={nodes.man_body.geometry}
        material={materials.skin}
        userData={{ name: 'man_body' }}
      />
      { character.outfit === "formal" && <group name="man_formal" userData={{ name: 'man_formal' }}>
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.suit} />
        <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.shirt} />
        <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={nodes.Cube005_2.material} />
        <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials.formal_shoes} />
      </group> }
      { character.haircut === "arty" && <mesh
        name="man_hair_2"
        geometry={nodes.man_hair_2.geometry}
        material={materials.Hair}
        userData={{ name: 'man_hair_2' }}
      /> }
      { character.outfit === "casual" && <group name="man_casual" userData={{ name: 'man_casual' }}>
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.casual_pants} />
        <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={nodes.Cube009_1.material} />
        <mesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={nodes.Cube009_2.material} />
        <mesh name="Cube009_3" geometry={nodes.Cube009_3.geometry} material={nodes.Cube009_3.material} />
      </group> }
      { character.outfit === "sport" && <group name="man_sport" userData={{ name: 'man_sport' }}>
        <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.sport_suit} />
        <mesh name="Cube015_1" geometry={nodes.Cube015_1.geometry} material={materials.sport_detail} />
        <mesh name="Cube015_2" geometry={nodes.Cube015_2.geometry} material={materials.sport_trim} />
        <mesh name="Cube015_3" geometry={nodes.Cube015_3.geometry} material={nodes.Cube015_3.material} />
        <mesh name="Cube015_4" geometry={nodes.Cube015_4.geometry} material={nodes.Cube015_4.material} />
      </group> }
      { character.haircut === "crazy" && <mesh
        name="man_hair_3"
        geometry={nodes.man_hair_3.geometry}
        material={nodes.man_hair_3.material}
        userData={{ name: 'man_hair_3' }}
      /> }
      { character.haircut === "formal" && <mesh
        name="man_hair_1"
        geometry={nodes.man_hair_1.geometry}
        material={nodes.man_hair_1.material}
        userData={{ name: 'man_hair_1' }}
      /> }
      { character.glasses === "sunglasses" && <mesh
        name="man_sunglasses"
        geometry={nodes.man_sunglasses.geometry}
        material={nodes.man_sunglasses.material}
        userData={{ name: 'man_sunglasses' }}
      /> }
      { character.glasses === "glasses" && <group name="man_glasses" userData={{ name: 'man_glasses' }}>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.glass} />
        <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={nodes.Plane_1.material} />
      </group> }
    </group>
  )
}

useGLTF.preload(MODEL)
