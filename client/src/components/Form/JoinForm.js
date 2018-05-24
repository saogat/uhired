import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
import API from "../../utils/API";

class JoinForm extends Component {
  // Setting the component's initial state
state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    modalOpen: false 
  };

handleOpen = () => this.setState({ modalOpen: true });
handleClose = () => this.setState({ modalOpen: false });

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // Updating the input's state
  this.setState({
    [name]: value
  });
};

loadPortfolio = () => {
  this.props.close();
};

handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  if (!this.state.firstName || !this.state.lastName) {
    alert("Fill out your first and last name please!");
  } else if (this.state.password.length < 6) {
    alert(
      `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
    );
  };

  if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
    API.join({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
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
        <Form.Field>
        <label>First Name</label>
         <input 
          placeholder='First Name'  
          value={this.state.firstName}
          onChange={this.handleInputChange}
          name="firstName"/>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
      <input 
          placeholder='Last Name'  
          value={this.state.lastName}
          onChange={this.handleInputChange}
          name="lastName"/>
      </Form.Field>
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
        disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
        onClick={this.handleFormSubmit}>
        Login</Button>
    </Form>
      </div>
    )};
  }


export default JoinForm;
