import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
 
import "./navmenu.css"

export default class MenuExampleContentProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
   
    return (
        <div className="menu">
      <Menu>
      <Dropdown item text='ZARA'>
            <Dropdown.Menu>
              <Dropdown.Item>Homme</Dropdown.Item>
              <Dropdown.Item>Femme</Dropdown.Item>
              <Dropdown.Item>Enfant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        

        <Dropdown item text='CELIO'>
            <Dropdown.Menu>
              <Dropdown.Item>Homme</Dropdown.Item>
              <Dropdown.Item>Femme</Dropdown.Item>
              <Dropdown.Item>Enfant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        <Dropdown item text='EXIST'>
            <Dropdown.Menu>
              <Dropdown.Item>Homme</Dropdown.Item>
              <Dropdown.Item>Femme</Dropdown.Item>
              <Dropdown.Item>Enfant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='H&M'>
            <Dropdown.Menu>
              <Dropdown.Item>Homme</Dropdown.Item>
              <Dropdown.Item>Femme</Dropdown.Item>
              <Dropdown.Item>Enfant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/essayage">
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Esseyage'
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/essayage">
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='personaisé votre produit '
          onClick={this.handleItemClick}
        />
        </Link>
       
      </Menu>
      
    </div>
    )
  }
}