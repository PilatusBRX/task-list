import React from 'react';
import TaskForm from '../task/TaskForm';
import TaskList from '../task/TaskList';

const Home = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
