import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Gps from '@platform/gps-mobile'
import logger from '@platform/analytics'
export default class App extends PureComponent {
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
      <View style={styles.container}>
        <Text style={styles.welcome}>{gpsMessage}</Text>
        <Button onPress = {this.click} title = {this.state.haha.toString()} > {"good"} </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
