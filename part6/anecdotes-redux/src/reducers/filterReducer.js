const filterReducer = (state = '', action) => {
    switch(action.type) {
      case 'APPLY_FILTER':
          return action.data.filter
      default:
          return state
    }
}

export const filterAnecdotes = filter => {
    return {
      type: 'APPLY_FILTER',
      data: { filter }
    }
  }

export default filterReducer
