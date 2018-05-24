import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import API from "../../utils/API";

class AddJobNoteForm extends Component {

  state = {
    notes: "",
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
  
  loadJobs = res => {
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
   if (this.state.notes) {
     API.resource({
       description: this.state.notes,
       _id: this.state._id,
     })
       .then(res => this.loadResources(res))
       .catch(err => alert(err))
   }
 };


handleAddJobNote = (event, props) => {
event.preventDefault();
  const resources = this.state.resources.filter(job => job.id === props.id);
  this.setState({ resources });
  var resourceId = window.sessionStorage.getItem("job_id");
  API.addJobNote({
    notes: "",
    jobId: props.id})
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
          name="notes"/>
      </Form.Field>
      <Button className="blue medium"
        type='submit'
        id = {this.job.id}
        onClick={this.handleAddResourceNote}> 
        Add Note
      </Button>
      </Form>
      </div>

)}
}



export default AddJobNoteForm


