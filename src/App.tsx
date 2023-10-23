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

  function handleChange(event: { target: { id: string; value: any } }) {
    // Changes on celsius
    if (event.target.id === "celsius") {
      const celsius = event.target.value;
      setCelsius(celsius);

      const toFahrenheit = (celsius * 9) / 5 + 32;

      console.log(toFahrenheit); // Normal display
      console.log(toFahrenheit.toFixed(2)); // format: rounds the number to two decimal places and returns it as a STRING
      console.log(Math.round(toFahrenheit * 100) / 100); // format: this one doesn't convert the number to string, the one to use

      setFahrenheit(Math.round(toFahrenheit * 100) / 100);

      const toKelvin = parseFloat(celsius) + 273.15;
      setKelvin(Math.round(toKelvin * 100) / 100);
    }

    // Changes on fahrenheit
    if (event.target.id === "fahrenheit") {
      const fahrenheit = event.target.value;
      setFahrenheit(fahrenheit);

      const toCelsius = ((fahrenheit - 32) * 5) / 9;
      setCelsius(Math.round(toCelsius * 100) / 100);

      const toKelvin = (fahrenheit - 32) / 1.7999999 + 273.5; // fixed formula here
      setKelvin(Math.round(toKelvin * 100) / 100);
    }

    // Changes on kelvin
    if (event.target.id === "kelvin") {
      const kelvin = event.target.value;
      setKelvin(kelvin);

      const toCelsius = parseFloat(kelvin) - 273.15;
      setCelsius(Math.round(toCelsius * 100) / 100);

      const toFahrenheit = kelvin - 457.87;
      setFahrenheit(Math.round(toFahrenheit * 100) / 100);
    }
    console.log("Current change on. ", event.target.id);
  }

  return (
    <>
      <p id="title">Temperature Converter</p>
      <form action="">
        <div className="tempType">
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
        <div className="tempType">
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
        <div className="tempType">
          <h2 className="name">Kelvin °K:</h2>
          <TextField
            id="kelvin"
            color="warning"
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
