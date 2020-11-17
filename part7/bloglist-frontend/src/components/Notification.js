import React from 'react'
const Notification = ({ message, notifType }) => {
  if(message !== null){
    return  (
      <div className={`notification ${notifType || 'success'}`}>
        {message}
      </div>
    )
  }
  return ''
}

export default Notification