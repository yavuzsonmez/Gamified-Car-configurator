## Status

<br/>

> If the API is online, it should return {"success": true } to these endpoints

<br/>

```
/

or

/api/status

```


## How to use it

<br/>

### The Request

<br/>

> Send a POST request to /getConfiguration with the JSON format :

<br/>

```
{
	"gender": string,
		(can be "male", "female", "non binary")
	"skin_color": string,
		(can be "light", "dark", "darker")
	"haircut": string,
		(can be "bold", "formal", "arty")
	"glasses": string,
		(can be "none", "glasses", "sunglasses")
	"outfit": string,
		(can be "sport", "casual", "formal")
	"pets": string,
		(can be "none", "cat", "dog")
	"kids": number,
		(can be 0, 1, 2, >= 3)
	"favorite_activity": string,
		(can be any, chess, ski..)
	"environment": string,
		(can be "country", "city", "suburban")
}
```

<br/>

**Exemple of a valid request** :

<br/>

```
{
	"gender": "male",
	"skin_color": "dark",
	"haircut": "formal",
	"glasses": "sunglasses",
	"outfit": "formal",
	"pet": "cat",
	"kids": 3,
	"favorite_activity": "ski",
	"environment": "city"
}
```
<br/>

> And GET back data related to the car configuration with the JSON format :

<br/>

```
{
	"chassis": string,
		(can be "Citycar", "Sedan", "Station Wagon", "SUV", "Sportscar", "Cabriolet", "Van")
	"engine": string,
		(can be "Gasoline", "Diesel", "Electric", "Hybrid")
	"ext_colour": string,
		(can be "Basic" common, "Flashy" unusual)
	"int_colour": string,
		(can be "Basic" common, "Flashy" unusual)
	"materials": string,
		(can be "Classic" Plastic/Aluminium, "Luxury" Piano Black/Wood/Alcantara, "Sport" Carbon/Alcantara)
	"options": string[]
		(can be Park Assist", Sunroof", "Carplay", "Xenon Lights", "Entry Drive", "Sport Exhaust", "Extended Leather" ...)
}
```
**Exemple of a response from the API** :
```
{
	"chassis": "SUV",
	"engine": "Diesel",
	"ext_colour": "Basic",
	"int_colour": "Basic",
	"materials": "Plastic/Aluminium",
	"options": ["Cruise Control", "Carplay"]
}
```