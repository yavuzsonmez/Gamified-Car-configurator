import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home.jsx'
import CharacterComposer from './pages/CharacterComposer/CharacterComposer.jsx'
import ShowRoom from './pages/ShowRoom/ShowRoom.jsx'

import { pickColor } from './components/Cars/carList.js'

import './App.scss';

const defaultCharacter = {
  gender: "male",
  skin_color: "darker",
  haircut: "bold",
  glasses: "no glasses",
  outfit: "sport",
  hair_color: "dark",
  environment: null,
  pet: "none",
  kids: 0,
  favorite_activity: "none"
}

const App = () => {
  const [character, setCharacter] = useState({ ...defaultCharacter })
  const [car, setCar] = useState()
  const [fromAvatar, setFromAvatar] = useState(false)
  const [carColor, setCarColor] = useState(false)

  useEffect(() => {
    car && car.ext_colour && setCarColor(pickColor(car.ext_colour))
  }, [car])

  useEffect(() => {
    console.log(carColor)
  }, [carColor])

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/character"
          element={<CharacterComposer
            character={character}
            setCharacter={setCharacter}
            car={car}
            setCar={setCar}
            setFromAvatar={setFromAvatar}
            carColor={carColor}
          />}
        />
        <Route
          path="/showroom"
          element={<ShowRoom
            car={car}
            setCar={setCar}
            fromAvatar={fromAvatar}
            carColor={carColor.name}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
