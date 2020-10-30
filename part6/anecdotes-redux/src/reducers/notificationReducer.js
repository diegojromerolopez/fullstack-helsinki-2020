const notificationReducer = (state = '', action) => {
    switch(action.type) {
      case 'SHOW_NOTIFICATION':
          return action.message
      default:
          return state
    }
}


  export const showNotification = (message, duration) => {
    return async dispatch => {
      dispatch({
        type: 'SHOW_NOTIFICATION',
        message: message
      })
      setTimeout(() => {
        dispatch({
          type: 'SHOW_NOTIFICATION',
          message: '',
        })
      }, duration * 1000)
    }
  }
  

export default notificationReducer
