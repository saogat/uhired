import React, { Component } from 'react';
import HomeContainer from "../../components/Grid/HomeContainer.js";
import LoginButton from "../../components/LoginBtn/LoginBtn.js";
import JoinButton from "../../components/JoinBtn/JoinBtn.js";
import LoginForm from "../../components/Form/LoginForm.js"

class HomePage extends Component {

  state = {
    login: false,
    join: false
  };

  join = () => {
    this.setState({join: true});
    console.log("Join - ", this.state.join);
  };

  login = () => {
    this.setState({login: true});
    console.log("Login - ", this.state.login);
  };

  render() {
    return (
      <div>
      <HomeContainer />   
      <LoginButton 
       login={this.login}/>
      <JoinButton 
        join={this.join}/>
     
 
      {this.state.login ? (
        <LoginForm />
      ) : (
      <h3>No Results to Display</h3>)}
    </div> 
    )};
  }

  export default HomePage
