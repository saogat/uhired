import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";

import "./Container.css";

const JobsContainer = () => (
  <div>
  <Container className= "ui fluid fixed inverted vertical masthead left aligned segment massive">
     <MainBreadCrumb></MainBreadCrumb>
     </Container>
  </div>

)

export default JobsContainer