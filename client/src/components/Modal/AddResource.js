import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import AddResourceForm from "../../components/Form/AddResourceForm.js";

class AddResourceModal extends Component {
     
    render() {
      return (
      

        <Modal style={{marginRight:"1000px"}}
          className="small" 
          trigger={<Button className = "medium blue">Add Resource</Button>}>
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