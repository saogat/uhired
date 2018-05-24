import React, { Component } from 'react';
import { Container, Card, Grid, Form, TextArea, Button, Icon, Image, Label, Menu, Table, Checkbox, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import AccomplishmentModal from "../../components/Modal/AccomplishmentModal.js";
import UserModal from "../../components/Modal/UserModal.js";
import AddResourceNoteModal from "../../components/Modal/AddResourceNoteModal.js";
import AddJobNoteModal from "../../components/Modal/AddJobNoteModal.js";
import FooterDiv from "../../components/Footer/Footer.js";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";
import API from "../../utils/API"

class PortfolioPage extends Component {

  state = {
    resources: [],
    technologySelected: ""
  };

  resourceSelection = () => {
    return (
        <TechnologyDropDown />);
  };

  loadResources = (query) => {
    API.getPortfolioResources(query)
      .then(res => {this.setState({ resources: res.data})})
      .catch(err => console.log(err));
  };
  
setTechnologySelected = (data) => {
  this.setState({
    technologySelected: data
  });
}

handleTechnologySelection = (event) => {
  event.preventDefault();
  var userId = window.sessionStorage.getItem("user_id");
  console.log("portfolio - userId");
  console.log(userId);
  console.log("portfolio - technology");
  console.log(this.state.technologySelected);
  this.loadResources("id=" + this.state.technologySelected + "&" + "userId=" + userId);
};

  resourcesTable = () => (
    <Table celled className="ui unstackable table"  style={{width: "80%", align: "center", margin: "auto", marginTop: "15px"}}>
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
                    onClick={this.handleRemovePortfolio}>Delete</Button>
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

  userCard = () => (
    <Card style={{width: "175px", float: "left", marginLeft: "30px", marginRight: "45px" }} >
      <Image style={{ width: '175px', height: "160px" }} src='https://static1.squarespace.com/static/57645625f5e231759e260acf/t/58fa2266f5e231a86437fce0/1492787823235/Richard' />
      <Card.Content>
        <Card.Header>
          Richard H.
          </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2018
            </span>
        </Card.Meta>
        <Card.Description>
          Entrepreneur
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
          </a>
      </Card.Content>
    </Card>
  )


  render() {
    return (
      <div> <Sticky>
        <Container className="ui fluid inverted vertical masthead left aligned segment massive">
       <MainBreadCrumb/>
        </Container></Sticky>
        <Form style={{marginLeft: "30px"}}>
        <TechnologyDropDown setTechnologySelected={(data) => this.setTechnologySelected(data)}/>
        <Button 
              style = {{marginLeft: "20px", marginTop: "10px"}} 
              className = "large blue" 
              type='submit'
              // disabled={!(this.state.technologySelected)}
              onClick={this.handleTechnologySelection}>
              Search</Button>
              <AccomplishmentModal />
      </Form> 
        <hr />
        <h2 style={{marginLeft: "70px", padding: "0px", marginTop: "10px", marginBottom: "5px" }}>Portfolio <span style={{marginLeft: "90px", padding: "0px", marginTop: "10px", marginBottom: "5px"}}>Accomplishments</span></h2>

        <this.userCard style={{float: "left"}} />
        <Accomplishments />
        <h2 style={{marginLeft: "260px", padding: "0px", marginTop: "10px", marginBottom: "5px"}}>Jobs</h2>
        <PortfolioJobs />
        <h2 style={{marginLeft: "260px", padding: "0px", marginTop: "10px", marginBottom: "5px"}}>Resources</h2>
        <this.resourcesTable />
        <FooterDiv/>
      </div>

    )
  };

}

export default PortfolioPage


const PortfolioJobs = () => (

  <Table celled style={{ width: "80%", align: "center", marginLeft: "250px", marginTop: "10px" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={7}>Richard's Job Prospects</Table.HeaderCell>
        <Table.HeaderCell width={6}>Notes</Table.HeaderCell>
        <Table.HeaderCell width={1}>Share</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue">Remove</Button>
        <AddJobNoteModal />
        </Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
        <Table.Cell>This job sounds cool...</Table.Cell>
        <Table.Cell> <UserModal/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Button className="blue">Remove</Button>
        <AddJobNoteModal />
        </Table.Cell>
        <Table.Cell>Job 2</Table.Cell>
        <Table.Cell>Great prospect</Table.Cell>
        <Table.Cell> <UserModal/></Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

const PortfolioResources = () => (

  <Table celled style={{ width: "80%", align: "center", marginLeft: "250px", marginTop: "10px" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={7}>Richard's Resources</Table.HeaderCell>
        <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
        <Table.HeaderCell width={1}><Icon name="checkmark box" />Done</Table.HeaderCell>
        <Table.HeaderCell width={1}>Share</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue">Remove</Button>
        <AddResourceNoteModal />
        </Table.Cell>
        <Table.Cell>React Article</Table.Cell>
        <Table.Cell>Fantastic Info</Table.Cell>
        <Table.Cell><Checkbox /></Table.Cell>
        <Table.Cell> <UserModal/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Button className="blue">Remove</Button>
        <AddResourceNoteModal />
        </Table.Cell>
        <Table.Cell>Javascript Tutorial</Table.Cell>
        <Table.Cell>Well done!</Table.Cell>
        <Table.Cell><Checkbox /></Table.Cell>
        <Table.Cell> <UserModal/></Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='5'>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)



const Accomplishments = () => (


  <Table celled style={{ width: "80%", align: "center", marginLeft: "250px", marginTop: "18px" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={5}>Richard's Accomplishments</Table.HeaderCell>
        <Table.HeaderCell width={5}>Skills</Table.HeaderCell>
        <Table.HeaderCell width={5}>Link</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>React App</Table.Cell>
        <Table.Cell>React, Semantic UI</Table.Cell>
        <Table.Cell>Link</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>React App</Table.Cell>
        <Table.Cell>Javascript</Table.Cell>
        <Table.Cell>Link</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Database App</Table.Cell>
        <Table.Cell>SQL</Table.Cell>
        <Table.Cell>Link</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

)


