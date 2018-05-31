import React, {Component} from 'react'
import { Container, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import "./home.css";
import ModalLogin from "../../components/Modal/LoginModal.js";
import ModalJoin from "../../components/Modal/JoinModal.js";
import PortfolioPage from "../Portfolio/Portfolio.js";
// import ResourcesPage from "../Resources/Resources.js";
import FooterDiv from "../../components/Footer/Footer.js";

const isAuthenticated = window.sessionStorage.getItem("user_id");

class HomePage extends Component {
  state = {isAuthenticated: false};

  handleLogin = () => this.setState({isAuthenticated: true});
  handleJoin = () =>  this.setState({isAuthenticated: true});

  render() {
    return (
      <div>
          {
            this.state.isAuthenticated ? (
          
            // Object.keys(this.state.portfolio).length ? (
                    <PortfolioPage />
            ) : ( 
              <div>
                 <div className="bg">   </div>  <Sticky style={{width: "100%",   position: "absolute", zIndex: "100"}} >
                <Container style={{width: "100%"}} className= "ui fluid inverted vertical masthead padded left aligned segment massive">
                <MainBreadCrumb/>
                </Container></Sticky>
               
                <Container className= "ui fluid transparent vertical masthead center aligned segment massive">
                    <h1 className="titleText">Welcome to<span className="logoText">UHired</span></h1>
                    <h1 className="blurb">A site for entry-level developers to search for jobs and share resources</h1>
                      <ModalLogin openPortfolio={this.handleLogin}/>
                      <ModalJoin openPortfolio={this.handleLogin}/>
                </Container> <FooterDiv/>
              
      
             </div>   
            )}
      </div>
    );
  };
}

  export default HomePage