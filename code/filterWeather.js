export const filterWeather = (data) => {
    const weatherNow = data.timeSeries[0]
    data.timeSeries = [...data.timeSeries.slice(1)]
  const filteredWeather = data.timeSeries.filter(weather => new Date(weather.validTime).getHours() === 6 || new Date(weather.validTime).getHours() === 12 || new Date(weather.validTime).getHours() === 18)
  return [weatherNow, ...filteredWeather];
}