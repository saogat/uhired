import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";

const AboutGrid = () => (
    <div>

    <Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
    <MainBreadCrumb></MainBreadCrumb>
    </Container>
    <Container className= "ui fluid vertical masthead center aligned segment massive">
    <h2 style={{fontFamily: "cursive"}}>Meet the Team</h2>
    </Container>
    <Container className="ui fluid vertical masthead center aligned segment massive">
  <Grid className= "centered" columns={6} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular />
        <p>CEO</p>
      </Grid.Column>
      <Grid.Column>
        <p>Bio here</p>
      </Grid.Column>
      <Grid.Column>
        <p>Bio here</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular  />
        <p>CEO</p>
      </Grid.Column>
    
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular />
        <p>CEO</p>
      </Grid.Column>
      <Grid.Column>
        <p>Bio here</p>
      </Grid.Column>
      <Grid.Column>
        <p>Bio here</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular  />
        <p>CEO</p> 
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  </div>
)

export default AboutGrid