import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './GlobalStyles.css';
import Navbar from './components/task/Header';
import TaskContextProvider from './contexts/task/TaskContext';
import AlertContextProvider from './contexts/alert/AlertContext';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alert from './components/layout/Alert';

const App = () => {
  return (
    <TaskContextProvider>
      <AlertContextProvider>
        <Router>
          <div className='App'>
            <Alert />
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/sobre' component={About} />
            </Switch>
          </div>
        </Router>
      </AlertContextProvider>
    </TaskContextProvider>
  );
};

export default App;
