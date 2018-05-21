import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import MainImage from "../../components/Image/Image.js";
import "../../components/Grid/Container.css";
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
              <div>
                <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
                    <ResourcesPage />
                </Container>
              </div>
            ) : ( 
              <div>
                <Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
                  <MainBreadCrumb />
                </Container>
                <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
                    <h1>Welcome to UHired</h1>
                    <h2>A site for entry-level developers to search for jobs and share resources</h2>
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