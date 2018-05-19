import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import "./Container.css";

const ResourceContainer = () => (
  <div>
  <Container className= "ui fluid fixed inverted vertical masthead left aligned segment massive">
     <div><MainBreadCrumb></MainBreadCrumb></div>
     </Container>
  <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1 >Resources</h1>
   
  </Container>
  </div>
)

export default ResourceContainer