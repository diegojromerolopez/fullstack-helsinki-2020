import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.showNotification(`you successfully added '${content}'`, 3)
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  createAnecdote,
  showNotification
}

const ConnectedNewAnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAnecdote)

export default ConnectedNewAnecdote
