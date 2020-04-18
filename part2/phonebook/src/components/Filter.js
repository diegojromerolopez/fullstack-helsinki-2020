import React from 'react'

const Filter = ({nameFilter, onInputChangeHandler, onClearClickHandler}) => {
  return (
    <div>
    filter shown with <input value={nameFilter} onChange={onInputChangeHandler} />
    <button type="button" onClick={onClearClickHandler}>clear</button>
  </div>
  )
}

export default Filter