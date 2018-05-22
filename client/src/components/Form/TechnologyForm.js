import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import API from "../../utils/API";

class TechnologyForm extends Component {

  state = {
    name1: "",
    // description: "",
    resources: {},
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

  // loadResources = res => {
  //   console.log
  //   console.log(res);
  //   if(res.status === 200)
  //   {
  //     window.sessionStorage.setItem("user", JSON.stringify(res.data.token));
  //     this.props.close();
  //   } 
  //   else {alert(res)}
  // };

  handleFormSubmit = event => {
     // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("Submit clicked");
    if (this.state.name) {
      API.SaveTechnology({
        name: this.state.name,
        // description: this.state.description,
      })
        .then(res => this.loadResources(res))
        .catch(err => alert(err))
    }
  };

  render() {
    return (
      <div>
      <Form>
      <Form.Field>
      <label>Name</label>
      <input 
          placeholder='Name'  
          value={this.state.name1}
          onChange={this.handleInputChange}
          name="name"/>
      </Form.Field>
      {/* <Form.Field>
      <label>Description</label>
      <input 
          placeholder='Description' 
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"/>
      </Form.Field> */}
      <Button 
        type='submit'
        disabled={!(this.state.name)}
        onClick={this.handleFormSubmit}>
        Submit Technology
      </Button>
      </Form>
      </div>
    )};
  }

export default TechnologyForm


