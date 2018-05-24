import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import API from "../../utils/API";


  class AddResourceNoteForm extends Component {

    state = {
      note: "",
      _id: ""
    };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });  
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    
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
     if (this.state.note) {
       API.resource({
         description: this.state.note,
         _id: this.state._id,
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
      <label>Add Note</label>
      <textarea 
          type='text' 
          placeholder='Enter notes here...' 
          name="note"/>
      </Form.Field>
      <Button className="blue medium"
        type='submit'> 
        Add Note
      </Button>
      </Form>
      </div>

)}
}



export default AddResourceNoteForm


