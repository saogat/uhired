import React, { Component } from "react";
import JobsContainer from "../../components/Grid/JobsContainer.js";
import { Table, Form, Button} from "semantic-ui-react";
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
    var query = {id: this.state.technologySelected};
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
    <Table
      celled
      className="ui unstackable table"
      style={{
        width: "80%",
        align: "center",
        margin: "auto",
        marginTop: "15px"
      }}
    >
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
                  id={resource._id}
                  onClick={this.handleAddPortfolio}
                >
                  Add to Portfolio
                </Button>
              </Table.Cell>
              <Table.Cell>{resource.url}</Table.Cell>
              <Table.Cell>{resource.description}</Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row />
        )}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3" />
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
            onClick={this.handleJobScrape}
           >
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
