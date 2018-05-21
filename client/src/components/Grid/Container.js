import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import JoinButton from "../JoinBtn/JoinBtn.js";
import LoginBtn from "../LoginBtn/LoginBtn.js";
import MainImage from "../Image/Image.js";
import "./Container.css";
import ModalLogin from "../../components/Modal/LoginModal.js";
import ModalJoin from "../../components/Modal/JoinModal.js";

const MainContainer = () => (

<div>
<Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
    <MainBreadCrumb></MainBreadCrumb>
    </Container>
     <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1>Welcome to UHired</h1>
    <h2>A site for entry-level developers to search for jobs and share resources</h2>
    <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
        <ModalJoin />
       </Container>
       <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
      <MainImage></MainImage>
      </Container>
        <ModalLogin />
    <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
      <MainImage />
    </Container>
  </Container>
</div>
)

export default MainContainer
