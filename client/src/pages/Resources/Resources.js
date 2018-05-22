import React, { Component } from 'react';
import ResourceContainer from "../../components/Grid/ResourceContainer.js";
import { Sidebar, Form, Dropdown, Table, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid } from 'semantic-ui-react'
import AddResourceModal from "../../components/Modal/AddResource.js";
import AddResourceNoteModal from "../../components/Modal/AddResourceNoteModal.js";


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
      <h1 style={{textAlign: "center"}}>Resources</h1>
      <hr />
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
 
    <Table celled style={{width: "90%", align: "center", margin: "auto"}}>
    <Table.Header>
      <Table.Row>
       <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={6}>Resource Search Results</Table.HeaderCell>
        <Table.HeaderCell width={1}>Remove</Table.HeaderCell>
        <Table.HeaderCell width={6}>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue">Add to Portfolio</Button><AddResourceNoteModal />
        </Table.Cell>
        <Table.Cell>Learning HTML</Table.Cell>
        <Table.Cell><Button icon="remove" style={{color: "blue", align: "center"}}  /></Table.Cell>
        <Table.Cell>Great article</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><Button className="blue">Add to Portfolio</Button><AddResourceNoteModal />
        </Table.Cell>
        <Table.Cell>Semantic UI for Beginners</Table.Cell>
        <Table.Cell><Button icon="remove" style={{color: "blue"}}/></Table.Cell>
        <Table.Cell>......</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><Button className="blue">Add to Portfolio</Button><AddResourceNoteModal />
        </Table.Cell>
        <Table.Cell>React Tutorial</Table.Cell>
        <Table.Cell><Button icon="remove" style={{color: "blue"}}/></Table.Cell>
        <Table.Cell>....</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <AddResourceModal />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)