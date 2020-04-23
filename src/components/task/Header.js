import React, { useContext, useEfect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <nav>
      <div className='container flex-column'>
        <h1 className='title'>Task List</h1>
      </div>
    </nav>
  );
};
export default Header;
