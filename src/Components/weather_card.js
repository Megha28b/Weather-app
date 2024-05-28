import React, { useEffect, useState } from "react";
import "./style.css";

const WeatherCard = () => {
  const [place, setPlace] = useState(null);
  const [searchbar, setSearchBar] = useState("New Delhi");
  const [name, setName] = useState("New Delhi");

  useEffect(() => {
    const ApiCall = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchbar}&units=metric&appid=64090de8dd360064fbfdb72a7631620e`
      );
      const result = await response.json();
      setPlace(result.main);
      setName(result.name);
    };

    ApiCall();
  }, [searchbar]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={searchbar}
            onChange={(event) => {
              setSearchBar(event.target.value);
            }}
          />
        </div>
        {!place ? (
          <div>
          <h2 className="location">
            ! Not Found
          </h2>
          <h2 className="error"> Enter a City Name to search</h2>
          </div>
        ) : (
          <div className="info">
            <h2 className="location">
              <i class="fa-solid fa-street-view"></i>
              {name}
            </h2>
            <h1 className="temp">{place.temp} °C</h1>
            <h3 className="tempmin_max">Min: {place.temp_min} °C| Max: {place.temp_max} °C</h3>
            <h3 className="humidity">
            <i class="fa-solid fa-droplet"> </i>
              Humidity: {place.humidity}
            </h3>
          </div>
        )}
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default WeatherCard;
