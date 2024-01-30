import { useState } from 'react'
import './App.css'
import Person from './components/Person'


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  console.log('personEstate..', persons)
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectPerson = {
      name: newName
    }
    console.log('Click addPerson..', newObjectPerson)

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