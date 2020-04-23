import React, { Fragment, useContext, useState } from 'react';
import { TaskContext } from '../../contexts/task/TaskContext';
import { AlertContext } from '../../contexts/alert/AlertContext';

const TaskForm = () => {
  const { clearList, addTask, tasks } = useContext(TaskContext);
  const { setAlert } = useContext(AlertContext);

  const [task, setTask] = useState({
    title: '',
    priority: 'média',
  });
  const { title, priority } = task;

  /******* onChange ********/
  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  /******* onSubmit ********/
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '' || priority === '') {
      setAlert('Você precisa adionar uma tarefa', 'danger');
    } else {
      addTask(task);
      clearItems();
      setAlert('Tarefa adicionada com sucesso!', 'success');
    }
  };
  const clearItems = () => {
    setTask({ title: '', priority: '' });
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='title'
          value={title}
          onChange={onChange}
          placeholder='Adicionar uma tarefa...'
        />
        <select onChange={onChange} name='priority' value={priority} required>
          <option disabled>Prioridade</option>
          <option>média</option>
          <option>alta</option>
          <option>baixa</option>
        </select>
        <div className='add-task'>
          <button className='btn btn-warning'>Add task</button>
        </div>
        <div className='clear-list'>
          <div>
            {tasks.length > 0 && (
              <button className='btn btn-warning' onClick={clearList}>
                Clear List
              </button>
            )}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default TaskForm;
