import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import API from "../../utils/API";

class LoginForm extends Component {

  state = {
    email: "",
    password: "",
    portfolio: {},
    modalOpen: false 
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadPortfolio = res => {
    console.log(res);
    if(res.status === 200)
    {
      window.sessionStorage.setItem("user", res.data.token);
      console.log ("res.data.user");
      console.log(res.data.user);
      window.sessionStorage.setItem("user_id", res.data.user._id);

      this.props.close();
    } 
    else {alert(res)}
  };

  handleFormSubmit = event => {
     // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("Submit clicked");
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


