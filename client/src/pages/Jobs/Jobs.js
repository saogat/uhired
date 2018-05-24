
import React, { Component } from 'react';
import JobsContainer from "../../components/Grid/JobsContainer.js";
import { Dropdown, Select, Table, Sidebar, Form, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid, Container, Input } from 'semantic-ui-react'
import AddJobNoteModal from "../../components/Modal/AddJobNoteModal.js"
import FooterDiv from "../../components/Footer/Footer.js";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";
import API from "../../utils/API"

class JobPage extends Component {
  
  state = {
    resources: [],
    technologies: [], 
    options: [],
    technologySelected: ""
  };

  resourceSelection = () => {
    return (
        <TechnologyDropDown />);
  };


  handleJobScrape = event => {
    event.preventDefault();
    var query = "HTML";
    API.scrape(query)
      .then(res => this.loadJobs( res ))
      .catch(err => console.log(err));
  };

  loadJobs = (jobs) => {
    console.log( jobs );
  }

  render() {
    return (
      <div>
      <JobsContainer />   <hr/>
      <Form style={{marginLeft: "30px"}}>
        <this.resourceSelection />
        <Button 
              style = {{marginLeft: "20px", marginTop: "10px"}} 
              className = "large blue" 
              type='submit'
              disabled={!(this.state.technologySelected)}
              onClick={this.handleTechnologySelection}>
              Search</Button>
      
      </Form>   <hr />
      <h1 style={{paddingLeft: "5%"}}>Jobs</h1>
      
    <JobsTable />
    <FooterDiv />

    
      </div>
    );
  }
}

export default JobPage;

const optionsa = [
  { key: "resources", text: "Resources", value: "Resources" },
  { key: "jobs", text: "Jobs", value: "jobs" }
];

const InputtoShare = () => (
  <Input
    style={{ marginLeft: "20px" }}
    type="text"
    placeholder="Search..."
    action
  >
    <input />
    <Select compact options={optionsa} defaultValue="Resources" />
    <Button style={{ marginLeft: "20px" }} className="large blue" type="submit">
      Share
    </Button>
  </Input>
);

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "graphicdesign", text: "Graphic Design", value: "graphicdesign" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "express", text: "Express", value: "express" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "bootstrap", text: "Bootstrap", value: "bootstrap" },
  { key: "nodejs", text: "NodeJS", value: "nodejs" },
  { key: "mongodb", text: "MongoDB", value: "mongodb" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "mysql", text: "MySQL", value: "mysql" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "github", text: "GitHub", value: "github" },
  { key: "firebase", text: "Firebase", value: "firebase" }
];

const ResourceSelection = () => (
  <Dropdown
    style={{ marginLeft: "30px", marginBottom: "30px" }}
    placeholder="Skills"
    multiple
    selection
    options={options}
  />
);

const JobsTable = () => (
  <Table celled style={{ width: "90%", align: "center", margin: "auto" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={6}>Job Results</Table.HeaderCell>
        <Table.HeaderCell width={1}>Remove</Table.HeaderCell>
        <Table.HeaderCell width={6}>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
        <Table.Cell>
          <Button icon="remove" style={{ color: "blue" }} />
        </Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Job 2</Table.Cell>
        <Table.Cell>
          <Button icon="remove" style={{ color: "blue" }} />
        </Table.Cell>
        <Table.Cell>......</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Button className="blue">Add to Portfolio</Button>
        </Table.Cell>
        <Table.Cell>Job 3</Table.Cell>
        <Table.Cell>
          <Button icon="remove" style={{ color: "blue" }} />
        </Table.Cell>
        <Table.Cell>....</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="4" />
      </Table.Row>
    </Table.Footer>
  </Table>
);
