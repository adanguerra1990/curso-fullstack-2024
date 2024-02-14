import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import DisplayCountry from './components/DisplayCountry';

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([]) // Estado para almacenar la lista completa de países
  const [searchCountrie, setSearchCountrie] = useState([]); // Estado para almacenar los países que coinciden con la búsqueda
  const [selectedCountry, setSelectedCountry] = useState(null) // Estado para el país seleccionado
  const [weatherData, setWeatherData] = useState(null)  // Estado para los datos climáticos del país seleccionado

  const apiKey = import.meta.env.VITE_API_KEY

  // useEffect para realizar la petición inicial y poblar la lista de países
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promesa', response.data)
        setCountries(response.data)

      })
  }, []); // El array vacío significa que este efecto se ejecutará solo una vez, después del primer renderizado

  // useEffect para obtener los datos climáticos del país seleccionado
  useEffect(() => {
    if (selectedCountry) { // Solo hacemos la petición si hay un país seleccionado
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.name.common}&appid=${apiKey}`)
        .then(response => {
          console.log('response..', response.data)
          setWeatherData(response.data) // Actualizamos el estado con los datos climáticos obtenidos
        })
        .catch(error => {
          console.log('error de respuesta..', error)
        })
    }
  }, [selectedCountry, apiKey]) // Este efecto se ejecutará cada vez que cambie selectedCountry o apiKey

  // Otro useEffect para manejar la selección automática de un país cuando solo hay uno en la lista de búsqueda
  useEffect(() => {
    if (searchCountrie.length === 1) {
      const country = searchCountrie[0]; // Tomamos el único país de la lista de búsqueda
      setSelectedCountry(country); // Lo establecemos como el país seleccionado
    } else {
      // Si no hay un único país, deseleccionamos el país seleccionado Y también borramos los datos climáticos
      setSelectedCountry(null); 
      setWeatherData(null);
    }
  }, [searchCountrie]); // Este efecto se ejecutará cada vez que cambie searchCountrie

  // Función para manejar  el campo de búsqueda del pais
  const handleSearchCountries = event => {
    const searchValue = event.target.value.toLowerCase() 
    setQuery(searchValue)

    // Filtramos la lista de países
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue))

    setSearchCountrie(filteredCountries)

    if (filteredCountries.length === 1) {
      // Si solo hay un país en los resultados, lo seleccionamos automáticamente
      setSelectedCountry(filteredCountries[0])
    }
  }

  // Función para manejar la selección de un país
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
