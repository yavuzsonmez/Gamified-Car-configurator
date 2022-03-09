import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const MODEL = '/three_assets/car_macan.glb'

export default function Model({ car, position }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)

  // console.log(nodes.Body.material)

  return (
    <group ref={group} position={position} dispose={null}>
      <mesh
        name="Windows_Front"
        geometry={nodes.Windows_Front.geometry}
        material={nodes.Windows_Front.material}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'Windows_Front' }}
      />
      <mesh
        name="Windows_Back"
        geometry={nodes.Windows_Back.geometry}
        material={nodes.Windows_Back.material}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'Windows_Back' }}
      />
      <mesh
        name="Roof_Regular"
        geometry={nodes.Roof_Regular.geometry}
        material={nodes.Roof_Regular.material}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'Roof_Regular' }}
      />
      <mesh
        name="Mirrors"
        geometry={nodes.Mirrors.geometry}
        material={nodes.Mirrors.material}
        userData={{ name: 'Mirrors' }}
      />
      <group name="Logo" userData={{ name: 'Logo' }}>
        <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} />
        <mesh name="Cylinder005_1" geometry={nodes.Cylinder005_1.geometry} material={materials.Yellow} />
      </group>
      <mesh
        name="Body"
        geometry={nodes.Body.geometry}
        material={nodes.Body.material}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'Body' }}
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
      {<group name="Classic_Front_Bumper" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'Classic_Front_Bumper' }}>
        <mesh
          name="classic_front_bumper"
          geometry={nodes.classic_front_bumper.geometry}
          material={nodes.classic_front_bumper.material}
        />
        <mesh
          name="classic_front_bumper_1"
          geometry={nodes.classic_front_bumper_1.geometry}
          material={nodes.classic_front_bumper_1.material}
        />
      </group> }
      {<mesh
        name="Classic_Front_Lights_1"
        geometry={nodes.Classic_Front_Lights_1.geometry}
        material={nodes.Classic_Front_Lights_1.material}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'Classic_Front_Lights_1' }}
      /> }
      {<group name="Classic_Rear_Bumper_1" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'Classic_Rear_Bumper_1' }}>
        <mesh
          name="classsic_rear_bumper_1"
          geometry={nodes.classsic_rear_bumper_1.geometry}
          material={nodes.classsic_rear_bumper_1.material}
        />
        <mesh
          name="classsic_rear_bumper_1_1"
          geometry={nodes.classsic_rear_bumper_1_1.geometry}
          material={nodes.classsic_rear_bumper_1_1.material}
        />
      </group> }
      {<mesh
        name="Classic_Back_Lights"
        geometry={nodes.Classic_Back_Lights.geometry}
        material={nodes.Classic_Back_Lights.material}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'Classic_Back_Lights' }}
      /> }
      {<group name="Sport_Wheels" rotation={[0, 0, -Math.PI / 2]} userData={{ name: 'Sport_Wheels' }}>
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
        <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
      </group> }
      { car.materials === "Sport" && <mesh
        name="Sport_Disks"
        geometry={nodes.Sport_Disks.geometry}
        material={materials.Disks}
        rotation={[0, 0, -Math.PI / 2]}
        userData={{ name: 'Sport_Disks' }}
      /> }
      {<mesh
        name="Sport_Calipers"
        geometry={nodes.Sport_Calipers.geometry}
        material={materials.Calipers}
        rotation={[0, 0, -Math.PI / 2]}
        userData={{ name: 'Sport_Calipers' }}
      /> }
      {<group name="Sport_Rear_Bumper" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'Sport_Rear_Bumper' }}>
        <mesh
          name="classsic_rear_bumper_1001"
          geometry={nodes.classsic_rear_bumper_1001.geometry}
          material={nodes.classsic_rear_bumper_1001.material}
        />
        <mesh
          name="classsic_rear_bumper_1001_1"
          geometry={nodes.classsic_rear_bumper_1001_1.geometry}
          material={nodes.classsic_rear_bumper_1001_1.material}
        />
        <mesh
          name="classsic_rear_bumper_1001_2"
          geometry={nodes.classsic_rear_bumper_1001_2.geometry}
          material={nodes.classsic_rear_bumper_1001_2.material}
        />
        <mesh
          name="classsic_rear_bumper_1001_3"
          geometry={nodes.classsic_rear_bumper_1001_3.geometry}
          material={materials.Metal}
        />
      </group> }
      { <group name="Sport_Grills" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'Sport_Grills' }}>
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} />
        <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={nodes.Plane001_1.material} />
        <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={nodes.Plane001_2.material} />
        <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={nodes.Plane001_3.material} />
      </group> }
      {<group name="Sport_Front_Lights" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'Sport_Front_Lights' }}>
        <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={nodes.Plane005.material} />
        <mesh name="Plane005_1" geometry={nodes.Plane005_1.geometry} material={nodes.Plane005_1.material} />
      </group> }
      { <group name="Sport_Back_Lights" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'Sport_Back_Lights' }}>
        <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} />
        <mesh name="Plane006_1" geometry={nodes.Plane006_1.geometry} material={nodes.Plane006_1.material} />
        <mesh name="Plane006_2" geometry={nodes.Plane006_2.geometry} material={nodes.Plane006_2.material} />
      </group> }
    </group>
  )
}

useGLTF.preload(MODEL)
