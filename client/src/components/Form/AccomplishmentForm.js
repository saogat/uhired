import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";
import ResourceSelection from "../Selection/ResourceSelection.js";

const AccomplishmentForm = () => (

      <Form>
         <Button className="blue large floated right" style={{marginBottom: "20px"}}
        type='submit'>
        Add Accomplishment
      </Button>
     
      <Form.Field>
      <label>Project Title</label>
      <input 
          type='text' 
          placeholder='Project App' 
          name="title"/>
      </Form.Field>
      <Form.Field>
      <label>Link to project</label>
      <input 
          placeholder='//http:github.com'  
          name="link"/>
      </Form.Field>
      <Form.Field>
      <ResourceSelection />
      </Form.Field>
     
      </Form>
    )



export default AccomplishmentForm


