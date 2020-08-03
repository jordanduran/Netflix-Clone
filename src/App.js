import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <p>Sign In page!</p>
        </Route>
        <Route path='/signup'>
          <p>Sign Up page!</p>
        </Route>
        <Route path='/browse'>
          <p>Browse page!</p>
        </Route>
        <Route path='/'>
          <p>Netflix Landing!</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
