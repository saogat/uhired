import React, { Component } from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import AddResourceNoteForm from "../../components/Form/AddResourceNoteForm.js";
import "./Modal.css";

class AddResourceNoteModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };
  handleClose = () => {
    this.setState({ modalOpen: false });
    console.log("Note Added");
  };

  render() {
    return (
      <Modal
        className="small vertical align center"
        trigger={
          <Button onClick={this.handleOpen} className="blue compact">
            Add Note
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>
          <Image
            wrapped
            size="tiny"
            src="https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg"
          />
          Add Note about Resource
        </Modal.Header>
        {/* <Header icon='browser' content='Cookies policy' /> */}
        <Modal.Content>
          <AddResourceNoteForm close={this.handleClose} id={this.props.id} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddResourceNoteModal;
