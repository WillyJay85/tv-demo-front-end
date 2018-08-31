import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import './ManagePage.css'
import './PreviewPage.css'
import Show from './Show'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ManagePage} />
            <Route path="/preview" component={PreviewPage} />
            <Route path="/show" component={Show} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
