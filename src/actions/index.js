import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY = '071a2e54087c92c90ca11467fa44e6ea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
