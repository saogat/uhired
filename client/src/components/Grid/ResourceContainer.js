import React from 'react'
import { Container, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import "./Container.css";

const ResourceContainer = () => (
  <div>
   <Sticky><Container className= "ui fluid fixed inverted vertical masthead left aligned segment massive">
 <MainBreadCrumb/>
     </Container></Sticky>
  </div>
)

export default ResourceContainer