import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleContentProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          content='ZARA'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          content='CELIO'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='EXIST'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='H&M'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Esseyage'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='personaisé votre produit '
          onClick={this.handleItemClick}
        />
       
      </Menu>
      
    )
  }
}