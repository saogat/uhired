import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import API from "../../utils/API";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";

class AddResourceForm extends Component {

    state = {
      description: "",
      url: "",
      done: false,
      notes: {},
      modalOpen: false ,
      technologySelected: ""
    };
  
    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });  
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    
    setTechnologySelected = (data) => {
      this.setState({
        technologySelected: data
      });
    }
  
    loadResources = res => {
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
          name: this.state.technologySelected,
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
      <Form.Field>
        <TechnologyDropDown  setTechnologySelected={(data) => this.setTechnologySelected(data)} />
        </Form.Field>
      <Button 
        type='submit' className="medium blue"
        disabled={!(this.state.description && this.state.url)}
        onClick={this.handleFormSubmit}>
        Add Resource  
      </Button>
     
      </Form>
      </div>

    )}
}



export default AddResourceForm


