import React, { Component } from 'react';
import ResourceContainer from "../../components/Grid/ResourceContainer.js";
import { Sidebar, Form, Dropdown, Table, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid } from 'semantic-ui-react'




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
      <p style={{fontSize: "20px", marginLeft: "30px", marginTop: "30px"}}>Select one or more skills to search.</p>
      <Form>
    <ResourceSelection />
    <Button style = {{marginLeft: "20px", marginTop: "10px"}} className = "large blue" type='submit'>Search</Button>
    </Form> 
        <ResourcesTable />
      </div>
 
    )};
  
  }

  export default ResourcePage

  const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]
  
  const ResourceSelection = () => (
    <Dropdown style={{marginLeft: "30px", marginBottom: "30px"}}placeholder='Skills' multiple selection options={options} />
  )

  const ResourcesTable = () => (
 
    <Table celled style={{width: "80%", align: "center", margin: "auto"}}>
    <Table.Header>
      <Table.Row>
       <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={6}>Resource Search Results</Table.HeaderCell>
        <Table.HeaderCell width={6}>Portfolio Resources</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Learning HTML</Table.Cell>
        <Table.Cell>Learning HTML</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Semantic UI for Beginners</Table.Cell>
        <Table.Cell>......</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>React Tutorial</Table.Cell>
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