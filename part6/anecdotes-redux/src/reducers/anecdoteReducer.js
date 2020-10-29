import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_ANECDOTE':
        console.log(state, action.data)
        return [...state, action.data]
      case 'INIT_ANECDOTES':
        return action.data
      case 'VOTE_ANECDOTE':
        console.log(state)
        const id = action.data.id
        const anecdoteToVote = state.find(n => n.id === id)
        const updatedAnecdote = { 
          ...anecdoteToVote, 
          votes: anecdoteToVote.votes + 1
        }
        return state.map(anecdote =>
            anecdote.id !== id ? anecdote : updatedAnecdote 
        ).sort((anecdoteI,anecdoteJ) => {
            if(anecdoteI.votes > anecdoteJ.votes){ return -1 }
            else if(anecdoteI.votes < anecdoteJ.votes){ return 1 }
            else { return 0 }
          }
        )
      default:
        return state
    }
  }
  
  export const createAnecdote = (content) => {
    return async dispatch => {
      const newAnecdote = await anecdoteService.createNew(content)
      dispatch({
        type: 'NEW_ANECDOTE',
        data: newAnecdote,
      })
    }
  }
  
  export const voteAnecdote = (anecdote) => {
    return async dispatch => {
      console.log(anecdote)
      const updatedAnecdote = await anecdoteService.update({...anecdote, votes: anecdote.votes + 1})
      dispatch({
        type: 'VOTE_ANECDOTE',
        data: updatedAnecdote,
      })
    }
  }
  
  export const initializeAnecdotes = (anecdotes) => {
    return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdotes,
      })
    }
  }

  export default anecdoteReducer