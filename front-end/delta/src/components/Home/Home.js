import React, { Component } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <Header/>
        
        </div>
      <div>
        Home is me
      </div>
       <div>
      <Footer/>
      </div>
      </div>
    )
  }
}
