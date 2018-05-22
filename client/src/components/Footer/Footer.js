import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'

const FooterDiv = () => (
  <Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
       <p style={{fontFamily: "cursive", color: "skyBlue", fontSize: "35px", fontWeight: "bold", marginRight: "15px"}}>uHired</p> 
      </Grid.Column>
      <Grid.Column>
        <p>Uhired Latest News</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <p> 123 A Street</p>
        <p> Atlanta, GA</p>
        <p> 404.867.5309</p>
      </Grid.Column>
      <Grid.Column>
      <p> Latest Blogs</p>
      </Grid.Column>
      <Grid.Column>
      <p> Uhired</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
)

export default FooterDiv