import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import axios from 'axios'


function App() {
  const [persons, setPersons] = useState([])
  console.log('personEstate..', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promesa-cumplida.', response)
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  // el método some de JavaScript, que devuelve true si al menos un elemento del array cumple con la condición proporcionada.
  const nameExists = (name) => persons.some(person => person.name === name)

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectPerson = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1
    }
    console.log('Click addPerson..', newObjectPerson)

    axios
      .post('http://localhost:3001/persons', newObjectPerson)
      .then(response => {
        console.log('responsePOSt.', response.data)
      })

    if (nameExists(newObjectPerson.name)) {
      alert(`${newObjectPerson.name} is already added to phonebook`)
    }

    setPersons(persons.concat(newObjectPerson))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearhPerson = (event) => {
    console.log(event.target.value)
    setSearchPerson(event.target.value)
  }

  const filterPerson = persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLowerCase()))

  console.log('filtrado...', filterPerson)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearhPerson={handleSearhPerson} />
      <h2>Add a new</h2>
      <Form
        handleSubmit={addPerson}
        handleChangePerson={handlePersonChange} newName={newName}
        handleChangeNumber={handleNumberChange} newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        filterPerson={filterPerson}
      />
    </div>
  )
}

export default App
