import React, { useContext, Fragment } from 'react';
import { TaskContext } from '../../contexts/task/TaskContext';
import { AlertContext } from '../../contexts/alert/AlertContext';
import { FaTrash } from 'react-icons/fa';

const Task = ({ task }) => {
  const { id, title, priority } = task;
  const { toggleDone, removeTask } = useContext(TaskContext);
  const { setAlert } = useContext(AlertContext);

  const getStyle = () => {
    return {
      textDecoration: task.done ? 'line-through' : '',
      color: task.done ? '#5e5d5a' : '#bcbcb9',
    };
  };
  const onDelete = () => {
    removeTask(id);
    setAlert('Tarefa removida com sucesso', 'danger');
  };

  return (
    <Fragment>
      <li className='list-item'>
        <div>
          <span
            className='title'
            style={getStyle()}
            onClick={() => toggleDone(task.id)}
          >
            {' '}
            {title}
          </span>
          <span
            className={
              'badge ' +
              (priority === 'baixa'
                ? 'badge-secondary'
                : 'badge-warning' && priority === 'alta' && 'badge-danger')
            }
          >
            {priority}
          </span>
          <div className='float-right'>
            <FaTrash
              title='delete'
              className='icon delete-icon'
              onClick={onDelete}
            />
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default Task;
