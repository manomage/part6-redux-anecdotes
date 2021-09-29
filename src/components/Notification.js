import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
 

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notification === null) {
    return null
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    notification: props.notification
  }
}

export default connect(mapStateToProps)(Notification)
