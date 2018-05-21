import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";

class LoginForm extends Component {

  state = {
    email: "",
    password: "",
    portfolio: {},
    modalOpen: false 
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadPortfolio = res => {
    console.log
    console.log(res);
    if(res.status === 200)
    {
      window.sessionStorage.setItem("user", JSON.stringify(res.data.token));
      this.props.close();
    } 
    else {alert(res)}
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Sumbit clicked");
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => this.loadPortfolio(res))
        .catch(err => alert(err))
    }
  };

  render() {
    return (
      <div>
      <Form>
      <Form.Field>
      <label>Email</label>
      <input 
          placeholder='Email'  
          value={this.state.email}
          onChange={this.handleInputChange}
          name="email"/>
      </Form.Field>
      <Form.Field>
      <label>Password</label>
      <input 
          type='password' 
          placeholder='Password' 
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"/>
      </Form.Field>
      <Button 
        type='submit'
        disabled={!(this.state.email && this.state.password)}
        onClick={this.handleFormSubmit}>
        Login
      </Button>
      </Form>
      </div>
    )};
  }

export default LoginForm


