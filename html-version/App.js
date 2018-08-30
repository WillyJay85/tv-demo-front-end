import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './Previewpage'
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
          <Switch>
            

            <Route exact path="/" component={HomePage} />
            <Route path="/ManagePage" component={ManagePage} />
            <Route path="/PreviewPage" component={PreviewPage} />

          </Switch>
        </Router>

      </div>



    );
  }
}

export default App;
