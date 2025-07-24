import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css"

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Meerut",
    feelsLike: 30.52,
    humidity: 74,
    temp: 27.67,
    tempMax: 27.67,
    tempMin: 27.67,
    weather: "overcast clouds"
  });

  return (
    <div className="weather-box">
      <SearchBox updateInfo={setWeatherInfo} />
      <br></br>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
