import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";

import Car from '../../components/Cars/Car'
import Stage from '../../components/Stage/Stage.js'

import { carList, cars, generateCar } from '../../components/Cars/carList'

import './ShowRoom.scss'

import { caracteristics } from '../../params/character'

function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <h2 id="loading">{progress} % loaded</h2>
    </Html>
  )
}

const ShowRoom = ({ car, setCar, fromAvatar, carColor }) => {
	return (
		<div className="ShowRoom">
			<h1 className="ShowRoom__title">Showroom</h1>
			<Canvas>
				<Suspense fallback={<Loader />} >
					<Car car={car} position={[0, -1, 0]}/>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Stage position={[0, -1, 0]}/>
					<Environment preset="dawn" />
					<OrbitControls />
				</Suspense>
			</Canvas>
			<div className="ShowRoom__details">
				<h2 className="ShowRoom__details__title">Car Details</h2>
				<p className="ShowRoom__details__item">Brand: {cars[car.chassis]?.brand || "Lada"}</p>
				<p className="ShowRoom__details__item">Model: {cars[car.chassis]?.model || "Niva"}</p>
				<p className="ShowRoom__details__item">Engine: {car.engine}</p>
				<p className="ShowRoom__details__item">Color: {carColor}</p>
				<p className="ShowRoom__details__item">Seats: {car.int_colour === "Basic" ? "Soft Grey" : "Black Italian Leather"}</p>
				<p className="ShowRoom__details__item">Interior: {car.materials}</p>
				{ car.options && <h3 className="ShowRoom__details__options">Options</h3> }
				{ car.options && car.options.map(option => <p key={option} className="ShowRoom__details__item">{option}</p>)}
			</div>
		</div>
	)
}

export default ShowRoom;
