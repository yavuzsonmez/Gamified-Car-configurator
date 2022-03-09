import Car911 from './Car_911.js'
import CarA1 from './Car_a1.js'
import CarMacan from './Car_macan.js'

const Car = ({ car, position, carColor }) => {
	return (
		<>
			{ car.chassis === "Sportscar" && <Car911 car={car} position={position} carColor={carColor} /> }
			{ car.chassis === "Citycar" && <CarA1 car={car} position={position} carColor={carColor} /> }
			{ car.chassis === "SUV" && <CarMacan car={car} position={position} carColor={carColor} /> }
		</>
	)
}

export default Car