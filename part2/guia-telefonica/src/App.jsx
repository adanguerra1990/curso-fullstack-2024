import { useState } from 'react'
import './App.css'
import Person from './components/Person'


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  console.log('personEstate..', persons)
  const [newName, setNewName] = useState('')

  // el método some de JavaScript, que devuelve true si al menos un elemento del array cumple con la condición proporcionada.
  const nameExists = (name) => persons.some(person => person.name === name)

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectPerson = {
      name: newName
    }
    console.log('Click addPerson..', newObjectPerson)

    if (nameExists(newObjectPerson.name)) {
      alert(`${newObjectPerson.name} is already added to phonebook`)
    }

    setPersons(persons.concat(newObjectPerson))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => {
          return (<Person key={person.name} persons={person.name} />)
        })}
      </div>
      
      
    </div>
  )
}

export default App
