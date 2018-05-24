import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import AddResourceForm from "../../components/Form/AddResourceForm.js";
import "./Modal.css";

class AddResourceModal extends Component {

  state = { modalOpen: false }
  
    handleOpen = () => {
        this.setState({ modalOpen: true }); 
    };
    handleClose = () => {
        this.setState({ modalOpen: false });
        console.log("Resource Added")
        // this.props.openResource();
    }
     
    render() {
      return (
      

        <Modal
        className="small vertical align center" 
          trigger={<Button onClick={this.handleOpen} className = "large blue">Add Resource</Button>}
           open={this.state.modalOpen}
          onClose={this.handleClose}>
         <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
           Add Resource
           </Modal.Header>
          {/* <Header icon='browser' content='Cookies policy' /> */}
          <Modal.Content>
          <AddResourceForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default AddResourceModal


    



