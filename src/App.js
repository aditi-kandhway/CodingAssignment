import React from 'react';
import './App.css';
import {Lists} from './Lists.js';
import {Details} from './Details.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path='/' exact component={Lists}/>
            <Route path='/details/:id' exact component={Details}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
