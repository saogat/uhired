import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'


const AddJobNoteForm = () => (

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



export default AddJobNoteForm


