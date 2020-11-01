import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = (props) => {
    const handleChange = (event) => {
        event.preventDefault()
        const content = event.target.value
        props.filterAnecdotes(content)
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

  const mapStateToProps = (state) => {
    return {}
  }
  
  const mapDispatchToProps = {
    filterAnecdotes
  }
  
  const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
  
  export default ConnectedFilter
