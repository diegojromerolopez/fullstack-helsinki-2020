import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_ANECDOTE':
        return [...state, action.data]
      case 'INIT_ANECDOTES':
        return action.data
      case 'VOTE_ANECDOTE':
        const updatedAnecdote = action.data
        return state
        .map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
        .sort((anecdoteI,anecdoteJ) => {
            if(anecdoteI.votes > anecdoteJ.votes){ return -1 }
            else if(anecdoteI.votes < anecdoteJ.votes){ return 1 }
            else { return 0 }
          }
        )
      case 'DELETE_ANECDOTE':
        const deletedAnecdoteId = action.data.id
        return state
        .filter(anecdote => anecdote.id !== deletedAnecdoteId)
        .sort((anecdoteI,anecdoteJ) => {
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
      const updatedAnecdote = await anecdoteService.update({...anecdote, votes: anecdote.votes + 1})
      dispatch({
        type: 'VOTE_ANECDOTE',
        data: updatedAnecdote,
      })
    }
  }
  
  export const deleteAnecdote = (anecdote) => {
    return async dispatch => {
      await anecdoteService.del(anecdote)
      dispatch({
        type: 'DELETE_ANECDOTE',
        data: anecdote,
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