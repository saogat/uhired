import React, { Component } from 'react';
import JobContainer from "../../components/Grid/JobsContainer.js";
import { Dropdown, Select, Table, Sidebar, Form, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid, Container, Input } from 'semantic-ui-react'


class JobPage extends Component {


  render() {
    return (
      <div>
      <JobContainer />   

      <p style={{fontSize: "20px", marginLeft: "30px", marginTop: "30px"}}>Select one or more skills to search.</p>
      <Form>
    <ResourceSelection />
    <Button style = {{marginLeft: "20px", marginTop: "10px"}} className = "large blue" type='submit'>Search</Button>
    </Form>
    <JobsTable />

    
      </div>
 
    )};
  
  }

  export default JobPage


  const optionsa = [
    { key: 'resources', text: 'Resources', value: 'Resources' },
    { key: 'jobs', text: 'Jobs', value: 'jobs' },
  ]
  
  const InputtoShare= () => (
    <Input style = {{marginLeft: "20px"}}  type='text' placeholder='Search...' action>
      <input />
      <Select   compact options={optionsa} defaultValue='Resources' />
      <Button style = {{marginLeft: "20px"}} className = "large blue" type='submit'>Share</Button>
    </Input>
  )

  const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'graphicdesign', text: 'Graphic Design', value: 'graphicdesign' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'express', text: 'Express', value: 'express' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'bootstrap', text: 'Bootstrap', value: 'bootstrap' },
    { key: 'nodejs', text: 'NodeJS', value: 'nodejs' },
    { key: 'mongodb', text: 'MongoDB', value: 'mongodb' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'mysql', text: 'MySQL', value: 'mysql' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'github', text: 'GitHub', value: 'github' },
    { key: 'firebase', text: 'Firebase', value: 'firebase' }
  ]
  
  const ResourceSelection = () => (
    <Dropdown style={{marginLeft: "30px", marginBottom: "30px"}}placeholder='Skills' multiple selection options={options} />
  )

  const JobsTable = () => (
 
    <Table celled style={{width: "80%", align: "center", margin: "auto"}}>
    <Table.Header>
      <Table.Row>
       <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={6}>Job Results</Table.HeaderCell>
        <Table.HeaderCell width={6}>Portfolio Jobs</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Job 2</Table.Cell>
        <Table.Cell>......</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Job 3</Table.Cell>
        <Table.Cell>....</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)