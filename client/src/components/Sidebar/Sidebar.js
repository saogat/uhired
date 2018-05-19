import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class MainSidebar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility} className="ui blue">View Resource List</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              HTML
            </Menu.Item>
            <Menu.Item name='gamepad'>
              Javascript
            </Menu.Item>
            <Menu.Item name='camera'>
             React
            </Menu.Item> 
            <Menu.Item name='mongo'>
             Mongo DB
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment Basic>
              <Header as='h3'>Content</Header>
              <Image src='#' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default MainSidebar