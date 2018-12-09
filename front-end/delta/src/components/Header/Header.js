import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import SignIn from './signin'
import SignUp from './signup';
import "./header.css"

const Header =()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light  ">
  <a className="navbar-brand" href="#"><img className="logo" src={require('./DresSmy@300x.png')}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <Input icon='search' placeholder='Search...' />
       <SignIn />
       <SignUp />
       
    </ul>
  </div>
</nav>
  )
}
export default Header;

