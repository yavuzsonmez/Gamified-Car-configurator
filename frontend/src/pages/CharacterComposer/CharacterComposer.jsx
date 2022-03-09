import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { Link } from "react-router-dom";

import Selector from '../../components/Selector/Selector.jsx'
import Man from '../../components/Man/Man.js'
import Woman from '../../components/Woman/Woman.js'
import Pet from '../../components/Pet/Pet.js'
import Surrounding from '../../components/Surrounding/Surrounding.js'
import Car from '../../components/Cars/Car'

import './CharacterComposer.scss'

import { caracteristics } from '../../params/character'

const API = "http://localhost:4242/getConfiguration"


function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <h2 id="loading">{progress} % loaded</h2>
    </Html>
  )
}

const CharacterComposer = ({ character, setCharacter, setCar, car, carColor }) => {
	const [ready, setReady] = useState(false)
	const [answer, setAnswer] = useState()
	const [step, setStep] = useState(0)

	const fetchCar = () => {
		console.log("Updating the car")
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
		  "gender": character.gender,
		  "head": "none",
		  "outfit": character.outfit,
		  "pet": character.pet,
		  "kids": character.kids,
		  "favorite_activity": character.favorite_activity,
		  "environment": character.environment
		});

		const requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch(API, requestOptions)
		  .then(response => response.text())
		  .then(result => setCar(JSON.parse(result).carConfiguration))
		  .catch(error => console.log('error', error));
	}

	return (
		<div className="CharacterComposer">
			<Canvas>
				<Suspense fallback={<Loader />} >
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					{ character.gender !== "female" && <Man character={character} position={[1, -1, 0]} />  }
					{ character.gender === "female" && <Woman character={character} position={[1, -1, 0]} /> }
					{ character.pet !== "none" && <Pet character={character} position={[1, -1, 0]} /> }
					{ car && <Car car={car} position={[-1, -1, 1]} carColor={carColor} />}
					<Surrounding character={character} position={[-2.5, -1.55, 0]}/>
					<OrbitControls />
					<Environment preset="sunset" />
				</Suspense>
			</Canvas>
			<div className="CharacterComposer__showroom" style={car && {top: "-4rem" }}>
				{ car && <Link className="CharacterComposer__showroom__btn" to="/showroom">Visit Showroom</Link> }
			</div>
			{ car && !["Sportscar", "Citycar", "SUV"].includes(car.chassis) &&
				<div className="CharacterComposer__error">
						<p className="CharacterComposer__error__message">Your model is not yet available for render. Please adjust your Avatar.</p>
				</div>
			}
			{ car && !["Sportscar", "Citycar", "SUV"].includes(car.chassis) && console.log('not available')}
			{ car && console.log(car)}
			<div className="CharacterComposer__menu">
				<h1 className="CharacterComposer__menu__title">Compose your character</h1>
				<div className="CharacterComposer__menu__selection">
					{ step === 2 && <button className="CharacterComposer__menu__selection__nextBtn" onClick={() => fetchCar()}>{ car ? "Update the car" :"Show me a car"}</button> }
					{ caracteristics.filter(caracteristic => caracteristic.step === step).map(caracteristic => <Selector key={caracteristic.title} title={caracteristic.title} charData={caracteristic.charData} character={character} setCharacter={setCharacter} /> ) }
				</div>
				<div className="CharacterComposer__menu__nav">
					{ step > 0 && <button className="CharacterComposer__menu__nav__previous" onClick={() => setStep(step - 1)}>Previous</button> }
					{ step < 2 && <button className="CharacterComposer__menu__nav__next" onClick={() => setStep(step + 1)}>Next</button> }
				</div>
			</div>
		</div>
	)
}

export default CharacterComposer
