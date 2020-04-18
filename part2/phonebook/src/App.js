import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  const clearNewPerson = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    // Check the name is not already added
    if(persons.filter((person) => person.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
      return false
    }
    
    // Check the name and number are not empty strings
    if(newName === "" || newNumber === ""){
      alert("Name and/or number must not be empty")
      return false
    }

    const newPerson = {
      id: `${newName} :: ${newNumber}`,
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    clearNewPerson()
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
        <Persons persons={personsToShow} nameFilter={nameFilter} />
      </div>
    </div>
  )
}

export default App