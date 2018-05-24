import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import API from "../../utils/API";

class AddJobNoteForm extends Component {

  state = {
    notes: ""
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
    if (res.status === 200) {
      window.sessionStorage.setItem("job", JSON.stringify(res.data.token));
      this.props.close();
    } else {
      alert(res);
    }
  };


  handleAddJobNote = (event, props) => {
    event.preventDefault();
    console.log("in handle add job note");

    var userId = window.sessionStorage.getItem("user_id");
    if (this.state.notes) {
      API.addJobNote({
        note: {
          body: this.state.notes,
          owner: userId
        },
        jobId: this.props.id
      })
        .then(res => this.loadJobs(res))
        .catch(err => console.log(err));
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
          name="notes"
          value={this.state.notes}
          onChange={this.handleInputChange}/>
      </Form.Field>
      <Button className="blue medium"
        type='submit'
        id = {this.props.id}
        onClick={this.handleAddJobNote}> 
        Add Note
      </Button>
      </Form>
      </div>

)}
}



export default AddJobNoteForm


