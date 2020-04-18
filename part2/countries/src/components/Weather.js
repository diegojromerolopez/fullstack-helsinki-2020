import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WEATHER_API_KEY = 'xxxxxxxxxxxxxxxxx'

const Weather = ({country}) => {

    const [ weather, setWeather ] = useState({})
    const [ weatherLoaded, setWeatherLoaded ] = useState(false);

    const loadCountryCapitalWeatherHook = () => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${country.capital}`)
        .then(response => {
            setWeather(response.data.current)
            setWeatherLoaded(true)
        })
    }
    useEffect(loadCountryCapitalWeatherHook, [country.capital])

    if(weatherLoaded){
        return (
            <div>
                <h3>Weather</h3>
                <strong>temperature: </strong> {weather.temperature}
                <img src={weather.weather_icons[0]} alt={`Weather on ${country.capital}`} />
                <strong>wind: </strong> {weather.wind_speed}
            </div>
        )
    }
    return (
        <div>
            <h3>Weather</h3>
            <strong>Please, wait weather is loading...</strong>
        </div>
    )
}

export default Weather
