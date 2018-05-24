import React from 'react'
import { Grid, Image, Container, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import FooterDiv from "../../components/Footer/Footer.js";
import "./AboutUs.css";

const AboutGrid = () => (
    <div>

    <Sticky><Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
    <MainBreadCrumb/>
    </Container></Sticky>
    <Container className= "ui fluid vertical masthead center aligned segment massive">
    <h1 style={{fontFamily: "cursive"}}>Meet the Team</h1>
    </Container>
    <Container className="ui fluid vertical masthead center aligned segment massive">
  <Grid className= "centered" columns={6} divided>
    <Grid.Row>
      <Grid.Column>
      <img class="ui medium circular image" src="./Images/CodyG.jpg"/>        <p></p>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Cody Goss</h2>
      <div class="ui bulleted list">
        <div class="item">Full-Stack MERN Developer Enthusiast</div>
        <div class="item">Rock Climber</div>
        <div class="item">Biologist</div>
        <div class="item">Tea Sommelier</div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Kristen Speckhals</h2>
      <div class="ui bulleted list">
        <div class="item">UI Design Lead</div>
        <div class="item">Full-Stack Web Developer</div>
        <div class="item">Legal Enthusiast</div>
        <div class="item">Linguist</div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <img class="ui medium circular image" src="./Images/KristenS.jpg"/>
        <p></p>
      </Grid.Column>
    
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <img class="ui medium circular image" src="./Images/saogat.jpg"/>
        <p></p>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Saogat Rab</h2>
      <div class="ui bulleted list">
        <div class="item">Project Lead</div>
        <div class="item">Software Architect and Full-Stack Web Developer</div>
        <div class="item">Passionate Fisherman</div>
        <div class="item">Photographer</div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Rani Rab</h2>
      <div class="ui bulleted list">
        <div class="item">UI Designer</div>
        <div class="item">Full-Stack Web Developer</div>
        <div class="item">World Traveler</div>
        <div class="item">Linguist</div>
      </div>
      </Grid.Column> 
      <Grid.Column>
        <img class="ui medium circular image" src="./Images/RaniR.jpg" width="150"  height="150"/>
        <p></p> 
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  <div>
                <FooterDiv /></div>
  </div>
)

export default AboutGrid