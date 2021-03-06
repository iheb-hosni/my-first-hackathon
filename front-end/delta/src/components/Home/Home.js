import React, { Component } from 'react'
import MenuExampleContentProp from "../navmenu/navmenu.js"
// import Footer from "../Footer/Footer"
import Slide from "../slider/App";
import Slider from "./essayage/App"
import Sliders from "./personalise/App"
import Header from "../Header/Header.js"
import "./home.css"

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header">
                <Header />
          </div>
        <MenuExampleContentProp />
        
        <div className="slider-items">
        <div className="slider-brand">
        <Slide/>
        </div>
        <div className="slider-try">
        <Slider />
        </div>
        <div className="slider-perso">
        <Sliders />
        </div>
        </div>
        </div>
       
  </div>
  
    )
  }
}
