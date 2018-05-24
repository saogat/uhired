import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import ShareForm from "../../components/Form/ShareForm.js";
import "./Modal.css";

class UserShare extends Component {
     
    render() {
      return (
      

        <Modal
          className="small" 
          trigger={<Button color="blue" size="compact">Share</Button>}

        >
         <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
           Share with Another User
           </Modal.Header>
          {/* <Header icon='browser' content='Cookies policy' /> */}
          <Modal.Content>
          <ShareForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default UserShare