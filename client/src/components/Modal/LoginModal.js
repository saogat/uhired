import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import LoginBtn from "../../components/LoginBtn/LoginBtn.js";

const ModalLogin = () => (
    <Modal trigger={<Button className = "huge inverted blue">Log In</Button>}>
    <Modal.Header>
      <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
      Log In</Modal.Header>
      <Modal.Content >
      <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    </Modal.Content>
  </Modal>
)

export default ModalLogin