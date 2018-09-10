import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import './ManagePage.css'
import './PreviewPage.css'
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  static propTypes = {
    show: PropTypes.object.isRequired}
    state = {
      showSelected: {
        name: '',
        rating: '',
        imageUrl: ''
      }
    }
  state = {
    show: {
        name: '',
        rating: '',
        imageUrl: ''
    }
}

renderManagePage =() =>{
  return(<ManagePage show= {this.state.show} showDeleted={this.showDeleted} saveShow={this.saveShow}/>)
}

renderPreviewPage = () =>{
  return(<PreviewPage show= {this.state.show} showSelected= {this.state.show} />)
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
  this.setState({
    show: {
      name: showToSave.name,
      rating: showToSave.rating,
      imageUrl: showToSave.imageUrl
    }
  }

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
