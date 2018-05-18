import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import "./Container.css";

const PortfolioContainer = () => (
  <div>
  <Container className= "ui fluid inverted vertical masthead left aligned segment massive">
     <MainBreadCrumb></MainBreadCrumb>
     </Container>
     <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1>Portfolio</h1>
  

   
  </Container>
  </div>
)

export default PortfolioContainer