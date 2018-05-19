import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import LoginBtn from "../../components/LoginBtn/LoginBtn.js";
import LoginForm from "../../components/Form/LoginForm.js";

const ModalLogin = () => (
    <Modal trigger={<Button className = "huge inverted blue">Log In</Button>}>
    <Modal.Header>
      <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
          Log In</Modal.Header>
      <Modal.Content >
        <LoginForm />
      </Modal.Content>
    </Modal>
)

export default ModalLogin