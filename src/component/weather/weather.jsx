// api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=3be750b230afd0ff0d2c4fa01682fb95
import React, { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3be750b230afd0ff0d2c4fa01682fb95`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { country, sunset } = data.sys;
      const { name } = data;
      const { speed } = data.wind;
      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        country,
        sunset,
        name,
        speed,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  });

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            search
          </button>
        </div>
      </div>
      {/* Temp card for widget */}
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Weather;
