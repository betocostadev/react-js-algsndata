import React, { Component } from 'react'
import BigO from './BigO'
import MatTest from './MatTest'
import './MainPage.css'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'Home'
    }
  }

  render() {
    return (
      <div className="MainPage">
        <h2>Javascript Algorithms and Data Structures</h2>
        {
          this.state.page === 'Home' ?
            <div className="menu">
              <h3>Algorithms</h3>
              <BigO />
            </div>
          :
            <MatTest />
        }

      </div>
    )
  }
}

export default MainPage
