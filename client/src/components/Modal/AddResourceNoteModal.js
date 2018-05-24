import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import AddResourceNoteForm from "../../components/Form/AddResourceNoteForm.js";

class AddResourceNoteModal extends Component {
     
    render() {
      return (
      

        <Modal style={{marginRight:"1000px"}}
          className="small" 
          trigger={<Button className = "blue compact">Add Note</Button>}>
         <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
           Add Note about Resource
           </Modal.Header>
          {/* <Header icon='browser' content='Cookies policy' /> */}
          <Modal.Content>
          <AddResourceNoteForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default AddResourceNoteModal

