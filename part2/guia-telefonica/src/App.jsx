import { useState } from 'react'
import './App.css'
import Person from './components/Person'


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  console.log('personEstate..', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // el método some de JavaScript, que devuelve true si al menos un elemento del array cumple con la condición proporcionada.
  const nameExists = (name) => persons.some(person => person.name === name)

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    console.log('Click addPerson..', newObjectPerson)

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


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Name: <input onChange={handlePersonChange} value={newName} />
          <br/>
          Number: <input onChange={handleNumberChange} value={newNumber} />

        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => {
          return (
            <Person
              key={person.id}
              persons={person.name}
              number={person.number}
            />)
        })}
      </div>


    </div>
  )
}

export default App
