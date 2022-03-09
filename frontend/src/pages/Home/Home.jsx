import React from 'react'
import { Link } from "react-router-dom";
import hexagon from './src/img/hexagon_logo.jpg'
import mobility from './src/img/mobility_hack_logo.png'

import './Home.scss'

const Home = () => {
	return (
		<div className="Home">
			<header className="Home__header">
				<img className="Home__header__hexagon" src={hexagon} alt="team hexagon logo" />
				<img className="Home__header__mobility" src={mobility} alt="mobility hack logo" />
			</header>
			<main className="Home__main">
				<h1 className="Home__main__title">Car Configurator</h1>
				<Link className="Home__main__start" to="/character">Start</Link>
			</main>
			<footer className="Home__footer">
				<p>Mobility Hack 2022 - Team Heagon</p>
			</footer>
		</div>
	)
}

export default Home
