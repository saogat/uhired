import React from 'react'
import { Grid, Image, Container, Segment } from 'semantic-ui-react'

const FooterDiv = () => (
  <div className= "ui vertical footer segment center" style={{display: "flex",
    minHeight: "70vh", flexDirection: "column"}}>
  <div className="ui  aligned container" style={{flex: "1"}}></div>
  <Grid columns={3}>
    <Grid.Row className="ui black inverted center aligned" >
      <Grid.Column>
      <p style={{fontFamily: "cursive", color: "skyBlue", fontSize: "55px", fontWeight: "bold", marginLeft: "250px", marginTop: "15px"}}>uHired</p> 
      </Grid.Column>
      <Grid.Column>
      <p style={{fontSize: "18px", fontWeight: "bold"}}>CONTACT US:</p>
         <p style={{fontSize: "14px"}}> 123 A Street<br/>
          Atlanta, GA  30300<br/>
          Support@uHired.com<br/>
          404.867.5309</p>
      </Grid.Column>
      <Grid.Column>
      <Image src="http://pngimg.com/uploads/globe/globe_PNG33.png" size='small' style={{paddingLeft: "60px", paddingTop: "10px"}} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default FooterDiv