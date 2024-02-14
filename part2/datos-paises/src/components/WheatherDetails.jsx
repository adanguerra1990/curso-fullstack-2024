import React from 'react';

const WheatherDetails = ({weatherData}) => {
    if (!weatherData) return null;
    
      const kelvinToCelsius = kelvin => {
        const celsius = Math.round(kelvin - 273.15)
        return celsius
      }

      const weatherIcon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      
    return (
        <div>
            <p>Temperature: {kelvinToCelsius(weatherData.main.temp)}°C</p>
            <img src={weatherIcon} alt='weatherIcon'/>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
    );
}

export default WheatherDetails;
