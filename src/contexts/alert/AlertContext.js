import React, { createContext, useReducer } from 'react';
import uuid from 'uuid/v4';
import AlertReducer from './AlertReducer';

const initialState = [];
export const AlertContext = createContext(initialState);

const AlertContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert
  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid();
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type, id },
    });
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContextProvider;
