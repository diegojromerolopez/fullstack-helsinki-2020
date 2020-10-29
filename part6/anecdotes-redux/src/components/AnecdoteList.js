import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
  }

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    let filteredAnecdotes = anecdotes
    if(filter){
      const actualFilter = filter.toLowerCase()
      const includeAnecdote = anecdote => {
        return anecdote.content.toLowerCase().includes(actualFilter)
      }
      filteredAnecdotes = anecdotes.filter(includeAnecdote)
    }
    
    return(
      <ul>
        {filteredAnecdotes.map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => 
              dispatch(voteAnecdote(anecdote))
            }
          />
        )}
      </ul>
    )
  }
  
  export default AnecdoteList