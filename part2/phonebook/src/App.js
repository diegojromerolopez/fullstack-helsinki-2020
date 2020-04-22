import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import './index.css'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  const Notification = ({ message, type }) => {
    if (message === null) {
      return null
    }
    return (
      <div className={type}>
        {message}
      </div>
    )
  }
  const MakeNotification = (message, type, timeout) =>{
    setNotificationMessage(message)
    setNotificationType(type)
    setTimeout(() => {
      setNotificationMessage(null)
      setNotificationType(null)
    }, timeout)
  }

  const loadPersonsHook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        MakeNotification(`Unable to get persons because of an error in the server`, "error", 5000)
      })
  }
  useEffect(loadPersonsHook, [])

  const clearNewPerson = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    // Check the name and number are not empty strings
    if(newName === "" || newNumber === ""){
      alert("Name and/or number must not be empty")
      return false
    }
    
    // If the name is already added, ask the user if wants to replace it with the new number
    if(persons.filter((person) => person.name === newName).length > 0){
      if(!window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with the new one`)){
        return false
      }

      const person = persons.filter((person) => person.name === newName)[0]
      personService
        .update(person.id, {...person, number: newNumber})
        .then(returnedPerson => {
          setPersons(persons.map(personI => personI.id !== person.id ? personI : returnedPerson))
          clearNewPerson()
          MakeNotification(`${returnedPerson.name} has been successfully updated`, "success", 5000)
        })
        .catch(error => {
          MakeNotification(`${person.name} has not been found in the server`, "error", 5000)
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }else{
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          clearNewPerson()
          MakeNotification(`${returnedPerson.name} has been successfully created`, "success", 5000)
        })
        .catch(error => {
          MakeNotification(`Unable to create ${newPerson.name} because of an error in the server`, "error", 5000)
        })
    }
  }

  const deletePersonHandler = (personId) => {
    const person = persons.find(p => p.id === personId)
    if(!window.confirm(`Delete ${person.name}?`)){
      return false
    }

    personService
      .destroy(personId)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== personId ))
        MakeNotification(`${person.name} has been successfully deleted`, "success", 5000)
      })
      .catch(error => {
        setPersons(persons.filter((person) => person.id !== personId ))
        MakeNotification(`Unable to destroy ${person.name} because it doesn't exist`, "error", 5000)
      })
  }

  const clearNameFilter = () => {
    setNameFilter('')
  }

  let personsToShow = persons;
  if(nameFilter !== ''){
    const nameFilterRegex = RegExp(`^${nameFilter}`)
    personsToShow = persons.filter(person => person.name.match(nameFilterRegex))
  }

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Notification message={notificationMessage} type={notificationType} />
        <Filter 
          nameFilter={nameFilter}
          onInputChangeHandler={(event) => { setNameFilter(event.target.value)}}
          onClearClickHandler={clearNameFilter}
        />
      </div>
      
      <div>
        <h3>Add a new person</h3>
        <PersonForm
          onSubmit={addPerson}
          nameValue={newName}
          onNameChange={(event) => { setNewName(event.target.value)}}
          numberValue={newNumber}
          onNumberChange={(event) => { setNewNumber(event.target.value)}}
          onClearClick={clearNewPerson}
        />
      </div>

      <div>
        <h3>Numbers</h3>
        <Persons persons={personsToShow} nameFilter={nameFilter} deletePersonHandler={deletePersonHandler} />
      </div>
    </div>
  )
}

export default App