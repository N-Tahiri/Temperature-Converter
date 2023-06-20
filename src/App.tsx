import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import { FactCheckRounded } from "@mui/icons-material";

// Material UI

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  return (
    <>
      <h1 id="title">Temperature Converter</h1>
      <form action="">
        <div className="type">
          <h2 className="name">Celsius °C:</h2>
          <TextField
            id="standard-number"
            label="°C"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            /* Add values */
            value={celsius}
          />
        </div>
        <div className="type">
          <h2 className="name">Fahrenheit °F: </h2>
          <TextField
            id="filled-number"
            label="°F"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={fahTemp}
          />
        </div>
        <div className="type">
          <h2 className="name">Kelvin °K:</h2>
          <TextField
            id="standard-number"
            label="°K"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={kelTemp}
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