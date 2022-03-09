import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const MODEL = '/three_assets/car_a1.glb'

export default function CarA1({ car, position, carColor }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)

  console.log(car)

  return (
    <group ref={group} position={position} dispose={null}>
      <group name="Common" userData={{ name: 'Common' }}>
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} />
        <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={nodes.Plane003_1.material} />
        <mesh name="Plane003_2" geometry={nodes.Plane003_2.geometry} material={nodes.Plane003_2.material} />
        <mesh name="Plane003_3" geometry={nodes.Plane003_3.geometry} material={materials.Red_Light} />
      </group>
      <group name="Body" userData={{ name: 'Body' }}>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
        <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={nodes.Plane_1.material} />
      </group>
      { car.options.includes("Sunroof") ?
         <group name="Roof_Window" userData={{ name: 'Roof_Window' }}>
          <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} />
          <mesh name="Plane010_1" geometry={nodes.Plane010_1.geometry} material={nodes.Plane010_1.material} />
          <mesh name="Plane010_2" geometry={nodes.Plane010_2.geometry} material={nodes.Plane010_2.material} />
        </group>
        :
        <mesh
          name="Roof_Regular"
          geometry={nodes.Roof_Regular.geometry}
          material={nodes.Roof_Regular.material}
          userData={{ name: 'Roof_Regular' }}
        />
      }

      { <group name="Sport_Pack" userData={{ name: 'Sport_Pack' }}>
        <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={nodes.Plane015.material} />
        <mesh name="Plane015_1" geometry={nodes.Plane015_1.geometry} material={nodes.Plane015_1.material} />
        <mesh name="Plane015_2" geometry={nodes.Plane015_2.geometry} material={nodes.Plane015_2.material} />
        <mesh name="Plane015_3" geometry={nodes.Plane015_3.geometry} material={nodes.Plane015_3.material} />
        <mesh name="Plane015_4" geometry={nodes.Plane015_4.geometry} material={materials.Calipers} />
        <mesh name="Plane015_5" geometry={nodes.Plane015_5.geometry} material={materials.Accent} />
        <mesh name="Plane015_6" geometry={nodes.Plane015_6.geometry} material={nodes.Plane015_6.material} />
      </group> }
      { car.engine !== "Electric" && <mesh
        name="Sport_Exhaust"
        geometry={nodes.Sport_Exhaust.geometry}
        material={nodes.Sport_Exhaust.material}
        userData={{ name: 'Sport_Exhaust' }}
      /> }
      { <group name="Classic_Pack" userData={{ name: 'Classic_Pack' }}>
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
        <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
        <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} />
        <mesh name="Cylinder_3" geometry={nodes.Cylinder_3.geometry} material={nodes.Cylinder_3.material} />
      </group> }
      { car.engine !== "Electric" && <group name="Classic_Exhaust" userData={{ name: 'Classic_Exhaust' }}>
        <mesh name="Plane020" geometry={nodes.Plane020.geometry} material={nodes.Plane020.material} />
        <mesh name="Plane020_1" geometry={nodes.Plane020_1.geometry} material={nodes.Plane020_1.material} />
      </group> }
    </group>
  )
}

useGLTF.preload(MODEL)
