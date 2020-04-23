import React, { createContext, useReducer, useEffect } from 'react';
import uuid from 'uuid/v4';
import TaskReducer from './TaskReducer';
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const initialState = {
    tasks: [
      { id: 1, title: 'Limpar a casa', priority: 'média', done: true },
      { id: 2, title: 'Encontrar o tom', priority: 'alta', done: false },
      { id: 3, title: 'Pagar a luz', priority: 'baixa', done: true },
      { id: 4, title: 'fazer o café', priority: 'média', done: false },
    ],
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  /*********** **** funçoes  ***************/

  /********  Atenção   ******* */
  /*  payload é o valor/dado  */

  // 1 - addTask
  const addTask = (task) => {
    task.id = uuid();
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  };

  // 2 - toggleDone
  const toggleDone = (task) => {
    dispatch({ type: 'TOGGLE_DONE', payload: task });
  };

  // 3 - removeTask
  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };
  // 4 - clearList
  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' });
  };

  /*********** **** FUNCTIONS  ***************/

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        toggleDone,
        removeTask,
        clearList,
        addTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
