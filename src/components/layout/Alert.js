import React from 'react'

const Alert = ({alert}) => {
  return (
    // alert !== null && (
    //   <div className={`alert alert-${alert.type}`}>
    //     <i className='fas fa-info-circle'></i> {alert.msg}
    //   </div>
    alert ? (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-exclamation-circle'></i> {alert.msg}
        </div>
    ) : null
  )
}

export default Alert