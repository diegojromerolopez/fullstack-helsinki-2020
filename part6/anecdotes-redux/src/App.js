import React, {useEffect} from 'react'
import Notification from './components/Notification.js'
import AnecdoteForm from './components/AnecdoteForm.js'
import Filter from './components/Filter.js'
import AnecdoteList from './components/AnecdoteList.js'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(initializeAnecdotes())
    }, [dispatch]
  )

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