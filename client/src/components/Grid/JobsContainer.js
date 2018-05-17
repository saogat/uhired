import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import "./Container.css";

const JobContainer = () => (
  <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
     <div><MainBreadCrumb></MainBreadCrumb></div>

    <h1>Jobs</h1>
  

   
  </Container>
)

export default JobContainer