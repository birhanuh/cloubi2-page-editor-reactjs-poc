import React from 'react'

// CSS entry
import '../css/app.scss'

export default class App extends React.Component {
  constructor() {
    super()
    this.name = 'Jhon'
  }

  render() {
    return(
      <h1>It's {this.name}!</h1>  
    )
  }
}