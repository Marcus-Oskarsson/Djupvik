import { descriptions } from './reusables/assets.js'
import { getWindSpeed } from './windSpeed.js'
import { getWindDirection } from './windDirection.js';
import { getWeather } from './requestWeather.js';
import { findIndex } from './findIndex.js';
import { WeatherShowing } from './weatherToShow.js';

const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const dateTime = document.getElementById("date-time")
const temp = document.getElementById('temp');
const wind = document.getElementById("wind")
const description = document.getElementById('description');

const weatherToday = await getWeather();

const Weather = new WeatherShowing(weatherToday.length)

const renderWeather = () => {
  const currentWeather = Weather.getCurrentlyShowing()
  const parameterList = weatherToday[currentWeather].parameters
  const temperature = findIndex(parameterList, "t")
  const ws = findIndex(parameterList, "ws")
  const wd = findIndex(parameterList, "wd")
  const datum = new Date(weatherToday[currentWeather].validTime)

dateTime.innerHTML =`<time>${datum.toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}</time>`

//Väderbeskrivning
description.innerText = descriptions[parameterList[18].values[0]];

//Temperatur
temp.innerText = `${Math.round(parameterList[temperature].values[0])}°C`;

//Vind
wind.innerText = `${parameterList[ws].values[0]} ${parameterList[ws].unit}` + " " + getWindSpeed(parameterList[ws].values[0]) + " från " + getWindDirection(
  parameterList[wd].values[0]
  );
}

renderWeather()


nextBtn.addEventListener("click", () => {Weather.increase(), renderWeather()})
prevBtn.addEventListener("click", () => {Weather.decrease(), renderWeather()})
