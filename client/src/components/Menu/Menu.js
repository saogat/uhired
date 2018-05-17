import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <MainMenu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
          onClick={this.handleItemClick}
        >
          Jobs
        </Menu.Item>

        <Menu.Item
          name='resources'
          active={activeItem === 'resources'}
          onClick={this.handleItemClick}
        >
          Resources
        </Menu.Item>

        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>
      </MainMenu>
    )
  }
}
