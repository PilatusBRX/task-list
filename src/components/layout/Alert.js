import React, { useContext } from 'react';
import { AlertContext } from '../../contexts/alert/AlertContext';
import { FaInfoCircle } from 'react-icons/fa';

const Alert = () => {
  const { alerts } = useContext(AlertContext);
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type}`}
        style={{ fontFamily: 'inherit' }}
      >
        <FaInfoCircle className='info-icon' />
        {alert.msg}
      </div>
    ))
  );
};

export default Alert;
