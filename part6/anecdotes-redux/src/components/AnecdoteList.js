import React from 'react'
import { connect } from 'react-redux'
import { deleteAnecdote, voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVoteClick, handleDeleteClick }) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleVoteClick}>vote</button>
                <button onClick={handleDeleteClick}>delete</button>
            </div>
        </div>
    )
  }

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.showNotification(`You voted '${anecdote.content}'`, 10)
  }
  const del = (anecdote) => {
    props.deleteAnecdote(anecdote)
    props.showNotification(`You removed '${anecdote.content}'`, 10)
  }
  
  const anecdotes = props.anecdotes
    let filteredAnecdotes = []
    if(props.filter){
      const actualFilter = props.filter.toLowerCase()
      const includeAnecdote = anecdote => {
        return anecdote.content.toLowerCase().includes(actualFilter)
      }
      filteredAnecdotes = anecdotes.filter(includeAnecdote)
    }else{
      filteredAnecdotes = anecdotes
    }
    console.log(filteredAnecdotes)
    return(
      <ul>
        {filteredAnecdotes.map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleDeleteClick={ () => del(anecdote) }
            handleVoteClick={ () => vote(anecdote) }
          />
        )}
      </ul>
    )
  }
  
  const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
      notification: state.notification
    }
  }
  
  const mapDispatchToProps = {
    voteAnecdote,
    deleteAnecdote,
    showNotification
  }
  
  const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)
  
  export default ConnectedAnecdoteList
  