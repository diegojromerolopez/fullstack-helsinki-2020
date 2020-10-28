const notificationReducer = (state = '', action) => {
    switch(action.type) {
      case 'SHOW_NOTIFICATION':
          return action.message
      default:
          return state
    }
}

export const showNotification = (message) => {
    return {
          type: 'SHOW_NOTIFICATION',
          message: message
        }
  }
  

export default notificationReducer
