import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import "./BreadCrumb.css";
import PortfolioPage from "../../pages/Portfolio/Portfolio.js";
import HomePage from "../../pages/Home/Home.js";

class MainBreadCrumb extends Component {

  state = {loggedIn: window.sessionStorage.getItem("user_id")};

 handleLogout = (event) => {
    event.preventDefault();
    window.sessionStorage.removeItem("user_id");
    window.sessionStorage.removeItem("user");
    this.resetAuthenticated();
    console.log("handleLogout");
  };

  resetAuthenticated() {
    this.setState({loggedIn: window.sessionStorage.getItem("user_id")});
    console.log("reset ");
    console.log(this.state.loggedIn);
   }

  render() {
  return (
    <div>
  
  {(!this.state.loggedIn) ? (  
    <div>
      <div style = {{marginLeft: "25px"}} className="ui breadcrumb fixed huge left aligned navlist">
    <a style={{fontFamily: "cursive", color: "skyBlue", fontSize: "35px", fontWeight: "bold", marginRight: "15px"}} className="active section" href="/">uHired</a>
  <div className="divider" >|</div>
    <a style = {{color: "white"}} className="section" href="/About">About</a>
  <div className="divider" style={{color: "white", paddingRight: "3px", paddingLeft: "3px"}}>|</div>
    <a style = {{color: "white"}} className="section" href="/Resources">Resources</a>
  <div className="divider" style={{color: "white", paddingRight: "3px", paddingLeft: "3px"}}>|</div>
    <a style = {{color: "white"}} className="section" href="/Jobs">Jobs</a>
  <div className="divider" style={{color: "white", paddingRight: "3px"}}>|</div>
    <a style = {{color: "white"}} className="section" href="/Portfolio">Portfolio</a>
  </div>
  <Button 
      className="ui inverted blue large" 
      style ={{float: "right", marginRight: "25px"}} 
      disabled={this.props.isLoggedIn} 
      onClick={this.handleLogout}>
      Log Out
  </Button>
  </div>
    ) : (<HomePage />)}
  </div> 
)}};

export default MainBreadCrumb;
