import React from 'react'
import { Grid, Image, Icon, Button } from 'semantic-ui-react'

const FooterDiv = () => (
  <div className="ui vertical footer segment center" style={{
    display: "flex",
    minHeight: "80vh", flexDirection: "column"
  }}>
    <div className="ui  aligned container" style={{ flex: "1" }}></div>
    <Grid columns={3}>
      <Grid.Row className="ui black inverted center aligned" >
        <Grid.Column>
          <p style={{ fontFamily: "cursive", color: "skyBlue", fontSize: "45px", fontWeight: "bold", marginLeft: "25%", marginTop: "15px" }}>uHired</p>
        </Grid.Column>
        <Grid.Column>
          <Button color='facebook' style={{marginTop: "40px"}}>
          <Icon name='facebook' />
         </Button>
          <Button color='twitter'>
          <Icon name='twitter' />
         </Button>
          <Button color='grey'>
          <Icon name='github' />
         </Button>
          <Button color='linkedin'>
          <Icon name='linkedin' />
         </Button>
      </Grid.Column>
      <Grid.Column>
        <Image src="http://pngimg.com/uploads/globe/globe_PNG33.png" size="small" style={{ paddingLeft: "60px", paddingTop: "10px" }} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div >
)

export default FooterDiv