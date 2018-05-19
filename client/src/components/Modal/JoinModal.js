import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import JoinForm from "../../components/Form/JoinForm.js";

const ModalJoin = () => (
    <Modal className="mini" trigger={<Button className = "huge inverted blue">Join</Button>}>
 <Modal.Header>
      <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
          Join UHired</Modal.Header>
      <Modal.Content >
        <JoinForm />
      </Modal.Content>
  </Modal>
)

export default ModalJoin
