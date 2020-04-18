import React, { useState, useEffect } from 'react'
import CountryFinder from './components/CountryFinder'
import CountryList from './components/CountryList'
import axios from 'axios'


function App() {
  const [ countryFinderValue, setCountryFinderValue] = useState('')
  const [ countries, setCountries] = useState([])

  const CountryFinderChangeHandler = (event) => {
    setCountryFinderValue(event.target.value)
  }

  const loadCountriesHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(loadCountriesHook, [])

  const MAX_COUNTRY_LIST_SIZE = 10
  const selectedCountries = countries.filter(
    (country) => country.name.match(RegExp(`${countryFinderValue}`))
  )  

  return (
    <div>
      <div>
        <CountryFinder
          countryFinderValue={countryFinderValue}
          onChangeHandler={CountryFinderChangeHandler}
        />
        <CountryList
          countryFinderValue={countryFinderValue}
          countries={selectedCountries}
          limit={MAX_COUNTRY_LIST_SIZE}
          setCountryFinderValue={setCountryFinderValue}
        />
      </div>
    </div>
  )
}

export default App;
