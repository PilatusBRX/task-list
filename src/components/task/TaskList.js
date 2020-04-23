import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/task/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <h3 style={{ color: '#fff', fontSize: '18px', textAlign: 'center' }}>
        {tasks.length < 1 && 'Não há tarefas. Relaxe!'}
      </h3>
      <ul className='list'>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
