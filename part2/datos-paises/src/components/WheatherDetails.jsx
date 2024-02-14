import React from 'react';

const WheatherDetails = ({ weatherData }) => {
    // Si no hay datos de clima disponibles, retornamos null para evitar renderizar algo vacío
    if (!weatherData) return null;

    // Función para convertir temperatura de Kelvin a Celsius
    const kelvinToCelsius = kelvin => {
       return Math.round(kelvin - 273.15)        
    }

    const weatherIcon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    return (
        <div>
            <p>Temperature: {kelvinToCelsius(weatherData.main.temp)}°C</p>
            <img src={weatherIcon} alt='weatherIcon' />
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
    );
}

export default WheatherDetails;
