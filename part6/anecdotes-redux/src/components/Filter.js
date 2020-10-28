import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        const content = event.target.value
        dispatch(filterAnecdotes(content))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
          <div>Filter</div>
          <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter