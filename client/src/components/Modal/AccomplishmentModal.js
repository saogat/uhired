import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import AccomplishmentForm from "../../components/Form/AccomplishmentForm.js";

class ModalAccomplishment extends Component {
     
    render() {
      return (
      

        <Modal
          className="small" style={{float: "center"}}
          trigger={<Button className = "large blue">Add Accomplishment</Button>}

        >
         <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
           Add Accomplishment
           </Modal.Header>
          {/* <Header icon='browser' content='Cookies policy' /> */}
          <Modal.Content>
          <AccomplishmentForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default ModalAccomplishment