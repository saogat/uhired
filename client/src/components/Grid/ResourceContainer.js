import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import "./Container.css";

const ResourceContainer = () => (
  <div>
  <Container className= "ui fluid fixed inverted vertical masthead left aligned segment massive">
     <div><MainBreadCrumb></MainBreadCrumb></div>
     </Container>
  </div>
)

export default ResourceContainer