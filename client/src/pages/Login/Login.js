import React, { Component } from 'react';
import LoginContainer from "../../components/Grid/LoginContainer.js";
import LoginForm from "../../components/Form/LoginForm.js"
import API from "../../utils/API";
import { Button, Checkbox, Form } from 'semantic-ui-react';


class LoginPage extends Component {

  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadPortfolio = () => {
    API.getPorfolio()
      .then(res =>
        this.setState({ portfolio: res.data })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => this.loadPortfolio())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <LoginContainer />
      <Form>
    <Form.Field
      value={this.state.email}
      onChange={this.handleInputChange}
      name="email">
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field
       value={this.state.password}
       onChange={this.handleInputChange}
       name="password">
      <label>Password</label>
      <input placeholder='Password' />
      <input type = 'password'/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button 
        type='submit'
        disabled={!(this.state.email && this.state.password)}
        onClick={this.handleFormSubmit}>
        Login</Button>
  </Form>
      </div>
    )};
  }

  export default LoginPage