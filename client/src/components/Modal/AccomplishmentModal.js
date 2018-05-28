import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import AccomplishmentForm from "../../components/Form/AccomplishmentForm.js";
import "./Modal.css";

class ModalAccomplishment extends Component {

  //===================================================
  //Initialize state
  state = { modalOpen: false }
  
  //===================================================
  // Modal Functions
    handleOpen = () => {
        this.setState({ modalOpen: true }); 
    };
    
    handleClose = () => {
        this.setState({ modalOpen: false });
        this.props.loadAccomplishments();
    }
     
  //===================================================
  // Render component
    render() {
      return (
        <Modal 
          className="small vertical align center" 
          trigger={<Button onClick={this.handleOpen} className = "large blue">Add Accomplishment</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}>
         <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
              Add Accomplishment
           </Modal.Header>
          <Modal.Content>
              <AccomplishmentForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default ModalAccomplishment