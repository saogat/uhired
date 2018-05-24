import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import AddJobNoteForm from "../../components/Form/AddJobNoteForm.js";
import "./Modal.css";

class AddJobNoteModal extends Component {

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
        className="mini vertical align center" 
          trigger={<Button onClick={this.handleOpen} className = "compact blue">Add Note</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
     
     <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
           Add Note About Job
           </Modal.Header>
          {/* <Header icon='browser' content='Cookies policy' /> */}
          <Modal.Content>
          <AddJobNoteForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default AddJobNoteModal