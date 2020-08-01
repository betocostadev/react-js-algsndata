import React, { Component } from 'react'
import MatTest from './MatTest'
import './MainPage.css'

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="MainPage">
        <h2>Main Page</h2>
        <MatTest />
      </div>
    )
  }
}

export default MainPage
