import React  from 'react';
import axios from 'axios';

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_Key = "5b0862510ba42e63334b4db63073ab73";


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query, 
            units: 'metric',
            APPID: API_Key,
        }
    })
    return data
}

