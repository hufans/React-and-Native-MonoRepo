import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Gps from '@platform/gps-web'
import logger from '@platform/analytics'

class App extends Component {
  constructor(props) {
    super(props)
    this.gps = new Gps()
    this.state = { 
      gpsMessage: 'Calculating position...',
      haha:1,
    }
  }

  componentDidMount() {
    this.gps.getPosition()
      .then(position => 
        this.setState({ 
          gpsMessage: `Current position is: \n lng ${position.coords.longitude},\nlat ${position.coords.latitude}` 
        }))
      .catch(err => logger.error('gps position error', err))
  }

  click = () =>{
    console.log("good")
    let xx = logger.huhu(this.state.haha)
     this.setState({
       haha:xx,
     })
  }

  render() {
    const { gpsMessage } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>{gpsMessage}</span>
          {/* <button onPress = {this.click} title = {this.state.haha.toString()} > {"good"} </button> */}
          <button type="button" onClick = {this.click}>{this.state.haha.toString()}</button>
        </header>
      </div>
    )
  }
}

export default App
