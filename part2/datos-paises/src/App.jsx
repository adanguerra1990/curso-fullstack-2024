import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';
import DisplayCountry from './components/DisplayCountry';

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [searchCountrie, setSearchCountrie] = useState([]);

  console.log('consulta..', query)
  console.log('searchCountrie..', searchCountrie)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promesa', response.data)
        setCountries(response.data)
      })
  }, []);

  const handleSearchCountries = event => {
    const searchValue = event.target.value.toLowerCase()
    console.log(searchValue)
    setQuery(searchValue)

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue))

    console.log('filtrado..', filteredCountries)

    setSearchCountrie(filteredCountries)
  }

  return (
    <div>
      <label>find countries:</label>
      <input onChange={handleSearchCountries} value={query} />

      <DisplayCountry
        searchCountrie={searchCountrie}        
      />

    </div>
  )
}

export default App
