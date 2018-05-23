import React, { Component } from 'react';
import ResourceContainer from "../../components/Grid/ResourceContainer.js";
import { Form, Dropdown, Table, Button } from 'semantic-ui-react'
import AddResourceModal from "../../components/Modal/AddResource.js";
import API from "../../utils/API";

class ResourcePage extends Component {

state = {
  resources: [],
  technologies: [],
  options: [],
  technologySelected: ""
};

loadResources = (technology) => {
  console.log(technology);
  API.getResources(technology)
    .then(res => {
      console.log(res.data);
      this.setState({ resources: res.data})})
    .catch(err => console.log(err));
};

// deleteResource = id => {
//   API.deleteResource(id)
//     .then(res => this.loadResource())
//     .catch(err => console.log(err));
// };

// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// };

handleDropdown = (event, data) => {
  // const { name, value } = event.target;
  this.setState({
    technologySelected: data.value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.name ) {
    API.saveResource({
      name: this.state.name,
      description: this.state.description})
      .then(res => this.loadResource())
      .catch(err => console.log(err));
  }
};

componentDidMount() {
  this.loadTechnologies();
}

loadTechnologies = () => {
    console.log("I'm in loadTechnologies" )
    API.getTechnologies()
      .then( 
        res => {
            console.log("Loading technology");
            console.log(res);
            this.setState({technologies: res.data});
            let temp = this.state.technologies.map(e => {
                return { key: e.name,
                        text: e.name,
                        value: e.name}
            });
            this.setState({options: temp})
          })
      .catch(err => console.log(err));
};

handleAddPortfolio = (event, id, toShareWithEmail) => {
  console.log ("In handleAddPortfolio")
  event.preventDefault();
    const resources = this.state.resources.filter(resource => resource.id !== id);
    this.setState({ resources });
    API.addResourceToPortfolio({
      userEmail: toShareWithEmail,
      resourceId: id})
      .then()
      .catch(err => console.log(err));
};

handleTechnologySelection = (event) => {
  console.log ("In handleTechnologySelection")
  event.preventDefault();
  this.loadResources({name: this.state.technologySelected[0]});
  console.log(this.state.technologySelected[0]);
};

 resourceSelection = () => {
  return (
      <Dropdown 
          style={{marginLeft: "30px", marginBottom: "30px"}} 
          placeholder='Technology' 
          multiple selection options={this.state.options}  
          onChange={this.handleDropdown}
          name='technologySelected'
          // value={this.state.technologySelected}
         />);
};

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
        <Button 
              style = {{marginLeft: "20px", marginTop: "10px"}} 
              className = "large blue" 
              type='submit'
              // disabled={!(this.state.technologySelected)}
              onClick={this.handleTechnologySelection}>
              Search</Button>
        <AddResourceModal />
      </Form> 
      <this.resourcesTable />
      </div>
    )};
  }
  
export default ResourcePage
