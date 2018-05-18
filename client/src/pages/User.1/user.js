import React, { Component } from 'react';
import JobContainer from "../../components/Grid/UserContainer.js";


class JobPage extends Component {
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div>
      <UserContainer> 
      <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                firstName="First Name"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                lastName="Last Name"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                email="Email"
                placeholder="Email (required)"
              />
              <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              password="Password"
              placeholder="Password (required)"
            />
              
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit Form
              </FormBtn>
            </form>  
      </UserContainer>
      </div>
 
    )};
  
  }

  export default JobPage