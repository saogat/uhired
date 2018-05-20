import React, { Component } from 'react';
import JobContainer from "../../components/Grid/JobsContainer.js";
import { Select, Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid, Container, Input } from 'semantic-ui-react'


class JobPage extends Component {


  render() {
    return (
      <div>
      <JobContainer />   
      <JobSidebar />
      <Container style = {{marginTop: "30px", border: "2px solid"}} className= "ui vertical masthead aligned segment">
     <h3 style={{marginLeft: "20px", textDecoration: "underline"}}> Users </h3>
     <Input style = {{marginLeft: "20px"}} icon='users' iconPosition='left' placeholder='Search users...' />
     <Button style = {{marginLeft: "20px"}} className = "ui large blue">Search</Button>
     <hr/>
   <InputtoShare />
    </Container>
      
      </div>
 
    )};
  
  }

  export default JobPage

  class JobSidebar extends Component {
    state = { visible: true }
  
    
  
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
    render() {
      const { visible } = this.state
      return (
        <div>
          <Button style={{marginTop: "20px"}} className="blue huge" onClick={this.toggleVisibility}>Toggle Skill Search</Button>
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
       <Grid.Row>
        <Grid.Column width={6}>
        <h3 style={{textDecoration: "underline"}}>Jobs</h3>
        </Grid.Column>
        <Grid.Column width={6}>
        <h3 style={{textDecoration: "underline"}}>My Portfolio - Jobs</h3>
        </Grid.Column>
        </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>
          <Checkbox  label="Save" />
        </Grid.Column>
        <Grid.Column width={4}>
         Job Title- Link
        </Grid.Column>
        <Grid.Column width={2}>
        <Checkbox label="Remove" />
        </Grid.Column>
        <Grid.Column width={4}>
          Job Title - Link
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

  const options = [
    { key: 'resources', text: 'Resources', value: 'Resources' },
    { key: 'jobs', text: 'Jobs', value: 'jobss' },
  ]
  
  const InputtoShare= () => (
    <Input style = {{marginLeft: "20px"}}  type='text' placeholder='Search...' action>
      <input />
      <Select   compact options={options} defaultValue='Resources' />
      <Button style = {{marginLeft: "20px"}} className = "large blue" type='submit'>Share</Button>
    </Input>
  )