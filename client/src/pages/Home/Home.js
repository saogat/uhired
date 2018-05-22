import React, {Component} from 'react'
import { Container, Image, Transition, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import MainImage from "../../components/Image/Image.js";
import "./home.css";
import ModalLogin from "../../components/Modal/LoginModal.js";
import ModalJoin from "../../components/Modal/JoinModal.js";
import List from "../../components/List/List.js";
import PortfolioPage from "../Portfolio/Portfolio.js";
import ResourcesPage from "../Resources/Resources.js";


class HomePage extends Component {
  state = {portfolio: {}};

  handleLogin = () => 
      {
      console.log("in handle login");
      this.setState({portfolio: {tech: 'HTML'}});
      console.log(this.state.portfolio);
      };
  handleJoin = () => this.setState({portfolio: {tech: 'HTML'}});

  render() {
    return (
      <div>
          {Object.keys(this.state.portfolio).length ? (
              // <div>
              //   <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
                    // <ResourcesPage />
                    <PortfolioPage />
              //   {/* </Container>
              // </div> */}
            ) : ( 
              <div>
                <Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
                 <Sticky> <MainBreadCrumb /></Sticky>
                </Container>
                <div className="bg">  </div>
                <Container className= "ui fluid transparent vertical masthead center aligned segment massive">
                    <h1 style={{marginTop: "230px", color: "skyBlue", textShadow: "3px 3px black", fontFamily: "Courier", fontSize: "60px"}}>Welcome to UHired</h1>
                    <h1 style={{color: "white", fontFamily: "Arial Narrow", textShadow: "2px 2px black", fontSize: "35px", marginBottom: "45px"}}>A site for entry-level developers to search for jobs and share resources</h1>
                      <ModalLogin openPortfolio={this.handleLogin}/>
                      <ModalJoin openPortfolio={this.handleLogin}/>
                </Container>  
             </div>   
            )}
      </div>
    );
  };
}

  export default HomePage