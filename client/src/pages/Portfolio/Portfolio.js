import React, { Component } from 'react';
import { Container, Card, Grid, Form, TextArea, Button, Icon, Image, Label, Menu, Table, Checkbox} from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import AccomplishmentModal from "../../components/Modal/AccomplishmentModal.js";



class PortfolioPage extends Component {


  render() {
    return (
      <div>
         <Container className= "ui fluid inverted vertical masthead left aligned segment massive">
       <MainBreadCrumb></MainBreadCrumb>
       </Container>
         <UserCard />
      <PortfolioJobs /> 
      <PortfolioResources />
      <div>
      <AccomplishmentModal /></div>
      <Accomplishments />
  </div>
 
    )};
  
  }

  export default PortfolioPage

  const UserCard = () => (
    <Card style={{color:'blue', width: "175px", float: "left", marginLeft: "30px", marginRight: "45px"}} >
      <Image  style={{width:'175px', height: "160px"}}src='https://static1.squarespace.com/static/57645625f5e231759e260acf/t/58fa2266f5e231a86437fce0/1492787823235/Richard' />
      <Card.Content>
        <Card.Header>
          Richard
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
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
 
    <Table celled style={{width: "80%", align: "center"}}>
    <Table.Header>
      <Table.Row>
       <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
        <Table.HeaderCell width={7}>Richard's Job Prospects</Table.HeaderCell>
        <Table.HeaderCell width={6}>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Button className="blue">Remove</Button>
        <Button className="blue">Add Note</Button>
        </Table.Cell>
        <Table.Cell>Job 1</Table.Cell>
        <Table.Cell>This job sounds cool...</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Button className="blue">Remove</Button>
        <Button className="blue">Add Note</Button>
        </Table.Cell>
        <Table.Cell>Job 2</Table.Cell>
        <Table.Cell>Great prospect</Table.Cell>
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
   
const PortfolioResources = () => (
 
  <Table celled style={{width: "80%", align: "center", marginLeft: "250px", marginTop: "30px"}}>
  <Table.Header>
    <Table.Row>
     <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
      <Table.HeaderCell width={5}>Richard's Resources</Table.HeaderCell>
      <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
      <Table.HeaderCell width={1}><Icon name="checkmark box"/></Table.HeaderCell>
      <Table.HeaderCell width={1}>Share</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell><Button className="blue">Remove</Button>
      <Button className="blue">Add Note</Button>
      </Table.Cell>
      <Table.Cell>React Article</Table.Cell>
      <Table.Cell>Fantastic Info</Table.Cell>
      <Table.Cell><Checkbox /></Table.Cell>
      <Table.Cell> <Button icon="users" /></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell><Button className="blue">Remove</Button>
      <Button className="blue">Add Note</Button>
      </Table.Cell>
      <Table.Cell>Javascript Tutorial</Table.Cell>
      <Table.Cell>Well done!</Table.Cell>
      <Table.Cell><Checkbox /></Table.Cell>
      <Table.Cell> <Button icon="users" /></Table.Cell>
    </Table.Row>
  </Table.Body>

  <Table.Footer>
    <Table.Row>
      <Table.HeaderCell colSpan='5'>
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


 
const Accomplishments = () => (

 
  <Table celled style={{width: "80%", align: "center", marginLeft: "250px", marginTop: "30px"}}>
  <Table.Header>
    <Table.Row>
    <Table.HeaderCell width={5}>Skills</Table.HeaderCell>
     <Table.HeaderCell width={5}>Richard's Accomplishments</Table.HeaderCell>
      <Table.HeaderCell width={5}>Link</Table.HeaderCell>   
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>React, Semantic UI</Table.Cell>
      <Table.Cell>React App</Table.Cell>
      <Table.Cell>Link</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Javascript</Table.Cell>
      <Table.Cell>Trivia App</Table.Cell>
      <Table.Cell>Link</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>SQL</Table.Cell>
      <Table.Cell>Database App</Table.Cell>
      <Table.Cell>Link</Table.Cell>
      
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


 