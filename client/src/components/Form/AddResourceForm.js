import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";
import ResourceSelection from "../Selection/ResourceSelection.js";

class AddResourceForm extends Component {

    state = {
      description: "",
      link: "",
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
      console.log
      console.log(res);
      if(res.status === 200)
      {
        window.sessionStorage.setItem("resource", JSON.stringify(res.data.token));
        this.props.close();
      } 
      else {alert(res)}
    };
  
    handleFormSubmit = event => {
       // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      console.log("Submit clicked");
      if (this.state.description && this.state.url) {
        API.resource({
          description: this.state.description,
          url: this.state.url,
        })
          .then(res => this.loadResources(res))
          .catch(err => alert(err))
      }
    };
  
    render() {
      return (
        <div>
      <Form>
         <Button className="medium blue" style={{marginBottom: "20px"}}
        type='submit'>
        Add
      </Button>
      <Form.Field>
      <label>Add Resource</label>
      <input 
          placeholder='Tutorial Name' 
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"/>
      </Form.Field>
      <Form.Field>
      <label>Link to resource</label>
      <input 
          placeholder='//www.w3schools.com'  
          value={this.state.url}
          onChange={this.handleInputChange}
          name="url"/>
      </Form.Field>
     
      </Form>
      </div>

    )}
}



export default AddResourceForm


