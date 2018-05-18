import React, { Component } from 'react';
import ResourceContainer from "../../components/Grid/ResourceContainer.js";
import { Grid } from 'semantic-ui-react'



class ResourcePage extends Component {
state = {
  testingList: ["html", "javascript", "react"],
  fullResourceNAmesList: ""
}

  render() {
    return (
      <div>
      <ResourceContainer>   
      </ResourceContainer>
      <Grid.Column>
        {this.state.testingList.map(eachListItem=>{
          return ( <Grid.Row>{eachListItem}</Grid.Row>)
        })}
        </Grid.Column>


      </div>
 
    )};
  
  }

  export default ResourcePage