import React, {Component} from 'react';
import JoinContainer from"../../components/Grid/JoinContainer.js";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import API from "../../utils/API";

class JoinForm extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // Updating the input's state
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
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  if (!this.state.firstName || !this.state.lastName) {
    alert("Fill out your first and last name please!");
  } else if (this.state.password.length < 6) {
    alert(
      `Choose a more secure password ${this.state.firstName} ${this.state
        .lastName}`
    );
  } else {
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
  }

  if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
    API.join({
      firstName: this.state.firstName,
      lastNmae: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(res => this.loadPortfolio())
      .catch(err => console.log(err));
  }
  this.setState({
    firstName: "",
    lastName: "",
     email: "",
     password: ""
  });
};
  



render() {
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Join UHired
        </p>
        <Form>
        <Form.Field
          value={this.state.firstName}
          firstName="firstName"
          onChange={this.handleInputChange}
          type="text">
          <label>First Name </label>
          <input placeholder="First Name" />
          </Form.Field>
           <Form.Field
          value={this.state.lastName}
          lasttName="lastName"
          onChange={this.handleInputChange}
          type="text">
          <label>First Name </label>
          <input placeholder="Last Name" />
          </Form.Field>
           <Form.Field
          value={this.state.email}
          email="email"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Last Name">
          <label>email </label>
          <input placeholder="Email" />
          </Form.Field>
          <Form.Field
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password">
          <label>password </label>
          <input placeholder="password" />
           </Form.Field>
           <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button 
        type='submit'
        disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
        onClick={this.handleFormSubmit}>
        Join</Button>
  </Form>
      </div>
    )};
  }


export default JoinForm;
