import React, { Component } from "react";
import JobsContainer from "../../components/Grid/JobsContainer.js";
import { Table, Form, Button } from "semantic-ui-react";
import FooterDiv from "../../components/Footer/Footer.js";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";
import API from "../../utils/API";

class JobPage extends Component {
  state = {
    jobs: [],
    technologySelected: ""
  };

  resourceSelection = () => {
    return <TechnologyDropDown />;
  };

  setTechnologySelected = data => {
    this.setState({
      technologySelected: data
    });
  };

  //===================================================
  // Scrape Functions

  handleJobScrape = event => {
    event.preventDefault();
    var query = { id: this.state.technologySelected };
    API.scrape(query)
      .then(res => this.loadJobs(res))
      .catch(err => console.log(err));
  };

  //===================================================
  // DataBase Retrival Functions

  handleTechnologySelection = event => {
    event.preventDefault();
    this.loadJobs({ id: this.state.technologySelected });
  };

  loadJobs = technology => {
    API.getJobs(technology)
      .then(res => {
        this.setState({ jobs: res.data });
      })
      .catch(err => console.log(err));
  };

  //===================================================
  // Jobs Table

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
      <Table.HeaderCell colSpan='3'>
       <h2 style={{padding: "0px", marginTop: "0px", marginBottom: "0px"}}> Jobs</h2></Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell width={2}>Portfolio</Table.HeaderCell>
          <Table.HeaderCell width={6}>Jobs</Table.HeaderCell>
          <Table.HeaderCell width={6}>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.state.jobs.length ? (
          this.state.jobs.map(jobs => (
            <Table.Row key={jobs._id}>
              <Table.Cell>
                <Button
                  className="blue"
                  id={jobs._id}
                  onClick={this.handleAddPortfolio}
                >
                  Add to Portfolio
                </Button>
              </Table.Cell>
              <Table.Cell>{jobs.link}</Table.Cell>
              <Table.Cell>{jobs.description}</Table.Cell>
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
        <JobsContainer /> 
        <Form style={{ marginLeft: "30px" }}>
          <TechnologyDropDown
            setTechnologySelected={data => this.setTechnologySelected(data)}
          />
          <Button
            style={{ marginLeft: "20px", marginTop: "10px" }}
            className="large blue"
            type="submit"
            disabled={!this.state.technologySelected}
            onClick={this.handleTechnologySelection}
          >
            Search
          </Button>
          <Button
            style={{ marginLeft: "20px", marginTop: "10px" }}
            className="large blue"
            type="submit"
            disabled={!this.state.technologySelected}
            onClick={this.handleJobScrape}
          >
            Add
          </Button>
        </Form>{" "}
        <hr />
        <this.jobsTable />
        <FooterDiv />
      </div>
    );
  }
}

export default JobPage;
