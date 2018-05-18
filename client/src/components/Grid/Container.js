import React from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../BreadCrumb/BreadCrumb.js";
import JoinButton from "../JoinBtn/JoinBtn.js";
import LoginBtn from "../LoginBtn/LoginBtn.js";
import MainImage from "../Image/Image.js";
import "./Container.css";
import ModalLogin from "../../components/Modal/LoginModal.js";

const MainContainer = () => (

<div>
<Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
    <MainBreadCrumb></MainBreadCrumb>
    </Container>
     <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
    <h1>Welcome to UHired</h1>
    <h2>A site for entry-level developers to search for jobs and share resources</h2>
    <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
       <JoinButton></JoinButton>
       {/* <LoginBtn onClick={() => this.setState({showModalLogin: true})}> "ModalLogin"></LoginBtn> */}
       <ModalLogin trigger={<LoginBtn/>}></ModalLogin>
       </Container>
       <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
      <MainImage></MainImage>
      </Container>

  </Container>
</div>
)

export default MainContainer
