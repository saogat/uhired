import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import API from "../../utils/API";

class AddResourceNoteForm extends Component {
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

  loadResources = res => {
    console.log(res);
    if (res.status === 200) {
      window.sessionStorage.setItem("resource", JSON.stringify(res.data.token));
      this.props.close();
    } else {
      alert(res);
    }
  };

  handleAddResourceNote = (event, props) => {
    event.preventDefault();
    console.log("in handle add resource note");

    var userId = window.sessionStorage.getItem("user_id");
    if (this.state.notes) {
      API.addResourceNote({
        note: {
          body: this.state.notes,
          owner: userId
        },
        resourceId: this.props.id
      })
        .then(res => this.loadResources(res))
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
              type="text"
              placeholder="Enter notes here..."
              name="notes"
              value={this.state.notes}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button
            className="blue medium"
            type="submit"
            id={this.props.id}
            onClick={this.handleAddResourceNote}
          >
            Add Note
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddResourceNoteForm;
