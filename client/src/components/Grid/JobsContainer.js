import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";

import "./Container.css";

const JobsContainer = () => (
  <div>
  <Container className= "ui fluid fixed inverted vertical masthead left aligned segment massive">
     <MainBreadCrumb></MainBreadCrumb>
     </Container>
  <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1>Jobs</h1>
  

   
  </Container>
  </div>

)

export default JobsContainer