import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import API from "../../utils/API";
import TechnologyDropDown from "../../components/TechnologyDropDown/TechnologyDropDown.js";

const AccomplishmentForm = () => (

      <Form>   
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
      <Form.Field style={{marginLeft: "0px"}}>
      <TechnologyDropDown />
      </Form.Field>
      <Button className="blue large floated right" style={{marginBottom: "20px"}}
        type='submit'>
        Add Accomplishment
      </Button>
     
      </Form>
    )



export default AccomplishmentForm


