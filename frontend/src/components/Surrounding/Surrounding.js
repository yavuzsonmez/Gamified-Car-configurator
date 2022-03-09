import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MODEL = '/three_assets/environment.glb'

export default function Surrounding({ character, position }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)
  return (
    <group ref={group} dispose={null} position={position}>
      
      { character.environment === "suburban" && <>
        <mesh name="Trash" geometry={nodes.Trash.geometry} material={nodes.Trash.material} userData={{ name: 'Trash' }} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} userData={{ name: 'Cube' }} />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          userData={{ name: 'Cube.001' }}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          userData={{ name: 'Cube.002' }}
        />
        <group name="Cube007" userData={{ name: 'Cube.007' }}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={nodes.Cube009.material} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.brown} />
        </group>
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          userData={{ name: 'Cube.016' }}
        />
        <group name="Flower1" userData={{ name: 'Flower1' }}>
          <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={nodes.Cylinder011.material} />
          <mesh name="Cylinder011_1" geometry={nodes.Cylinder011_1.geometry} material={nodes.Cylinder011_1.material} />
          <mesh name="Cylinder011_2" geometry={nodes.Cylinder011_2.geometry} material={nodes.Cylinder011_2.material} />
          <mesh name="Cylinder011_3" geometry={nodes.Cylinder011_3.geometry} material={nodes.Cylinder011_3.material} />
        </group>
        <mesh name="h2" geometry={nodes.h2.geometry} material={materials.houses} userData={{ name: 'h2' }} />
      </> }

      { character.environment === "city" && <>
        <mesh
          name="Building"
          geometry={nodes.Building.geometry}
          material={materials['Material.017']}
          userData={{ name: 'Building' }}
        />
        <mesh name="Floor" geometry={nodes.Floor.geometry} material={nodes.Floor.material} userData={{ name: 'Floor' }} />
        <group name="Mailbox" userData={{ name: 'Mailbox' }}>
          <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={nodes.Cube036.material} />
          <mesh name="Cube036_1" geometry={nodes.Cube036_1.geometry} material={materials['Material.005']} />
        </group>
        <group name="Lamp" userData={{ name: 'Lamp' }}>
          <mesh name="ID937001" geometry={nodes.ID937001.geometry} material={materials.Street_light} />
          <mesh name="ID937001_1" geometry={nodes.ID937001_1.geometry} material={materials.light_glass} />
          <mesh name="ID937001_2" geometry={nodes.ID937001_2.geometry} material={materials['Material.015']} />
          <mesh name="ID937001_3" geometry={nodes.ID937001_3.geometry} material={materials['Material.016']} />
        </group>
      </> }
      

      { character.environment === "country" && <>
        <mesh
          name="Branch"
          geometry={nodes.Branch.geometry}
          material={nodes.Branch.material}
          userData={{ name: 'Branch' }}
        />
        <mesh
          name="Snow"
          geometry={nodes.Snow.geometry}
          material={materials['Material.007']}
          userData={{ name: 'Snow' }}
        />
        <group name="EmptyLog" userData={{ name: 'EmptyLog' }}>
          <mesh name="Cylinder046" geometry={nodes.Cylinder046.geometry} material={nodes.Cylinder046.material} />
          <mesh name="Cylinder046_1" geometry={nodes.Cylinder046_1.geometry} material={nodes.Cylinder046_1.material} />
        </group>
        <group name="Flowers" userData={{ name: 'Flowers' }}>
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} />
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={nodes.Cylinder004_1.material} />
          <mesh name="Cylinder004_2" geometry={nodes.Cylinder004_2.geometry} material={nodes.Cylinder004_2.material} />
          <mesh name="Cylinder004_3" geometry={nodes.Cylinder004_3.geometry} material={nodes.Cylinder004_3.material} />
        </group>
        <group name="Tree" userData={{ name: 'Tree' }}>
          <mesh
            name="Cylinder_Material002_0"
            geometry={nodes.Cylinder_Material002_0.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cylinder_Material002_0_1"
            geometry={nodes.Cylinder_Material002_0_1.geometry}
            material={materials['Material.008']}
          />
        </group>
        <group name="Trunk" userData={{ name: 'Trunk' }}>
          <mesh name="Cylinder045" geometry={nodes.Cylinder045.geometry} material={nodes.Cylinder045.material} />
          <mesh name="Cylinder045_1" geometry={nodes.Cylinder045_1.geometry} material={nodes.Cylinder045_1.material} />
        </group>
      </> }

      <mesh name="lines" geometry={nodes.lines.geometry} material={nodes.lines.material} userData={{ name: 'lines' }} />
      <mesh
        name="road"
        geometry={nodes.road.geometry}
        material={materials['Material.001']}
        userData={{ name: 'road' }}
      />
    </group>
  )
}

useGLTF.preload(MODEL)
