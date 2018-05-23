import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import AddJobNoteForm from "../../components/Form/AddJobNoteForm.js";

class AddJobNoteModal extends Component {
     
    render() {
      return (
      

        <Modal style={{marginRight:"1000px"}}
          className="small" 
          trigger={<Button className = "medium blue">Add Note</Button>}>
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