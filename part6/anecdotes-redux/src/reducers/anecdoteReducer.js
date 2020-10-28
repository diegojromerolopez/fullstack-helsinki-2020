const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_ANECDOTE':
        console.log(state, action.data)
        return [...state, action.data]
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
  
  
  const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))
  
  export const createAnecdote = (content) => {
    return {
      type: 'NEW_ANECDOTE',
      data: {
        content,
        votes: 0,
        id: generateId()
      }
    }
  }
  
  export const voteAnecdote = (id) => {
    return {
      type: 'VOTE_ANECDOTE',
      data: { id }
    }
  }
  
  export default anecdoteReducer