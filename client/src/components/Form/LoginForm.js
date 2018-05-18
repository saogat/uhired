import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const LoginForm = () => (
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
)

export default LoginForm
