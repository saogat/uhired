import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import AddJobNoteForm from "../../components/Form/AddJobNoteForm.js";
import "./Modal.css";

class AddJobNoteModal extends Component {
     
    render() {
      return (
      

        <Modal
        className="mini vertical align center" 
          trigger={<Button className = "compact blue">Add Note</Button>}>
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