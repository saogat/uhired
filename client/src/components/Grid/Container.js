import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import JoinButton from "../JoinBtn/JoinBtn.js";
import LoginBtn from "../LoginBtn/LoginBtn.js";
import "./Container.css";

const MainContainer = () => (
  <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
     <div><MainBreadCrumb></MainBreadCrumb></div>

    <h1>Welcome to UHired</h1>
    <h2>A site for entry-level developers</h2>

       <JoinButton></JoinButton>
      <LoginBtn></LoginBtn>
   
  </Container>
)

export default MainContainer
