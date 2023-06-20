import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextField from "@mui/material/TextField";

// Material UI
function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [kelvin, setKelvin] = useState(273.15);

  function handleChange(event) {
    if (event.target.id === "celsius") {
      const celsius = event.target.value;
      setCelsius(celsius);

      const toFahrenheit = (celsius * 9) / 5 + 32;
      setFahrenheit(toFahrenheit);

      const toKelvin = parseFloat(celsius) + 273.15;
      setKelvin(toKelvin);
    }
    if (event.target.id === "fahrenheit") {
      const fahrenheit = event.target.value;
      setFahrenheit(fahrenheit);

      const toCelsius = ((fahrenheit - 32) * 5) / 9;
      setCelsius(toCelsius);

      const toKelvin = fahrenheit + 457.87;
      setKelvin(toKelvin);
    }
    if (event.target.id === "kelvin") {
      const kelvin = event.target.value;
      setKelvin(kelvin);

      const toCelsius = parseFloat(kelvin) - 273.15;
      setCelsius(toCelsius);

      const toFahrenheit = kelvin - 457.87;
      setFahrenheit(toFahrenheit);
    }
    console.log("Current change on. ", event.target.id);
  }

  return (
    <>
      <h1 id="title">Temperature Converter</h1>
      <form action="">
        <div className="type">
          <h2 className="name">Celsius °C:</h2>
          <TextField
            id="celsius"
            label="°C"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            // defaultValue={0}
            /* Add values */
            value={celsius}
            onChange={handleChange}
          />
        </div>
        <div className="type">
          <h2 className="name">Fahrenheit °F: </h2>
          <TextField
            id="fahrenheit"
            label="°F"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={fahrenheit}
            onChange={handleChange}
          />
        </div>
        <div className="type">
          <h2 className="name">Kelvin °K:</h2>
          <TextField
            id="kelvin"
            label="°K"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={kelvin}
            onChange={handleChange}
          />
        </div>
      </form>

      {/* Default content */}
      <h3 id="built">Built using react and vite</h3>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
