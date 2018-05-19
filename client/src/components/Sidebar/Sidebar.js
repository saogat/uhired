import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class MainSidebar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button style={{marginTop: "20px"}} className="blue massive" onClick={this.toggleVisibility}>Skills</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={visible} vertical inverted>
            <Menu.Item name='home'>
              HTML
            </Menu.Item>
            <Menu.Item name='gamepad'>
              Javascript
            </Menu.Item>
            <Menu.Item name='camera'>
              React
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Click the Skills Button to start your Search</Header>
             Happy Hunting!
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
export default MainSidebar