import React, { useState, useEffect } from 'react'

import './Selector.scss'

const capitalizeTitle = (title) => title.charAt(0).toUpperCase() + title.slice(1).replace("_", " ")

const Selector = ({ title, charData, character, setCharacter }) => {
	const [charState, setCharState] = useState(character[title])

	useEffect(() => {
		const change = {}
		change[`${title}`] = charState
		setCharacter({ ...character, ...change })
	}, [charState])

	return (
		<div className="Selector">
			<h2 className="Selector__title">{capitalizeTitle(title)}</h2>
			<ul className="Selector__list">
				{ charData.map(char => 
					<li key={char.displayed} className="Selector__list__item">
						<button 
							className={`Selector__list__item__btn${charState === char.displayed ? "--selected" : ""}`}
							onClick={() => setCharState(char.displayed)}>
								{char.displayed}
						</button>
					</li>) 
				}
			</ul>
		</div>
	)
}

export default Selector