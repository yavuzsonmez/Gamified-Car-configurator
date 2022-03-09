import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const MODEL = '/three_assets/car_911.glb'

export default function Car911({ car, position, carColor }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)

  return (
    <group ref={group} position={position} dispose={null}>
      <group name="Body" userData={{ name: 'Body' }}>
        <mesh name="body" geometry={nodes.body.geometry} material={nodes.body.material} />
        <mesh name="body_1" geometry={nodes.body_1.geometry} material={nodes.body_1.material} />
      </group>
      <mesh
        name="Body002"
        geometry={nodes.Body002.geometry}
        material={materials.Windows}
        userData={{ name: 'Body.002' }}
      />
      <mesh
        name="Back_Lights"
        geometry={nodes.Back_Lights.geometry}
        material={materials.Red_Light}
        userData={{ name: 'Back_Lights' }}
      />
       {<group name="Classic_Wheels_1" userData={{ name: 'Classic_Wheels_1' }}>
        <mesh
          name="classic_wheels_1"
          geometry={nodes.classic_wheels_1.geometry}
          material={nodes.classic_wheels_1.material}
        />
        <mesh
          name="classic_wheels_1_1"
          geometry={nodes.classic_wheels_1_1.geometry}
          material={nodes.classic_wheels_1_1.material}
        />
        <mesh
          name="classic_wheels_1_2"
          geometry={nodes.classic_wheels_1_2.geometry}
          material={nodes.classic_wheels_1_2.material}
        />
      </group> }
      { car.engine !== "Electric" && <mesh
        name="Classic_Exhaust"
        geometry={nodes.Classic_Exhaust.geometry}
        material={nodes.Classic_Exhaust.material}
        userData={{ name: 'Classic_Exhaust' }}
      /> }
      { <group name="Classic_Pack" userData={{ name: 'Classic_Pack' }}>
        <mesh
          name="front_lights_classic"
          geometry={nodes.front_lights_classic.geometry}
          material={nodes.front_lights_classic.material}
        />
        <mesh
          name="front_lights_classic_1"
          geometry={nodes.front_lights_classic_1.geometry}
          material={nodes.front_lights_classic_1.material}
        />
        <mesh
          name="front_lights_classic_2"
          geometry={nodes.front_lights_classic_2.geometry}
          material={nodes.front_lights_classic_2.material}
        />
      </group> }
      { car.materials === "Flashy" && <group name="Adventure_Pack" userData={{ name: 'Adventure_Pack' }}>
        <mesh name="rear_fender" geometry={nodes.rear_fender.geometry} material={nodes.rear_fender.material} />
        <mesh name="rear_fender_1" geometry={nodes.rear_fender_1.geometry} material={nodes.rear_fender_1.material} />
        <mesh name="rear_fender_2" geometry={nodes.rear_fender_2.geometry} material={nodes.rear_fender_2.material} />
        <mesh name="rear_fender_3" geometry={nodes.rear_fender_3.geometry} material={nodes.rear_fender_3.material} />
      </group> }
      { car.materials === "Flashy" && <group name="Adventure_Wild" userData={{ name: 'Adventure_Wild' }}>
        <mesh name="hood_lights" geometry={nodes.hood_lights.geometry} material={nodes.hood_lights.material} />
        <mesh name="hood_lights_1" geometry={nodes.hood_lights_1.geometry} material={nodes.hood_lights_1.material} />
        <mesh name="hood_lights_2" geometry={nodes.hood_lights_2.geometry} material={nodes.hood_lights_2.material} />
        <mesh name="hood_lights_3" geometry={nodes.hood_lights_3.geometry} material={nodes.hood_lights_3.material} />
      </group> }
      { car.materials === "Flashy" && car.engine !== "Electric" &&<mesh
        name="Adventure_Exhaust"
        geometry={nodes.Adventure_Exhaust.geometry}
        material={nodes.Adventure_Exhaust.material}
        userData={{ name: 'Adventure_Exhaust' }}
      /> }
       { car.materials === "Sport" && <group name="Sport_Pack" userData={{ name: 'Sport_Pack' }}>
        <mesh name="body005" geometry={nodes.body005.geometry} material={nodes.body005.material} />
        <mesh name="body005_1" geometry={nodes.body005_1.geometry} material={nodes.body005_1.material} />
        <mesh name="body005_2" geometry={nodes.body005_2.geometry} material={nodes.body005_2.material} />
        <mesh name="body005_3" geometry={nodes.body005_3.geometry} material={materials.Sport_Front_Bumper_Shadows} />
        <mesh name="body005_4" geometry={nodes.body005_4.geometry} material={nodes.body005_4.material} />
        <mesh name="body005_5" geometry={nodes.body005_5.geometry} material={materials.Calipers} />
        <mesh name="body005_6" geometry={nodes.body005_6.geometry} material={nodes.body005_6.material} />
        <mesh name="body005_7" geometry={nodes.body005_7.geometry} material={nodes.body005_7.material} />
      </group> }
      { car.materials === "Sport" && car.engine !== "Electric" && <mesh
        name="Sport_Exhausts"
        geometry={nodes.Sport_Exhausts.geometry}
        material={nodes.Sport_Exhausts.material}
        userData={{ name: 'Sport_Exhausts' }}
      /> }
    </group>
  )
}

useGLTF.preload(MODEL)
