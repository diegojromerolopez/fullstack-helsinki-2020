import React from 'react'
import Notification from './components/Notification.js'
import AnecdoteForm from './components/AnecdoteForm.js'
import Filter from './components/Filter.js'
import AnecdoteList from './components/AnecdoteList.js'

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App