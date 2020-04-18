import React from 'react'
import Country from './Country'

const CountryList = ({countryFinderValue, countries, limit, setCountryFinderValue}) => {
    if(countryFinderValue === ""){
      return (
        <div>
          Enter some characters to search countries
        </div>
      )
    }

    if(countries.length === 0){
      return (
        <div>
          No countries match for <em>{countryFinderValue}</em>
        </div>
      )
    }
    if(countries.length === 1){
      return (
        <div>
          <Country country={countries[0]} />
          <button onClick={() => setCountryFinderValue("")}>go back</button>
        </div>
      )
    }
    if(countries.length <= limit){
      return (
        <div>
          <div>
              <h2>{countries.length} countries found matching <em>{countryFinderValue}</em></h2>
              <ul>
                  {countries.map(country => 
                      <li key={country.name}>
                        {country.name} <button onClick={() => setCountryFinderValue(country.name)}>show</button>
                      </li>
                  )}
              </ul>
          </div>
        </div>
      )
    }
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

export default CountryList