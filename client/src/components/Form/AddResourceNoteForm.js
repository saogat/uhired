import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import LoginContainer from "../../components/Grid/LoginContainer.js";
import API from "../../utils/API";


const AddResourceNoteForm = () => (

      <Form>
      <Form.Field>
      <label>Add Note</label>
      <textarea 
          type='text' 
          placeholder='Enter notes here...' 
          name="note"/>
      </Form.Field>
      <Button className="blue medium"
        type='submit'> 
        Add Note
      </Button>
      </Form>
    )



export default AddResourceNoteForm


