import React, {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;
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
