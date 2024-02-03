import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personServices from './services/person'
import axios from 'axios'
import person from './services/person'


function App() {
  const [persons, setPersons] = useState([])
  console.log('personEstate..', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  useEffect(() => {
    console.log('effect')
    personServices
      .getAll()
      .then(inicialPerson => {
        console.log('promesa-cumplida.', inicialPerson)
        setPersons(inicialPerson)
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

    personServices
      .create(newObjectPerson)
      .then(returnedPerson => {
        console.log('responsePOSt.', returnedPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

    if (nameExists(newObjectPerson.name)) {
      alert(`${newObjectPerson.name} is already added to phonebook`)
    }
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

  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    
    if (window.confirm(`Delete ${personToDelete.name}`)) {
      const updatePerson = persons.filter(person => person.id !== id)
      console.log('filterDelete..', updatePerson)
      personServices
        .personDelete(id)
        .then(returnedDelete => {
          console.log(returnedDelete)
          setPersons(updatePerson)
        })
        .catch(error => {
          console.log('error', error)
          alert(`${personToDelete.name} has been deleted`)
          console.log('alert...', updatePerson)
          setPersons(updatePerson)
        })
    }
  }

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
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
