import React from 'react'

const Country = ({ countryName, country, isLoading }) => {
    if (!country) {
      return null
    }
  
    if (!country.found) {
      return (
        <div>
          Country {countryName} not found!
        </div>
      )
    }

    if (isLoading) {
        return <div>Loading info of {countryName}</div>;
      }
  
    return (
      <div>
        <h3>{country.data.name} </h3>
        <div>capital {country.data.capital} </div>
        <div>population {country.data.population}</div> 
        <img src={country.data.flag} height='100' alt={`flag of ${country.data.name}`}/>  
      </div>
    )
  }

export default Country
