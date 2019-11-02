import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <Route path="/" component={Login} exact /> 
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
