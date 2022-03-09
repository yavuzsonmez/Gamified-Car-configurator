export const carList = [
	{
		name: "Porsche 911",
		model: "911",
		brand: "Porsche",
	  	variants: ["sport", "classic", "adventure"],
	},
	{
		name: "Audi a1",
		model: "a1",
		brand: "Audi",
	  	variants: ["sport", "classic"],
	},
	{
		name: "Porsche Macan",
		model: "Macan",
		brand: "Porsche",
	  	variants: ["sport", "classic"],
	}
]

export const cars = {
	Sportscar: carList[0],
	Citycar: carList[1],
	SUV: carList[2]
}

export const generateCar = (car) => {

}

export const pickColor = (color) => {
	if(color === "Basic") return eBasicColors[Math.floor(Math.random() * eBasicColors.length)]
	if(color === "Flashy") return eFlashyColors[Math.floor(Math.random() * eFlashyColors.length)]
}

const eBasicColors = [
 	{
 		name: "black",
 		color: {r: 0, g: 0, b: 0 }
 	},
 	{
 		name: "white",
 		color: {r: 1, g: 1, b: 1 }
 	},
 	{
 		name: "dark grey",
 		color: {r: 0.8, g: 0.8, b: 0.8 }
 	},
 	{
 		name: "light grey",
 		color: {r: 0.5, g: 0.5, b: 0.5 }
 	}
]

const eFlashyColors = [
 	{
 		name: "green",
 		color: {r: 0, g: 1, b: 0 }
 	},
 	{
 		name: "red",
 		color: {r: 1, g: 0, b: 0 }
 	}
]
