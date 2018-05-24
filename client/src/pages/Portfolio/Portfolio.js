import React, { Component } from 'react';
import { Container, Card, Form, Button, Icon, Image, Table, Checkbox, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import AccomplishmentModal from "../../components/Modal/AccomplishmentModal.js";
import UserModal from "../../components/Modal/UserModal.js";
import AddResourceNoteModal from "../../components/Modal/AddResourceNoteModal.js";
import AddJobNoteModal from "../../components/Modal/AddJobNoteModal.js";
import FooterDiv from "../../components/Footer/Footer.js";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";


class PortfolioPage extends Component {

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




  render() {
    return (
      <div> <Sticky>
        <Container className="ui fluid inverted vertical masthead left aligned segment massive" >
       <MainBreadCrumb />
        </Container></Sticky>
        <Form style={{marginLeft: "30px"}}>
        <this.resourceSelection />
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
        <h2 style={{marginLeft: "70px", padding: "0px", marginTop: "10px", marginBottom: "5px" }}>Portfolio</h2>

        <UserCard style={{float: "left"}} />
        <Accomplishments />
        <PortfolioJobs />
        <PortfolioResources />
        <FooterDiv/>
      </div>

    )
  };

}

export default PortfolioPage

const UserCard = () => (
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

const PortfolioJobs = () => (

  <Table celled style={{ width: "80%", align: "center", marginLeft: "15%", marginTop: "10px" }}>
    <Table.Header>
    <Table.Row> <Table.HeaderCell colSpan='4'>
       <h2 style={{padding: "0px", marginTop: "0px", marginBottom: "0px"}}> Jobs</h2></Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell width={4}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={6}>Richard's Job Prospects</Table.HeaderCell>
        <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
        <Table.HeaderCell width={1}>Share</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue compact">Remove</Button>
        <AddJobNoteModal />
        </Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
        <Table.Cell>This job sounds cool...</Table.Cell>
        <Table.Cell> <UserModal/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Button className="blue compact">Remove</Button>
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

  <Table celled style={{ width: "80%", align: "center", marginLeft: "15%", marginTop: "10px" }}>
    <Table.Header>
    <Table.Row> <Table.HeaderCell colSpan='5'>
       <h2 style={{padding: "0px", marginTop: "0px", marginBottom: "0px"}}> Resources</h2></Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell width={4}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={5}>Richard's Resources</Table.HeaderCell>
        <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
        <Table.HeaderCell width={1}><Icon name="checkmark box" />Done</Table.HeaderCell>
        <Table.HeaderCell width={1}>Share</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue compact">Remove</Button>
        <AddResourceNoteModal />
        </Table.Cell>
        <Table.Cell>React Article</Table.Cell>
        <Table.Cell>Fantastic Info</Table.Cell>
        <Table.Cell><Checkbox /></Table.Cell>
        <Table.Cell> <UserModal/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Button className="blue compact">Remove</Button>
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


  <Table celled style={{ width: "80%", align: "center", marginLeft: "15%", marginTop: "18px" }}>
    <Table.Header>
    <Table.Row> <Table.HeaderCell colSpan='4'>
       <h2 style={{padding: "0px", marginTop: "0px", marginBottom: "0px"}}>Accomplishments</h2></Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell width={5}>Richard's Projects</Table.HeaderCell>
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


