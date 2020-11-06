import React, { useState, useEffect } from 'react'
import axios from "axios";

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
        setValue(event.target.value)
      }
  
    return {
      type,
      value,
      onChange
    }
  }

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
    
          let countryData = null
          let countryFound = false
          try {
            if (name) {
              const result = await axios(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
              if (result) {
                countryData = result.data[0]
                countryFound = true
              }
            }
          } catch (error) {
            console.log(error);
          }

          setCountry({ data: countryData, found: countryFound })
          setIsLoading(false)
        }
    
        fetchData()
      }, [name])
    
      return { country, isLoading };
}
