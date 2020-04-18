import React from 'react'

const CountryFinder = ({countryFinderValue, onChangeHandler}) => {
    return (
      <div>
      find countries <input value={countryFinderValue} onChange={onChangeHandler} />
    </div>
    )
  }

export default CountryFinder