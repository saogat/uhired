import React from 'react'
import { Button } from 'semantic-ui-react'


const JoinButton = props => (
  <Button className = "huge inverted blue"
    onClick={props.join}
  >Join</Button>
)

export default JoinButton
