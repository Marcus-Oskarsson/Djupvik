import { API_URL } from './reusables/urls.js';
import { filterWeather } from './filterWeather.js';

export const getWeather = async () => {
  const response = await fetch(API_URL);
  const weather = await response.json();
  return filterWeather(weather);
};