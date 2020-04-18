import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <div>capital: {country.capital}</div>
            <div>population: {country.population}</div>
            
            <div>
                <h3>Spoken languages</h3>
                <ul>
                    {country.languages.map(language => 
                        <li key={language.iso639_2}>{language.name}</li>
                    )}
                </ul>
            </div>
            <img src={country.flag} alt={`Flag of ${country.name}`} />

        </div>
    )
}

export default Country
