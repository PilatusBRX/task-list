import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/task/TaskContext';
import { AlertContext } from '../../contexts/alert/AlertContext';

const Footer = ({ task }) => {
  return (
    <div className='container flex-row'>
      <nav>
        <a href='#!'>Done</a>
        <a href='#!'>Undone</a>
      </nav>
    </div>
  );
};

export default Footer;
