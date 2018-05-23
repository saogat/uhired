import React from 'react'
import { Grid, Image, Container, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import FooterDiv from "../../components/Footer/Footer.js";

const AboutGrid = () => (
    <div>

    <Sticky><Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
    <MainBreadCrumb/>
    </Container></Sticky>
    <Container className= "ui fluid vertical masthead center aligned segment massive">
    <h2 style={{fontFamily: "cursive"}}>Meet the Team</h2>
    </Container>
    <Container className="ui fluid vertical masthead center aligned segment massive">
  <Grid className= "centered" columns={6} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular />
        <p></p>
      </Grid.Column>
      <Grid.Column>
        <p>Cody Goss - Back-End</p>
      </Grid.Column>
      <Grid.Column>
        <p>Kristen Speckhals - UI/Front-End</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular  />
        <p></p>
      </Grid.Column>
    
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular />
        <p>CEO</p>
      </Grid.Column>
      <Grid.Column>
        <p>Saogat Rab - Project Lead - Back-End</p>
      </Grid.Column>
      <Grid.Column>
        <p>Rani Rab - UI/Front-End</p>
      </Grid.Column>
      <Grid.Column>
        {/* <Image src='https://www.biography.com/.image/t_share/MTMyNDczNDI1MjgwMTQ1ODg2/bill_gates_2012_wikimedia_commons_promojpg.jpg' size='medium' circular  /> */}
        <img class="ui medium circular image" src="./Images/Rani.jpg"/>

        <p>CEO</p> 
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  <div>
                <FooterDiv /></div>
  </div>
)

export default AboutGrid