import React from 'react'
import { Grid, Container, Sticky } from 'semantic-ui-react'
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
      <img className="ui medium circular image" src="https://s3.amazonaws.com/uhired/CodyG.jpg" alt="Cogy G"/>        
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Cody Goss</h2>
      <div className="ui bulleted list">
        <div className="item">Full-Stack MERN Developer Enthusiast</div>
        <div className="item">Rock Climber</div>
        <div className="item">Biologist</div>
        <div className="item">Tea Sommelier</div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Kristen Speckhals</h2>
      <div className="ui bulleted list">
        <div className="item">UI Design Lead</div>
        <div className="item">Full-Stack Web Developer</div>
        <div className="item">Legal Enthusiast</div>
        <div className="item">Linguist</div>
        </div>
        </Grid.Column>
        <Grid.Column>
        <img className="ui medium circular image" src="https://s3.amazonaws.com/uhired/KristenS.jpg" alt="Kristen S"/>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <img className="ui medium circular image" src="https://s3.amazonaws.com/uhired/saogat.jpg" alt="Saogat R"/>
        <p></p>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Saogat Rab</h2>
      <div className="ui bulleted list">
        <div className="item">Project Lead</div>
        <div className="item">Software Architect and Full-Stack Web Developer</div>
        <div className="item">Passionate Fisherman</div>
        <div className="item">Photographer</div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <h2 style={{fontFamily: "cursive"}}>Rani Rab</h2>
      <div className="ui bulleted list">
        <div className="item">UI Designer</div>
        <div className="item">Full-Stack Web Developer</div>
        <div className="item">World Traveler</div>
        <div className="item">Linguist</div>
      </div>
      </Grid.Column> 
      <Grid.Column>
        <img className="ui medium circular image" src="https://s3.amazonaws.com/uhired/RaniR.jpg" width="150"  height="150" alt="Rani R"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  <div>
      <FooterDiv /></div>
  </div>
)
export default AboutGrid