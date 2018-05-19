import React, { Component } from 'react';
import JobContainer from "../../components/Grid/JobsContainer.js";
import JobGrid from "../../components/Grid/JobGrid.js";
import { Grid } from 'semantic-ui-react'


class JobPage extends Component {


  render() {
    return (
      <div>
      <JobContainer />   
      <JobGrid />
      
      </div>
 
    )};
  
  }

  export default JobPage