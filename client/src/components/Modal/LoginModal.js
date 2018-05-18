import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import LoginBtn from "../../components/LoginBtn/LoginBtn.js";

const ModalLogin = () => (
  <Modal trigger={<LoginBtn/>}>
    <Modal.Header>Log In</Modal.Header>
    <Modal.Content >
      <Image wrapped size='medium' src='#' />
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