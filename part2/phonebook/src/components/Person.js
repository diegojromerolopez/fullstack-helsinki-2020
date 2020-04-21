import React from 'react'

const Person = ({person, deletePersonHandler}) => {
  return (
    <div>
      <span>{person.name}</span> <span>{person.number}</span>
      <button onClick={ ()=> deletePersonHandler(person.id) }>delete</button>
    </div>
  )
}

export default Person