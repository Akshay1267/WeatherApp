import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b9a7e434dafd549c6cf8d7895ffe5d37";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        alert("City not found");
        return;
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };
      
      updateInfo(result);
    } catch (error) {
      alert("Failed to fetch weather info");
      console.error(error);
    }
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    getWeatherInfo();
    setCity("");
  }

  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <h3>Welcome to the Weather App!</h3>
        <TextField id="city" label="Enter City" variant="outlined" required value={city} onChange={handleChange} />
        <br /><br />
        <Button type="submit" variant="contained" size="small">
          Search
        </Button>
      </form>
    </div>
  );
}
