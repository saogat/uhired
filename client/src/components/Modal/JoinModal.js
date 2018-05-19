
import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

const ModalJoin = () => (
    <Modal className="mini" trigger={<Button className = "huge inverted blue">Join</Button>}>
 <Modal.Header>
      <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
      Join UHired</Modal.Header>
      <Modal.Content >
      <Form>
        <Form.Field>
        <label>First Name</label>
         <input 
          placeholder='First Name'  
        //   value={this.state.firstName}
        //   onChange={this.handleInputChange}
          name="First Name"/>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
      <input 
          placeholder='Last Name'  
        //   value={this.state.lastName}
        //   onChange={this.handleInputChange}
          name="Last Name"/>
      </Form.Field>
      <Form.Field>
      <label>Email</label>
      <input 
          placeholder='Email'  
        //   value={this.state.email}
        //   onChange={this.handleInputChange}
          name="Email"/>
      </Form.Field>
      <Form.Field>
      <label>Password</label>
      <input 
          type='password' 
          placeholder='Password' 
        //   value={this.state.password}
        //   onChange={this.handleInputChange}
          name="password"/>
      </Form.Field>
      <Button 
        type='submit'
       >
        Join</Button>
    </Form>
    </Modal.Content>
  </Modal>
)

export default ModalJoin
