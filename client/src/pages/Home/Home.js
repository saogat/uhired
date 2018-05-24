import React, {Component} from 'react'
import { Container, Image, Sticky } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import "./home.css";
import ModalLogin from "../../components/Modal/LoginModal.js";
import ModalJoin from "../../components/Modal/JoinModal.js";
import PortfolioPage from "../Portfolio/Portfolio.js";
import ResourcesPage from "../Resources/Resources.js";
import FooterDiv from "../../components/Footer/Footer.js";


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
                 <div className="bg">   </div>  <Sticky>
                <Container style={{width: "100%", zIndex: "1000"}} className= "ui fluid inverted vertical masthead padded left aligned segment massive">
                 <MainBreadCrumb style={{width: "100%", zIndex: "1000"}}/>
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