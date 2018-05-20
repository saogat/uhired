import React, { Component } from 'react';
import ResourceContainer from "../../components/Grid/ResourceContainer.js";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid } from 'semantic-ui-react'




class ResourcePage extends Component {
state = {
  testingList: ["html", "javascript", "react"],
  fullResourceNAmesList: ""
}

  render() {
    return (
      <div>
      <ResourceContainer>   
      </ResourceContainer>
      {/* <Grid.Column>
        {this.state.testingList.map(eachListItem=>{
          return ( <Grid.Row>{eachListItem}</Grid.Row>)
        })}
        </Grid.Column> */}
        <MainSidebar />
      </div>
 
    )};
  
  }

  export default ResourcePage

  class MainSidebar extends Component {
    state = { visible: true }
  
    
  
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
    render() {
      const { visible } = this.state
      return (
        <div>
          <Button style={{marginTop: "20px"}} className="blue massive" onClick={this.toggleVisibility}>Toggle Skill Search</Button>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='push' width='wide' visible={visible} vertical inverted>
              <Menu.Item name='home'>
               <Checkbox /> HTML
              </Menu.Item>
              <Menu.Item name='gamepad'>
              <Checkbox /> Javascript
              </Menu.Item>
              <Menu.Item name='camera'>
              <Checkbox />  React
              </Menu.Item>
              <Menu.Item name='mongo'>
              <Checkbox />  Mongo DB
              </Menu.Item>
              <Menu.Item name='mysql'>
              <Checkbox />  SQL
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
               <Grid>
       <Grid.Row className="ui inverted">
        <Grid.Column width={6}>
        <h3 style={{textDecoration: "underline"}}>Resources</h3>
        </Grid.Column>
        <Grid.Column width={6}>
        <h3 style={{textDecoration: "underline"}}>My Portfolio - Resources</h3>
        </Grid.Column>
        </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>
          <Checkbox  label="Save" />
        </Grid.Column>
        <Grid.Column width={4}>
         Resource Title- Link
        </Grid.Column>
        <Grid.Column width={2}>
        <Checkbox label="Remove" />
        </Grid.Column>
        <Grid.Column width={4}>
          Resource Title - Link
        </Grid.Column>
      </Grid.Row>
    </Grid>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )
    }
  }
