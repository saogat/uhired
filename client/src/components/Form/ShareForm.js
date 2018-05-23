import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";

const ShareForm = () => (

    <Form>
        <Form.Field>
            <label>User Email Address</label>
            <input
                type='email'
                placeholder='abc@gmail.com'
                name="email" />
        </Form.Field>
        <Button
            type='submit' className="large blue">
            Share
      </Button>
    </Form>
)

export default ShareForm