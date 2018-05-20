import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import MainSidebar from "../../components/Sidebar/Sidebar.js";

const JobGrid= () => (
  <div>
    <MainSidebar />
  <Grid>
     <Grid.Row className="ui inverted">
     <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={4}>
      <h3>Entry Level Jobs</h3>
      </Grid.Column>
      <Grid.Column width={4}>
      <h3>My Portfolio - Jobs</h3>
      </Grid.Column>
      </Grid.Row>
    <Grid.Row>
    <Grid.Column width={4} />
      <Grid.Column width={2}>
        <Checkbox />
      </Grid.Column>
      <Grid.Column width={2}>
        Job Title-Clickable Link
      </Grid.Column>
      <Grid.Column width={2}>
      <Checkbox />
      </Grid.Column>
      <Grid.Column width={2}>
        Link
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <Container style = {{marginTop: "30px", border: "2px solid"}} className= "ui vertical masthead center aligned segment massive">
    <h3> Users </h3>
  </Container>

  </div>
)

export default JobGrid