import React from 'react'
import Person from './Person'

const Persons = ({persons, nameFilter}) => {
    const nameFilterText = nameFilter ? `Filtering by names that start with ${nameFilter}` : "No filters applied"
    if(persons.length > 0){
        return (
            <div>
                <div><em>{nameFilterText}</em></div>
                <div>
                    <ul>
                        {persons.map(person => 
                            <Person key={person.name} person={person} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div>
           <div><em>{nameFilterText}</em></div>
           <div><strong> No persons found</strong></div>
        </div>
    )
}

export default Persons