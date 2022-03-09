export function scoringLogic(avatar) {
	let car = {
		"chassis": "",
		"engine": "",
		"ext_colour": "",
		"int_colour": "",
		"materials": "",
		"options": ["Cruise Control"],
	}

	let score = {
		"chassis":
		{
			"Citycar" : 0,
			"Sedan" : 0,
			"Station Wagon" : 0,
			"SUV" : 0,
			"Sportscar" : 0,
			"Cabriolet" : 0,
			"Van" : 0
		},
		"engine":
		{
			"Gasoline" : 0,
			"Diesel" : 0,
			"Electric" : 0,
			"Hybrid" : 0
		},
		"ext_colour":
		{
			"eBasic" : 0,
			"eFlashy" : 0
		},
		"int_colour":
		{
			"iBasic" : 0,
			"iFlashy" : 0
		},
		"materials":
		{
			"Classic" : 0,
			"Luxury" : 0,
			"Sport" : 0
		},
		"options":
		{
			"Park Assist" : 0,
			"Sunroof" : 0,
			"Carplay" : 0,
			"Xenon Lights" : 0,
			"Entry Drive" : 0,
			"Sport Exhaust" : 0,
			"Extended Leather" : 0
		}
	}

	/*	Returns the key representing the input value in the array */

	function getKeyByValue(object, value) {
		return Object.keys(object).find(key => object[key] === value);
		}


	/*	For each key, find the subkey with the highest value
	*	and store it for the final car configuration object
	*/

	const config = () =>
	{
		for(let i in score)
		{
			let arr = Object.values(score[i]);
			let max = Math.max(...arr as any);

			if (i === "options")
			{
				let obj = Object.keys(score[i]);
				for (let x in obj)
				{
					if (score[i][obj[x]] >= 200)
						car[i].push(obj[x]);
				}
			}
			else
				car[i] = getKeyByValue(score[i], max);
		}
	}

	/* Iterate through the object to find the right items
	*	and apply the scoring to the value
	*/

	const scoreAdder = (points, string) =>
	{
		for(const key in score)
			for (const keyNested in score[key])
				if (keyNested == string)
				{
					score[key][keyNested] += points;
					return;
				}
		console.log("Score Adder : Wrong Argument : " + string)
	}

	const outfit = () => {
		switch (avatar.outfit) {
			case 'sport':
				scoreAdder(+50, "Sportscar");
				scoreAdder(+100, "Cabriolet");
				scoreAdder(-2000, "Sunroof");
				scoreAdder(+50, "Station Wagon");
				scoreAdder(+100, "Gasoline");
				scoreAdder(-100, "Electric");
				scoreAdder(+100, "iFlashy");
				scoreAdder(+100, "eFlashy");
				scoreAdder(+100, "Sport");
				break ;
			case 'formal':
				scoreAdder(+50, "SUV");
				scoreAdder(+100, "Sportscar");
				scoreAdder(+100, "Station Wagon");
				scoreAdder(+100, "Diesel");
				scoreAdder(+100, "Electric");
				scoreAdder(+100, "iBasic");
				scoreAdder(+100, "eBasic");
				scoreAdder(+100, "Sport");
				break ;
			case 'fashion':
				scoreAdder(+100, "Citycar");
				break ;
			case 'casual':
				scoreAdder(+100, "Citycar");
				scoreAdder(+100, "Diesel");
				scoreAdder(+100, "Gasoline");
				scoreAdder(+100, "iBasic");
				scoreAdder(+100, "eBasic");
				break ;
			default:
				break ;
			}
	}

	const pets = () => {
		switch (avatar.pet) {
			case 'none':
				scoreAdder(+50, "iFlashy");
				scoreAdder(+50, "Sportscar")
				break ;
			case 'cat':
				scoreAdder(+50, "Cabriolet");
				scoreAdder(-2000, "Sunroof");
				break ;
			case 'dog':
				scoreAdder(-50, "Luxury");
				scoreAdder(+50, "Station Wagon");
				scoreAdder(+50, "Van");
				scoreAdder(+50, "iBasic");
				scoreAdder(+50, "SUV");
				scoreAdder(+50, "Extended Leather");
				break ;
			default:
				break ;
			}
	}

	const kids = () => {
		switch (avatar.kids) {
			case 0:
				scoreAdder(+50, "Sportscar");
				scoreAdder(+100, "Citycar");
				scoreAdder(+100, "Sedan");
				scoreAdder(+100, "Cabriolet");
				scoreAdder(-2000, "Sunroof");
				break ;
			case 1:
				break ;
			case 2:
				scoreAdder(+100, "Sedan");
				scoreAdder(+100, "Break");
				scoreAdder(+50, "SUV");
				break ;
			case 3:
				scoreAdder(-200, "Citycar");
				scoreAdder(+50, "SUV");
				scoreAdder(+100, "Break");
				scoreAdder(+100, "Van");
				break ;
			case (avatar.kids > 3):
				scoreAdder(-200, "Citycar");
				scoreAdder(+200, "Van");
				break ;
			default:
				break ;
			}
	}

	const hobby = () => {
		switch (avatar.favorite_activity) {
			case 'football':
				scoreAdder(+100, "Cabriolet");
				scoreAdder(-2000, "Sunroof");
				scoreAdder(+200, "Carplay");
				break ;
			case 'chess':
				scoreAdder(-200, "Park Assist");
				scoreAdder(100, "Luxury");
				break ;
			case 'ski':
				scoreAdder(+100, "SUV");
				break ;
			case 'gaming':
				scoreAdder(+100, "SUV");
				scoreAdder(+200, "Sunroof");
				scoreAdder(+200, "Carplay");
					break ;
			default:
				break ;
			}
	}

	const glasses = () => {
		switch (avatar.glasses) {
			case 'no glasses':
				break ;
			case 'glasses':
				break ;
			case 'sunglasses':
				scoreAdder(+100, "Cabriolet");
				scoreAdder(-2000, "Sunroof");
				scoreAdder(+100, "iFlashy");
				scoreAdder(+100, "eFlashy");
				break ;
			default:
				break ;
			}
	}

	const haircut = () => {
		switch (avatar.haircut) {
			case 'bold':
				scoreAdder(+200, "Carplay")
				break ;
			case 'formal':
				scoreAdder(+50, "Classic")
				scoreAdder(+200, "iBasic");
				scoreAdder(+200, "eBasic");
				scoreAdder(-1000, "iFlashy");
				scoreAdder(-1000, "eFlashy");
				break ;
			case 'arty':
				scoreAdder(+200, "iFlashy");
				scoreAdder(+200, "eFlashy");
				break ;
			default:
				break ;
			}
	}

	const environment = () => {
		switch (avatar.environment) {
			case 'country':
				scoreAdder(+100, "SUV");
				scoreAdder(+100, "Van");
				scoreAdder(+300, "Sportscar");
				scoreAdder(+100, "Diesel");
				scoreAdder(-200, "Electric");
				scoreAdder(+200, "Xenon Lights");
				scoreAdder(+200, "Sunroof");
				break ;
			case 'city':
				scoreAdder(+100, "Citycar");
				scoreAdder(-100, "Van");
				scoreAdder(-100, "Diesel");
				scoreAdder(+100, "Electric");
				scoreAdder(+200, "Park Assist");
				scoreAdder(-100, "SUV");
				break ;
			case 'suburban':
				scoreAdder(+50, "SUV");
				scoreAdder(+50, "Sunroof");
				scoreAdder(-100, "Electric");
				scoreAdder(+200, "Carplay");
				scoreAdder(+200, "Sunroof");
				break ;
			default:
				break ;
			}
	}

	const addOptions = (string) =>
	{
		for (let i = 0; i < car.options.length ; i++)
			if (car.options[i] == string)
				return;
		car.options.push(string)
	}

	const check_config = () =>
	{
		if (car.chassis === "Sportscar" && car.engine === "Diesel")
			car.engine = "Gasoline";
		if (car.chassis === "SUV" &&  car.engine === "Diesel")
			car.engine = "Gasoline";
		if (car.chassis === "Citycar")
			car.engine = "Electric";
		if (car.materials === "Classic")
			car.materials = "Plastic, Aluminium";
		else if (car.materials === "Sport")
			car.materials = "Carbon, Alcantara";
		else if (car.materials === "Luxury")
		{
			car.materials = "Wood, Piano Black";
			addOptions("Park Assist"); // WORKING ??
		}
		if (car.ext_colour === "eBasic")
			car.ext_colour = "Basic";
		else if (car.ext_colour === "eFlashy")
			car.ext_colour = "Flashy";
		if (car.int_colour === "iBasic")
			car.int_colour = "Basic";
		else if (car.int_colour === "iFlashy")
			car.int_colour = "Flashy";
	}
	const scoring = () => {

		outfit();
		glasses();
		haircut();
		pets();
		kids();
		hobby();
		environment();
		config();
		check_config();
	}

	console.log(avatar);
	scoring();
	console.log("Final Score\n")
	console.log(score);
	console.log("_______________________________________\n");
	console.log("Car configuration\n")
	console.log(car);
	return car
}