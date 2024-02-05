import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personServices from './services/person'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  console.log('personEstate..', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')  
  const [notification, setNotification] = useState({
    message: '',
    type: ''
   });

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

  // Función para mostrar una notificación de Success
  const showSuccessNotification = (message) => {
    setNotification({ message, type: 'success' });
    setTimeout(() => {
       setNotification({ message: '', type: '' });
    }, 2000);
   };
   
   // Función para mostrar una notificación de error
   const showErrorNotification = (message) => {
    setNotification({ message, type: 'error' });
    setTimeout(() => {
       setNotification({ message: '', type: '' });
    }, 2000);
   };

  // el método some de JavaScript, que devuelve true si al menos un elemento del array cumple con la condición proporcionada.
  const nameExists = (name) => persons.some(person => person.name === name)

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectPerson = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1
    }
    
    if (nameExists(newObjectPerson.name)) {
      const personToUpdate = persons.find(person => person.name === newObjectPerson.name)
      if (window.confirm(`${newObjectPerson.name} is already added to phonebook, replace the old number with a new one`)) {
        personServices
          .update(personToUpdate.id, newObjectPerson)
          .then(updatePerson => {
            setPersons(persons.map(person => person.id !== updatePerson.id ? person : updatePerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personServices
        .create(newObjectPerson)
        .then(returnedPerson => {
          console.log('responsePOSt.', returnedPerson)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          showSuccessNotification(`Added ${newObjectPerson.name}`)
        })
    }
  }

  const handlePersonChange = (event) => {    
    setNewName(event.target.value)

  }
  const handleNumberChange = (event) => {    
    setNewNumber(event.target.value)
  }
  
  const handleSearhPerson = (event) => {   
    setSearchPerson(event.target.value)
  }

  const filterPerson = persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLowerCase()))

  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)

    if (window.confirm(`Delete ${personToDelete.name}`)) {
      const updatePerson = persons.filter(person => person.id !== id)
      
      personServices
        .personDelete(id)
        .then(returnedDelete => {
          console.log(returnedDelete)
          setPersons(updatePerson)
        })
        .catch(error => {
          console.log('error', error)
          showErrorNotification(`Information of ${personToDelete.name} has been removed from server`)         
          setPersons(updatePerson)
        })
    }
  }

  console.log('filtrado...', filterPerson)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      {/* <Notification message={errorNotification} type={true}/> */}
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
