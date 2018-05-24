import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import AddResourceNoteForm from "../../components/Form/AddResourceNoteForm.js";
import "./Modal.css";

class AddResourceNoteModal extends Component {
     
  

        state = { modalOpen: false }
  
        handleOpen = () => {
            this.setState({ modalOpen: true }); 
        };
        handleClose = () => {
            this.setState({ modalOpen: false });
            console.log("Note Added")
            // this.props.openResource();
        }
      
        render() {
          return (
        <Modal 
        className="small vertical align center" 
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

