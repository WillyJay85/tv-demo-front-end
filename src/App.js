import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import './ManagePage.css'
import './PreviewPage.css'
import './App.css';

class App extends Component {


  

renderManagePage =() =>{
  return(<ManagePage/>)
}

renderPreviewPage = () =>{
  return(<PreviewPage tvShows={this.state.tvShows} show={this.state.show} showSelected={this.state.show} />)
}
showDeleted = () => {
  this.setState({
  show: {
      name: '',
      rating: '',
      imageUrl: ''
  }
})
}


saveShow = (showToSave) =>{
  this.setState((prevState) => ({
    tvShows: [...prevState.tvShows, {
      name: showToSave.name,
      rating: showToSave.rating,
      imageUrl: showToSave.imageUrl
    }]
  })

  )
}


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/preview" component={this.renderPreviewPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
