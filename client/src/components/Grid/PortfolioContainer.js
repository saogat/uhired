import React from 'react'
import { Container, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import "./Container.css";

const PortfolioContainer = () => (
  <div> <Sticky>
  <Container className= "ui fluid inverted vertical masthead left aligned segment massive">
 <MainBreadCrumb/>
     </Container></Sticky>
     <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1>Portfolio</h1>
  </Container>
  <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1>User's Portfolio</h1>
  </Container>
    <Container className="ui fluid vertical masthead center aligned segment massive">
  <Grid className= "centered" columns={6} divided>
    <Grid.Row>
      <Grid.Column>
        <p>My Jobs</p>
      </Grid.Column>
      <Grid.Column>
        <p>My Resources </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <p>Job Notes</p>
      </Grid.Column>
      <Grid.Column>
        <p>Resource Notes</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  </div>
)

export default PortfolioContainer