import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";
import ResourceSelection from "../Selection/ResourceSelection.js";

const AddResourceForm = () => (

      <Form>
         <Button className="medium blue" style={{marginBottom: "20px"}}
        type='submit'>
        Add
      </Button>
      <Form.Field>
      <label>Add Resource</label>
      <input 
          type='text' 
          placeholder='Tutorial Name' 
          name="resource"/>
      </Form.Field>
      <Form.Field>
      <label>Link to resource</label>
      <input 
          placeholder='//www.w3schools.com'  
          name="link"/>
      </Form.Field>
      <Form.Field>
      <ResourceSelection />
      </Form.Field>
     
      </Form>
    )



export default AddResourceForm


