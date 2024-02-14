import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import DisplayCountry from './components/DisplayCountry';

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [searchCountrie, setSearchCountrie] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)  
  const [weatherData, setWeatherData] = useState(null)

  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promesa', response.data)
        setCountries(response.data)
        
      })
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.name.common}&appid=${apiKey}`)
      .then(response => {
        console.log('response..',response.data)
        setWeatherData(response.data)
      })
      .catch(error => {
        console.log('error de respuesta..', error)
      })
    }    
  }, [selectedCountry, apiKey])

  useEffect(() => {
    if (searchCountrie.length === 1) {
      const country = searchCountrie[0];
      setSelectedCountry(country);
    } else {
      setSelectedCountry(null);
      setWeatherData(null);
    }
  }, [searchCountrie]);

  const handleSearchCountries = event => {
    const searchValue = event.target.value.toLowerCase()    
    setQuery(searchValue)

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue))
    
    setSearchCountrie(filteredCountries)

    if(filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0])
    }
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  }


  return (
    <div>
      <label>find countries:</label>
      <input onChange={handleSearchCountries} value={query} />

      <DisplayCountry
        searchCountrie={searchCountrie}
        selectedCountry={selectedCountry}
        onCountrySelect={handleCountrySelect}
        weatherData={weatherData}
      />

    </div>
  )
}

export default App
