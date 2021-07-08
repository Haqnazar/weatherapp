import React, { useState } from 'react';
import { fetchWeather } from './fatchweatherapp/fetchWeather';
 


const Application = () => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery();
            console.log(data);
        }
    }
    


    return (
        <div className="main-container">
            <div className="search">
                <input 
                type="text"
                className="search"
                placeholder="shahar nomini kiriting..."
                value={query}
                onChange = {(e) => setQuery(e.target.value)}
                onKeyPress={search}
                />

            </div>
            {weather.main && (
                <div className="city">
                    <div className="info">
                        <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon"/>
                    </div>
                    <div className="details">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            <p className="temp">{Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            </p>
                            
                            <p className="description">{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Application;
 