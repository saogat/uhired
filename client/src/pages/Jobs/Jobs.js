import React, { Component } from "react";
import JobsContainer from "../../components/Grid/JobsContainer.js";
import { Table, Form, Button, Icon, Container } from "semantic-ui-react";
import FooterDiv from "../../components/Footer/Footer.js";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";
import API from "../../utils/API";

class JobPage extends Component {
  state = {
    resources: [],
    technologySelected: ""
  };

  resourceSelection = () => {
    return <TechnologyDropDown />;
  };

  handleJobScrape = event => {
    event.preventDefault();
    var query = this.state.technologySelected;
    API.scrape(query)
      .then(res => this.loadJobs(res))
      .catch(err => console.log(err));
  };

  loadJobs = jobs => {
    console.log(jobs);
  };

  setTechnologySelected = data => {
      this.setState({
        technologySelected: data
      });
    };
  

  jobsTable = () => (
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

  render() {
    return (
      <div>
        <JobsContainer /> <hr />
        <Form style={{ marginLeft: "30px" }}>
          <TechnologyDropDown
            setTechnologySelected={data => this.setTechnologySelected(data)}/>
          <Button
            style={{ marginLeft: "20px", marginTop: "10px" }}
            className="large blue"
            type="submit"
            disabled={!this.state.technologySelected}
            onClick={this.handleTechnologySelection}>
            Search
          </Button>
        </Form>
        <hr />
        <h1 style={{ paddingLeft: "5%" }}>Jobs</h1>
        <this.jobsTable />
        <FooterDiv />
      </div>
    );
  };
};

export default JobPage;
