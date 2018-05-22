import React, { Component } from 'react';
import ResourceContainer from "../../components/Grid/ResourceContainer.js";
import { Sidebar, Form, Dropdown, Table, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid } from 'semantic-ui-react'
import AddResourceModal from "../../components/Modal/AddResource.js";
import AddResourceNoteModal from "../../components/Modal/AddResourceNoteModal.js";
import API from "../../utils/API";

class ResourcePage extends Component {

state = {
  testingList: ["html", "javascript", "react"],
  resources: [],

};

// onload { }

loadResource = () => {
  API.getResource()
    .then(res =>
      this.setState({ resources: res.data, name: "", description: ""})
    )
    .catch(err => console.log(err));
};

deleteResource = id => {
  API.deleteResource(id)
    .then(res => this.loadResource())
    .catch(err => console.log(err));
};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.name ) {
    API.saveResource({
      name: this.state.name,
      description: this.state.description,
    })
      .then(res => this.loadResource())
      .catch(err => console.log(err));
  }
};

 options = [
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
];

componentDidMount() {
  this.loadResources();
}

loadResources() {
  this.setState({
    resources: 
    [
    {
      id: 1234,
      url: 'https://www.google.com',
      description: 'Google'
    }]})
}

handleAddPortfolio = (id, toShareWithEmail) => {
  event.preventDefault();
    const resources = this.state.resources.filter(resource => resource.id !== id);
    // Set this.state.resources equal to the new resources array
    this.setState({ resources });
    API.addResourceToPortfolio({
      userEmail: toShareWithEmail,
      resourceId: id})
      .then()
      .catch(err => console.log(err));
};

 resourceSelection = () => (
  <Dropdown style={{marginLeft: "30px", marginBottom: "30px"}}placeholder='Skills' multiple selection options={this.name} />
);

 resourcesTable = () => (
  <Table celled style={{width: "80%", align: "center", margin: "auto"}}>
  <Table.Header>
    <Table.Row>
     <Table.HeaderCell width={2}>Portfolio</Table.HeaderCell>
      <Table.HeaderCell width={6}>URL</Table.HeaderCell>
      <Table.HeaderCell width={6}>Description</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
  {this.state.resources.length ? (
      this.state.resources.map(resource => (
            <Table.Row key={resource._id}>
              <Table.Cell>
                <Button 
                  className="blue"
                  id = {resource._id}
                  onClick={this.handleAddPortfolio}>Add to Portfolio</Button>
              </Table.Cell>
              <Table.Cell>
                  {resource.url}
              </Table.Cell>
              <Table.Cell>
                  {resource.description}
              </Table.Cell>
            </Table.Row>
      ))) : (
    <Table.Row />
   )}
   </Table.Body>
</Table>

);

  render() {
    return (
      <div>
      <ResourceContainer />   
      <h1 style={{textAlign: "center"}}>Resources</h1>
      <hr />
      <p style={{fontSize: "20px", marginLeft: "30px", marginTop: "30px"}}>Select one or more technologies to search.</p>
      <Form>
        <this.resourceSelection />
        <Button style = {{marginLeft: "20px", marginTop: "10px"}} className = "large blue" type='submit'>Search</Button>
        <AddResourceModal />
      </Form> 
      <this.resourcesTable />
     ≈
      </div>
    )};
  }
  
export default ResourcePage
