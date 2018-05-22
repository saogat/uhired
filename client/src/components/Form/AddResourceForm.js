import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";
import ResourceSelection from "../Selection/ResourceSelection.js";

const AccomplishmentForm = () => (

      <Form>
      <Form.Field>
      <ResourceSelection />
      </Form.Field>
      <Form.Field>
      <label>Add Resource</label>
      <input 
          type='string' 
          placeholder='Tutorial Name' 
          name="resource"/>
      </Form.Field>
      <Form.Field>
      <label>Link to resource</label>
      <input 
          placeholder='//www.w#schools.com'  
          name="link"/>
      </Form.Field>
      <Button 
        type='submit'>
        Add
      </Button>
      </Form>
    )



export default AccomplishmentForm


