import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: notification === '' ? 'none' : 'solid 1px',
    padding: 10,
    marginBottom: '10px'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification