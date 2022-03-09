import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MODEL = '/three_assets/woman.glb'

export default function Woman({ character, position }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)

  materials.skin.color = {r: 0.2, g: 0.2, b: 0}
  return (
    <group ref={group} position={position} dispose={null}>
      <mesh
        name="woman_body"
        geometry={nodes.woman_body.geometry}
        material={nodes.woman_body.material}
        userData={{ name: 'woman_body' }}
      />
      { character.haircut === "formal" && <mesh
        name="woman_hair_1"
        geometry={nodes.woman_hair_1.geometry}
        material={materials.Hair}
        userData={{ name: 'woman_hair_1' }}
      /> }
      { character.outfit === "sport" && <group name="woman_sport" userData={{ name: 'woman_sport' }}>
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials.sport_suit} />
        <mesh name="Cube019_1" geometry={nodes.Cube019_1.geometry} material={materials.sport_detail} />
        <mesh name="Cube019_2" geometry={nodes.Cube019_2.geometry} material={materials.sport_trim} />
        <mesh name="Cube019_3" geometry={nodes.Cube019_3.geometry} material={nodes.Cube019_3.material} />
        <mesh name="Cube019_4" geometry={nodes.Cube019_4.geometry} material={nodes.Cube019_4.material} />
      </group> }
      { character.outfit === "formal" && <group name="woman_formal" userData={{ name: 'woman_formal' }}>
        <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials.suit} />
        <mesh name="Cube020_1" geometry={nodes.Cube020_1.geometry} material={nodes.Cube020_1.material} />
        <mesh name="Cube020_2" geometry={nodes.Cube020_2.geometry} material={nodes.Cube020_2.material} />
        <mesh name="Cube020_3" geometry={nodes.Cube020_3.geometry} material={nodes.Cube020_3.material} />
      </group> }
      { character.haircut === "arty" && <mesh
        name="woman_hair_2"
        geometry={nodes.woman_hair_2.geometry}
        material={nodes.woman_hair_2.material}
        userData={{ name: 'woman_hair_2' }}
        scale={[1.1, 1.005, 1.1]}
      /> }
      { character.haircut === "crazy" && <mesh
        name="woman_hair_3"
        geometry={nodes.woman_hair_3.geometry}
        material={nodes.woman_hair_3.material}
        userData={{ name: 'woman_hair_3' }}
      /> }
      { character.outfit === "casual" && <group name="woman_casual" userData={{ name: 'woman_casual' }}>
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.casual_pants} />
        <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
        <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material} />
        <mesh name="Cube002_3" geometry={nodes.Cube002_3.geometry} material={nodes.Cube002_3.material} />
      </group> }
      { character.glasses === "sunglasses" && <mesh
        name="woman_sunglasses"
        geometry={nodes.woman_sunglasses.geometry}
        material={nodes.woman_sunglasses.material}
        userData={{ name: 'woman_sunglasses' }}
      /> }
      { character.glasses === "glasses" && <group name="woman_glasses" userData={{ name: 'woman_glasses' }}>
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.glass} />
        <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials.casual_shirt} />
        <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={nodes.Plane001_2.material} />
      </group> }
    </group>
  )
}

useGLTF.preload(MODEL)
