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

  export const useResource = (baseUrl, token = null) => {
      const [resources, setResources] = useState([])
      
      let config = {}
      if(token){
        config = {
          headers: { Authorization: `bearer ${token}` }
        }
      }

      const getAll = () => {
        const request = axios.get(baseUrl, config)
        return request.then(response => setResources(response.data))
      }
      
      const create = async newObject => {
        const response = await axios.post(baseUrl, newObject, config)
        return setResources([...resources, response.data])
      }
      
      const update = (id, newObject) => {
        const request = axios.put(`${ baseUrl } /${id}`, newObject, config)
        return request.then(response => setResources([...resources.filter(res => res.id !== id), response.data]))
      }

      const del = (id) => {
        const request = axios.del(`${ baseUrl } /${id}`, config)
        return request.then(response => setResources([...resources.filter(res => res.id !== id)]))
      }
    const service = {
      getAll,
      create,
      update,
      del
    }
  
    return [
      resources, service
    ]
  }